import { Card, CardContent } from "@/comp/ui/card";

type Props = {
  blog: any;
  onClick: () => void;
};

export default function blogcard({ blog, onClick }: Props) {
  return (
    <Card
      onClick={onClick}
      className="cursor-pointer bg-black"
    >
      <CardContent className="p-4 space-y-2 relative pt-4">
        <div className="flex justify-between items-start">
          <span className="text-xs font-bold text-red-500">
            {blog.category.join(" • ")}
          </span>
          <span className="text-xs font-bold text-white">
            {new Date(blog.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>
        <h3 className="font-semibold text-blue-500">{blog.title}</h3>
        <p className="text-sm line-clamp-2 text-orange-500">
          {blog.description}
        </p>
      </CardContent>
    </Card>
  );
}

