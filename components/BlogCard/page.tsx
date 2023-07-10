import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import { Post } from "@/types/types";
const BlogCard: React.FC<Post> = (post) => {
  return (
    <div>
      <div className={styles.blogContainer}>
        <div>
          <Image
            className={styles.cardImage}
            src={`https://picsum.photos/960/400?random=${post.id}`}
            alt={post.title}
            width={960}
            height={400}
          />
        </div>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.body}>{post.body}</p>
      </div>
    </div>
  );
};

export default BlogCard;
