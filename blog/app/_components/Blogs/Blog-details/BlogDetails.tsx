"use client"
import React, { useEffect, useState } from 'react';
import { Blog } from '@/utils/type';
import Link from 'next/link';  
import Button from '@/Components/Button/button';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // Import Image component

const BlogDetails = ({ blogData }: { blogData: Blog }) => {
  const [comments, setComments] = useState<string>('');
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [commentToDeleteIndex, setCommentToDeleteIndex] = useState<number>(-1);
  const { data: session } = useSession();
  const router = useRouter();

  const handleComments = async () => {
    let userComments = [...blogData.comments];
    userComments.push(`${comments}|${session?.user?.name}`);

    const response = await fetch('/api/blog-post/update-post', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: blogData?.id,
        comments: userComments,
      }),
    });

    const data = await response.json();
    console.log('Comments', data);

    if (data.success) {
      setComments('');
      router.refresh();
    }
  };

  const handleEditComment = async (index: number) => {
    const newComment = prompt('Enter your edited comment:');
    if (newComment !== null) {
      let updatedComments = [...blogData.comments];
      updatedComments[index] = `${newComment}|${session?.user?.name}`;

      const response = await fetch('/api/blog-post/update-post', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: blogData?.id,
          comments: updatedComments,
        }),
      });

      const data = await response.json();
      console.log('Edit Comment Response', data);

      if (data.success) {
        router.refresh();
      }
    }
  };

  const handleDeleteComment = async (index: number) => {
    setShowConfirmDialog(true);
    setCommentToDeleteIndex(index);
  };

  const confirmDelete = async () => {
    setShowConfirmDialog(false);

    if (commentToDeleteIndex !== -1) {
      let updatedComments = [...blogData.comments];
      updatedComments.splice(commentToDeleteIndex, 1);

      const response = await fetch('/api/blog-post/update-post', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: blogData?.id,
          comments: updatedComments,
        }),
      });

      const data = await response.json();
      console.log('Delete Comment Response', data);

      if (data.success) {
        router.refresh();
      }
    }
  };

  useEffect(() => {
    let interval = setInterval(() => {
      router.refresh();
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [router]);

  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-col gap-4 items-center justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
                  {blogData?.title}
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <div className="mr-10 mb-5 flex items-center">
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image src={blogData?.userimage} alt="User" width={40} height={40} />
                        </div>
                      </div>
                      <div className="w-full">
                        <h4 className="mb-1 text-base font-medium text-body-color">
                          By
                          <span className="pl-2">
                            {blogData?.userid.split('_')[0]}
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <Link
                      className="inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold text-white"
                      href={`/Category/${blogData?.category}`}
                    >
                      {blogData?.category}
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src={blogData?.image || ''}
                        alt="Blog"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <p className="mb-8 leading-relaxed text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    {blogData?.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-8/12 flex gap-4">
              {session !== null ? (
                <>
                  <input
                    name="comment"
                    id="comment"
                    autoFocus
                    autoComplete="off"
                    placeholder="Add comment here"
                    value={comments}
                    onChange={(event) => setComments(event.target.value)}
                    className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                  />
                  <Button text="Add" onClick={handleComments} />
                </>
              ) : null}
            </div>
            <section className="dark:bg-gray-900 py-8 lg:py-16 w-full lg:w-8/12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg lg:text-2xl font-bold text-black dark:text-white">
                  Discussion ({blogData?.comments.length})
                </h2>
              </div>
              {blogData &&
                blogData.comments &&
                blogData.comments.length > 0 &&
                blogData.comments.map((comment, index) => (
                  <div key={index} className="p-6 text-base rounded-lg dark:bg-gray-900">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 text-sm text-black dark:text-white font-semibold">
                          {comment.split('|')[1] === blogData?.userid
                            ? `${comment.split('|')[1].split('_')[0]} (Author)`
                            : comment.split('|')[1].split('_')[0]}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">{comment.split('|')[0]}</p>
                    {comment.split('|')[1] === session?.user?.name && (
                      <div className="flex mt-2 space-x-2">
                        <button
                          onClick={() => handleEditComment(index)}
                          className="text-gray-700 text-xs font-mono"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => handleDeleteComment(index)}
                          className="text-gray-500 text-xs font-mono"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                ))}
            </section>

            {showConfirmDialog && (
              <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-40">
                <div className="m-4 w-full max-w-xs rounded bg-white p-6">
                  <div className="mb-4 text-lg font-semibold">Are you sure you want to delete?</div>
                  <div className="flex justify-between">
                    <button
                      className="rounded bg-gray-200 px-4 py-2 text-sm font-semibold text-black hover:bg-gray-300"
                      onClick={() => setShowConfirmDialog(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="rounded bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
                      onClick={confirmDelete}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
