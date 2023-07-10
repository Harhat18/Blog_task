export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
}
export interface Comment {
  id: number;
  body: string;
  user: { username: string; id: number };
}

export interface PageProps {
  params: {
    id: number;
  };
}
export interface Posts {
  id: number;
  title: string;
  body: string;
}
export interface BlogCard {
  title: string;
  body: string;
  id: number;
}
