import React, { useEffect, useState } from 'react';
import { Search, Calendar, User, Tag } from 'lucide-react';

const BlogFrontend = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([{ id: 0, name: 'All Categories' }]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [page, setPage] = useState(1);
  const [limit] = useState(6);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch categories dynamically
  useEffect(() => {
    fetch('')
      .then(res => res.json())
      .then(data => setCategories([{ id: 0, name: 'All Categories' }, ...data]))
      .catch(err => console.error('Error fetching categories:', err));
  }, []);

  // ✅ Fetch blogs from postes.php with search, filter, and pagination
  const fetchBlogs = () => {
    setLoading(true);
    let url = ``;
    if (searchQuery) url += `&q=${encodeURIComponent(searchQuery)}`;
    if (selectedCategory && selectedCategory !== 0) url += `&category_id=${selectedCategory}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setBlogs(data.data);
        setTotal(data.total);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching blogs:', err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchBlogs();
  }, [searchQuery, selectedCategory, page]);

   useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative mb-0 overflow-hidden h-[300px] xs:h-[350px] sm:h-[400px] md:h-[400px] lg:h-[500px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/banner-img/blog.png)',
          }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative h-full flex items-center px-3 xs:px-4 sm:px-8 md:px-16 lg:px-12 max-w-7xl mx-auto">
          <div className="text-left -mt-8 xs:-mt-10 sm:-mt-16">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 xs:mb-3 text-white tracking-tight font-serif">
              Blogs 
            </h1>
            {/* <div className="w-10 xs:w-12 sm:w-16 mb-3 xs:mb-4 h-[3px] bg-red-500"></div> */}
<p className="text-white text-[10px] xs:text-xs sm:text-sm md:text-base leading-relaxed max-w-xl">
  Since 2021, we have been delivering reliable and professional taxation services <br className="hidden xs:block" />
  Our expert team ensures accurate compliance and hassle-free filing solutions<br className="hidden xs:block" />
  Trusted, transparent, and committed to helping you achieve financial clarity
</p>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={e => { setSearchQuery(e.target.value); setPage(1); }}
              className="w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2"
              style={{ borderColor: '#135192', '--tw-ring-color': '#135192' }}
            />
          </div>

          {/* Category Dropdown */}
          <div className="md:w-64">
            <select
              value={selectedCategory}
              onChange={e => { setSelectedCategory(parseInt(e.target.value)); setPage(1); }}
              className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2"
              style={{ borderColor: '#135192', '--tw-ring-color': '#135192' }}
            >
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Loading */}
        {loading && <p className="text-gray-600 text-center py-8">Loading blogs...</p>}

        {/* Blog Grid */}
        {!loading && blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map(blog => (
              <article
                key={blog.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100"
              >
                <img
                  src={blog.image_path}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4" style={{ color: '#135192' }} />
                    <span
                      className="text-sm font-medium px-3 py-1 rounded-full"
                      style={{ backgroundColor: '#135192', color: 'white' }}
                    >
                      {blog.category_name || 'General'}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold mb-3 hover:opacity-80 cursor-pointer" style={{ color: '#135192' }}>
                    {blog.title}
                  </h2>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>Admin</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{blog.published_at}</span>
                    </div>
                  </div>

                  <button
                    className="w-full py-2 rounded-lg font-medium text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: '#135192' }}
                    onClick={() => window.location.href = `/blog/${blog.id}`}
                  >
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : !loading && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blogs found.</p>
          </div>
        )}

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center gap-4 mt-8">
            <button
              disabled={page <= 1}
              onClick={() => setPage(page - 1)}
              className="px-4 py-2 bg-[#135192] text-white rounded-md disabled:opacity-50"
            >
              Prev
            </button>
            <span className="px-4 py-2">{page} / {totalPages}</span>
            <button
              disabled={page >= totalPages}
              onClick={() => setPage(page + 1)}
              className="px-4 py-2 bg-[#135192] text-white rounded-md disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>


    </div>
  );
};

export default BlogFrontend;
