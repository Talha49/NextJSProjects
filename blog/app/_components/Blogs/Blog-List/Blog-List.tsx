"use client"
import React, { useEffect,useState } from 'react'
import Blog from '@/utils/type'
import SingleBlog from '../Single-Blog/SingleBlog'
import { useRouter } from 'next/navigation'
import Toast from '../../Toast'
interface BlogListProps {
  lists: Blog[];
}

const BlogList: React.FC<BlogListProps> = ({ lists }) => {
  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'loading' | 'success' | 'error' }>({
    show: false,
    message: '',
    type: 'success',
  });
  const router = useRouter();

  useEffect(() => {
    if (toast.show) {
      setTimeout(() => setToast({ ...toast, show: false }), 3000); // Hide toast after 3 seconds
    }
  }, [toast]);

  async function handleDelete(id: number) {
    setToast({ show: true, message: 'Deleting...', type: 'loading' }); // Show loading toast

    try {
      const res = await fetch(`/api/blog-post/delete-post?id=${id}`, {
        method: 'DELETE',
        cache: 'no-store',
      });

      if (res.ok) {
        setToast({ show: true, message: 'Deleted successfully!', type: 'success' }); // Show success toast
        router.refresh();
      } else {
        throw new Error('Failed to delete.');
      }
    } catch (error) {
      setToast({ show: true, message: error.message, type: 'error' }); // Show error toast
    }
  }

  return (
    <>
      {toast.show && <Toast message={toast.message} type={toast.type} />}
      <section className="pt-[190px] pb-[120px]">
        <div className="container mx-auto px-4 md:px-2">
          <div className="-mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">
            {lists && lists.length > 0 ? (
              lists.map((listItem) => (
                <div className="px-4" key={listItem.id}>
                  <SingleBlog BlogItem={listItem} handleDelete={handleDelete} />
                </div>
              ))
            ) : (
              <p className='text-center mt-10'>No blogs available.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogList;

