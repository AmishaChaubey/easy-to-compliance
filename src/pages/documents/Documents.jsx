import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  Search, Download, Eye, Bookmark, Share2, Calendar,
  FileText, ChevronDown, ChevronRight, Clock, TrendingUp,
  SlidersHorizontal, X
} from 'lucide-react';

const TaxationDocuments = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedTaxType, setSelectedTaxType] = useState('all');
  const [sortOrder, setSortOrder] = useState('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarkedDocs, setBookmarkedDocs] = useState(new Set());
  const [sidebarOpen, setSidebarOpen] = useState(false);  // mobile sidebar
  const [filtersOpen, setFiltersOpen] = useState(false);  // mobile filter accordion
  const sidebarRef = useRef(null);
  const itemsPerPage = 6;

  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Close sidebar on outside click
  useEffect(() => {
    const handler = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const allDocuments = [
    { id: 1,  title: 'GST Annual Return Filing Guidelines',    docNumber: 'GSTR-2024-001',     category: 'Guidelines',       taxType: 'GST',           issueDate: '2024-01-15', lastUpdated: '2024-02-10', description: 'Comprehensive guide for annual GST return filing process and requirements',                  fileSize: '2.4 MB', downloads: 1245, version: '2.1' },
    { id: 2,  title: 'Income Tax Circular - TDS Deduction',    docNumber: 'IT-CIR-2024-045',   category: 'Circulars',        taxType: 'Income Tax',    issueDate: '2024-02-01', lastUpdated: '2024-02-08', description: 'Updates on TDS deduction rates and compliance requirements',                                 fileSize: '1.8 MB', downloads: 2341, version: '1.0' },
    { id: 3,  title: 'Form 26AS - Annual Tax Statement',       docNumber: 'FORM-26AS-2024',    category: 'Forms & Templates',taxType: 'Income Tax',    issueDate: '2024-01-10', lastUpdated: '2024-01-10', description: 'Template for annual tax credit statement verification',                                     fileSize: '856 KB', downloads: 3452, version: '3.0' },
    { id: 4,  title: 'GST Rate Changes Notification',          docNumber: 'GST-NOT-2024-012',  category: 'Notifications',    taxType: 'GST',           issueDate: '2024-02-05', lastUpdated: '2024-02-05', description: 'Official notification regarding changes in GST rates for various commodities',             fileSize: '1.2 MB', downloads: 1876, version: '1.0' },
    { id: 5,  title: 'Corporate Tax Filing Checklist',         docNumber: 'CT-GUIDE-2024-003', category: 'Guidelines',       taxType: 'Corporate Tax', issueDate: '2024-01-20', lastUpdated: '2024-02-01', description: 'Step-by-step checklist for corporate tax filing compliance',                               fileSize: '3.1 MB', downloads: 987,  version: '1.2' },
    { id: 6,  title: 'ITR-4 Form for Presumptive Income',      docNumber: 'ITR-4-2024',        category: 'Forms & Templates',taxType: 'Income Tax',    issueDate: '2024-01-05', lastUpdated: '2024-01-28', description: 'Income tax return form for individuals with presumptive income',                           fileSize: '1.5 MB', downloads: 4123, version: '2.0' },
    { id: 7,  title: 'TDS Return Filing Guidelines',           docNumber: 'TDS-GUIDE-2024-002',category: 'Guidelines',       taxType: 'TDS',           issueDate: '2023-12-15', lastUpdated: '2024-01-05', description: 'Complete guide for quarterly TDS return filing',                                           fileSize: '2.1 MB', downloads: 1532, version: '1.5' },
    { id: 8,  title: 'GST Composition Scheme Circular',        docNumber: 'GST-CIR-2024-008',  category: 'Circulars',        taxType: 'GST',           issueDate: '2024-01-25', lastUpdated: '2024-01-25', description: 'Updated guidelines for GST composition scheme eligibility',                               fileSize: '1.4 MB', downloads: 2145, version: '1.0' },
    { id: 9,  title: 'ITR-1 Sahaj Form',                       docNumber: 'ITR-1-2024',        category: 'Forms & Templates',taxType: 'Income Tax',    issueDate: '2023-11-20', lastUpdated: '2024-01-15', description: 'Simplified return form for individuals with salary income',                                fileSize: '1.1 MB', downloads: 5234, version: '2.5' },
    { id: 10, title: 'Corporate Tax Rate Notification',        docNumber: 'CT-NOT-2023-056',   category: 'Notifications',    taxType: 'Corporate Tax', issueDate: '2023-10-10', lastUpdated: '2023-12-20', description: 'Official notification on revised corporate tax rates',                                     fileSize: '980 KB', downloads: 1654, version: '1.0' },
    { id: 11, title: 'TDS on Salary Circular',                 docNumber: 'TDS-CIR-2023-034',  category: 'Circulars',        taxType: 'TDS',           issueDate: '2023-09-15', lastUpdated: '2023-11-10', description: 'Clarifications on TDS deduction from salary payments',                                    fileSize: '1.6 MB', downloads: 2876, version: '1.0' },
    { id: 12, title: 'GST Invoice Requirements',               docNumber: 'GST-NOT-2023-089',  category: 'Notifications',    taxType: 'GST',           issueDate: '2023-08-20', lastUpdated: '2023-10-05', description: 'Mandatory requirements for GST compliant invoices',                                       fileSize: '1.3 MB', downloads: 3123, version: '2.0' },
    { id: 13, title: 'Form 16 - TDS Certificate',              docNumber: 'FORM-16-2024',      category: 'Forms & Templates',taxType: 'TDS',           issueDate: '2024-01-01', lastUpdated: '2024-01-01', description: 'TDS certificate format for salary income',                                                fileSize: '750 KB', downloads: 4567, version: '3.0' },
    { id: 14, title: 'Income Tax Deduction Guidelines',        docNumber: 'IT-GUIDE-2023-021', category: 'Guidelines',       taxType: 'Income Tax',    issueDate: '2023-07-10', lastUpdated: '2023-12-15', description: 'Comprehensive guide on allowable deductions under Income Tax',                             fileSize: '2.8 MB', downloads: 3234, version: '1.8' },
    { id: 15, title: 'Corporate Tax Audit Requirements',       docNumber: 'CT-CIR-2023-045',   category: 'Circulars',        taxType: 'Corporate Tax', issueDate: '2023-06-15', lastUpdated: '2023-09-20', description: 'Mandatory audit requirements for corporate entities',                                     fileSize: '2.2 MB', downloads: 1876, version: '1.0' },
    { id: 16, title: 'GST Input Tax Credit Rules',             docNumber: 'GST-GUIDE-2023-015',category: 'Guidelines',       taxType: 'GST',           issueDate: '2023-05-20', lastUpdated: '2023-11-30', description: 'Detailed rules for claiming input tax credit under GST',                                  fileSize: '3.4 MB', downloads: 2654, version: '2.3' },
    { id: 17, title: 'ITR-2 Form for Capital Gains',           docNumber: 'ITR-2-2024',        category: 'Forms & Templates',taxType: 'Income Tax',    issueDate: '2024-02-01', lastUpdated: '2024-02-01', description: 'Return form for individuals with capital gains income',                                   fileSize: '1.7 MB', downloads: 2987, version: '2.0' },
    { id: 18, title: 'TDS Payment Deadline Extension',         docNumber: 'TDS-NOT-2024-005',  category: 'Notifications',    taxType: 'TDS',           issueDate: '2024-01-30', lastUpdated: '2024-01-30', description: 'Official notification on extended TDS payment deadlines',                                 fileSize: '890 KB', downloads: 3456, version: '1.0' },
    { id: 19, title: 'Corporate Tax Exemption Circular',       docNumber: 'CT-CIR-2024-012',   category: 'Circulars',        taxType: 'Corporate Tax', issueDate: '2024-02-05', lastUpdated: '2024-02-05', description: 'Guidelines on corporate tax exemptions for startups',                                    fileSize: '1.9 MB', downloads: 1234, version: '1.0' },
    { id: 20, title: 'GST E-Way Bill Guidelines',              docNumber: 'GST-GUIDE-2024-006',category: 'Guidelines',       taxType: 'GST',           issueDate: '2024-01-18', lastUpdated: '2024-02-02', description: 'Complete guide for generating and managing GST e-way bills',                              fileSize: '2.6 MB', downloads: 2123, version: '1.3' },
    { id: 21, title: 'Form 16A - TDS on Non-Salary',           docNumber: 'FORM-16A-2024',     category: 'Forms & Templates',taxType: 'TDS',           issueDate: '2023-12-01', lastUpdated: '2024-01-20', description: 'TDS certificate for income other than salary',                                            fileSize: '680 KB', downloads: 3876, version: '2.5' },
    { id: 22, title: 'Income Tax Assessment Notification',     docNumber: 'IT-NOT-2023-067',   category: 'Notifications',    taxType: 'Income Tax',    issueDate: '2023-11-05', lastUpdated: '2024-01-10', description: 'Updates on income tax assessment procedures',                                             fileSize: '1.5 MB', downloads: 2345, version: '1.0' },
    { id: 23, title: 'GST Refund Process Guidelines',          docNumber: 'GST-GUIDE-2023-028',category: 'Guidelines',       taxType: 'GST',           issueDate: '2023-10-25', lastUpdated: '2024-01-05', description: 'Step-by-step process for claiming GST refunds',                                           fileSize: '2.9 MB', downloads: 1987, version: '2.1' },
    { id: 24, title: 'Corporate Advance Tax Circular',         docNumber: 'CT-CIR-2023-078',   category: 'Circulars',        taxType: 'Corporate Tax', issueDate: '2023-09-30', lastUpdated: '2023-12-28', description: 'Guidelines on advance tax payment for corporates',                                       fileSize: '1.7 MB', downloads: 1543, version: '1.0' },
  ];

  const categories = ['all', 'Forms & Templates', 'Circulars', 'Notifications', 'Guidelines'];
  const years      = ['all', '2024', '2023', '2022', '2021'];
  const taxTypes   = ['all', 'GST', 'Income Tax', 'Corporate Tax', 'TDS'];

  const filteredAndSortedDocuments = useMemo(() => {
    let filtered = allDocuments;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(d =>
        d.title.toLowerCase().includes(q) ||
        d.docNumber.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q) ||
        d.category.toLowerCase().includes(q) ||
        d.taxType.toLowerCase().includes(q)
      );
    }
    if (activeTab !== 'all')        filtered = filtered.filter(d => d.category === activeTab);
    if (selectedYear !== 'all')     filtered = filtered.filter(d => d.issueDate.startsWith(selectedYear));
    if (selectedTaxType !== 'all')  filtered = filtered.filter(d => d.taxType === selectedTaxType);
    return [...filtered].sort((a, b) =>
      sortOrder === 'latest'
        ? new Date(b.lastUpdated) - new Date(a.lastUpdated)
        : new Date(a.lastUpdated) - new Date(b.lastUpdated)
    );
  }, [searchQuery, activeTab, selectedCategory, selectedYear, selectedTaxType, sortOrder]);

  const totalPages    = Math.ceil(filteredAndSortedDocuments.length / itemsPerPage);
  const startIndex    = (currentPage - 1) * itemsPerPage;
  const currentDocs   = filteredAndSortedDocuments.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => { setCurrentPage(1); }, [searchQuery, activeTab, selectedCategory, selectedYear, selectedTaxType, sortOrder]);

  const toggleBookmark = (id) => {
    const s = new Set(bookmarkedDocs);
    s.has(id) ? s.delete(id) : s.add(id);
    setBookmarkedDocs(s);
  };

  const handleTabChange = (cat) => { setActiveTab(cat); setSelectedCategory(cat); };
  const handleCatDropdown = (cat) => { setSelectedCategory(cat); setActiveTab(cat); };

  const recentDocs  = useMemo(() => [...allDocuments].sort((a,b) => new Date(b.lastUpdated)-new Date(a.lastUpdated)).slice(0,3), []);
  const popularDocs = useMemo(() => [...allDocuments].sort((a,b) => b.downloads-a.downloads).slice(0,3), []);

  const activeFilterCount = [selectedYear!=='all', selectedTaxType!=='all', selectedCategory!=='all', sortOrder!=='latest'].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-white font-serif">
      <style>{`
        /* ── Sidebar drawer (mobile) ── */
        .sidebar-drawer {
          position: fixed; top: 0; left: 0;
          width: 80%; max-width: 300px; height: 100vh;
          background: #fff; z-index: 50;
          box-shadow: 4px 0 24px rgba(0,0,0,.15);
          transform: translateX(-100%);
          transition: transform .3s ease;
          overflow-y: auto; padding: 1.25rem;
        }
        .sidebar-drawer.open { transform: translateX(0); }
        .sidebar-overlay {
          display: none; position: fixed; inset: 0;
          background: rgba(0,0,0,.4); z-index: 40;
        }
        .sidebar-overlay.open { display: block; }

        /* ── Desktop sidebar ── */
        @media (max-width: 1023px) { .sidebar-desktop { display: none !important; } }

        /* ── Hero fluid height ── */
        .hero-wrap { min-height: clamp(260px, 40vw, 500px); display: flex; align-items: center; }
        .hero-title { font-size: clamp(1.6rem, 4vw, 3rem); }
        .hero-sub   { font-size: clamp(0.9rem, 2vw, 1.125rem); }

        /* ── Tab bar horizontal scroll ── */
        .tab-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
        .tab-scroll::-webkit-scrollbar { display: none; }

        /* ── Doc card action area ── */
        @media (max-width: 639px) {
          .doc-actions { flex-direction: row; flex-wrap: wrap; }
          .doc-actions .btn-primary,
          .doc-actions .btn-outline { flex: 1; min-width: 100px; }
        }

        /* ── Meta chips wrap ── */
        .meta-chips { display: flex; flex-wrap: wrap; gap: 0.5rem 1rem; }

        /* ── Pagination wraps on small ── */
        .pagination-btns { display: flex; flex-wrap: wrap; gap: 0.375rem; justify-content: center; }
      `}</style>

      {/* ─── Hero ─── */}
      <div
        className="text-white hero-wrap"
        style={{ backgroundImage: 'url("/banner.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="hero-title font-bold mb-3">Taxation Documents</h1>
          <p className="hero-sub text-blue-100 max-w-2xl">
            Access comprehensive tax forms, circulars, notifications, and guidelines all in one place
          </p>
        </div>
      </div>

      {/* ─── Breadcrumb ─── */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3">
          <div className="flex items-center text-xs sm:text-sm text-gray-600">
            <span className="hover:text-[#135192] cursor-pointer">Home</span>
            <ChevronRight className="w-3.5 h-3.5 mx-1.5" />
            <span className="text-[#135192] font-medium">Documents</span>
          </div>
        </div>
      </div>

      {/* ─── Mobile: sidebar toggle + filter toggle ─── */}
      <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-gray-200 px-4 py-2 flex items-center gap-3 shadow-sm">
        <button
          onClick={() => setSidebarOpen(true)}
          className="flex items-center gap-1.5 text-[#135192] text-sm font-medium border border-[#135192] rounded-lg px-3 py-1.5"
        >
          <Clock className="w-4 h-4" />
          <span>Recent &amp; Popular</span>
        </button>
        <button
          onClick={() => setFiltersOpen(v => !v)}
          className="ml-auto flex items-center gap-1.5 text-gray-700 text-sm font-medium border border-gray-300 rounded-lg px-3 py-1.5"
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span>Filters</span>
          {activeFilterCount > 0 && (
            <span className="bg-[#135192] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </button>
      </div>

      {/* ─── Mobile sidebar overlay ─── */}
      <div className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`} onClick={() => setSidebarOpen(false)} />

      {/* ─── Mobile sidebar drawer ─── */}
      <div ref={sidebarRef} className={`sidebar-drawer ${sidebarOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Documents</h3>
          <button onClick={() => setSidebarOpen(false)}><X className="w-5 h-5 text-gray-500" /></button>
        </div>

        {/* Recent */}
        <div className="mb-5">
          <div className="flex items-center mb-3">
            <Clock className="w-4 h-4 text-[#135192] mr-2" />
            <h4 className="font-semibold text-gray-900 text-sm">Recent Documents</h4>
          </div>
          <div className="space-y-2.5">
            {recentDocs.map(d => (
              <div key={d.id} className="border-l-2 border-[#135192] pl-2.5 py-1 cursor-pointer hover:bg-gray-50">
                <p className="text-xs font-medium text-gray-900 line-clamp-2">{d.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{d.docNumber}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Popular */}
        <div>
          <div className="flex items-center mb-3">
            <TrendingUp className="w-4 h-4 text-[#135192] mr-2" />
            <h4 className="font-semibold text-gray-900 text-sm">Popular Downloads</h4>
          </div>
          <div className="space-y-2">
            {popularDocs.map(d => (
              <div key={d.id} className="p-2 rounded hover:bg-gray-50 cursor-pointer">
                <p className="text-xs font-medium text-gray-900 line-clamp-2">{d.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{d.downloads.toLocaleString()} downloads</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Main layout ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex gap-6 lg:gap-8">

          {/* Desktop sidebar */}
          <aside className="sidebar-desktop w-56 xl:w-64 flex-shrink-0 space-y-5">
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
              <div className="flex items-center mb-3">
                <Clock className="w-4 h-4 text-[#135192] mr-2" />
                <h3 className="font-semibold text-gray-900 text-sm">Recent Documents</h3>
              </div>
              <div className="space-y-3">
                {recentDocs.map(d => (
                  <div key={d.id} className="border-l-2 border-[#135192] pl-3 py-1 cursor-pointer hover:bg-gray-50">
                    <p className="text-xs font-medium text-gray-900 line-clamp-2">{d.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{d.docNumber}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
              <div className="flex items-center mb-3">
                <TrendingUp className="w-4 h-4 text-[#135192] mr-2" />
                <h3 className="font-semibold text-gray-900 text-sm">Popular Downloads</h3>
              </div>
              <div className="space-y-2">
                {popularDocs.map(d => (
                  <div key={d.id} className="p-2 rounded hover:bg-gray-50 cursor-pointer">
                    <p className="text-xs font-medium text-gray-900 line-clamp-2">{d.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{d.downloads.toLocaleString()} downloads</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 min-w-0">

            {/* Search + Filters */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 mb-5 sm:mb-6 shadow-sm">
              {/* Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search documents by title, number, or keyword..."
                  className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#135192] focus:border-transparent outline-none text-sm"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Filters — collapsible on mobile, always visible on md+ */}
              <div className={`${filtersOpen || true ? '' : 'hidden'} md:block`}>
                <div
                  className="md:hidden flex items-center justify-between mb-3 cursor-pointer"
                  onClick={() => setFiltersOpen(v => !v)}
                >
                  <span className="text-sm font-medium text-gray-700">Filter Options</span>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${filtersOpen ? 'rotate-180' : ''}`} />
                </div>

                <div className={`${filtersOpen ? 'block' : 'hidden'} md:block`}>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                    {[
                      { label: 'Category',  value: selectedCategory, onChange: handleCatDropdown,              opts: categories.map(c => ({ v: c, l: c === 'all' ? 'All Categories' : c })) },
                      { label: 'Year',      value: selectedYear,     onChange: v => setSelectedYear(v),        opts: years.map(y => ({ v: y, l: y === 'all' ? 'All Years' : y })) },
                      { label: 'Tax Type',  value: selectedTaxType,  onChange: v => setSelectedTaxType(v),     opts: taxTypes.map(t => ({ v: t, l: t === 'all' ? 'All Types' : t })) },
                      { label: 'Sort By',   value: sortOrder,        onChange: v => setSortOrder(v),           opts: [{ v: 'latest', l: 'Latest First' }, { v: 'oldest', l: 'Oldest First' }] },
                    ].map(({ label, value, onChange, opts }) => (
                      <div key={label}>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">{label}</label>
                        <select
                          className="w-full px-2.5 sm:px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#135192] focus:border-transparent outline-none text-xs sm:text-sm"
                          value={value}
                          onChange={e => onChange(e.target.value)}
                        >
                          {opts.map(o => <option key={o.v} value={o.v}>{o.l}</option>)}
                        </select>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Category Tabs */}
            <div className="mb-5 sm:mb-6">
              <div className="border-b border-gray-200">
                <div className="tab-scroll flex gap-0">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleTabChange(cat)}
                      className={`pb-3 sm:pb-4 px-3 sm:px-4 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors flex-shrink-0 ${
                        activeTab === cat
                          ? 'border-[#135192] text-[#135192]'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {cat === 'all' ? 'All Documents' : cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            {filteredAndSortedDocuments.length === 0 ? (
              <div className="bg-white border border-gray-200 rounded-lg p-10 sm:p-12 text-center">
                <FileText className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">No documents found</h3>
                <p className="text-sm text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <>
                {/* Count */}
                <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                  Showing <span className="font-medium text-gray-700">{startIndex + 1}–{Math.min(startIndex + itemsPerPage, filteredAndSortedDocuments.length)}</span> of <span className="font-medium text-gray-700">{filteredAndSortedDocuments.length}</span> documents
                </p>

                {/* Document Cards */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {currentDocs.map(doc => (
                    <div key={doc.id} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
                      {/* Top row: icon + title + actions */}
                      <div className="flex items-start gap-3 sm:gap-4">
                        <FileText className="w-5 h-5 text-[#135192] mt-0.5 flex-shrink-0 hidden sm:block" />

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start gap-2 mb-1">
                            <FileText className="w-4 h-4 text-[#135192] mt-0.5 flex-shrink-0 sm:hidden" />
                            <div className="min-w-0">
                              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 leading-snug">{doc.title}</h3>
                              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{doc.docNumber}</p>
                            </div>
                          </div>

                          <p className="text-xs sm:text-sm text-gray-600 mt-2 mb-3 leading-relaxed">{doc.description}</p>

                          {/* Meta chips */}
                          <div className="meta-chips text-xs sm:text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <span className="font-medium text-gray-700">Category:</span>
                              <span className="px-2 py-0.5 bg-blue-50 text-[#135192] rounded-full text-xs font-medium">{doc.category}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="font-medium text-gray-700">Tax:</span>
                              <span className="px-2 py-0.5 bg-green-50 text-green-700 rounded-full text-xs font-medium">{doc.taxType}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              <span>{new Date(doc.issueDate).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              <span>Updated {new Date(doc.lastUpdated).toLocaleDateString()}</span>
                            </div>
                            <span className="text-gray-400">{doc.fileSize}</span>
                            <span className="text-gray-400">v{doc.version}</span>
                          </div>
                        </div>
                      </div>

                      {/* Action buttons — full row on mobile, stacked col on md */}
                      <div className="doc-actions flex sm:flex-row gap-2 mt-4 sm:mt-3">
                        <button
                          onClick={() => alert(`Downloading: ${doc.title}`)}
                          className="btn-primary flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 bg-[#135192] text-white rounded-lg hover:bg-[#0d3a66] transition-colors text-xs sm:text-sm font-medium"
                        >
                          <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          Download
                        </button>
                        <button
                          onClick={() => alert(`Viewing: ${doc.title}`)}
                          className="btn-outline flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 border border-[#135192] text-[#135192] rounded-lg hover:bg-blue-50 transition-colors text-xs sm:text-sm font-medium"
                        >
                          <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          View
                        </button>
                        <div className="flex gap-2 ml-auto sm:ml-0">
                          <button
                            onClick={() => toggleBookmark(doc.id)}
                            className={`flex items-center justify-center p-2 border rounded-lg transition-colors ${bookmarkedDocs.has(doc.id) ? 'bg-yellow-50 border-yellow-400 text-yellow-600' : 'border-gray-300 text-gray-600 hover:bg-gray-50'}`}
                            title={bookmarkedDocs.has(doc.id) ? 'Remove bookmark' : 'Add bookmark'}
                          >
                            <Bookmark className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill={bookmarkedDocs.has(doc.id) ? 'currentColor' : 'none'} />
                          </button>
                          <button
                            onClick={() => alert(`Sharing: ${doc.title}`)}
                            className="flex items-center justify-center p-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
                            title="Share document"
                          >
                            <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex flex-col sm:flex-row items-center justify-between bg-white border border-gray-200 rounded-lg p-3 sm:p-4 gap-3">
                  <p className="text-xs sm:text-sm text-gray-600 order-2 sm:order-1">
                    <span className="font-medium">{startIndex + 1}–{Math.min(startIndex + itemsPerPage, filteredAndSortedDocuments.length)}</span> of <span className="font-medium">{filteredAndSortedDocuments.length}</span>
                  </p>
                  <div className="pagination-btns order-1 sm:order-2">
                    <button
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      ← Prev
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => {
                      if (n === 1 || n === totalPages || (n >= currentPage - 1 && n <= currentPage + 1)) {
                        return (
                          <button
                            key={n}
                            onClick={() => setCurrentPage(n)}
                            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${currentPage === n ? 'bg-[#135192] text-white' : 'border border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                          >
                            {n}
                          </button>
                        );
                      }
                      if (n === currentPage - 2 || n === currentPage + 2) {
                        return <span key={n} className="px-1 py-2 text-gray-400 text-xs">…</span>;
                      }
                      return null;
                    })}

                    <button
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Next →
                    </button>
                  </div>
                </div>
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default TaxationDocuments;