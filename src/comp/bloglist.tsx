import { useBlogs } from "../hooks/useBlogs";
import Blogcard from "./blogcard";
import Loading  from "./loading";

type Props = {
  onSelect: (id: number) => void;
};

export default function BlogList({ onSelect }: Props) {
  const { data, isLoading, isError } = useBlogs();

  if (isLoading) return <Loading />;
  if (isError) return <p className="text-red-500">Failed to load blogs</p>;

  return (
    <div className="space-y-4 border-5 border-blue-500 p-5 rounded-2xl">
      {data.map((blog: any) => (
        <Blogcard
          key={blog.id}
          blog={blog}
          onClick={() => onSelect(Number(blog.id))}
        />
      ))}
    </div>
  );
}
