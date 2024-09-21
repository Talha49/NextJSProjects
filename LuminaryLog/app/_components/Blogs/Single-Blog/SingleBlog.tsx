import React, { useState } from 'react';
import Blog from '@/utils/type';
import { useSession } from 'next-auth/react';
import { FaTrash } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component from next/image

const SingleBlog = ({ BlogItem, handleDelete }: { BlogItem:  Blog, handleDelete: (id: number) => void }) => {
  const { data: session } = useSession();
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const { image, category, title, description, userimage, userid, id } = BlogItem;

  const confirmDelete = (id: number) => {
    setShowConfirmDialog(false);
    handleDelete(id);
  };

  return (
    <div className="bg-gray-100 rounded-md shadow-md overflow-hidden">
      <div className="relative">
        <div className="h-60 overflow-hidden">
          {/* Replace <img> with <Image /> */}
          <Image src={image} alt="Blog Post" className="object-cover w-full h-full" width={500} height={300} />
        </div>
        <span className="absolute top-4 right-4 z-20 inline-flex items-center justify-center rounded-full bg-black/70 py-2 px-4 text-sm font-semibold capitalize text-white">
          {category}
        </span>
      </div>
      <div className="p-4 sm:p-6 md:p-8">
        <h3 className="mb-4 text-xl font-bold text-black dark:text-white hover:text-primary">
          <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 shadow-md px-2 py-1 rounded">
            <Link href={`/Blogs/${id}`}>{title}</Link>
          </span>
        </h3>
        <p className="mb-6 pb-6 text-base font-medium text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
          <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 shadow-md px-2 py-1 rounded">{description}</span>
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-2 sm:mr-4">
              <div className="h-10 w-10 overflow-hidden rounded-full">
                {/* Replace <img> with <Image /> */}
                <Image src={userimage} alt="Author" className="object-cover w-full h-full" width={40} height={40} />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">By</p>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {userid.split("_")[0].toUpperCase()}
              </p>
            </div>
          </div>
          {session !== null && session?.user?.name === userid && (
            <div>
              <FaTrash
                onClick={() => setShowConfirmDialog(true)}
                size={30}
                className="cursor-pointer text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
              />
            </div>
          )}
        </div>
      </div>
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
                onClick={() => confirmDelete(id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleBlog;
