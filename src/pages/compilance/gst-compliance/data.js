import { Calendar, FileText, AlertCircle, CheckCircle, ChevronDown, List, BookOpen } from 'lucide-react';

const taxComplianceData = {
  heroData: {
    title: 'GST Compliance Services',
    description:
      'Complete GST compliance solutions for businesses. Ensure accurate return filing, timely payments, and avoid penalties with expert support.',
    backgroundImage: '/banner-img/labor.png',
    primaryButtonText: 'Get GST Support',
    secondaryButtonText: 'Talk to Expert'
  },

  bannerData: {
    title: 'Important:',
    message:
      'Delay in GST return filing may result in late fees, interest, and suspension of GST registration. File on time to avoid penalties and business disruption!'
  },

  tableOfContents: [
    { id: 'hero', label: 'Overview', icon: BookOpen },
    { id: 'services', label: 'GST Services Covered', icon: CheckCircle },
    { id: 'due-dates', label: 'GST Due Dates', icon: Calendar },
    { id: 'documents', label: 'Documents Required', icon: FileText },
    { id: 'penalties', label: 'Penalties & Late Fees', icon: AlertCircle },
    { id: 'process', label: 'Filing Process', icon: List },
    { id: 'faq', label: 'FAQs', icon: ChevronDown }
  ],

  services: [
    {
      title: 'GST Registration',
      description: 'New GST registration for businesses and professionals',
      features: ['Application filing', 'Document verification', 'GSTIN generation']
    },
    {
      title: 'GST Return Filing',
      description: 'Monthly, quarterly, and annual GST return filing services',
      features: ['GSTR-1 filing', 'GSTR-3B filing', 'Annual return (GSTR-9)']
    },
    {
      title: 'GST Reconciliation',
      description: 'Reconciliation of purchase and sales data with GST portal',
      features: ['Input tax credit matching', 'Mismatch correction', 'Vendor reconciliation']
    },
    {
      title: 'GST Advisory & Notices',
      description: 'Professional support for GST notices and compliance issues',
      features: ['Notice reply drafting', 'Department representation', 'Compliance review']
    }
  ],

  dueDates: [
    { period: 'Monthly GSTR-1', date: '11th of Next Month', type: 'Sales Return', status: 'upcoming' },
    { period: 'Monthly GSTR-3B', date: '20th of Next Month', type: 'Summary Return', status: 'critical' },
    { period: 'Quarterly GSTR-1 (QRMP)', date: '13th of Month After Quarter', type: 'Quarterly Return', status: 'upcoming' },
    { period: 'Annual Return (GSTR-9)', date: '31st December', type: 'Annual Return', status: 'important' }
  ],

  documents: [
    { category: 'Business Details', items: ['GSTIN', 'Business PAN', 'Registration Certificate'] },
    { category: 'Sales Documents', items: ['Sales Invoices', 'Debit/Credit Notes', 'Export Invoices'] },
    { category: 'Purchase Documents', items: ['Purchase Invoices', 'Vendor GST Details', 'Import Documents'] },
    { category: 'Bank & Tax Details', items: ['Bank Statements', 'Tax Payment Challans', 'Previous GST Returns'] }
  ],

  penalties: [
    {
      violation: 'Late filing of GST returns',
      penalty: '₹50 per day (₹20 for nil return)',
      additionalInfo: 'Maximum up to ₹10,000 per return'
    },
    {
      violation: 'Late tax payment',
      penalty: '18% interest per annum',
      additionalInfo: 'On outstanding GST amount'
    },
    {
      violation: 'Non-filing of returns',
      penalty: 'GST registration suspension',
      additionalInfo: 'Plus additional late fees and penalties'
    },
    {
      violation: 'Incorrect GST reporting',
      penalty: 'Up to 100% of tax amount',
      additionalInfo: 'Depending on nature of default'
    }
  ],

  filingSteps: [
    { step: 1, title: 'Data Collection', description: 'Collect sales, purchase, and expense data for the return period' },
    { step: 2, title: 'Invoice Reconciliation', description: 'Match invoices with GST portal and verify Input Tax Credit (ITC)' },
    { step: 3, title: 'Return Preparation', description: 'Prepare GSTR-1 and GSTR-3B with accurate tax computation' },
    { step: 4, title: 'Client Review', description: 'Share working for client approval before filing' },
    { step: 5, title: 'Online Filing', description: 'File GST returns on the GST portal within due date' },
    { step: 6, title: 'Acknowledgement & Record Keeping', description: 'Provide ARN and maintain proper compliance records' }
  ],

  faqs: [
    {
      question: 'Who is required to register under GST?',
      answer:
        'Businesses with turnover exceeding the prescribed threshold limit (generally ₹40 lakhs for goods and ₹20 lakhs for services) must register under GST.'
    },
    {
      question: 'What is the due date for GSTR-3B?',
      answer: 'For monthly filers, GSTR-3B is generally due on the 20th of the following month.'
    },
    {
      question: 'What happens if GST return is not filed?',
      answer:
        'Late fees and interest will apply. Continuous non-filing may result in suspension or cancellation of GST registration.'
    },
    {
      question: 'What is Input Tax Credit (ITC)?',
      answer:
        'Input Tax Credit allows businesses to reduce the GST paid on purchases from the GST payable on sales.'
    },
    {
      question: 'Can GST returns be revised?',
      answer:
        'GST returns cannot be revised. However, errors can be corrected in subsequent returns.'
    }
  ]
};

export default taxComplianceData;
