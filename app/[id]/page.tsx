"use client";
import React, { useEffect, useState } from "react";

import { getPost, getUser } from "../api/api";
import { PageProps, Post, User } from "@/types/types";
import BlogCard from "@/components/BlogCard/page";
import AuthorCard from "@/components/AuthorCard/page";

const Page: React.FC<PageProps> = ({ params }) => {
  const [post, setPost] = useState<Post | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const postData = await getPost(params.id);
      const userData = await getUser(postData?.userId);

      setPost(postData);
      setUser(userData);
    };
    fetchData();
  }, [params.id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <AuthorCard {...user} />
      <BlogCard {...post} />
    </div>
  );
};

export default Page;
