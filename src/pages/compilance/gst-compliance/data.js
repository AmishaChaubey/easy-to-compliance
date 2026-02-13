import { Calendar, FileText, AlertCircle, CheckCircle, ChevronDown, List, BookOpen } from 'lucide-react';

export const taxComplianceData = {
  heroData: {
    title: 'Tax Compliance Services',
    description: 'Comprehensive tax compliance solutions for individuals and businesses. Stay compliant, avoid penalties, and maximize your savings.',
    backgroundImage: '/banner-img/gst.png',
    primaryButtonText: 'Get Started',
    secondaryButtonText: 'Contact Us'
  },

  bannerData: {
    title: 'Important:',
    message: 'Delayed filing of your Income Tax Return may lead to penalties, interest, and loss of certain benefits. Ensure timely compliance to stay stress-free!'
  },

  tableOfContents: [
    { id: 'hero', label: 'Overview', icon: BookOpen },
    { id: 'services', label: 'Services Covered', icon: CheckCircle },
    { id: 'due-dates', label: 'Due Dates', icon: Calendar },
    { id: 'documents', label: 'Documents Required', icon: FileText },
    { id: 'penalties', label: 'Penalties & Late Fees', icon: AlertCircle },
    { id: 'process', label: 'Filing Process', icon: List },
    { id: 'faq', label: 'FAQs', icon: ChevronDown },
  ],

  services: [
    {
      title: 'Income Tax Return Filing',
      description: 'Complete assistance with ITR filing for individuals and businesses',
      features: ['Form selection', 'Tax computation', 'Deduction optimization']
    },
    {
      title: 'GST Compliance',
      description: 'Monthly and quarterly GST return filing services',
      features: ['GSTR-1', 'GSTR-3B', 'Annual returns']
    },
    {
      title: 'Tax Planning',
      description: 'Strategic tax planning to minimize your tax liability',
      features: ['Investment advisory', 'Tax-saving schemes', 'Year-end planning']
    },
    {
      title: 'Audit Support',
      description: 'Comprehensive support during tax audits and assessments',
      features: ['Documentation', 'Representation', 'Compliance review']
    }
  ],

  dueDates: [
    { period: 'Q1 (Apr-Jun)', date: 'July 31, 2024', type: 'Quarterly Return', status: 'upcoming' },
    { period: 'Q2 (Jul-Sep)', date: 'October 31, 2024', type: 'Quarterly Return', status: 'upcoming' },
    { period: 'Q3 (Oct-Dec)', date: 'January 31, 2025', type: 'Quarterly Return', status: 'upcoming' },
    { period: 'Annual', date: 'July 31, 2024', type: 'Annual Return', status: 'critical' },
  ],

  documents: [
    { category: 'Identity Proof', items: ['PAN Card', 'Aadhaar Card', 'Passport'] },
    { category: 'Income Proof', items: ['Form 16/16A', 'Salary Slips', 'Bank Statements', 'TDS Certificates'] },
    { category: 'Investment Proof', items: ['LIC Premium Receipts', 'PPF Statements', 'ELSS Statements', 'Home Loan Certificates'] },
    { category: 'Business Documents', items: ['P&L Statement', 'Balance Sheet', 'GST Returns', 'Audit Reports'] },
  ],

  penalties: [
    { violation: 'Late filing of returns', penalty: '₹5,000', additionalInfo: 'Interest charged at 1% per month' },
    { violation: 'Non-filing of returns', penalty: '₹10,000', additionalInfo: 'Plus prosecution under Section 276CC' },
    { violation: 'Delayed tax payment', penalty: '1% per month', additionalInfo: 'On unpaid tax amount' },
    { violation: 'Incorrect information', penalty: 'Up to ₹50,000', additionalInfo: 'Penalty under Section 270A' },
  ],

  filingSteps: [
    { step: 1, title: 'Document Collection', description: 'Gather all necessary documents including Form 16, investment proofs, and bank statements' },
    { step: 2, title: 'Data Verification', description: 'Our experts verify all information for accuracy and completeness' },
    { step: 3, title: 'Return Preparation', description: 'Prepare your tax return with optimized deductions and exemptions' },
    { step: 4, title: 'Review & Approval', description: 'You review the prepared return and provide final approval' },
    { step: 5, title: 'E-Filing', description: 'Submit your return electronically to the Income Tax Department' },
    { step: 6, title: 'Verification', description: 'Complete ITR-V verification through Aadhaar OTP or sending signed copy' },
  ],

  faqs: [
    {
      question: 'What is the last date for filing income tax returns?',
      answer: 'For individuals (non-audit cases), the due date is July 31st of the assessment year. For businesses requiring audit, the due date is October 31st.'
    },
    {
      question: 'Can I file my return after the due date?',
      answer: 'Yes, you can file a belated return up to December 31st of the assessment year. However, you will have to pay a late filing fee of ₹5,000 (₹1,000 if income is below ₹5 lakhs).'
    },
    {
      question: 'What happens if I miss the deadline completely?',
      answer: 'If you miss the December 31st deadline, you cannot file a belated return. You may only file if the tax department issues a notice. Additionally, you will lose the ability to carry forward certain losses.'
    },
    {
      question: 'How can I track my refund status?',
      answer: 'You can track your refund status on the Income Tax e-filing portal using your PAN and assessment year. Refunds are typically processed within 4-6 weeks of successful verification.'
    },
    {
      question: 'Is it mandatory to link PAN with Aadhaar?',
      answer: 'Yes, linking PAN with Aadhaar is mandatory. Failure to link may result in your PAN becoming inoperative, affecting all financial transactions.'
    },
  ]
};