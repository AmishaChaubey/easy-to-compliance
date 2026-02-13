import React, { useState, useMemo ,useEffect} from 'react';
import { Search, Filter, Download, Eye, Bookmark, Share2, Calendar, FileText, ChevronDown, ChevronRight, Clock, TrendingUp } from 'lucide-react';

const TaxationDocuments = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedTaxType, setSelectedTaxType] = useState('all');
  const [sortOrder, setSortOrder] = useState('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarkedDocs, setBookmarkedDocs] = useState(new Set());
  
  const itemsPerPage = 6;

  // Expanded sample data
  const allDocuments = [
    {
      id: 1,
      title: 'GST Annual Return Filing Guidelines',
      docNumber: 'GSTR-2024-001',
      category: 'Guidelines',
      taxType: 'GST',
      issueDate: '2024-01-15',
      lastUpdated: '2024-02-10',
      description: 'Comprehensive guide for annual GST return filing process and requirements',
      fileSize: '2.4 MB',
      downloads: 1245,
      version: '2.1'
    },
    {
      id: 2,
      title: 'Income Tax Circular - TDS Deduction',
      docNumber: 'IT-CIR-2024-045',
      category: 'Circulars',
      taxType: 'Income Tax',
      issueDate: '2024-02-01',
      lastUpdated: '2024-02-08',
      description: 'Updates on TDS deduction rates and compliance requirements',
      fileSize: '1.8 MB',
      downloads: 2341,
      version: '1.0'
    },
    {
      id: 3,
      title: 'Form 26AS - Annual Tax Statement',
      docNumber: 'FORM-26AS-2024',
      category: 'Forms & Templates',
      taxType: 'Income Tax',
      issueDate: '2024-01-10',
      lastUpdated: '2024-01-10',
      description: 'Template for annual tax credit statement verification',
      fileSize: '856 KB',
      downloads: 3452,
      version: '3.0'
    },
    {
      id: 4,
      title: 'GST Rate Changes Notification',
      docNumber: 'GST-NOT-2024-012',
      category: 'Notifications',
      taxType: 'GST',
      issueDate: '2024-02-05',
      lastUpdated: '2024-02-05',
      description: 'Official notification regarding changes in GST rates for various commodities',
      fileSize: '1.2 MB',
      downloads: 1876,
      version: '1.0'
    },
    {
      id: 5,
      title: 'Corporate Tax Filing Checklist',
      docNumber: 'CT-GUIDE-2024-003',
      category: 'Guidelines',
      taxType: 'Corporate Tax',
      issueDate: '2024-01-20',
      lastUpdated: '2024-02-01',
      description: 'Step-by-step checklist for corporate tax filing compliance',
      fileSize: '3.1 MB',
      downloads: 987,
      version: '1.2'
    },
    {
      id: 6,
      title: 'ITR-4 Form for Presumptive Income',
      docNumber: 'ITR-4-2024',
      category: 'Forms & Templates',
      taxType: 'Income Tax',
      issueDate: '2024-01-05',
      lastUpdated: '2024-01-28',
      description: 'Income tax return form for individuals with presumptive income',
      fileSize: '1.5 MB',
      downloads: 4123,
      version: '2.0'
    },
    {
      id: 7,
      title: 'TDS Return Filing Guidelines',
      docNumber: 'TDS-GUIDE-2024-002',
      category: 'Guidelines',
      taxType: 'TDS',
      issueDate: '2023-12-15',
      lastUpdated: '2024-01-05',
      description: 'Complete guide for quarterly TDS return filing',
      fileSize: '2.1 MB',
      downloads: 1532,
      version: '1.5'
    },
    {
      id: 8,
      title: 'GST Composition Scheme Circular',
      docNumber: 'GST-CIR-2024-008',
      category: 'Circulars',
      taxType: 'GST',
      issueDate: '2024-01-25',
      lastUpdated: '2024-01-25',
      description: 'Updated guidelines for GST composition scheme eligibility',
      fileSize: '1.4 MB',
      downloads: 2145,
      version: '1.0'
    },
    {
      id: 9,
      title: 'ITR-1 Sahaj Form',
      docNumber: 'ITR-1-2024',
      category: 'Forms & Templates',
      taxType: 'Income Tax',
      issueDate: '2023-11-20',
      lastUpdated: '2024-01-15',
      description: 'Simplified return form for individuals with salary income',
      fileSize: '1.1 MB',
      downloads: 5234,
      version: '2.5'
    },
    {
      id: 10,
      title: 'Corporate Tax Rate Notification',
      docNumber: 'CT-NOT-2023-056',
      category: 'Notifications',
      taxType: 'Corporate Tax',
      issueDate: '2023-10-10',
      lastUpdated: '2023-12-20',
      description: 'Official notification on revised corporate tax rates',
      fileSize: '980 KB',
      downloads: 1654,
      version: '1.0'
    },
    {
      id: 11,
      title: 'TDS on Salary Circular',
      docNumber: 'TDS-CIR-2023-034',
      category: 'Circulars',
      taxType: 'TDS',
      issueDate: '2023-09-15',
      lastUpdated: '2023-11-10',
      description: 'Clarifications on TDS deduction from salary payments',
      fileSize: '1.6 MB',
      downloads: 2876,
      version: '1.0'
    },
    {
      id: 12,
      title: 'GST Invoice Requirements',
      docNumber: 'GST-NOT-2023-089',
      category: 'Notifications',
      taxType: 'GST',
      issueDate: '2023-08-20',
      lastUpdated: '2023-10-05',
      description: 'Mandatory requirements for GST compliant invoices',
      fileSize: '1.3 MB',
      downloads: 3123,
      version: '2.0'
    },
    {
      id: 13,
      title: 'Form 16 - TDS Certificate',
      docNumber: 'FORM-16-2024',
      category: 'Forms & Templates',
      taxType: 'TDS',
      issueDate: '2024-01-01',
      lastUpdated: '2024-01-01',
      description: 'TDS certificate format for salary income',
      fileSize: '750 KB',
      downloads: 4567,
      version: '3.0'
    },
    {
      id: 14,
      title: 'Income Tax Deduction Guidelines',
      docNumber: 'IT-GUIDE-2023-021',
      category: 'Guidelines',
      taxType: 'Income Tax',
      issueDate: '2023-07-10',
      lastUpdated: '2023-12-15',
      description: 'Comprehensive guide on allowable deductions under Income Tax',
      fileSize: '2.8 MB',
      downloads: 3234,
      version: '1.8'
    },
    {
      id: 15,
      title: 'Corporate Tax Audit Requirements',
      docNumber: 'CT-CIR-2023-045',
      category: 'Circulars',
      taxType: 'Corporate Tax',
      issueDate: '2023-06-15',
      lastUpdated: '2023-09-20',
      description: 'Mandatory audit requirements for corporate entities',
      fileSize: '2.2 MB',
      downloads: 1876,
      version: '1.0'
    },
    {
      id: 16,
      title: 'GST Input Tax Credit Rules',
      docNumber: 'GST-GUIDE-2023-015',
      category: 'Guidelines',
      taxType: 'GST',
      issueDate: '2023-05-20',
      lastUpdated: '2023-11-30',
      description: 'Detailed rules for claiming input tax credit under GST',
      fileSize: '3.4 MB',
      downloads: 2654,
      version: '2.3'
    },
    {
      id: 17,
      title: 'ITR-2 Form for Capital Gains',
      docNumber: 'ITR-2-2024',
      category: 'Forms & Templates',
      taxType: 'Income Tax',
      issueDate: '2024-02-01',
      lastUpdated: '2024-02-01',
      description: 'Return form for individuals with capital gains income',
      fileSize: '1.7 MB',
      downloads: 2987,
      version: '2.0'
    },
    {
      id: 18,
      title: 'TDS Payment Deadline Extension',
      docNumber: 'TDS-NOT-2024-005',
      category: 'Notifications',
      taxType: 'TDS',
      issueDate: '2024-01-30',
      lastUpdated: '2024-01-30',
      description: 'Official notification on extended TDS payment deadlines',
      fileSize: '890 KB',
      downloads: 3456,
      version: '1.0'
    },
    {
      id: 19,
      title: 'Corporate Tax Exemption Circular',
      docNumber: 'CT-CIR-2024-012',
      category: 'Circulars',
      taxType: 'Corporate Tax',
      issueDate: '2024-02-05',
      lastUpdated: '2024-02-05',
      description: 'Guidelines on corporate tax exemptions for startups',
      fileSize: '1.9 MB',
      downloads: 1234,
      version: '1.0'
    },
    {
      id: 20,
      title: 'GST E-Way Bill Guidelines',
      docNumber: 'GST-GUIDE-2024-006',
      category: 'Guidelines',
      taxType: 'GST',
      issueDate: '2024-01-18',
      lastUpdated: '2024-02-02',
      description: 'Complete guide for generating and managing GST e-way bills',
      fileSize: '2.6 MB',
      downloads: 2123,
      version: '1.3'
    },
    {
      id: 21,
      title: 'Form 16A - TDS on Non-Salary',
      docNumber: 'FORM-16A-2024',
      category: 'Forms & Templates',
      taxType: 'TDS',
      issueDate: '2023-12-01',
      lastUpdated: '2024-01-20',
      description: 'TDS certificate for income other than salary',
      fileSize: '680 KB',
      downloads: 3876,
      version: '2.5'
    },
    {
      id: 22,
      title: 'Income Tax Assessment Notification',
      docNumber: 'IT-NOT-2023-067',
      category: 'Notifications',
      taxType: 'Income Tax',
      issueDate: '2023-11-05',
      lastUpdated: '2024-01-10',
      description: 'Updates on income tax assessment procedures',
      fileSize: '1.5 MB',
      downloads: 2345,
      version: '1.0'
    },
    {
      id: 23,
      title: 'GST Refund Process Guidelines',
      docNumber: 'GST-GUIDE-2023-028',
      category: 'Guidelines',
      taxType: 'GST',
      issueDate: '2023-10-25',
      lastUpdated: '2024-01-05',
      description: 'Step-by-step process for claiming GST refunds',
      fileSize: '2.9 MB',
      downloads: 1987,
      version: '2.1'
    },
    {
      id: 24,
      title: 'Corporate Advance Tax Circular',
      docNumber: 'CT-CIR-2023-078',
      category: 'Circulars',
      taxType: 'Corporate Tax',
      issueDate: '2023-09-30',
      lastUpdated: '2023-12-28',
      description: 'Guidelines on advance tax payment for corporates',
      fileSize: '1.7 MB',
      downloads: 1543,
      version: '1.0'
    }
  ];

  const categories = ['all', 'Forms & Templates', 'Circulars', 'Notifications', 'Guidelines'];
  const years = ['all', '2024', '2023', '2022', '2021'];
  const taxTypes = ['all', 'GST', 'Income Tax', 'Corporate Tax', 'TDS'];

  // Filter and sort documents
  const filteredAndSortedDocuments = useMemo(() => {
    let filtered = allDocuments;

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(doc => 
        doc.title.toLowerCase().includes(query) ||
        doc.docNumber.toLowerCase().includes(query) ||
        doc.description.toLowerCase().includes(query) ||
        doc.category.toLowerCase().includes(query) ||
        doc.taxType.toLowerCase().includes(query)
      );
    }

    // Apply category filter from tabs
    if (activeTab !== 'all') {
      filtered = filtered.filter(doc => doc.category === activeTab);
    }

    // Apply category filter from dropdown (if different from tab)
    if (selectedCategory !== 'all' && selectedCategory !== activeTab) {
      filtered = filtered.filter(doc => doc.category === selectedCategory);
    }

    // Apply year filter
    if (selectedYear !== 'all') {
      filtered = filtered.filter(doc => doc.issueDate.startsWith(selectedYear));
    }

    // Apply tax type filter
    if (selectedTaxType !== 'all') {
      filtered = filtered.filter(doc => doc.taxType === selectedTaxType);
    }

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      if (sortOrder === 'latest') {
        return new Date(b.lastUpdated) - new Date(a.lastUpdated);
      } else {
        return new Date(a.lastUpdated) - new Date(b.lastUpdated);
      }
    });

    return sorted;
  }, [allDocuments, searchQuery, activeTab, selectedCategory, selectedYear, selectedTaxType, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedDocuments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDocuments = filteredAndSortedDocuments.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeTab, selectedCategory, selectedYear, selectedTaxType, sortOrder]);

  const toggleBookmark = (docId) => {
    const newBookmarks = new Set(bookmarkedDocs);
    if (newBookmarks.has(docId)) {
      newBookmarks.delete(docId);
    } else {
      newBookmarks.add(docId);
    }
    setBookmarkedDocs(newBookmarks);
  };

  const handleTabChange = (category) => {
    setActiveTab(category);
    // Sync the dropdown with the tab
    setSelectedCategory(category);
  };

  const handleCategoryDropdownChange = (category) => {
    setSelectedCategory(category);
    // Sync the tab with the dropdown
    setActiveTab(category);
  };

  // Recent documents (latest 3 by update date)
  const recentDocuments = useMemo(() => {
    return [...allDocuments]
      .sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated))
      .slice(0, 3);
  }, [allDocuments]);

  // Popular documents (top 3 by downloads)
  const popularDocuments = useMemo(() => {
    return [...allDocuments]
      .sort((a, b) => b.downloads - a.downloads)
      .slice(0, 3);
  }, [allDocuments]);

  const handleDownload = (doc) => {
    alert(`Downloading: ${doc.title}`);
  };

  const handleView = (doc) => {
    alert(`Viewing: ${doc.title}`);
  };

  const handleShare = (doc) => {
    alert(`Sharing: ${doc.title}`);
  };

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-serif">
      {/* Hero Section */}
      <div className=" text-white min-h-[500px] "
      style={
        {
          backgroundImage:`url("/banner.png")`
        }
      }>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-45 flex flex-col items-start justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Taxation Documents</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Access comprehensive tax forms, circulars, notifications, and guidelines all in one place
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center text-sm text-gray-600">
            <span className="hover:text-[#135192] cursor-pointer">Home</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-[#135192] font-medium">Documents</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Recent Documents */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Clock className="w-5 h-5 text-[#135192] mr-2" />
                <h3 className="font-semibold text-gray-900">Recent Documents</h3>
              </div>
              <div className="space-y-3">
                {recentDocuments.map(doc => (
                  <div key={doc.id} className="border-l-2 border-[#135192] pl-3 py-1 cursor-pointer hover:bg-gray-50 transition-colors">
                    <p className="text-sm font-medium text-gray-900 line-clamp-2">{doc.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{doc.docNumber}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Downloads */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-5 h-5 text-[#135192] mr-2" />
                <h3 className="font-semibold text-gray-900">Popular Downloads</h3>
              </div>
              <div className="space-y-3">
                {popularDocuments.map(doc => (
                  <div key={doc.id} className="flex items-start cursor-pointer hover:bg-gray-50 transition-colors p-2 rounded">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 line-clamp-2">{doc.title}</p>
                      <p className="text-xs text-gray-500 mt-1">{doc.downloads.toLocaleString()} downloads</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
              {/* Search Bar */}
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search documents by title, number, or keyword..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#135192] focus:border-transparent outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Filters Row */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#135192] focus:border-transparent outline-none"
                    value={selectedCategory}
                    onChange={(e) => handleCategoryDropdownChange(e.target.value)}
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat === 'all' ? 'All Categories' : cat}</option>
                    ))}
                  </select>
                </div>

                {/* Year Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#135192] focus:border-transparent outline-none"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                  >
                    {years.map(year => (
                      <option key={year} value={year}>{year === 'all' ? 'All Years' : year}</option>
                    ))}
                  </select>
                </div>

                {/* Tax Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tax Type</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#135192] focus:border-transparent outline-none"
                    value={selectedTaxType}
                    onChange={(e) => setSelectedTaxType(e.target.value)}
                  >
                    {taxTypes.map(type => (
                      <option key={type} value={type}>{type === 'all' ? 'All Types' : type}</option>
                    ))}
                  </select>
                </div>

                {/* Sort Option */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#135192] focus:border-transparent outline-none"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                  >
                    <option value="latest">Latest First</option>
                    <option value="oldest">Oldest First</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Category Tabs */}
            <div className="mb-6">
              <div className="border-b border-gray-200">
                <div className="flex space-x-8 overflow-x-auto">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => handleTabChange(category)}
                      className={`pb-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                        activeTab === category
                          ? 'border-[#135192] text-[#135192]'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {category === 'all' ? 'All Documents' : category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Summary */}
            {filteredAndSortedDocuments.length === 0 ? (
              <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
                <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No documents found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <>
                {/* Document Cards */}
                <div className="space-y-4 mb-8">
                  {currentDocuments.map(doc => (
                    <div
                      key={doc.id}
                      className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                        <div className="flex-1 mb-4 md:mb-0">
                          <div className="flex items-start mb-2">
                            <FileText className="w-5 h-5 text-[#135192] mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-1">{doc.title}</h3>
                              <p className="text-sm text-gray-600 mb-2">{doc.docNumber}</p>
                            </div>
                          </div>

                          <p className="text-sm text-gray-600 mb-3 ml-7">{doc.description}</p>

                          <div className="flex flex-wrap gap-4 ml-7 text-sm text-gray-500">
                            <div className="flex items-center">
                              <span className="font-medium text-gray-700 mr-1">Category:</span>
                              <span className="px-2 py-1 bg-blue-50 text-[#135192] rounded-full text-xs font-medium">
                                {doc.category}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <span className="font-medium text-gray-700 mr-1">Tax Type:</span>
                              <span className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                                {doc.taxType}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              <span>Issued: {new Date(doc.issueDate).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              <span>Updated: {new Date(doc.lastUpdated).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center">
                              <span className="font-medium text-gray-700 mr-1">Size:</span>
                              <span>{doc.fileSize}</span>
                            </div>
                            <div className="flex items-center">
                              <span className="font-medium text-gray-700 mr-1">Version:</span>
                              <span>{doc.version}</span>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex md:flex-col gap-2 md:ml-4">
                          <button 
                            onClick={() => handleDownload(doc)}
                            className="flex items-center justify-center px-4 py-2 bg-[#135192] text-white rounded-lg hover:bg-[#0d3a66] transition-colors text-sm font-medium"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </button>
                          <button 
                            onClick={() => handleView(doc)}
                            className="flex items-center justify-center px-4 py-2 border border-[#135192] text-[#135192] rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </button>
                          <div className="flex gap-2">
                            <button
                              onClick={() => toggleBookmark(doc.id)}
                              className={`flex items-center justify-center p-2 border rounded-lg transition-colors ${
                                bookmarkedDocs.has(doc.id)
                                  ? 'bg-yellow-50 border-yellow-400 text-yellow-600'
                                  : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                              }`}
                              title={bookmarkedDocs.has(doc.id) ? 'Remove bookmark' : 'Add bookmark'}
                            >
                              <Bookmark className="w-4 h-4" fill={bookmarkedDocs.has(doc.id) ? 'currentColor' : 'none'} />
                            </button>
                            <button 
                              onClick={() => handleShare(doc)}
                              className="flex items-center justify-center p-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
                              title="Share document"
                            >
                              <Share2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex flex-col sm:flex-row items-center justify-between bg-white border border-gray-200 rounded-lg p-4 gap-4">
                  <div className="text-sm text-gray-600">
                    Showing <span className="font-medium">{startIndex + 1}-{Math.min(endIndex, filteredAndSortedDocuments.length)}</span> of <span className="font-medium">{filteredAndSortedDocuments.length}</span> documents
                  </div>
                  <div className="flex gap-2 flex-wrap justify-center">
                    <button 
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Previous
                    </button>
                    
                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => {
                      // Show first page, last page, current page, and pages around current
                      if (
                        pageNum === 1 ||
                        pageNum === totalPages ||
                        (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                      ) {
                        return (
                          <button
                            key={pageNum}
                            onClick={() => setCurrentPage(pageNum)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                              currentPage === pageNum
                                ? 'bg-[#135192] text-white'
                                : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            {pageNum}
                          </button>
                        );
                      } else if (
                        pageNum === currentPage - 2 ||
                        pageNum === currentPage + 2
                      ) {
                        return <span key={pageNum} className="px-2 py-2 text-gray-500">...</span>;
                      }
                      return null;
                    })}
                    
                    <button 
                      onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxationDocuments;