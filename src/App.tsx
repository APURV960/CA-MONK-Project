import { useState } from "react";
import BlogList from "./comp/bloglist";
import BlogDetail from "./comp/blogdetail";
import Navbar from "./comp/navbar";

export default function App() {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white font-extrabold text-6xl mb-6">BLOG PAGE</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Section - Blog List */}
            <div className="space-y-4">
              <BlogList onSelect={(id) => setSelectedBlogId(Number(id))} />
            </div>

            {/* Right Section - Blog Detail */}
            <div className="space-y-4">
              <BlogDetail blogId={selectedBlogId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
