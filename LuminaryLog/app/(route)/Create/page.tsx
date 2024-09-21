"use client"
import Button from '@/Components/Button/button'
import Spinner from '@/Components/Spinner/Spinner'
import { GlobalContext } from '@/Context'
import Toast from '@/app/_components/Toast'
import { firebaseConfig, formControls, initialBlogFormData } from '@/utils'
import { BlogFormData } from '@/utils/type'
import { initializeApp } from 'firebase/app'
import { snapshotEqual } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React,{useContext, useState,useEffect} from 'react'


const app = initializeApp(firebaseConfig)
const storage = getStorage(app, 'gs://blogtg-d3cd7.appspot.com')

const createUniqueFileName  = (fileName :string)=>{
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2,12);

  return `${fileName}-${timestamp}-${randomString}`
}

const Create = () => {
    const [imageLoading, setImageLoading] = useState<boolean>(false)
    const {formData,setFormData} = useContext(GlobalContext)
    const {data:session} = useSession();
    const [toast, setToast] = useState<{ show: boolean; message: string; type: 'loading' | 'success' | 'error' }>({
      show: false,
      message: '',
      type: 'success',
    });
     const router = useRouter()

     useEffect(() => {
      if (toast.show) {
        setTimeout(() => setToast({ ...toast, show: false }), 3000); // Hide toast after 3 seconds
      }
    }, [toast]);


    
  const handleImageSaveToFirebase = (file : any) => {


    const extractUniqueFilename = createUniqueFileName(file?.name);
    const storageref =ref(storage, `blog/${extractUniqueFilename}`);
    const uploadImage = uploadBytesResumable(storageref, file);

     return new Promise((resolve, reject) =>{
      uploadImage.on('state_changed', (snapshot) =>{}, (error) => reject(error), ()=>{
        getDownloadURL(uploadImage.snapshot.ref).then(url  => resolve(url)).catch((error) => reject(error))
      });
     })
  } 

 async function handleBlogImageChange(event: React.ChangeEvent<HTMLInputElement>){
     
    
      if(!event.target.files ) return;
      const saveImageToFirebase : any= await handleImageSaveToFirebase(event.target.files[0]);
      if(saveImageToFirebase !== ''){
        setImageLoading(false) 
        console.log(saveImageToFirebase)
        setFormData({
          ...formData,
          image: saveImageToFirebase,
        })
      }
  }

  const HandleSaveBlogForm = async () => {
    setToast({ show: true, message: 'Creating...', type: 'loading' })
    try {
        const res = await fetch("http://localhost:3000/api/blog-post/add-post", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...formData,
                userid: session?.user?.name,
                userimage: session?.user?.image,
                comments: [],
            })
        });

        if (res.ok) {
            setToast({ show: true, message: 'Created successfully!', type: 'success' });
            const data = await res.json();
            console.log(data);
            if (data && data.success) {
                setFormData(initialBlogFormData)
                router.push("/Blogs")
            }
        } else {
            setToast({ show: true, message: 'Failed to save blog post', type: 'error' });
            console.log("Failed to save blog post:", res.status, res.statusText);
        }
    } catch (error) {
        console.log("Error:", error);
    }
}




  return (
    <>
     {toast.show && <Toast message={toast.message} type={toast.type} />}
     <section className="overflow-hidden py-16 md:py-20 lg:py-28  shadow-md">
       
  <div className="container mx-auto mt-14">
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4">
        <div className="mb-12 rounded-md bg-white dark:bg-gray-900 py-10 sm:p-8 lg:mb-5 lg:px-8 xl:p-8 px-6 shadow-lg">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Create Your Own Blog Post
          </h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className={`${imageLoading ?'w-1/2' : 'w-full'}`}>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Upload Blog Image
                </label>
                <input
                  id="fileinput"
                  accept="image/*"
                  onChange={handleBlogImageChange}
                  max={1000000}
                  type="file"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-600 py-3 px-4 text-base text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-primary focus-visible:shadow-none dark:bg-gray-700 dark:shadow-lg"
                />
              </div>
              {
                imageLoading ? <div className='w-1/2'><Spinner/></div> : null
              }
            </div>

            <div className="-mx-4 flex flex-wrap">
              {formControls.map((control, index) => (
                <div className="w-full px-4" key={index}>
                  <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {control.label}
                  </label>
                  {control.component === 'input' ? (
                    <input
                      className="w-full rounded-md border border-gray-300 dark:border-gray-600 py-3 px-4 text-base text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-primary focus-visible:shadow-none dark:bg-gray-700 dark:shadow-lg"
                      type={control.type}
                      placeholder={control.placeholder}
                      name={control.id}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>{
                        setFormData({
                          ...formData,
                          [control.id]:event.target.value
                        })
                      }}
                      value={formData[control.id as keyof BlogFormData]}
                    />
                  ) : control.component === 'textarea' ? (
                    <textarea
                      className="w-full rounded-md border border-gray-300 dark:border-gray-600 py-3 px-4 text-base text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-primary focus-visible:shadow-none dark:bg-gray-700 dark:shadow-lg"
                      placeholder={control.placeholder}
                      value={formData[control.id as keyof BlogFormData]}
                      name={control.id}
                      onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>{
                        setFormData({
                          ...formData,
                          [control.id]:event.target.value
                        })
                      }}
                    />
                  ) : control.component === 'select' ? (
                    <select
                    name={control.id}
                    value={formData[control.id as keyof BlogFormData]}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                      setFormData({
                        ...formData,
                        [control.id]: event.target.value
                      })
                    }}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 py-3 px-4 text-base text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-primary focus-visible:shadow-none dark:bg-gray-700 dark:shadow-lg"
                  >
                    <option value={''}>Select</option>
                    {control.options.map((optionItems, index) => (
                      <option
                        key={index}
                        value={optionItems.value}
                        id={optionItems.value}
                      >
                        {optionItems.label}
                      </option>
                    ))}
                  </select>
                  
                  ) : null}
                </div>
              ))}
              <div className="w-full px-4 mt-4">
                <Button text="Create New Blog" onClick={HandleSaveBlogForm} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
   

  )
}

export default Create