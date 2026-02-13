import { Calendar, FileText, AlertCircle, CheckCircle, ChevronDown, List, BookOpen } from 'lucide-react';

const taxComplianceData = {
  heroData: {
    title: 'Labour Law Compliance Services',
    description:
      'Comprehensive labour law compliance solutions to help businesses comply with employment laws, avoid penalties, and maintain a legally secure workplace.',
    backgroundImage: '/banner-img/labor.png',
    primaryButtonText: 'Ensure Compliance Now',
    secondaryButtonText: 'Consult Labour Expert'
  },

  bannerData: {
    title: 'Important:',
    message:
      'Non-compliance with labour laws can result in penalties, inspections, legal disputes, and business disruptions. Ensure timely registrations, returns, and record maintenance.'
  },

  tableOfContents: [
    { id: 'hero', label: 'Overview', icon: BookOpen },
    { id: 'services', label: 'Labour Law Services Covered', icon: CheckCircle },
    { id: 'due-dates', label: 'Important Due Dates', icon: Calendar },
    { id: 'documents', label: 'Documents Required', icon: FileText },
    { id: 'penalties', label: 'Penalties & Consequences', icon: AlertCircle },
    { id: 'process', label: 'Compliance Process', icon: List },
    { id: 'faq', label: 'FAQs', icon: ChevronDown }
  ],

  services: [
    {
      title: 'PF (Provident Fund) Compliance',
      description: 'Registration, monthly return filing, and compliance under EPF Act',
      features: ['PF Registration', 'Monthly ECR Filing', 'Challan Generation & Payment']
    },
    {
      title: 'ESI Compliance',
      description: 'Registration and return filing under ESI Act',
      features: ['ESI Registration', 'Half-Yearly Returns', 'Employee Insurance Compliance']
    },
    {
      title: 'Professional Tax Compliance',
      description: 'Registration and periodic filing of Professional Tax returns',
      features: ['PT Registration', 'Monthly/Quarterly Returns', 'Payment Compliance']
    },
    {
      title: 'Labour License & Registers',
      description: 'Labour license registration and maintenance of statutory registers',
      features: ['Shop & Establishment Registration', 'Contract Labour License', 'Maintenance of Labour Registers']
    }
  ],

  dueDates: [
    { period: 'PF Monthly Return', date: '15th of Next Month', type: 'PF Payment & Filing', status: 'critical' },
    { period: 'ESI Monthly Contribution', date: '15th of Next Month', type: 'ESI Payment', status: 'critical' },
    { period: 'Professional Tax Return', date: 'As per State Rules', type: 'PT Filing', status: 'important' },
    { period: 'Labour Welfare Fund', date: 'As per State Notification', type: 'Annual Contribution', status: 'upcoming' }
  ],

  documents: [
    { category: 'Business Details', items: ['Certificate of Incorporation / Registration', 'PAN Card', 'Address Proof of Business'] },
    { category: 'Employee Details', items: ['Employee Aadhaar', 'PAN Card', 'Salary Structure Details', 'Joining Date Records'] },
    { category: 'Payroll Records', items: ['Salary Register', 'Attendance Register', 'Wage Sheet'] },
    { category: 'Compliance Records', items: ['Previous PF/ESI Returns', 'Challan Copies', 'Labour Inspection Reports'] }
  ],

  penalties: [
    {
      violation: 'Late PF payment',
      penalty: 'Interest + Damages',
      additionalInfo: 'As per EPF Act provisions'
    },
    {
      violation: 'Non-registration under ESI/PF',
      penalty: 'Heavy fines and prosecution',
      additionalInfo: 'Legal action may be initiated'
    },
    {
      violation: 'Non-maintenance of registers',
      penalty: 'Penalty during labour inspection',
      additionalInfo: 'May result in compliance notice'
    },
    {
      violation: 'Delay in Professional Tax payment',
      penalty: 'Interest & Late Fees',
      additionalInfo: 'As per State Government rules'
    }
  ],

  filingSteps: [
    { step: 1, title: 'Registration Review', description: 'Verify required labour law registrations based on employee strength and business type' },
    { step: 2, title: 'Data Collection', description: 'Collect employee details, salary structure, and attendance records' },
    { step: 3, title: 'Return Preparation', description: 'Prepare monthly/periodic returns under PF, ESI, PT, and other applicable laws' },
    { step: 4, title: 'Client Approval', description: 'Share working and challans for confirmation before payment' },
    { step: 5, title: 'Online Filing & Payment', description: 'File returns and generate challans on respective portals' },
    { step: 6, title: 'Record Maintenance', description: 'Maintain statutory registers and compliance documentation for inspection readiness' }
  ],

  faqs: [
    {
      question: 'Is PF registration mandatory for all businesses?',
      answer:
        'PF registration is mandatory for establishments employing 20 or more employees, subject to applicable rules.'
    },
    {
      question: 'Who is covered under ESI?',
      answer:
        'Employees earning wages up to the prescribed limit (currently ₹21,000 per month) are covered under ESI.'
    },
    {
      question: 'What happens during a labour inspection?',
      answer:
        'Inspectors verify statutory registers, payment records, and compliance filings. Non-compliance may lead to penalties.'
    },
    {
      question: 'Is Professional Tax applicable in all states?',
      answer:
        'Professional Tax is state-specific and applicable only in states where it is notified.'
    },
    {
      question: 'Why is labour law compliance important?',
      answer:
        'Proper compliance protects businesses from legal disputes, penalties, and ensures employee welfare and statutory protection.'
    }
  ]
};

export default taxComplianceData;
