"use client";
import React, { useEffect, useState } from "react";

import { getComment, getPost, getUser } from "../api/api";
import { Comment, PageProps, Post, User } from "@/types/types";

import AuthorCard from "@/components/AuthorCard/page";
import BlogCard from "@/components/BlogCard/page";
import CommentsCard from "@/components/CommentsCard/page";

const Page: React.FC<PageProps> = ({ params }) => {
  const [post, setPost] = useState<Post | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const postData = await getPost(params.id);
      const commentData = await getComment(params.id);
      const userData = await getUser(postData?.userId);

      setPost(postData);
      setUser(userData);
      setComments(commentData.comments);
    };
    fetchData();
  }, [params.id]);

  if (!post || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <AuthorCard {...user} />

      <BlogCard {...post} />

      <h1>Comments:</h1>
      {comments.map((comment: Comment) => (
        <div key={comment.id}>
          <div>
            <CommentsCard userId={comment.user.id} {...comment} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
