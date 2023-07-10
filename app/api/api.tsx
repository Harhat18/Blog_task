import { Post } from "@/types/types";

export async function getPost(id: number): Promise<Post> {
  try {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    return response.json();
  } catch (error) {
    throw new Error("error");
  }
}
export async function getPosts(): Promise<{ posts: Post[] }> {
  const response = await fetch("https://dummyjson.com/posts");
  return response.json();
}
