export const regulatoryData = {
  fema: {
    title: "FEMA Compliance",
    description: "Complete FEMA compliance and foreign transaction reporting services.",
    features: [
      "FDI Reporting",
      "ODI Compliance",
      "FC-GPR Filing",
      "Annual Return Filing"
    ],

    hero: {
      title: "FEMA Compliance Services",
      subtitle:
        "Expert assistance for foreign investments, cross-border transactions, and RBI reporting under FEMA regulations.",
      image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg",
      cta: "Get FEMA Consultation"
    },

    about: {
      title: "Foreign Exchange Compliance Made Easy",
      description:
        "We assist businesses in complying with FEMA regulations related to foreign investments, overseas transactions, and reporting requirements. Our experts ensure accurate filings and timely submissions to avoid penalties.",
      highlights: [
        "FDI & ODI reporting support",
        "RBI compliance filing",
        "Foreign remittance advisory",
        "Penalty avoidance guidance"
      ]
    },

    // NEW: Regulatory Overview Section
    regulatoryOverview: {
      title: "Understanding FEMA Regulations",
      introduction: "The Foreign Exchange Management Act (FEMA) was enacted in 1999 to consolidate and amend the law relating to foreign exchange with the objective of facilitating external trade and payments and for promoting the orderly development and maintenance of foreign exchange market in India.",
      keyAspects: [
        {
          title: "Foreign Direct Investment (FDI)",
          description: "Governs investment by foreign entities in Indian companies through equity instruments, convertible debentures, or compulsorily convertible preference shares.",
          regulations: ["Automatic Route", "Government Route", "Sectoral Caps", "Entry Routes"]
        },
        {
          title: "Overseas Direct Investment (ODI)",
          description: "Regulates investments made by Indian entities in foreign companies through equity, debt instruments, or guarantees.",
          regulations: ["Financial Commitment Route", "Permitted Sectors", "Funding Requirements", "Annual Performance Reports"]
        },
        {
          title: "External Commercial Borrowings",
          description: "Framework for Indian entities to raise commercial loans from non-resident lenders.",
          regulations: ["Track I - Medium/Long Term", "Track II - Foreign Currency/Rupee Loans", "All-in-Cost Ceilings", "End-use Restrictions"]
        },
        {
          title: "Current Account Transactions",
          description: "Regulations governing routine business transactions, travel, education, and medical expenses.",
          regulations: ["Liberalized Remittance Scheme", "Trade Related Payments", "Professional Services", "Educational Expenses"]
        }
      ]
    },

    // NEW: Compliance Calendar
    complianceCalendar: {
      title: "FEMA Compliance Calendar",
      description: "Stay ahead with our comprehensive compliance calendar for all FEMA-related deadlines",
      deadlines: [
        {
          period: "Monthly",
          filings: [
            { form: "LEC Return", description: "Return of Foreign Liabilities and Assets", dueDate: "7th of following month" },
            { form: "ECB-2 Return", description: "ECB monthly information return", dueDate: "7th of following month" }
          ]
        },
        {
          period: "Quarterly",
          filings: [
            { form: "FDI Returns", description: "Reporting of FDI received", dueDate: "Within 30 days of quarter end" },
            { form: "FLA-RBI Return", description: "Return on Foreign Liabilities and Assets", dueDate: "15th day of succeeding quarter" }
          ]
        },
        {
          period: "Annual",
          filings: [
            { form: "FC-GPR", description: "Foreign Currency - Gross Provisional Return", dueDate: "Within 30 days from closure of FY" },
            { form: "Annual Return on FLA", description: "Comprehensive FLA return", dueDate: "July 15th" },
            { form: "ODI Annual Performance", description: "Annual Performance Report for ODI", dueDate: "Within 6 months of FY end" }
          ]
        },
        {
          period: "Event-Based",
          filings: [
            { form: "ARF/FC-TRS", description: "Advance Reporting Form/Transfer of Shares", dueDate: "Within 60 days of receipt/transfer" },
            { form: "LLP-I", description: "Foreign Investment in LLP", dueDate: "Within 30 days of investment" },
            { form: "ODI Declaration", description: "Overseas investment declaration", dueDate: "Within 6 months of investment" }
          ]
        }
      ]
    },

    // NEW: Industry-Specific Guidance
    industryGuidance: {
      title: "Industry-Specific FEMA Compliance",
      description: "Tailored compliance solutions for different sectors",
      sectors: [
        {
          name: "E-Commerce & Technology",
          icon: "💻",
          challenges: [
            "FDI in marketplace vs inventory model",
            "Compliance with Press Note 2 of 2016",
            "Cross-border payment gateway regulations",
            "Data localization and FEMA implications"
          ],
          solutions: [
            "Structuring advice for permissible business models",
            "Regulatory filings for technology investments",
            "Compliance framework for digital payments"
          ]
        },
        {
          name: "Manufacturing & Export",
          icon: "🏭",
          challenges: [
            "Export proceeds realization requirements",
            "Import payment compliance",
            "Advance against exports",
            "Transfer pricing and FEMA"
          ],
          solutions: [
            "Trade documentation review",
            "Export-import compliance monitoring",
            "Bank guarantee and LC advisory"
          ]
        },
        {
          name: "Pharmaceuticals & Healthcare",
          icon: "⚕️",
          challenges: [
            "FDI caps in pharmaceutical sector",
            "Technology transfer agreements",
            "Royalty and technical know-how payments",
            "Clinical trial remittances"
          ],
          solutions: [
            "Regulatory approvals for FDI",
            "Compliance for research collaborations",
            "Technology transfer pricing"
          ]
        },
        {
          name: "Real Estate & Construction",
          icon: "🏢",
          challenges: [
            "FDI restrictions in real estate",
            "Minimum area and capitalization requirements",
            "Repatriation of sale proceeds",
            "Joint venture structuring"
          ],
          solutions: [
            "Investment structuring advice",
            "Compliance with sectoral conditions",
            "Exit and repatriation planning"
          ]
        },
        {
          name: "Financial Services",
          icon: "💰",
          challenges: [
            "FDI in banking and insurance",
            "NBFC foreign investment compliance",
            "Downstream investment monitoring",
            "Owned funds requirements"
          ],
          solutions: [
            "Regulatory approval assistance",
            "Ongoing compliance monitoring",
            "RBI liaison and representation"
          ]
        },
        {
          name: "Startups & Innovation",
          icon: "🚀",
          challenges: [
            "Convertible note structuring",
            "ESOP grants to foreign employees",
            "Foreign funding compliance",
            "Valuation and pricing guidelines"
          ],
          solutions: [
            "Funding round compliance",
            "ESOP and equity advisory",
            "RBI reporting and filings"
          ]
        }
      ]
    },

    // NEW: Common Violations & Penalties
    violations: {
      title: "Common FEMA Violations & Penalties",
      description: "Understanding risks and ensuring compliance to avoid penalties",
      commonViolations: [
        {
          violation: "Delayed or Non-filing of Returns",
          impact: "High",
          penalty: "Up to 3 times the sum involved or ₹2 lakh per day (whichever is higher)",
          prevention: "Automated compliance tracking and timely filing reminders"
        },
        {
          violation: "Unauthorized Foreign Investment",
          impact: "Critical",
          penalty: "Compounding fees up to ₹1 crore plus regularization requirements",
          prevention: "Pre-investment regulatory review and structuring advice"
        },
        {
          violation: "Non-realization of Export Proceeds",
          impact: "High",
          penalty: "Penalty up to 3 times the amount plus investigation",
          prevention: "Export documentation and follow-up systems"
        },
        {
          violation: "Violation of ECB Guidelines",
          impact: "High",
          penalty: "Recall of loan, penalty, and compounding charges",
          prevention: "ECB compliance framework and monitoring"
        },
        {
          violation: "Excess Remittance under LRS",
          impact: "Medium",
          penalty: "Confiscation and penalty up to 3 times the amount",
          prevention: "LRS tracking and compliance verification"
        },
        {
          violation: "Incorrect Pricing of Shares",
          impact: "High",
          penalty: "Compounding fees and potential unwinding of transaction",
          prevention: "Independent valuation and regulatory compliance"
        }
      ],
      compoundingProcess: {
        title: "FEMA Compounding Process",
        steps: [
          "Detection or self-disclosure of violation",
          "Application for compounding to RBI",
          "Payment of compounding fee",
          "Submission of compliance documents",
          "RBI review and order",
          "Implementation of regularization measures"
        ],
        timeline: "Typically 6-12 months",
        benefits: ["Avoids prosecution", "Regularizes non-compliant transactions", "Restores compliance status"]
      }
    },

    // NEW: Case Studies
    caseStudies: {
      title: "Success Stories & Case Studies",
      description: "Real-world examples of how we've helped clients navigate FEMA compliance",
      studies: [
        {
          title: "Global Tech Investment - $50M FDI Structuring",
          industry: "Technology",
          challenge: "A US-based venture capital firm wanted to invest $50 million in an Indian SaaS startup. The investment involved multiple tranches, convertible instruments, and anti-dilution protections that needed careful FEMA structuring.",
          solution: "We structured the investment through a combination of compulsorily convertible preference shares (CCPS) and equity shares, ensuring compliance with automatic route provisions and pricing guidelines under FEMA.",
          outcome: "Successful investment closure within 45 days, all regulatory filings completed, and ongoing compliance framework established.",
          impact: "Zero delays, 100% regulatory compliance, enabling the startup to scale operations"
        },
        {
          title: "Pharmaceutical Company - ODI to Germany",
          industry: "Pharmaceuticals",
          challenge: "An Indian pharmaceutical company wanted to acquire a manufacturing facility in Germany worth €30 million, requiring ODI approval and funding compliance.",
          solution: "We facilitated the ODI approval process, structured the acquisition through a combination of equity and debt, and ensured compliance with all reporting requirements.",
          outcome: "Smooth acquisition process, RBI approval within 60 days, and establishment of compliance monitoring system.",
          impact: "Successful international expansion with full regulatory compliance"
        },
        {
          title: "E-commerce Platform - Marketplace Model Compliance",
          industry: "E-commerce",
          challenge: "A growing e-commerce marketplace had inadvertently violated FDI regulations by providing discounts funded by foreign investors, risking their entire business model.",
          solution: "We conducted a comprehensive compliance audit, restructured their business operations to align with Press Note 2 guidelines, and filed for compounding of past violations.",
          outcome: "Successful regularization of past violations, restructured operations within compliant framework, saved business from shutdown.",
          impact: "Business continuity ensured, ₹15 crore in potential penalties avoided"
        },
        {
          title: "Real Estate Developer - Joint Venture Structuring",
          industry: "Real Estate",
          challenge: "A real estate developer sought foreign investment for a mixed-use development project while navigating minimum capitalization and area requirements.",
          solution: "We structured a compliant joint venture ensuring adherence to minimum area requirements (20,000 sq m), capitalization norms (₹10 crore), and lock-in periods.",
          outcome: "Successful foreign investment of $25 million, complete regulatory compliance, timely project launch.",
          impact: "Project funding secured with zero regulatory hurdles"
        }
      ]
    },

    // NEW: Resources & Tools
    resources: {
      title: "FEMA Resources & Tools",
      description: "Helpful resources to understand and comply with FEMA regulations",
      tools: [
        {
          name: "FEMA Compliance Checklist",
          description: "Comprehensive checklist for FDI, ODI, and other FEMA transactions",
          type: "Downloadable PDF",
          icon: "📋"
        },
        {
          name: "Sectoral FDI Cap Calculator",
          description: "Quick reference tool for FDI limits across different sectors",
          type: "Interactive Tool",
          icon: "🧮"
        },
        {
          name: "Filing Calendar Template",
          description: "Customizable compliance calendar for your organization",
          type: "Excel Template",
          icon: "📅"
        },
        {
          name: "FEMA Amendment Tracker",
          description: "Regular updates on regulatory changes and amendments",
          type: "Newsletter",
          icon: "📰"
        }
      ],
      guides: [
        {
          title: "FDI for Beginners: A Complete Guide",
          topics: ["Understanding FDI routes", "Sectoral caps", "Pricing guidelines", "Reporting requirements"],
          readTime: "15 min"
        },
        {
          title: "ODI Compliance Handbook",
          topics: ["Investment limits", "Approval process", "Funding norms", "Annual reporting"],
          readTime: "20 min"
        },
        {
          title: "ECB Framework Explained",
          topics: ["Eligible borrowers", "Recognized lenders", "Cost ceilings", "End-use restrictions"],
          readTime: "12 min"
        }
      ],
      regulations: [
        { name: "FEMA Act, 1999", link: "#", category: "Primary Legislation" },
        { name: "FDI Policy (Consolidated)", link: "#", category: "Investment" },
        { name: "Master Direction on Reporting", link: "#", category: "Compliance" },
        { name: "ECB Master Direction", link: "#", category: "Borrowing" },
        { name: "ODI Master Direction", link: "#", category: "Overseas Investment" }
      ]
    },

    // NEW: Expert Team
    team: {
      title: "Meet Our FEMA Experts",
      description: "Experienced professionals dedicated to your compliance success",
      members: [
        {
          name: "Chartered Accountants",
          expertise: "15+ years in FEMA compliance and international taxation",
          specialization: ["FDI/ODI structuring", "Pricing compliance", "Tax planning"],
          count: "12 experts"
        },
        {
          name: "Company Secretaries",
          expertise: "Corporate law and regulatory compliance specialists",
          specialization: ["Corporate filings", "RBI liaison", "Regulatory approvals"],
          count: "8 experts"
        },
        {
          name: "Legal Advisors",
          expertise: "FEMA litigation and compounding specialists",
          specialization: ["Violation remediation", "Legal representation", "Regulatory advisory"],
          count: "5 experts"
        },
        {
          name: "Industry Consultants",
          expertise: "Sector-specific compliance knowledge",
          specialization: ["E-commerce", "Pharmaceuticals", "Technology", "Real Estate"],
          count: "10 experts"
        }
      ]
    },

    detailedFeatures: [
      {
        icon: "🏦",
        title: "FDI Reporting",
        description:
          "Filing of FC-GPR and other required forms for foreign direct investment transactions."
      },
      {
        icon: "🌏",
        title: "ODI Compliance",
        description:
          "Overseas Direct Investment compliance and reporting under FEMA guidelines."
      },
      {
        icon: "📊",
        title: "Annual Return Filing",
        description:
          "Filing of Annual Return on Foreign Liabilities and Assets (FLA)."
      },
      {
        icon: "💱",
        title: "Foreign Remittance Advisory",
        description:
          "Guidance on cross-border transactions and FEMA regulations."
      },
      {
        icon: "⚖️",
        title: "Compounding Services",
        description:
          "Expert assistance in compounding of FEMA violations and regularization."
      },
      {
        icon: "🔍",
        title: "FEMA Audit",
        description:
          "Comprehensive audit of FEMA compliance and identification of gaps."
      }
    ],

    process: {
      title: "Our FEMA Compliance Process",
      steps: [
        { number: "01", title: "Assessment", description: "Identify applicable FEMA provisions." },
        { number: "02", title: "Documentation", description: "Prepare required investment and transaction documents." },
        { number: "03", title: "Filing", description: "Submit forms with RBI through authorized portals." },
        { number: "04", title: "Monitoring", description: "Ongoing compliance tracking and advisory support." }
      ]
    },

    // Enhanced FAQs
    faqs: [
      {
        question: "Who needs FEMA compliance?",
        answer:
          "Businesses receiving foreign investment or making overseas investments must comply with FEMA regulations. This includes Indian companies with FDI, Indian entities making ODI, exporters, importers, and any entity involved in foreign exchange transactions."
      },
      {
        question: "What is FC-GPR?",
        answer:
          "FC-GPR (Foreign Currency - Gross Provisional Return) is a form filed with RBI for reporting foreign investment in Indian companies. It must be filed within 30 days from the closure of financial year in which FDI was received."
      },
      {
        question: "What are the penalties for FEMA violations?",
        answer:
          "FEMA violations can attract penalties up to three times the sum involved in contravention. For continued violations, additional penalties up to ₹2 lakh per day can be imposed. However, violations can be compounded by paying appropriate fees to RBI."
      },
      {
        question: "Can I invest abroad through ODI route?",
        answer:
          "Yes, Indian entities can invest abroad through ODI route subject to conditions. Individuals can invest under Liberalized Remittance Scheme (LRS) up to USD 250,000 per financial year. Companies need to meet financial commitment requirements and sectoral restrictions."
      },
      {
        question: "What is the difference between automatic and government route for FDI?",
        answer:
          "Under automatic route, FDI is allowed without prior government approval, subject to sectoral caps and entry conditions. Government route requires prior approval from relevant ministry/FIPB for sectors where FDI is not permitted under automatic route."
      },
      {
        question: "How long does ODI approval take?",
        answer:
          "For investments under Financial Commitment Route within prescribed limits, no prior RBI approval is required - only post-facto reporting within 6 months. For investments exceeding limits, RBI approval typically takes 4-8 weeks depending on complexity."
      },
      {
        question: "What is the time limit for repatriation of export proceeds?",
        answer:
          "Export proceeds must be realized and repatriated to India within 9 months from the date of export. Extension may be granted by RBI in genuine cases with proper justification and supporting documents."
      },
      {
        question: "Can foreign nationals invest in Indian real estate?",
        answer:
          "Foreign nationals and NRIs can invest in real estate subject to conditions. FDI in real estate is permitted under automatic route for development of townships, housing, built-up infrastructure, and construction-development projects with minimum capitalization and area requirements."
      }
    ],

    cta: {
      title: "Ensure Smooth Foreign Transactions",
      description: "Stay compliant with FEMA regulations and avoid penalties.",
      primaryButton: "Book FEMA Consultation",
      secondaryButton: "Talk to Expert"
    }
  },

  rbi: {
    title: "RBI Guidelines Compliance",
    description: "Compliance services under Reserve Bank of India regulations.",
    features: [
      "NBFC Compliance",
      "RBI Returns",
      "Foreign Remittance Reporting",
      "KYC Compliance"
    ],

    hero: {
      title: "RBI Regulatory Compliance Services",
      subtitle:
        "Professional assistance for businesses and NBFCs to meet RBI regulatory requirements.",
      image: "https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg",
      cta: "Get RBI Support"
    },

    about: {
      title: "Stay Aligned with RBI Regulations",
      description:
        "We provide complete RBI compliance services including periodic reporting, regulatory filings, and advisory for financial institutions and businesses.",
      highlights: [
        "NBFC regulatory compliance",
        "Timely RBI return filing",
        "Foreign exchange reporting",
        "Regulatory risk management"
      ]
    },

    // NEW: Regulatory Framework
    regulatoryOverview: {
      title: "RBI Regulatory Framework",
      introduction: "The Reserve Bank of India (RBI) is the central banking institution of India, controlling monetary policy and regulating the financial system. RBI compliance is mandatory for banks, NBFCs, payment systems, and entities dealing with foreign exchange.",
      keyAspects: [
        {
          title: "NBFC Regulations",
          description: "Comprehensive framework governing Non-Banking Financial Companies including registration, capital requirements, and operational guidelines.",
          regulations: ["Registration Requirements", "Capital Adequacy Norms", "Asset Classification", "Prudential Norms"]
        },
        {
          title: "KYC & AML Framework",
          description: "Know Your Customer and Anti-Money Laundering guidelines to prevent financial crimes and ensure customer due diligence.",
          regulations: ["Customer Identification", "Risk Categorization", "Ongoing Monitoring", "Suspicious Transaction Reporting"]
        },
        {
          title: "Payment Systems",
          description: "Regulations for payment aggregators, wallets, prepaid instruments, and digital payment platforms.",
          regulations: ["PA-PG Guidelines", "PPI Master Directions", "Interoperability Norms", "Security Standards"]
        },
        {
          title: "Foreign Exchange Management",
          description: "Guidelines for authorized dealers, money changers, and entities handling foreign exchange operations.",
          regulations: ["AD Licensing", "FEMA Compliance", "Cross-border Payments", "Swift Messaging"]
        }
      ]
    },

    // NEW: NBFC Specific Section
    nbfcCompliance: {
      title: "NBFC Compliance Services",
      description: "Comprehensive support for Non-Banking Financial Companies",
      registrationTypes: [
        {
          type: "NBFC-Investment and Credit Company (ICC)",
          minNOF: "₹2 Crore",
          activities: "Lending, investment, acquisition of shares/bonds",
          regulations: ["Deposit acceptance restrictions", "Asset classification", "Income recognition", "Provisioning norms"]
        },
        {
          type: "NBFC-Infrastructure Finance Company (IFC)",
          minNOF: "₹300 Crore",
          activities: "Infrastructure lending",
          regulations: ["Infrastructure exposure minimum 75%", "Specific asset classification", "Priority sector lending"]
        },
        {
          type: "NBFC-Microfinance Institution (MFI)",
          minNOF: "₹5 Crore",
          activities: "Microfinance lending",
          regulations: ["Qualifying assets minimum 85%", "Loan size caps", "Interest rate caps", "Responsible lending"]
        },
        {
          type: "NBFC-Factors",
          minNOF: "₹5 Crore",
          activities: "Factoring business",
          regulations: ["Factoring business minimum 50%", "Factoring Regulation Act compliance"]
        },
        {
          type: "NBFC-Account Aggregator",
          minNOF: "₹2 Crore",
          activities: "Financial data aggregation",
          regulations: ["Technology standards", "Data security", "Customer consent framework"]
        }
      ],
      complianceRequirements: [
        {
          requirement: "Capital Adequacy",
          description: "Maintain minimum Capital to Risk-Weighted Assets Ratio (CRAR) of 15%",
          frequency: "Continuous monitoring"
        },
        {
          requirement: "Asset Classification",
          description: "NPA recognition as per RBI norms - 90 days overdue",
          frequency: "Monthly review"
        },
        {
          requirement: "Provisioning",
          description: "Standard assets provisioning 0.25% to 1%, NPA provisioning as per category",
          frequency: "Quarterly"
        },
        {
          requirement: "Concentration Norms",
          description: "Single borrower limit 25% of owned funds, group borrower limit 40%",
          frequency: "Ongoing compliance"
        },
        {
          requirement: "ALM Guidelines",
          description: "Asset-Liability Management for maturity mismatch monitoring",
          frequency: "Monthly reporting"
        }
      ]
    },

    // NEW: Returns & Reporting
    returnsReporting: {
      title: "RBI Returns & Reporting Calendar",
      description: "Comprehensive reporting requirements and deadlines",
      returns: [
        {
          category: "NBFCs - Deposit Taking",
          reports: [
            { name: "NBS-1", description: "Monthly Statement of Position", frequency: "Monthly", deadline: "15th of following month" },
            { name: "NBS-2", description: "Prudential Norms Return", frequency: "Quarterly", deadline: "30 days after quarter" },
            { name: "NBS-3", description: "Certificate of Compliance for Deposit Taking", frequency: "Quarterly", deadline: "30 days after quarter" },
            { name: "NBS-9", description: "Annual Statement of Capital Funds", frequency: "Annual", deadline: "30th June" }
          ]
        },
        {
          category: "NBFCs - Non-Deposit Taking Systemically Important",
          reports: [
            { name: "NBS-7", description: "Monthly Statement of Position", frequency: "Monthly", deadline: "15th of following month" },
            { name: "NBS-8", description: "Prudential Norms Return", frequency: "Quarterly", deadline: "30 days after quarter" },
            { name: "ALM Return", description: "Asset Liability Management", frequency: "Monthly", deadline: "15th of following month" }
          ]
        },
        {
          category: "Payment Aggregators & Gateways",
          reports: [
            { name: "Monthly MIS", description: "Transaction volume and value reporting", frequency: "Monthly", deadline: "7th of following month" },
            { name: "Customer Grievance Report", description: "Complaint handling statistics", frequency: "Monthly", deadline: "10th of following month" },
            { name: "Fraud Reporting", description: "Fraud incidents and prevention measures", frequency: "Quarterly", deadline: "15 days after quarter" }
          ]
        },
        {
          category: "KYC & AML",
          reports: [
            { name: "STR", description: "Suspicious Transaction Reports", frequency: "Event-based", deadline: "Within 7 days of suspicion" },
            { name: "CTR", description: "Cash Transaction Reports", frequency: "Monthly", deadline: "15th of following month" },
            { name: "NTR", description: "Non-Profit Organization Transaction Reports", frequency: "Monthly", deadline: "15th of following month" }
          ]
        }
      ]
    },

    // NEW: KYC & AML Compliance
    kycAml: {
      title: "KYC & AML Compliance Framework",
      description: "Ensuring robust customer due diligence and anti-money laundering measures",
      requirements: [
        {
          aspect: "Customer Identification Program (CIP)",
          guidelines: [
            "Obtain official valid documents for identity and address verification",
            "Maintain photographs for individual accounts",
            "Verify beneficial ownership for non-individual accounts",
            "Enhanced due diligence for high-risk customers"
          ]
        },
        {
          aspect: "Risk Categorization",
          categories: [
            { risk: "Low Risk", criteria: "Salaried employees, government departments, regulated entities", measures: "Simplified due diligence" },
            { risk: "Medium Risk", criteria: "Standard corporate accounts, trusts, NGOs", measures: "Normal due diligence" },
            { risk: "High Risk", criteria: "Non-resident customers, PEPs, high-value transactions", measures: "Enhanced due diligence, ongoing monitoring" }
          ]
        },
        {
          aspect: "Ongoing Monitoring",
          activities: [
            "Periodic KYC updation (Low risk: 10 years, Medium: 8 years, High: 2 years)",
            "Transaction monitoring and screening",
            "Alert generation for suspicious patterns",
            "Customer profile review and risk re-assessment"
          ]
        },
        {
          aspect: "Record Keeping",
          requirements: [
            "Maintain KYC records for 5 years after account closure",
            "Preserve transaction records for 5 years",
            "Document risk categorization rationale",
            "Maintain audit trail for all KYC activities"
          ]
        }
      ],
      suspiciousIndicators: [
        "Transactions inconsistent with customer profile",
        "Unusual cash deposits or withdrawals",
        "Multiple accounts with insufficient purpose",
        "Frequent fund transfers to high-risk jurisdictions",
        "Reluctance to provide KYC information",
        "Transactions split to avoid reporting threshold"
      ]
    },

    // NEW: Digital Payment Compliance
    digitalPayments: {
      title: "Digital Payment Systems Compliance",
      description: "Regulatory framework for payment aggregators, wallets, and fintech platforms",
      categories: [
        {
          type: "Payment Aggregators (PA)",
          licensingRequirements: [
            "Net worth of ₹15 crore at the time of application",
            "Net worth of ₹25 crore by March 31, 2026",
            "Escrow account maintenance for settlement",
            "Board-approved policies for baseline technology"
          ],
          operationalGuidelines: [
            "Customer authentication and authorization",
            "Dispute resolution mechanism within 30 days",
            "Data localization and security standards",
            "Annual system audit certification"
          ]
        },
        {
          type: "Prepaid Payment Instruments (PPI)",
          categories: [
            { name: "Small PPI", limit: "₹10,000", kyc: "Minimum details", reloadable: "Yes" },
            { name: "Minimum Detail PPI", limit: "₹1,00,000", kyc: "Officially valid document", reloadable: "Yes" },
            { name: "Full KYC PPI", limit: "₹2,00,000", kyc: "Full KYC", reloadable: "Yes" }
          ],
          requirements: [
            "RBI authorization required for issuance",
            "Minimum net worth ₹25 crore for PPI-MD and Full KYC",
            "100% escrow for outstanding value",
            "Interoperability compliance from 2022"
          ]
        },
        {
          type: "Payment Gateways",
          requirements: [
            "Authorization from RBI or partnership with authorized PA",
            "PCI-DSS compliance for card data security",
            "Customer authentication protocols",
            "Transaction monitoring and fraud prevention"
          ]
        }
      ]
    },

    // NEW: Forex Operations
    forexCompliance: {
      title: "Foreign Exchange Operations Compliance",
      description: "Guidelines for authorized dealers and money changers",
      authorizedDealers: {
        categories: [
          {
            type: "Category-I",
            scope: "Full range of foreign exchange transactions",
            eligibility: "Scheduled commercial banks with strong financials"
          },
          {
            type: "Category-II",
            scope: "Purchase and sale of foreign exchange, money changing",
            eligibility: "Entities other than banks meeting capital requirements"
          }
        ],
        obligations: [
          "Maintain proper documentation for all transactions",
          "Report foreign exchange transactions to RBI",
          "Comply with FEMA and RBI master directions",
          "Conduct KYC for all foreign exchange customers",
          "Submit periodic returns and statements"
        ]
      },
      moneyChangers: {
        types: [
          "Full Fledged Money Changers (FFMC)",
          "Restricted Money Changers",
          "Authorized Money Changers at airports"
        ],
        requirements: [
          "Minimum net owned funds as prescribed",
          "Office space with proper security",
          "Fit and proper person criteria for management",
          "Regular reporting to RBI",
          "Annual audit and compliance certificate"
        ]
      }
    },

    // NEW: Compliance Violations
    violations: {
      title: "Common RBI Compliance Violations & Penalties",
      description: "Understanding risks and preventive measures",
      commonViolations: [
        {
          violation: "KYC Non-Compliance",
          impact: "Critical",
          penalty: "Monetary penalty up to ₹1 crore, license cancellation in severe cases",
          prevention: "Robust KYC systems, periodic audits, staff training"
        },
        {
          violation: "Delayed or Non-filing of Returns",
          impact: "High",
          penalty: "Penalty of ₹1,000 per day of delay, disciplinary action",
          prevention: "Automated return filing systems, compliance calendars"
        },
        {
          violation: "Capital Adequacy Breach",
          impact: "Critical",
          penalty: "Restrictions on business operations, mandatory corrective action",
          prevention: "Regular capital monitoring, infusion planning"
        },
        {
          violation: "Asset Classification Violations",
          impact: "High",
          penalty: "Monetary penalty, restatement of financials, reputation risk",
          prevention: "Automated NPA tracking, periodic account reviews"
        },
        {
          violation: "Non-reporting of Suspicious Transactions",
          impact: "Critical",
          penalty: "Penalty up to ₹1 lakh, prosecution under PMLA",
          prevention: "Transaction monitoring systems, staff awareness programs"
        }
      ],
      enforcementActions: [
        "Show cause notices",
        "Monetary penalties",
        "Restrictions on business activities",
        "Removal of key managerial personnel",
        "Cancellation of license/registration",
        "Criminal prosecution in severe cases"
      ]
    },

    detailedFeatures: [
      {
        icon: "🏛️",
        title: "NBFC Compliance",
        description:
          "Compliance support for NBFC registration, reporting, and RBI regulations."
      },
      {
        icon: "📑",
        title: "RBI Returns Filing",
        description:
          "Preparation and submission of periodic RBI returns."
      },
      {
        icon: "💸",
        title: "Foreign Remittance Reporting",
        description:
          "Reporting and documentation for cross-border transactions."
      },
      {
        icon: "🔐",
        title: "KYC & AML Compliance",
        description:
          "Ensuring compliance with Know Your Customer and Anti-Money Laundering guidelines."
      },
      {
        icon: "📱",
        title: "Payment Systems Compliance",
        description:
          "Regulatory compliance for payment aggregators, gateways, and digital wallets."
      },
      {
        icon: "🎯",
        title: "Regulatory Audit",
        description:
          "Comprehensive audit of RBI compliance and gap identification."
      }
    ],

    process: {
      title: "Our RBI Compliance Process",
      steps: [
        { number: "01", title: "Review", description: "Assess regulatory applicability." },
        { number: "02", title: "Preparation", description: "Prepare reports and documentation." },
        { number: "03", title: "Submission", description: "File returns with RBI authorities." },
        { number: "04", title: "Follow-Up", description: "Handle queries and maintain ongoing compliance." }
      ]
    },

    faqs: [
      {
        question: "Who needs RBI compliance?",
        answer:
          "NBFCs, financial institutions, payment system operators, and businesses dealing with foreign exchange transactions require RBI compliance."
      },
      {
        question: "What are RBI returns?",
        answer:
          "RBI returns are periodic reports that regulated entities must submit to the Reserve Bank of India."
      },
      {
        question: "How to register an NBFC with RBI?",
        answer:
          "NBFC registration requires minimum net owned funds (₹2 crore for most categories), submission of application with detailed business plan, and approval from RBI. The process typically takes 6-12 months."
      },
      {
        question: "What is the penalty for KYC violations?",
        answer:
          "KYC violations can attract monetary penalties up to ₹1 crore depending on severity. Repeated violations can lead to license cancellation and criminal prosecution under Prevention of Money Laundering Act (PMLA)."
      },
      {
        question: "Do payment aggregators need RBI license?",
        answer:
          "Yes, all payment aggregators must obtain authorization from RBI. Existing PAs were required to apply by June 30, 2021. New applicants need minimum net worth of ₹15 crore at application and ₹25 crore by March 2026."
      }
    ],

    cta: {
      title: "Stay RBI Compliant",
      description: "Avoid penalties with timely RBI filings.",
      primaryButton: "Consult RBI Expert",
      secondaryButton: "Request Call Back"
    }
  },

  sebi: {
    title: "SEBI Regulations Compliance",
    description: "Compliance services under SEBI rules and regulations.",
    features: [
      "Corporate Governance",
      "Listing Compliance",
      "Insider Trading Regulations",
      "SEBI Reporting"
    ],

    hero: {
      title: "SEBI Compliance Services",
      subtitle:
        "Ensuring listed companies and intermediaries comply with SEBI regulations.",
      image: "https://images.pexels.com/photos/6863256/pexels-photo-6863256.jpeg",
      cta: "Get SEBI Assistance"
    },

    about: {
      title: "Professional SEBI Advisory",
      description:
        "We help listed companies, stock brokers, and intermediaries comply with SEBI regulations and corporate governance norms.",
      highlights: [
        "Listing compliance advisory",
        "Corporate governance guidance",
        "Disclosure & reporting support",
        "Insider trading compliance"
      ]
    },

    // NEW sections for SEBI
    regulatoryOverview: {
      title: "SEBI Regulatory Framework",
      introduction: "The Securities and Exchange Board of India (SEBI) regulates the securities market to protect investor interests and promote development of the securities market. SEBI compliance is mandatory for listed companies, market intermediaries, and entities dealing in securities.",
      keyAspects: [
        {
          title: "Listing Obligations",
          description: "Continuous disclosure requirements for listed companies including financial results, corporate actions, and material events.",
          regulations: ["LODR Regulations 2015", "Quarterly disclosures", "Annual reports", "Material event intimations"]
        },
        {
          title: "Corporate Governance",
          description: "Framework for board composition, committee requirements, related party transactions, and governance practices.",
          regulations: ["Board composition norms", "Independent directors", "Audit committee", "Stakeholder relationship committee"]
        },
        {
          title: "Insider Trading",
          description: "Prevention of unfair trading practices using unpublished price sensitive information (UPSI).",
          regulations: ["Code of conduct", "Trading windows", "Pre-clearance", "Disclosure of holdings"]
        },
        {
          title: "Market Intermediaries",
          description: "Registration and compliance requirements for brokers, mutual funds, portfolio managers, and other intermediaries.",
          regulations: ["Registration norms", "Net worth requirements", "Operational guidelines", "Investor protection measures"]
        }
      ]
    },

    // Continue with more SEBI sections...
    detailedFeatures: [
      {
        icon: "📈",
        title: "Listing Compliance",
        description: "Ensure compliance with SEBI listing obligations and disclosures."
      },
      {
        icon: "🏢",
        title: "Corporate Governance",
        description: "Advisory on governance frameworks and board compliance."
      },
      {
        icon: "🚫",
        title: "Insider Trading Regulations",
        description: "Compliance under SEBI (Prohibition of Insider Trading) Regulations."
      },
      {
        icon: "📊",
        title: "Periodic SEBI Reporting",
        description: "Timely submission of required SEBI reports and disclosures."
      },
      {
        icon: "💼",
        title: "Intermediary Registration",
        description: "Assistance with SEBI registration for market intermediaries."
      },
      {
        icon: "⚖️",
        title: "Regulatory Advisory",
        description: "Expert advice on securities law and SEBI regulations."
      }
    ],

    process: {
      title: "Our SEBI Compliance Process",
      steps: [
        { number: "01", title: "Evaluation", description: "Review regulatory applicability." },
        { number: "02", title: "Policy Setup", description: "Draft policies and compliance frameworks." },
        { number: "03", title: "Reporting", description: "Handle SEBI disclosures and filings." },
        { number: "04", title: "Monitoring", description: "Ongoing compliance tracking." }
      ]
    },

    faqs: [
      {
        question: "Who needs SEBI compliance?",
        answer:
          "Listed companies, stock brokers, mutual funds, and other market intermediaries must comply with SEBI regulations."
      }
    ],

    cta: {
      title: "Ensure SEBI Compliance Today",
      description: "Stay compliant with capital market regulations.",
      primaryButton: "Speak to SEBI Consultant",
      secondaryButton: "Download SEBI Guide"
    }
  },

  mca: {
    title: "MCA Compliance Services",
    description: "Complete Ministry of Corporate Affairs compliance solutions.",
    features: [
      "ROC Filings",
      "Annual Returns",
      "Board Resolutions",
      "Statutory Registers"
    ],

    hero: {
      title: "MCA & ROC Compliance Services",
      subtitle:
        "End-to-end compliance under Companies Act and Ministry of Corporate Affairs.",
      image: "https://images.pexels.com/photos/4386367/pexels-photo-4386367.jpeg",
      cta: "Get MCA Support"
    },

    about: {
      title: "Stay Compliant with Companies Act",
      description:
        "We assist companies in fulfilling mandatory ROC filings, annual returns, and maintaining statutory registers under MCA regulations.",
      highlights: [
        "Annual ROC filings",
        "Board meeting compliance",
        "Statutory register maintenance",
        "Companies Act advisory"
      ]
    },

    // NEW sections for MCA
    regulatoryOverview: {
      title: "Companies Act Framework",
      introduction: "The Companies Act, 2013 provides a comprehensive framework for incorporation, management, and dissolution of companies in India. MCA (Ministry of Corporate Affairs) is the regulatory body overseeing compliance.",
      keyAspects: [
        {
          title: "Incorporation & Registration",
          description: "Process and requirements for company formation including name approval, registration, and certificate of incorporation.",
          regulations: ["SPICe+ form", "AOA & MOA", "DIN allocation", "PAN & TAN"]
        },
        {
          title: "Annual Compliances",
          description: "Mandatory annual filings including financial statements, annual returns, and director disclosures.",
          regulations: ["AOC-4 filing", "MGT-7 filing", "DIR-3 KYC", "DPT-3 filing"]
        },
        {
          title: "Board & Meeting Requirements",
          description: "Regulations governing board meetings, general meetings, and committee meetings.",
          regulations: ["Board meeting frequency", "AGM requirements", "Notice requirements", "Minutes maintenance"]
        },
        {
          title: "Director Duties & Liabilities",
          description: "Responsibilities of directors including fiduciary duties, disclosure obligations, and liability provisions.",
          regulations: ["Conflict of interest", "Related party transactions", "Board report", "Director appointments"]
        }
      ]
    },

    detailedFeatures: [
      {
        icon: "📝",
        title: "ROC Filings",
        description: "Filing of forms such as AOC-4, MGT-7, DIR-3 KYC and others."
      },
      {
        icon: "📅",
        title: "Annual Returns",
        description: "Preparation and filing of annual financial statements."
      },
      {
        icon: "✍️",
        title: "Board Resolutions",
        description: "Drafting and maintaining board resolutions and minutes."
      },
      {
        icon: "📚",
        title: "Statutory Registers",
        description: "Maintenance of mandatory registers under Companies Act."
      },
      {
        icon: "🏛️",
        title: "Company Incorporation",
        description: "End-to-end support for company registration and incorporation."
      },
      {
        icon: "🔄",
        title: "Compliance Tracking",
        description: "Ongoing monitoring and compliance calendar management."
      }
    ],

    process: {
      title: "Our MCA Compliance Process",
      steps: [
        { number: "01", title: "Review", description: "Check compliance requirements." },
        { number: "02", title: "Documentation", description: "Prepare required documents." },
        { number: "03", title: "Filing", description: "Submit forms with ROC." },
        { number: "04", title: "Ongoing Support", description: "Continuous compliance monitoring." }
      ]
    },

    faqs: [
      {
        question: "Who needs MCA compliance?",
        answer:
          "All companies registered under the Companies Act must comply with MCA filing requirements."
      }
    ],

    cta: {
      title: "Stay MCA Compliant",
      description: "Avoid penalties with timely ROC filings.",
      primaryButton: "Book MCA Consultation",
      secondaryButton: "Talk to Compliance Expert"
    }
  }
};