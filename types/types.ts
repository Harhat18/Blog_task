export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
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
export interface PageProps {
  params: {
    id: number;
  };
}
