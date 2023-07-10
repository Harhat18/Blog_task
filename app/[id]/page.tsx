"use client";
import React, { useEffect, useState } from "react";

import { getPost } from "../api/api";
import { PageProps, Post } from "@/types/types";
import BlogCard from "@/components/BlogCard/page";

const Page: React.FC<PageProps> = ({ params }) => {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const postData = await getPost(params.id);

      setPost(postData);
    };
    fetchData();
  }, [params.id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BlogCard {...post} />
    </div>
  );
};

export default Page;
