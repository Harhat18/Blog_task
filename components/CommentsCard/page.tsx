import { getUser } from "@/app/api/api";
import { User } from "@/types/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { ThumbsDown, ThumbsUp, UserPlus } from "lucide-react";
interface CommentedUserProps {
  userId: number;
  body: string;
}

const CommentsCard: React.FC<CommentedUserProps> = ({ userId, body }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getUserData = async () => {
      setIsLoading(true);
      try {
        const userData = await getUser(userId);
        console.log({ userData });
        setUser(userData);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getUserData();
  }, [userId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className={styles.container}>
        {user && (
          <div className={styles.imageWrapper}>
            <Image
              className={styles.image}
              src={user.image}
              alt={user.firstName}
              width={50}
              height={50}
            />
          </div>
        )}
        <div className={styles.user}>
          <div className={styles.name}>
            {user?.firstName} {user?.lastName} <UserPlus size={12} />
          </div>
          <div className={styles.info}>2 year ago</div>

          <div className={styles.body}>{body}</div>
          <div className={styles.icon}>
            <ThumbsUp size={8} /> 3 <ThumbsDown size={8} /> 1
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentsCard;
