import { useBlog } from "../hooks/useBlogs";
import Loading from "./loading";

type Props = {
  blogId: number | null;
};

export default function BlogDetail({ blogId }: Props) {
  const { data: blog, isLoading, isError } = useBlog(blogId);

  if (!blogId) {
    return (
      <div className="p-6 text-muted-foreground bg-white rounded-lg">
        Select a blog to view details
      </div>
    );
  }

  if (isLoading) return <Loading />;

  if (isError) {
    return (
      <div className="p-6 text-red-500 bg-white rounded-lg">
        Failed to load blog
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="p-6 text-muted-foreground bg-white rounded-lg">
        Blog not found
      </div>
    );
  }

  return (
    <div className="bg-black rounded-lg p-6 space-y-4 border-5 border-green-500 p-5 rounded-2xl">
      {/* Cover Image */}
      <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-green-600">{blog.title}</h1>

      {/* Category and Date */}
      <div className="flex items-center gap-2 text-sm text-blue-500">
        <span className="font-semibold">{blog.category.join(" • ")}</span>
        <span>|</span>
        <span>
          {new Date(blog.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
      </div>

      {/* Description */}
      <p className="text-green-600">{blog.description}</p>

      {/* Content */}
      <div className="text-green-600 whitespace-pre-wrap">
        {blog.content}
      </div>

      {/* Tags */}
      <div className="pt-4 border-t">
        <div className="flex flex-wrap gap-2">
          {blog.category.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

