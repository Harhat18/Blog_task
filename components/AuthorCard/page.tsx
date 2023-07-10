import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import { User } from "@/types/types";
const AuthorCard: React.FC<User> = (user) => {
  return (
    <div>
      <div className={styles.authorCard}>
        <div className={styles.authorImage}>
          <Image src={user.image} alt={user.firstName} width={50} height={50} />
        </div>
        <div>
          <div>Author</div>
          <div className={styles.authorName}>
            {user.firstName} {user.lastName}
          </div>
          <div>Email: {user.email}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
