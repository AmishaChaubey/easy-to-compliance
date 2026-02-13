import { Calendar, FileText, AlertCircle, CheckCircle, ChevronDown, List, BookOpen } from 'lucide-react';

const taxComplianceData = {
  heroData: {
    title: 'Corporate Compliance Services',
    description:
      'Comprehensive corporate compliance solutions to help companies meet legal, regulatory, and statutory requirements under applicable laws.',
    backgroundImage: '/banner-img/labor.png',
    primaryButtonText: 'Get Compliance Support',
    secondaryButtonText: 'Consult Expert'
  },

  bannerData: {
    title: 'Important:',
    message:
      'Non-compliance with corporate laws may lead to heavy penalties, director disqualification, and legal complications. Ensure timely filings to keep your company compliant and risk-free.'
  },

  tableOfContents: [
    { id: 'hero', label: 'Overview', icon: BookOpen },
    { id: 'services', label: 'Corporate Services Covered', icon: CheckCircle },
    { id: 'due-dates', label: 'Important Due Dates', icon: Calendar },
    { id: 'documents', label: 'Documents Required', icon: FileText },
    { id: 'penalties', label: 'Penalties & Consequences', icon: AlertCircle },
    { id: 'process', label: 'Compliance Process', icon: List },
    { id: 'faq', label: 'FAQs', icon: ChevronDown }
  ],

  services: [
    {
      title: 'ROC Annual Filing',
      description: 'Filing of annual returns and financial statements with ROC',
      features: ['AOC-4 Filing', 'MGT-7 Filing', 'Director KYC (DIR-3 KYC)']
    },
    {
      title: 'Company Incorporation Compliance',
      description: 'Post-incorporation compliance and documentation support',
      features: ['INC-20A Filing', 'Share Certificate Issuance', 'Statutory Register Maintenance']
    },
    {
      title: 'Board & General Meeting Compliance',
      description: 'Compliance related to board meetings and annual general meetings',
      features: ['Notice drafting', 'Minutes preparation', 'Resolution filing (MCA Forms)']
    },
    {
      title: 'Event-Based Compliance',
      description: 'Filing of forms for change in directors, address, or capital',
      features: ['DIR-12 Filing', 'PAS-3 Filing', 'Change in Registered Office']
    }
  ],

  dueDates: [
    { period: 'DIR-3 KYC', date: '30th September', type: 'Director Compliance', status: 'critical' },
    { period: 'AOC-4', date: 'Within 30 days of AGM', type: 'Financial Statement Filing', status: 'important' },
    { period: 'MGT-7', date: 'Within 60 days of AGM', type: 'Annual Return Filing', status: 'important' },
    { period: 'INC-20A', date: 'Within 180 days of Incorporation', type: 'Commencement Certificate', status: 'upcoming' }
  ],

  documents: [
    { category: 'Company Documents', items: ['Certificate of Incorporation', 'MOA & AOA', 'PAN & TAN'] },
    { category: 'Financial Documents', items: ['Balance Sheet', 'Profit & Loss Statement', 'Audit Report'] },
    { category: 'Director Details', items: ['DIN', 'PAN Card', 'Aadhaar Card', 'Email & Mobile Linked to DIN'] },
    { category: 'Meeting Documents', items: ['Board Resolutions', 'AGM Minutes', 'Shareholder Register'] }
  ],

  penalties: [
    {
      violation: 'Late ROC filing',
      penalty: '₹100 per day per form',
      additionalInfo: 'No maximum limit on additional fees'
    },
    {
      violation: 'Non-filing of Annual Return',
      penalty: 'Heavy penalties on company and directors',
      additionalInfo: 'May lead to director disqualification'
    },
    {
      violation: 'Failure to conduct AGM',
      penalty: 'Penalty on company and officers in default',
      additionalInfo: 'As per Companies Act provisions'
    },
    {
      violation: 'Incorrect or false reporting',
      penalty: 'Fine and possible legal action',
      additionalInfo: 'As per Companies Act, 2013'
    }
  ],

  filingSteps: [
    { step: 1, title: 'Document Collection', description: 'Collect financial statements, director details, and company records' },
    { step: 2, title: 'Compliance Review', description: 'Review statutory registers and ensure all requirements are met' },
    { step: 3, title: 'Form Preparation', description: 'Prepare relevant MCA forms and supporting documents' },
    { step: 4, title: 'Client Approval', description: 'Share drafts for verification and approval' },
    { step: 5, title: 'Online Filing', description: 'File forms on the MCA portal within due dates' },
    { step: 6, title: 'Acknowledgement & Record Maintenance', description: 'Provide SRN acknowledgement and maintain compliance records' }
  ],

  faqs: [
    {
      question: 'What is ROC compliance?',
      answer:
        'ROC compliance refers to mandatory filings and legal requirements that companies must complete with the Registrar of Companies under the Companies Act.'
    },
    {
      question: 'Is annual filing mandatory for all companies?',
      answer:
        'Yes, every registered company must file annual returns and financial statements, even if there is no business activity.'
    },
    {
      question: 'What happens if ROC forms are not filed?',
      answer:
        'Late filing attracts additional fees of ₹100 per day and may lead to penalties or director disqualification.'
    },
    {
      question: 'What is DIR-3 KYC?',
      answer:
        'DIR-3 KYC is a mandatory annual KYC filing for directors holding a DIN to keep their DIN active.'
    },
    {
      question: 'Can a company be struck off for non-compliance?',
      answer:
        'Yes, continuous non-compliance may result in the company being struck off by the Registrar of Companies.'
    }
  ]
};

export default taxComplianceData;
