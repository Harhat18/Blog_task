import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpenCheck } from "lucide-react";

import styles from "./styles.module.css";
import { BlogCard } from "@/types/types";

const BlogCards: React.FC<BlogCard> = ({ title, body, id }) => {
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
            <Link href={`/${id}`} className={styles.link}>
              Read More <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
