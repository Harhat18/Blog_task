"use client";
import React, { createContext, useState, useEffect } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [readPosts, setReadPosts] = useState([]);

  useEffect(() => {
    const storedReadPosts = localStorage.getItem("readPosts");
    if (storedReadPosts) {
      setReadPosts(JSON.parse(storedReadPosts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("readPosts", JSON.stringify(readPosts));
  }, [readPosts]);

  const markPostAsRead = (postId) => {
    setReadPosts([...readPosts, postId]);
  };

  const contextValue = {
    readPosts,
    markPostAsRead,
  };

  return (
    <BlogContext.Provider value={contextValue}>{children}</BlogContext.Provider>
  );
};
