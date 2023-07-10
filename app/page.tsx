"use client";
import React, { useEffect, useState, useContext } from "react";

import styles from "./styles.module.css";
import BlogCard from "../components/BlogsCard/page";

import { Posts } from "@/types/types";
import { getPosts } from "./api/api";
import SearchBar from "@/components/Search /SearchBar";
import BlogCards from "../components/BlogsCard/page";

const Home: React.FC = () => {
  const [filteredPosts, setFilteredPosts] = useState<Posts[]>([]);
  const [totalPosts, setTotalPosts] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const fetchPosts = async (page: number) => {
    const { posts } = await getPosts();
    setTotalPosts(posts.length);
    return posts.slice(page * 8, (page + 1) * 8);
  };

  const handleSearch = async (searchQuery: string) => {
    const { posts } = await getPosts();
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPosts(filtered.slice(0, 8));
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => prev - 1);
  };

  useEffect(() => {
    handleSearch("");
  }, []);

  useEffect(() => {
    fetchPosts(currentPage).then((posts) => setFilteredPosts(posts));
  }, [currentPage]);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {filteredPosts.length > 0 ? (
        <div className={styles.blogsContainer}>
          {filteredPosts.map((post: Posts) => (
            <BlogCards key={post.id} {...post} />
          ))}
        </div>
      ) : (
        <p>No Posts Found.</p>
      )}
      <div className={styles.button}>
        {currentPage > 0 && (
          <button className={styles.nextButton} onClick={handlePrevious}>
            Previous
          </button>
        )}
        {currentPage < Math.ceil(totalPosts / 8) - 1 && (
          <button className={styles.nextButton} onClick={handleNext}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
