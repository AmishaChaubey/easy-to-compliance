import { Calendar, FileText, AlertCircle, CheckCircle, ChevronDown, List, BookOpen } from 'lucide-react';

const taxComplianceData  = {
  heroData: {
    title: 'Income Tax Compliance Services',
    description: 'End-to-end Income Tax compliance solutions for individuals, professionals, and businesses. File accurately, save more, and stay penalty-free.',
    backgroundImage: '/banner-img/labor.png',
    primaryButtonText: 'File ITR Now',
    secondaryButtonText: 'Consult Expert'
  },

  bannerData: {
    title: 'Important:',
    message: 'Delay in filing your Income Tax Return (ITR) may result in late fees, interest, and loss of certain benefits like carry forward of losses. Ensure timely filing to stay compliant!'
  },

  tableOfContents: [
    { id: 'hero', label: 'Overview', icon: BookOpen },
    { id: 'services', label: 'Income Tax Services Covered', icon: CheckCircle },
    { id: 'due-dates', label: 'Important Due Dates', icon: Calendar },
    { id: 'documents', label: 'Documents Required', icon: FileText },
    { id: 'penalties', label: 'Penalties & Interest', icon: AlertCircle },
    { id: 'process', label: 'Filing Process', icon: List },
    { id: 'faq', label: 'FAQs', icon: ChevronDown },
  ],

  services: [
    {
      title: 'ITR Filing',
      description: 'Accurate Income Tax Return filing for salaried individuals, freelancers, and businesses',
      features: ['Correct ITR form selection', 'Tax computation', 'Deduction & exemption optimization']
    },
    {
      title: 'Tax Planning',
      description: 'Strategic tax planning to legally minimize your tax liability',
      features: ['80C/80D planning', 'Capital gains planning', 'Year-end tax review']
    },
    {
      title: 'Notice Handling',
      description: 'Professional assistance for Income Tax notices and scrutiny cases',
      features: ['Notice reply drafting', 'Representation before department', 'Compliance support']
    },
    {
      title: 'Advance Tax & TDS Support',
      description: 'Computation and timely payment support for advance tax and TDS',
      features: ['Advance tax calculation', 'TDS review', 'Interest computation']
    }
  ],

  dueDates: [
    { period: 'Individual (Non-Audit)', date: '31st July', type: 'ITR Filing', status: 'critical' },
    { period: 'Business (Audit Cases)', date: '31st October', type: 'ITR Filing', status: 'important' },
    { period: 'Belated Return', date: '31st December', type: 'Late Filing', status: 'upcoming' },
    { period: 'Revised Return', date: '31st December', type: 'Correction Filing', status: 'upcoming' },
  ],

  documents: [
    { category: 'Identity & Basic Details', items: ['PAN Card', 'Aadhaar Card', 'Bank Account Details'] },
    { category: 'Income Documents', items: ['Form 16', 'Salary Slips', 'Bank Statements', 'TDS Certificates (Form 16A)'] },
    { category: 'Investment Proof', items: ['LIC Receipts', 'PPF Statement', 'ELSS Investment Proof', 'Home Loan Interest Certificate'] },
    { category: 'Other Income Proof', items: ['Capital Gains Statement', 'Rental Income Details', 'Business Financial Statements'] },
  ],

  penalties: [
    { violation: 'Late filing of ITR', penalty: '₹5,000 (₹1,000 if income below ₹5 lakh)', additionalInfo: 'Under Section 234F' },
    { violation: 'Late payment of tax', penalty: '1% interest per month', additionalInfo: 'Under Section 234A/234B/234C' },
    { violation: 'Under-reporting of income', penalty: '50% of tax payable', additionalInfo: 'Under Section 270A' },
    { violation: 'Misreporting of income', penalty: '200% of tax payable', additionalInfo: 'Serious penalty for false reporting' },
  ],

  filingSteps: [
    { step: 1, title: 'Document Collection', description: 'Collect Form 16, investment proofs, bank statements, and other income details' },
    { step: 2, title: 'Income Computation', description: 'Compute total income under all heads including salary, business, capital gains, etc.' },
    { step: 3, title: 'Tax Calculation', description: 'Calculate tax liability after deductions and exemptions' },
    { step: 4, title: 'Client Review', description: 'Share draft ITR for verification and approval' },
    { step: 5, title: 'E-Filing of Return', description: 'File the return on the Income Tax e-filing portal' },
    { step: 6, title: 'ITR Verification', description: 'Verify return via Aadhaar OTP, net banking, or by sending signed ITR-V' },
  ],

  faqs: [
    {
      question: 'Who is required to file Income Tax Return?',
      answer: 'Individuals whose income exceeds the basic exemption limit or who meet certain specified conditions must file an ITR.'
    },
    {
      question: 'What happens if I file ITR after the due date?',
      answer: 'You will have to pay a late filing fee under Section 234F and interest on any unpaid tax.'
    },
    {
      question: 'Can I revise my Income Tax Return?',
      answer: 'Yes, you can revise your return before 31st December of the assessment year if you discover any mistake.'
    },
    {
      question: 'How long does it take to get a refund?',
      answer: 'Refunds are generally processed within 4–6 weeks after successful verification of the return.'
    },
    {
      question: 'Is Aadhaar-PAN linking mandatory?',
      answer: 'Yes, linking Aadhaar with PAN is mandatory. Failure to do so may make your PAN inoperative.'
    },
  ]
};

export default taxComplianceData