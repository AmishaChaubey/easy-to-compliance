import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, Tag, ArrowLeft, Clock, Share2, Bookmark, Heart } from "lucide-react";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    fetch(`https://blukingsdistillers.com/api/post_detail.php?id=${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch blog details");
        return res.json();
      })
      .then((data) => {
        setBlog(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blog:", err);
        setError("Unable to load blog details.");
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600 mb-4"></div>
          <p className="text-gray-700 text-lg font-medium">Loading amazing content...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-100">
        <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <p className="text-red-600 text-xl font-semibold">{error}</p>
          <Link
            to="/blog"
            className="inline-block mt-6 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
          >
            Return to Blogs
          </Link>
        </div>
      </div>
    );

  if (!blog)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200">
        <div className="text-center">
          <p className="text-gray-600 text-xl">Blog not found.</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Floating Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/blog"
              className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Blogs</span>
            </Link>
        
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-full transition-all ${
                  isBookmarked
                    ? "bg-indigo-100 text-indigo-600"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
              >
                <Bookmark className={`w-5 h-5 ${isBookmarked ? "fill-current" : ""}`} />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-all">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image Section */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
          <img
            src={blog.image_path}
            alt={blog.title}
            className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Floating Category Badge */}
          <div className="absolute top-6 left-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm shadow-lg text-indigo-600 font-semibold text-sm">
              <Tag className="w-4 h-4" />
              {blog.category_name || "General"}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-[#135192] bg-clip-text text-transparent leading-tight">
            {blog.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 pb-6 mb-8 border-b border-gray-200">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="p-2 bg-indigo-50 rounded-full">
                <User className="w-4 h-4 text-indigo-600" />
              </div>
              <span className="font-medium">Admin</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="p-2 bg-purple-50 rounded-full">
                <Calendar className="w-4 h-4 text-purple-600" />
              </div>
              <span>{blog.published_at}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="p-2 bg-pink-50 rounded-full">
                <Clock className="w-4 h-4 text-pink-600" />
              </div>
              <span>5 min read</span>
            </div>
          </div>

          {/* Excerpt */}
          {blog.body && (
            <div className="mb-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border-l-4 border-indigo-500">
              <p className="text-lg text-gray-700 leading-relaxed italic">{blog.body}</p>
            </div>
          )}

          {/* Main Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-img:rounded-xl prose-img:shadow-lg"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Engagement Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  isLiked
                    ? "bg-red-500 text-white shadow-lg shadow-red-200"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                <span>{isLiked ? "Liked" : "Like this post"}</span>
              </button>
              <div className="flex gap-3">
                <button className="p-3 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all">
                  <Share2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`p-3 rounded-full transition-all ${
                    isBookmarked
                      ? "bg-blue-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Bookmark className={`w-5 h-5 ${isBookmarked ? "fill-current" : ""}`} />
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Navigation */}
        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#135192] text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Explore More Articles
          </Link>
        </div>
      </main>

   
    </div>
  );
};

export default BlogDetail;