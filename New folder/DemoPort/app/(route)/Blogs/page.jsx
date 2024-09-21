"use client";
import { groq } from "next-sanity";
import React, { useEffect, useState } from "react";

async function getData() {
  return client.fetch(groq`*[_type == "blogPost"]`);
}

const Page = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setBlog(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello Blog</h1>
      {blog.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
