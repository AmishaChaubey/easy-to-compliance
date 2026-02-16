import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  Search, Download, Eye, Bookmark, Share2, Calendar,
  FileText, ChevronDown, ChevronRight, Clock, TrendingUp,
  SlidersHorizontal, X, Building2, CheckCircle2, AlertCircle
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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [shareMenuOpen, setShareMenuOpen] = useState(null);
  const sidebarRef = useRef(null);
  const shareRef = useRef(null);
  const itemsPerPage = 6;

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const handler = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setSidebarOpen(false);
      }
      if (shareRef.current && !shareRef.current.contains(e.target)) {
        setShareMenuOpen(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const allDocuments = [
    { id: 1,  title: 'GST Annual Return Filing Guidelines',    docNumber: 'GSTR-2024-001',     category: 'Guidelines',       taxType: 'GST',           issueDate: '2024-01-15', lastUpdated: '2024-02-10', description: 'Comprehensive guide for annual GST return filing process and requirements',                  fileSize: '2.4 MB', downloads: 1245, version: '2.1', visitUrl: 'https://www.gst.gov.in/' },
    { id: 2,  title: 'Income Tax Circular - TDS Deduction',    docNumber: 'IT-CIR-2024-045',   category: 'Circulars',        taxType: 'Income Tax',    issueDate: '2024-02-01', lastUpdated: '2024-02-08', description: 'Updates on TDS deduction rates and compliance requirements',                                 fileSize: '1.8 MB', downloads: 2341, version: '1.0', visitUrl: 'https://incometaxindia.gov.in/Pages/communications/index.aspx' },
    { id: 3,  title: 'Form 26AS - Annual Tax Statement',       docNumber: 'FORM-26AS-2024',    category: 'Forms & Templates',taxType: 'Income Tax',    issueDate: '2024-01-10', lastUpdated: '2024-01-10', description: 'Template for annual tax credit statement verification',                                     fileSize: '856 KB', downloads: 3452, version: '3.0', visitUrl: 'https://incometaxindia.gov.in/Pages/tax-services/online-26AS-e-filing-website.aspx' },
    { id: 4,  title: 'GST Rate Changes Notification',          docNumber: 'GST-NOT-2024-012',  category: 'Notifications',    taxType: 'GST',           issueDate: '2024-02-05', lastUpdated: '2024-02-05', description: 'Official notification regarding changes in GST rates for various commodities',             fileSize: '1.2 MB', downloads: 1876, version: '1.0', visitUrl: 'https://taxconcept.net/gst/new-gst-rates-notification-issued-for-goods-effective-from-22nd-september/' },
    { id: 5,  title: 'Corporate Tax Filing Checklist',         docNumber: 'CT-GUIDE-2024-003', category: 'Guidelines',       taxType: 'Corporate Tax', issueDate: '2024-01-20', lastUpdated: '2024-02-01', description: 'Step-by-step checklist for corporate tax filing compliance',                               fileSize: '3.1 MB', downloads: 987,  version: '1.2', visitUrl: 'https://eportal.incometax.gov.in/iec/foservices/#/login' },
    { id: 6,  title: 'ITR-4 Form for Presumptive Income',      docNumber: 'ITR-4-2024',        category: 'Forms & Templates',taxType: 'Income Tax',    issueDate: '2024-01-05', lastUpdated: '2024-01-28', description: 'Income tax return form for individuals with presumptive income',                           fileSize: '1.5 MB', downloads: 4123, version: '2.0', visitUrl: 'https://incometaxindia.gov.in/Pages/downloads/income-tax-return.aspx?c=2' },
    { id: 7,  title: 'TDS Return Filing Guidelines',           docNumber: 'TDS-GUIDE-2024-002',category: 'Guidelines',       taxType: 'TDS',           issueDate: '2023-12-15', lastUpdated: '2024-01-05', description: 'Complete guide for quarterly TDS return filing',                                           fileSize: '2.1 MB', downloads: 1532, version: '1.5', visitUrl: 'https://incometaxindia.gov.in/Pages/tax-services/file-tds-return.aspx?utm_source=chatgpt.com' },
    { id: 8,  title: 'GST Composition Scheme Circular',        docNumber: 'GST-CIR-2024-008',  category: 'Circulars',        taxType: 'GST',           issueDate: '2024-01-25', lastUpdated: '2024-01-25', description: 'Updated guidelines for GST composition scheme eligibility',                               fileSize: '1.4 MB', downloads: 2145, version: '1.0', visitUrl: 'https://gstcouncil.gov.in/sites/default/files/2024-06/circular-no-77.pdf?utm_source' },
    { id: 9,  title: 'ITR-1 Sahaj Form',                       docNumber: 'ITR-1-2024',        category: 'Forms & Templates',taxType: 'Income Tax',    issueDate: '2023-11-20', lastUpdated: '2024-01-15', description: 'Simplified return form for individuals with salary income',                                fileSize: '1.1 MB', downloads: 5234, version: '2.5', visitUrl: 'https://incometaxindia.gov.in/Forms/Income-Tax%20Rules/2024/ITR1_english.pdf?utm_source' },
    { id: 10, title: 'Corporate Tax Rate Notification',        docNumber: 'CT-NOT-2023-056',   category: 'Notifications',    taxType: 'Corporate Tax', issueDate: '2023-10-10', lastUpdated: '2023-12-20', description: 'Official notification on revised corporate tax rates',                                     fileSize: '980 KB', downloads: 1654, version: '1.0', visitUrl: 'https://incometaxindia.gov.in/Documents/Left%20Menu/TAX%20RATES-domestic.htm?utm_source' },
    { id: 11, title: 'TDS on Salary Circular',                 docNumber: 'TDS-CIR-2023-034',  category: 'Circulars',        taxType: 'TDS',           issueDate: '2023-09-15', lastUpdated: '2023-11-10', description: 'Clarifications on TDS deduction from salary payments',                                    fileSize: '1.6 MB', downloads: 2876, version: '1.0', visitUrl: 'https://incometaxindia.gov.in/communications/circular/circular-no-03-2025.pdf?utm_source' },
    { id: 12, title: 'GST Invoice Requirements',               docNumber: 'GST-NOT-2023-089',  category: 'Notifications',    taxType: 'GST',           issueDate: '2023-08-20', lastUpdated: '2023-10-05', description: 'Mandatory requirements for GST compliant invoices',                                       fileSize: '1.3 MB', downloads: 3123, version: '2.0', visitUrl: 'https://cbic-gst.gov.in/gst-invoice-rules.html?utm_source' },
    { id: 13, title: 'Form 16 - TDS Certificate',              docNumber: 'FORM-16-2024',      category: 'Forms & Templates',taxType: 'TDS',           issueDate: '2024-01-01', lastUpdated: '2024-01-01', description: 'TDS certificate format for salary income',                                                fileSize: '750 KB', downloads: 4567, version: '3.0', visitUrl: 'https://incometaxindia.gov.in/Pages/tax-services/form-16A-download-deductor.aspx?utm_source' },
    { id: 14, title: 'Income Tax Deduction Guidelines',        docNumber: 'IT-GUIDE-2023-021', category: 'Guidelines',       taxType: 'Income Tax',    issueDate: '2023-07-10', lastUpdated: '2023-12-15', description: 'Comprehensive guide on allowable deductions under Income Tax',                             fileSize: '2.8 MB', downloads: 3234, version: '1.8', visitUrl: 'https://incometaxindia.gov.in/charts%20%20tables/deductions.htm?utm_source' },
    { id: 15, title: 'Corporate Tax Audit Requirements',       docNumber: 'CT-CIR-2023-045',   category: 'Circulars',        taxType: 'Corporate Tax', issueDate: '2023-06-15', lastUpdated: '2023-09-20', description: 'Mandatory audit requirements for corporate entities',                                     fileSize: '2.2 MB', downloads: 1876, version: '1.0', visitUrl: 'https://fusiontaxes.com/thought-leadership/blog/corporate-tax-audits-a-strategic-guide-for-businesses/' },
    { id: 16, title: 'GST Input Tax Credit Rules',             docNumber: 'GST-GUIDE-2023-015',category: 'Guidelines',       taxType: 'GST',           issueDate: '2023-05-20', lastUpdated: '2023-11-30', description: 'Detailed rules for claiming input tax credit under GST',                                  fileSize: '3.4 MB', downloads: 2654, version: '2.3', visitUrl: 'https://cbic-gst.gov.in/input-tax-credit-rules.html' },
    { id: 17, title: 'ITR-2 Form for Capital Gains',           docNumber: 'ITR-2-2024',        category: 'Forms & Templates',taxType: 'Income Tax',    issueDate: '2024-02-01', lastUpdated: '2024-02-01', description: 'Return form for individuals with capital gains income',                                   fileSize: '1.7 MB', downloads: 2987, version: '2.0', visitUrl: 'https://cleartax.in/s/how-to-file-itr-2-form-for-income-from-capital-gains' },
    { id: 18, title: 'TDS Payment Deadline Extension',         docNumber: 'TDS-NOT-2024-005',  category: 'Notifications',    taxType: 'TDS',           issueDate: '2024-01-30', lastUpdated: '2024-01-30', description: 'Official notification on extended TDS payment deadlines',                                 fileSize: '890 KB', downloads: 3456, version: '1.0', visitUrl: 'https://cleartax.in/s/tds-payment-due-dates-and-penalties' },
    { id: 19, title: 'Corporate Tax Exemption Circular',       docNumber: 'CT-CIR-2024-012',   category: 'Circulars',        taxType: 'Corporate Tax', issueDate: '2024-02-05', lastUpdated: '2024-02-05', description: 'Guidelines on corporate tax exemptions for startups',                                    fileSize: '1.9 MB', downloads: 1234, version: '1.0', visitUrl: 'https://incometaxindia.gov.in/Pages/communications/circulars.aspx' },
    { id: 20, title: 'GST E-Way Bill Guidelines',              docNumber: 'GST-GUIDE-2024-006',category: 'Guidelines',       taxType: 'GST',           issueDate: '2024-01-18', lastUpdated: '2024-02-02', description: 'Complete guide for generating and managing GST e-way bills',                              fileSize: '2.6 MB', downloads: 2123, version: '1.3', visitUrl: 'https://cleartax.in/s/eway-bill-gst-rules-compliance' },
    { id: 21, title: 'Form 16A - TDS on Non-Salary',           docNumber: 'FORM-16A-2024',     category: 'Forms & Templates',taxType: 'TDS',           issueDate: '2023-12-01', lastUpdated: '2024-01-20', description: 'TDS certificate for income other than salary',                                            fileSize: '680 KB', downloads: 3876, version: '2.5', visitUrl: 'https://disytax.com/form-16a-tds-certificate-non-salary/' },
    { id: 22, title: 'Income Tax Assessment Notification',     docNumber: 'IT-NOT-2023-067',   category: 'Notifications',    taxType: 'Income Tax',    issueDate: '2023-11-05', lastUpdated: '2024-01-10', description: 'Updates on income tax assessment procedures',                                             fileSize: '1.5 MB', downloads: 2345, version: '1.0', visitUrl: 'https://incometaxindia.gov.in/Pages/communications/index.aspx' },
    { id: 23, title: 'GST Refund Process Guidelines',          docNumber: 'GST-GUIDE-2023-028',category: 'Guidelines',       taxType: 'GST',           issueDate: '2023-10-25', lastUpdated: '2024-01-05', description: 'Step-by-step process for claiming GST refunds',                                           fileSize: '2.9 MB', downloads: 1987, version: '2.1', visitUrl: 'https://cleartax.in/s/refund-process-under-gst' },
    { id: 24, title: 'Corporate Advance Tax Circular',         docNumber: 'CT-CIR-2023-078',   category: 'Circulars',        taxType: 'Corporate Tax', issueDate: '2023-09-30', lastUpdated: '2023-12-28', description: 'Guidelines on advance tax payment for corporates',                                       fileSize: '1.7 MB', downloads: 1543, version: '1.0', visitUrl: 'https://incometaxindia.gov.in/Pages/communications/circulars.aspx' },
    
    // MCA Forms
    { id: 25, title: 'AOC-4: Filing of Financial Statements',         docNumber: 'MCA-AOC-4-2024',    category: 'Forms & Templates', taxType: 'MCA Forms',     issueDate: '2024-01-01', lastUpdated: '2024-02-15', description: 'Balance Sheet, P&L, Auditor Report filing. Due within 30 days of AGM',                   fileSize: '1.2 MB', downloads: 2890, version: '2.0', mcaType: 'Annual', priority: 'high', visitUrl: 'https://cleartax.in/s/aoc-4-form' },
    { id: 26, title: 'MGT-7: Annual Return Filing',                   docNumber: 'MCA-MGT-7-2024',    category: 'Forms & Templates', taxType: 'MCA Forms',     issueDate: '2024-01-01', lastUpdated: '2024-02-15', description: 'Annual return for most companies. Due within 60 days of AGM',                              fileSize: '980 KB', downloads: 3120, version: '2.1', mcaType: 'Annual', priority: 'high', visitUrl: 'https://cagkcco.com/form-mgt-7-annual-return-guide/' },
    { id: 27, title: 'MGT-7A: Annual Return for OPC & Small Co.',     docNumber: 'MCA-MGT-7A-2024',   category: 'Forms & Templates', taxType: 'MCA Forms',     issueDate: '2024-01-01', lastUpdated: '2024-02-15', description: 'Simplified annual return for OPC and Small Companies. Due within 60 days of AGM',          fileSize: '850 KB', downloads: 1890, version: '2.0', mcaType: 'Annual', priority: 'high', visitUrl: 'https://legal60.com/form-mgt-7a-simplified-annual-return-filing-for-opcs-and-small-companies/' },
    { id: 28, title: 'DIR-12: Director Appointment/Resignation',      docNumber: 'MCA-DIR-12-2024',   category: 'Forms & Templates', taxType: 'MCA Forms',     issueDate: '2024-01-01', lastUpdated: '2024-02-10', description: 'Form for appointment, resignation or change in Director details',                         fileSize: '650 KB', downloads: 2340, version: '1.5', mcaType: 'Event-Based', priority: 'medium', visitUrl: 'https://taxguru.in/company-law/form-dir-12-explained-director-kmp-company.html' },
    { id: 29, title: 'ADT-1: Appointment of Auditor',                 docNumber: 'MCA-ADT-1-2024',    category: 'Forms & Templates', taxType: 'MCA Forms',     issueDate: '2024-01-01', lastUpdated: '2024-02-10', description: 'Form for filing appointment of statutory auditor',                                        fileSize: '580 KB', downloads: 1670, version: '1.3', mcaType: 'Event-Based', priority: 'medium', visitUrl: 'https://taxguru.in/company-law/adt-1-filing-mandatory-first-auditor.html' },
    { id: 30, title: 'INC-22: Change in Registered Office',           docNumber: 'MCA-INC-22-2024',   category: 'Forms & Templates', taxType: 'MCA Forms',     issueDate: '2024-01-01', lastUpdated: '2024-02-10', description: 'Notice of change in situation of registered office',                                     fileSize: '720 KB', downloads: 1450, version: '1.4', mcaType: 'Event-Based', priority: 'medium', visitUrl: 'https://cleartax.in/s/e-form-inc-22' },
    { id: 31, title: 'SH-7: Change in Authorized Share Capital',      docNumber: 'MCA-SH-7-2024',     category: 'Forms & Templates', taxType: 'MCA Forms',     issueDate: '2024-01-01', lastUpdated: '2024-02-10', description: 'Form for filing alteration in authorized share capital',                                 fileSize: '610 KB', downloads: 980,  version: '1.2', mcaType: 'Event-Based', priority: 'medium', visitUrl: 'https://www.registerkaro.in/post/form-sh-7-guide' },
    { id: 32, title: 'PAS-3: Return of Allotment',                    docNumber: 'MCA-PAS-3-2024',    category: 'Forms & Templates', taxType: 'MCA Forms',     issueDate: '2024-01-01', lastUpdated: '2024-02-10', description: 'Return for allotment of securities/shares',                                              fileSize: '690 KB', downloads: 1230, version: '1.3', mcaType: 'Event-Based', priority: 'medium', visitUrl: 'https://advocategandhi.com/form-pas-3-a-complete-legal-guide-for-allotment-of-shares-under-the-companies-act-2013/' },
    { id: 33, title: 'MGT-14: Filing of Board Resolutions',           docNumber: 'MCA-MGT-14-2024',   category: 'Forms & Templates', taxType: 'MCA Forms',     issueDate: '2024-01-01', lastUpdated: '2024-02-10', description: 'Filing of resolutions and agreements to Registrar',                                       fileSize: '760 KB', downloads: 2120, version: '1.6', mcaType: 'Event-Based', priority: 'medium', visitUrl: 'https://taxguru.in/company-law/list-resolution-mgt-14-requires-filed.html' },
    { id: 34, title: 'DIR-3: Application for DIN',                    docNumber: 'MCA-DIR-3-2024',    category: 'Forms & Templates', taxType: 'MCA Forms',     issueDate: '2024-01-01', lastUpdated: '2024-02-10', description: 'Application for allotment of Director Identification Number',                            fileSize: '590 KB', downloads: 1780, version: '1.4', mcaType: 'Director', priority: 'medium', visitUrl: 'https://www.compliancecalendar.in/resources/1714633469Instruction-Kit_Form-No-DIR-3S.pdf' },
    { id: 35, title: 'DIR-3 KYC: Director KYC Annual Filing',         docNumber: 'MCA-DIR-3KYC-2024', category: 'Forms & Templates', taxType: 'MCA Forms',     issueDate: '2024-01-01', lastUpdated: '2024-02-10', description: 'Annual KYC submission for Directors. Due by 30th September every year',                   fileSize: '520 KB', downloads: 2890, version: '2.0', mcaType: 'Director', priority: 'high', visitUrl: 'https://taxguru.in/company-law/dir-3-kyc-amended-rules-fy-2026-27-era-director-compliance.html' },
    { id: 36, title: 'LLP Form 8: Statement of Account & Solvency',   docNumber: 'MCA-LLP-8-2024',    category: 'Forms & Templates', taxType: 'MCA Forms',     issueDate: '2024-01-01', lastUpdated: '2024-02-10', description: 'Annual statement of accounts and solvency for LLPs',                                     fileSize: '780 KB', downloads: 890,  version: '1.5', mcaType: 'LLP', priority: 'medium', visitUrl: 'https://learn.cspratik.com/docs/mca-forms/llp-forms/form-8-llp/' },
    { id: 37, title: 'LLP Form 11: Annual Return of LLP',             docNumber: 'MCA-LLP-11-2024',   category: 'Forms & Templates', taxType: 'MCA Forms',     issueDate: '2024-01-01', lastUpdated: '2024-02-10', description: 'Annual return filing for Limited Liability Partnerships',                                fileSize: '820 KB', downloads: 1020, version: '1.6', mcaType: 'LLP', priority: 'medium', visitUrl: 'https://cleartax.in/s/form-11-llp-annual-returns' },
    { id: 38, title: 'INC-20A: Commencement of Business',             docNumber: 'MCA-INC-20A-2024',  category: 'Forms & Templates', taxType: 'MCA Forms',     issueDate: '2024-01-01', lastUpdated: '2024-02-10', description: 'Declaration for commencement of business. File within 180 days of incorporation',       fileSize: '640 KB', downloads: 1340, version: '1.3', mcaType: 'Other', priority: 'high', visitUrl: 'https://taxguru.in/company-law/complete-guide-form-inc-20a-declaration-commencement-business.html' },
    { id: 39, title: 'CHG-1: Registration of Charge',                 docNumber: 'MCA-CHG-1-2024',    category: 'Forms & Templates', taxType: 'MCA Forms',     issueDate: '2024-01-01', lastUpdated: '2024-02-10', description: 'Form for creation/modification of charge. File within 30 days of charge creation',         fileSize: '710 KB', downloads: 1560, version: '1.4', mcaType: 'Other', priority: 'medium', visitUrl: 'https://taxguru.in/company-law/time-limit-fees-filing-chg-1-roc.html' },
    { id: 40, title: 'CHG-4: Satisfaction of Charge',                 docNumber: 'MCA-CHG-4-2024',    category: 'Forms & Templates', taxType: 'MCA Forms',     issueDate: '2024-01-01', lastUpdated: '2024-02-10', description: 'Notice of satisfaction/payment of charge',                                              fileSize: '580 KB', downloads: 980,  version: '1.2', mcaType: 'Other', priority: 'medium', visitUrl: 'https://www.fiscalflow.in/post/form-chg-4-a-step-by-step-guide-to-satisfying-a-charge' },
  ];

  const categories = ['all', 'Forms & Templates', 'Circulars', 'Notifications', 'Guidelines'];
  const years      = ['all', '2024', '2023', '2022', '2021'];
  const taxTypes   = ['all', 'GST', 'Income Tax', 'Corporate Tax', 'TDS', 'MCA Forms'];

  const filteredAndSortedDocuments = useMemo(() => {
    let filtered = allDocuments;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(d =>
        d.title.toLowerCase().includes(q) ||
        d.docNumber.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q) ||
        d.category.toLowerCase().includes(q) ||
        d.taxType.toLowerCase().includes(q) ||
        (d.mcaType && d.mcaType.toLowerCase().includes(q))
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

  const handleShare = (doc, platform) => {
    const url = doc.visitUrl || window.location.href;
    const text = `${doc.title} - ${doc.description}`;
    
    let shareUrl = '';
    
    switch(platform) {
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(text + '\n' + url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
     
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
    setShareMenuOpen(null);
  };

  const recentDocs  = useMemo(() => [...allDocuments].sort((a,b) => new Date(b.lastUpdated)-new Date(a.lastUpdated)).slice(0,3), []);
  const popularDocs = useMemo(() => [...allDocuments].sort((a,b) => b.downloads-a.downloads).slice(0,3), []);

  const activeFilterCount = [selectedYear!=='all', selectedTaxType!=='all', selectedCategory!=='all', sortOrder!=='latest'].filter(Boolean).length;

  const getMcaIcon = (doc) => {
    if (doc.taxType !== 'MCA Forms') return null;
    if (doc.priority === 'high') return <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />;
    return <AlertCircle className="w-3.5 h-3.5 text-blue-600" />;
  };

  const getMcaTypeColor = (mcaType) => {
    const colors = {
      'Annual': 'bg-red-50 text-red-700',
      'Event-Based': 'bg-blue-50 text-blue-700',
      'Director': 'bg-purple-50 text-purple-700',
      'LLP': 'bg-orange-50 text-orange-700',
      'Other': 'bg-gray-50 text-gray-700'
    };
    return colors[mcaType] || 'bg-gray-50 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-white font-serif">
      <style>{`
        /* ── Sidebar drawer (mobile) ── */
        .sidebar-drawer {
          position: fixed; top: 0; left: 0;
          width: 85%; max-width: 320px; height: 100vh;
          background: #fff; z-index: 50;
          box-shadow: 4px 0 24px rgba(0,0,0,.15);
          transform: translateX(-100%);
          transition: transform .3s ease;
          overflow-y: auto; padding: 1rem;
        }
        @media (min-width: 640px) {
          .sidebar-drawer { padding: 1.25rem; width: 75%; max-width: 340px; }
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
        .hero-wrap { 
          min-height: clamp(200px, 75vh, 500px); 
          display: flex; 
          align-items: center;
          background-size: cover !important;
          background-position: center !important;
        }
        .hero-title { 
          font-size: clamp(1.5rem, 5vw, 3rem); 
          line-height: 1.2;
        }
        .hero-sub { 
          font-size: clamp(0.875rem, 2.5vw, 1.125rem); 
          line-height: 1.5;
        }

        /* ── Tab bar horizontal scroll ── */
        .tab-scroll { 
          overflow-x: auto; 
          -webkit-overflow-scrolling: touch; 
          scrollbar-width: none;
          scroll-behavior: smooth;
        }
        .tab-scroll::-webkit-scrollbar { display: none; }

        /* ── Meta chips wrap ── */
        .meta-chips { 
          display: flex; 
          flex-wrap: wrap; 
          gap: 0.375rem 0.75rem;
          font-size: 0.75rem;
        }
        @media (min-width: 640px) {
          .meta-chips { gap: 0.5rem 1rem; font-size: 0.875rem; }
        }

        /* ── Pagination wraps on small ── */
        .pagination-btns { 
          display: flex; 
          flex-wrap: wrap; 
          gap: 0.25rem; 
          justify-content: center;
        }
        @media (min-width: 640px) {
          .pagination-btns { gap: 0.375rem; }
        }
        
        /* ── Share menu ── */
        .share-menu {
          position: absolute;
          bottom: 100%;
          right: 0;
          margin-bottom: 0.5rem;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          z-index: 10;
          min-width: 150px;
        }
        @media (min-width: 640px) {
          .share-menu { min-width: 160px; }
        }
        .share-menu button {
          width: 100%;
          padding: 0.5rem 0.875rem;
          text-align: left;
          font-size: 0.8125rem;
          color: #374151;
          transition: background-color 0.15s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        @media (min-width: 640px) {
          .share-menu button { padding: 0.625rem 1rem; font-size: 0.875rem; }
        }
        .share-menu button:hover {
          background-color: #f3f4f6;
        }
        .share-menu button:first-child {
          border-top-left-radius: 0.5rem;
          border-top-right-radius: 0.5rem;
        }
        .share-menu button:last-child {
          border-bottom-left-radius: 0.5rem;
          border-bottom-right-radius: 0.5rem;
        }

        /* ── Additional responsive utilities ── */
        .doc-card-actions {
          margin-left: 0;
        }
        @media (min-width: 640px) {
          .doc-card-actions { margin-left: 2.25rem; }
        }
        @media (min-width: 768px) {
          .doc-card-actions { margin-left: 2.5rem; }
        }

        /* ── Improve touch targets on mobile ── */
        @media (max-width: 640px) {
          button, a {
            min-height: 44px;
          }
        }
      `}</style>

      {/* ─── Hero ─── */}
      <div
        className="text-white hero-wrap"
        style={{ backgroundImage: 'url("/banner-img/docu.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <h1 className="hero-title font-bold mb-2 sm:mb-3">Taxation Documents</h1>
          <p className="hero-sub text-blue-100 max-w-2xl">
            Access comprehensive tax forms, circulars, notifications, and guidelines all in one place
          </p>
        </div>
      </div>

      {/* ─── Breadcrumb ─── */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3">
          <div className="flex items-center text-xs sm:text-sm text-gray-600">
            <span className="hover:text-[#135192] cursor-pointer">Home</span>
            <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 mx-1 sm:mx-1.5" />
            <span className="text-[#135192] font-medium">Documents</span>
          </div>
        </div>
      </div>

      {/* ─── Mobile: sidebar toggle + filter toggle ─── */}
      <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-gray-200 px-3 sm:px-4 py-2 sm:py-2.5 flex items-center gap-2 sm:gap-3 shadow-sm">
        <button
          onClick={() => setSidebarOpen(true)}
          className="flex items-center gap-1 sm:gap-1.5 text-[#135192] text-xs sm:text-sm font-medium border border-[#135192] rounded-lg px-2.5 sm:px-3 py-1.5"
        >
          <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span className="hidden xs:inline">Recent &amp; Popular</span>
          <span className="xs:hidden">Docs</span>
        </button>
        <button
          onClick={() => setFiltersOpen(v => !v)}
          className="ml-auto flex items-center gap-1 sm:gap-1.5 text-gray-700 text-xs sm:text-sm font-medium border border-gray-300 rounded-lg px-2.5 sm:px-3 py-1.5"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
          <h3 className="font-semibold text-gray-900 text-base sm:text-lg">Documents</h3>
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
              <div key={d.id} className="border-l-2 border-[#135192] pl-2.5 py-1.5 cursor-pointer hover:bg-gray-50 rounded-r">
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
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        <div className="flex gap-4 sm:gap-6 lg:gap-8">

          {/* Desktop sidebar */}
          <aside className="sidebar-desktop w-56 xl:w-64 flex-shrink-0 space-y-5">
            <div className="bg-white border border-gray-200 rounded-lg p-4 xl:p-5 shadow-sm">
              <div className="flex items-center mb-3">
                <Clock className="w-4 h-4 text-[#135192] mr-2" />
                <h3 className="font-semibold text-gray-900 text-sm">Recent Documents</h3>
              </div>
              <div className="space-y-3">
                {recentDocs.map(d => (
                  <div key={d.id} className="border-l-2 border-[#135192] pl-3 py-1 cursor-pointer hover:bg-gray-50 rounded-r transition-colors">
                    <p className="text-xs font-medium text-gray-900 line-clamp-2">{d.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{d.docNumber}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4 xl:p-5 shadow-sm">
              <div className="flex items-center mb-3">
                <TrendingUp className="w-4 h-4 text-[#135192] mr-2" />
                <h3 className="font-semibold text-gray-900 text-sm">Popular Downloads</h3>
              </div>
              <div className="space-y-2">
                {popularDocs.map(d => (
                  <div key={d.id} className="p-2 rounded hover:bg-gray-50 cursor-pointer transition-colors">
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
            <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 md:p-6 mb-4 sm:mb-5 md:mb-6 shadow-sm">
              {/* Search */}
              <div className="relative mb-3 sm:mb-4">
                <Search className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search documents..."
                  className="w-full pl-8 sm:pl-9 md:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#135192] focus:border-transparent outline-none text-sm"
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
                  <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4">
                    {[
                      { label: 'Category',  value: selectedCategory, onChange: handleCatDropdown,              opts: categories.map(c => ({ v: c, l: c === 'all' ? 'All Categories' : c })) },
                      { label: 'Year',      value: selectedYear,     onChange: v => setSelectedYear(v),        opts: years.map(y => ({ v: y, l: y === 'all' ? 'All Years' : y })) },
                      { label: 'Tax Type',  value: selectedTaxType,  onChange: v => setSelectedTaxType(v),     opts: taxTypes.map(t => ({ v: t, l: t === 'all' ? 'All Types' : t })) },
                      { label: 'Sort By',   value: sortOrder,        onChange: v => setSortOrder(v),           opts: [{ v: 'latest', l: 'Latest First' }, { v: 'oldest', l: 'Oldest First' }] },
                    ].map(({ label, value, onChange, opts }) => (
                      <div key={label}>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">{label}</label>
                        <select
                          className="w-full px-2 sm:px-2.5 md:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#135192] focus:border-transparent outline-none text-xs sm:text-sm"
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
            <div className="mb-4 sm:mb-5 md:mb-6">
              <div className="border-b border-gray-200">
                <div className="tab-scroll flex gap-0">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleTabChange(cat)}
                      className={`pb-2.5 sm:pb-3 md:pb-4 px-2.5 sm:px-3 md:px-4 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors flex-shrink-0 ${
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
              <div className="bg-white border border-gray-200 rounded-lg p-8 sm:p-10 md:p-12 text-center">
                <FileText className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-gray-300 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">No documents found</h3>
                <p className="text-sm text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <>
                {/* Count */}
                <p className="text-xs sm:text-sm text-gray-500 mb-2.5 sm:mb-3 md:mb-4">
                  Showing <span className="font-medium text-gray-700">{startIndex + 1}–{Math.min(startIndex + itemsPerPage, filteredAndSortedDocuments.length)}</span> of <span className="font-medium text-gray-700">{filteredAndSortedDocuments.length}</span> documents
                </p>

                {/* Document Cards */}
                <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6 md:mb-8">
                  {currentDocs.map(doc => (
                    <div key={doc.id} className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 md:p-6 hover:shadow-lg transition-shadow">
                      {/* Top row: icon + title + actions */}
                      <div className="flex items-start gap-2.5 sm:gap-3 md:gap-4">
                        {doc.taxType === 'MCA Forms' ? (
                          <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#135192] mt-0.5 flex-shrink-0 hidden sm:block" />
                        ) : (
                          <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#135192] mt-0.5 flex-shrink-0 hidden sm:block" />
                        )}

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start gap-2 mb-1">
                            {doc.taxType === 'MCA Forms' ? (
                              <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#135192] mt-0.5 flex-shrink-0 sm:hidden" />
                            ) : (
                              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#135192] mt-0.5 flex-shrink-0 sm:hidden" />
                            )}
                            <div className="min-w-0 flex-1">
                              <div className="flex items-start gap-1.5 sm:gap-2">
                                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 leading-snug flex-1">{doc.title}</h3>
                                {getMcaIcon(doc)}
                              </div>
                              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{doc.docNumber}</p>
                            </div>
                          </div>

                          <p className="text-xs sm:text-sm text-gray-600 mt-1.5 sm:mt-2 mb-2.5 sm:mb-3 leading-relaxed">{doc.description}</p>

                          {/* Meta chips */}
                          <div className="meta-chips text-gray-500">
                            <div className="flex items-center gap-1">
                              <span className="font-medium text-gray-700">Category:</span>
                              <span className="px-1.5 sm:px-2 py-0.5 bg-blue-50 text-[#135192] rounded-full text-xs font-medium">{doc.category}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="font-medium text-gray-700">Type:</span>
                              <span className="px-1.5 sm:px-2 py-0.5 bg-green-50 text-green-700 rounded-full text-xs font-medium">{doc.taxType}</span>
                            </div>
                            {doc.mcaType && (
                              <div className="flex items-center gap-1">
                                <span className="font-medium text-gray-700">MCA:</span>
                                <span className={`px-1.5 sm:px-2 py-0.5 rounded-full text-xs font-medium ${getMcaTypeColor(doc.mcaType)}`}>{doc.mcaType}</span>
                              </div>
                            )}
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                              <span className="hidden sm:inline">{new Date(doc.issueDate).toLocaleDateString()}</span>
                              <span className="sm:hidden">{new Date(doc.issueDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                              <span className="hidden sm:inline">Updated {new Date(doc.lastUpdated).toLocaleDateString()}</span>
                              <span className="sm:hidden">{new Date(doc.lastUpdated).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                            </div>
                            <span className="text-gray-400">{doc.fileSize}</span>
                            <span className="text-gray-400 hidden xs:inline">v{doc.version}</span>
                          </div>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-wrap items-center gap-2 mt-3 sm:mt-4 doc-card-actions">
                        <a 
                          href={doc.visitUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-2 border border-[#135192] bg-[#135192] text-white rounded-lg hover:bg-[#0d3a6b] transition-colors text-xs sm:text-sm font-medium"
                        >
                          <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          <span>Visit</span>
                        </a>
                        
                        <div className="flex gap-2 ml-auto">
                          <button
                            onClick={() => toggleBookmark(doc.id)}
                            className={`flex items-center justify-center p-1.5 sm:p-2 border rounded-lg transition-colors ${bookmarkedDocs.has(doc.id) ? 'bg-yellow-50 border-yellow-400 text-yellow-600' : 'border-gray-300 text-gray-600 hover:bg-gray-50'}`}
                            title={bookmarkedDocs.has(doc.id) ? 'Remove bookmark' : 'Add bookmark'}
                          >
                            <Bookmark className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill={bookmarkedDocs.has(doc.id) ? 'currentColor' : 'none'} />
                          </button>
                          
                          <div className="relative" ref={shareMenuOpen === doc.id ? shareRef : null}>
                            <button
                              onClick={() => setShareMenuOpen(shareMenuOpen === doc.id ? null : doc.id)}
                              className="flex items-center justify-center p-1.5 sm:p-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
                              title="Share document"
                            >
                              <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </button>
                            
                            {shareMenuOpen === doc.id && (
                              <div className="share-menu">
                                <button onClick={() => handleShare(doc, 'whatsapp')}>
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                  </svg>
                                  WhatsApp
                                </button>
                                <button onClick={() => handleShare(doc, 'facebook')}>
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                  </svg>
                                  Facebook
                                </button>
                                <button onClick={() => handleShare(doc, 'twitter')}>
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                  </svg>
                                  Twitter
                                </button>
                              </div>
                            )}
                          </div>
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
                      className="px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      ← <span className="hidden xs:inline">Prev</span>
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => {
                      if (n === 1 || n === totalPages || (n >= currentPage - 1 && n <= currentPage + 1)) {
                        return (
                          <button
                            key={n}
                            onClick={() => setCurrentPage(n)}
                            className={`px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${currentPage === n ? 'bg-[#135192] text-white' : 'border border-gray-300 text-gray-700 hover:bg-gray-50'}`}
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
                      className="px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <span className="hidden xs:inline">Next</span> →
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