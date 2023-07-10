import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpenCheck } from "lucide-react";

import styles from "./styles.module.css";
import { BlogCard } from "@/types/types";
import { BlogContext } from "@/context/context";

const BlogCards: React.FC<BlogCard> = ({ title, body, id }) => {
  const { markPostAsRead } = useContext(BlogContext);
  const handleReadClick = (postId: any) => {
    console.log("handleReadClick", postId);

    markPostAsRead(postId);
  };
  const { readPosts } = useContext(BlogContext);
  const isRead = readPosts.includes(id);

  if (!title && !body) {
    return <p>No posts available.</p>;
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image
          src={`https://picsum.photos/200/300?random=${id}`}
          alt="Blog Card Image"
          width={170}
          height={170}
        />
      </div>
      <div className={styles.cardBody}>
        <span className={styles.title}>{title}</span>
        <p className={styles.info}>
          Published 3 months ago - 15 min read - 3 comments
        </p>
        <p>{body}</p>
        <div className={styles.link}>
          <div>
            <Link href={`/${id}`} onClick={() => handleReadClick(id)}>
              Read More <ArrowRight size={12} />
            </Link>
          </div>
          <div className={styles.linkInfo}>
            {isRead ? (
              <p>
                <BookOpenCheck size={24} />
              </p>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
