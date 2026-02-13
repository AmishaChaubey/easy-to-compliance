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

    complianceCalendar: {
      title: "RBI Compliance Calendar",
      description: "Never miss critical RBI deadlines with our comprehensive calendar",
      deadlines: [
        {
          period: "Monthly",
          filings: [
            { form: "NBS-1/NBS-7", description: "Monthly statement of position for NBFCs", dueDate: "15th of following month" },
            { form: "ALM Statement", description: "Asset-Liability Management return", dueDate: "15th of following month" },
            { form: "CTR Filing", description: "Cash Transaction Report", dueDate: "15th of following month" }
          ]
        },
        {
          period: "Quarterly",
          filings: [
            { form: "NBS-2/NBS-8", description: "Prudential norms return for NBFCs", dueDate: "30 days after quarter end" },
            { form: "NBS-3", description: "Certificate of compliance (deposit-taking NBFCs)", dueDate: "30 days after quarter end" },
            { form: "Fraud Reporting", description: "Fraud incidents and prevention report", dueDate: "15 days after quarter end" }
          ]
        },
        {
          period: "Annual",
          filings: [
            { form: "NBS-9", description: "Annual statement of capital funds", dueDate: "30th June" },
            { form: "Statutory Audit Report", description: "Annual audited financials with auditor's report", dueDate: "As per AGM timeline" },
            { form: "Compliance Certificate", description: "Annual statutory compliance certificate", dueDate: "30th June" }
          ]
        },
        {
          period: "Event-Based",
          filings: [
            { form: "STR", description: "Suspicious Transaction Report", dueDate: "Within 7 days of suspicion" },
            { form: "Change in Management", description: "Intimation of director/CEO changes", dueDate: "Within 15 days of change" },
            { form: "Material Changes", description: "Reporting of material operational changes", dueDate: "Immediate intimation" }
          ]
        }
      ]
    },

    industryGuidance: {
      title: "Sector-Specific RBI Compliance",
      description: "Tailored compliance solutions across financial service segments",
      sectors: [
        {
          name: "Microfinance Institutions",
          challenges: [
            "Fair practices code implementation",
            "Interest rate cap compliance",
            "Over-indebtedness prevention",
            "Household income assessment requirements"
          ],
          solutions: [
            "Automated interest rate monitoring",
            "Credit bureau integration for indebtedness check",
            "Field officer training programs",
            "Responsible lending framework implementation"
          ]
        },
        {
          name: "Fintech & Payment Companies",
          challenges: [
            "PA-PG authorization requirements",
            "Data localization mandates",
            "Customer grievance redressal timelines",
            "Cybersecurity and system audit compliance"
          ],
          solutions: [
            "RBI authorization application support",
            "Data infrastructure advisory",
            "Grievance management system setup",
            "IS audit and cybersecurity framework"
          ]
        },
        {
          name: "Housing Finance Companies",
          challenges: [
            "Priority sector classification",
            "LTV ratio compliance for different property types",
            "Fair practices in lending",
            "Asset classification specific to housing loans"
          ],
          solutions: [
            "Loan categorization frameworks",
            "LTV monitoring systems",
            "Customer communication protocols",
            "Specialized NPA management"
          ]
        },
        {
          name: "Gold Loan NBFCs",
          challenges: [
            "LTV ratio limits (75% for gold loans)",
            "Valuation and appraisal standards",
            "Auction procedures for unredeemed pledges",
            "Storage and security requirements"
          ],
          solutions: [
            "Automated LTV calculation and monitoring",
            "Standardized valuation processes",
            "Compliant auction frameworks",
            "Vault management and insurance advisory"
          ]
        },
        {
          name: "Equipment Finance NBFCs",
          challenges: [
            "Asset classification for lease and hire purchase",
            "Repossession and recovery procedures",
            "Concentration risk management",
            "End-use monitoring of financed equipment"
          ],
          solutions: [
            "Lease accounting compliance",
            "Recovery SOP development",
            "Sector exposure tracking",
            "Collateral monitoring systems"
          ]
        },
        {
          name: "Peer-to-Peer Lending Platforms",
          challenges: [
            "NBFC-P2P registration and compliance",
            "Exposure limits (₹50,000 per lender across all platforms)",
            "Escrow account management",
            "Recovery agent regulations"
          ],
          solutions: [
            "Platform registration assistance",
            "Automated exposure limit monitoring",
            "Escrow mechanism implementation",
            "Fair recovery practices framework"
          ]
        }
      ]
    },

    caseStudies: {
      title: "RBI Compliance Success Stories",
      description: "Real-world transformations we've enabled",
      studies: [
        {
          title: "NBFC Registration - From Application to Approval",
          industry: "Fintech Lending",
          challenge: "A fintech startup providing digital lending solutions needed NBFC-ICC registration to scale operations. The founders had limited understanding of RBI requirements and faced complexity in documentation and compliance frameworks.",
          solution: "We handled end-to-end registration including business plan preparation, financial projections, NOF certification, and RBI application. Post-registration, we established complete compliance infrastructure including NPA recognition systems, ALM framework, and periodic return filing mechanisms.",
          outcome: "NBFC registration certificate obtained within 8 months. Compliance framework established for sustainable operations with zero regulatory gaps.",
          impact: "Enabled company to raise ₹100 crore in debt funding, scaled lending book from ₹10 crore to ₹500 crore in 2 years"
        },
        {
          title: "Payment Aggregator Authorization - Fintech Success",
          industry: "Digital Payments",
          challenge: "An existing payment gateway company needed to transition to PA-PG authorization regime. The company had net worth shortfall and needed restructuring to meet RBI's stringent requirements.",
          solution: "Facilitated capital infusion planning to meet net worth requirements, restructured technology infrastructure for data localization, established grievance redressal mechanism, and prepared comprehensive application with business continuity plans.",
          outcome: "Successfully obtained PA authorization within RBI timelines. Zero business disruption during transition period.",
          impact: "Preserved ₹800 crore annual processing volume, maintained 5000+ merchant relationships"
        },
        {
          title: "KYC Compliance Overhaul - Avoided Penalties",
          industry: "Microfinance",
          challenge: "An MFI with 50,000+ customers faced RBI inspection highlighting serious KYC deficiencies including incomplete documentation, lack of risk categorization, and missing beneficial ownership verification.",
          solution: "Conducted comprehensive KYC audit of entire customer base, implemented digital KYC collection system, trained 200+ field officers, established centralized KYC review team, and developed real-time compliance dashboards.",
          outcome: "Remediated 95% of KYC gaps within 6 months. Passed RBI follow-up inspection with zero major observations.",
          impact: "Avoided potential penalty of ₹2+ crore, restored regulatory standing, prevented license suspension"
        },
        {
          title: "NPA Management - Turnaround Story",
          industry: "Vehicle Finance NBFC",
          challenge: "NBFC had gross NPA of 8.2% due to incorrect asset classification, delayed recognition, and inadequate provisioning. The company faced capital adequacy concerns and regulatory scrutiny.",
          solution: "Implemented automated NPA tracking integrated with collection systems, restructured portfolio with proper documentation, established early warning indicators for asset quality, and created provisioning buffer for stressed accounts.",
          outcome: "Reduced gross NPA to 4.1% within 18 months. Improved CRAR from 14.8% to 18.5%.",
          impact: "Restored investor confidence, reduced cost of borrowing by 150 bps, expanded lending capacity"
        }
      ]
    },

    resources: {
      title: "RBI Compliance Resources",
      description: "Essential tools and knowledge base for regulatory compliance",
      tools: [
        {
          name: "NBFC Compliance Checklist",
          description: "Comprehensive checklist covering all NBFC compliance requirements",
          type: "Excel Template"
        },
        {
          name: "KYC Document Requirements Matrix",
          description: "Quick reference for KYC documents across customer categories",
          type: "PDF Guide"
        },
        {
          name: "NPA Classification Calculator",
          description: "Tool for determining asset classification and provisioning requirements",
          type: "Interactive Tool"
        },
        {
          name: "RBI Return Filing Calendar",
          description: "Automated reminder system for all periodic returns",
          type: "Calendar Integration"
        },
        {
          name: "Capital Adequacy Calculator",
          description: "CRAR computation tool with risk weight automation",
          type: "Excel Model"
        },
        {
          name: "RBI Circular Digest",
          description: "Monthly summary of important RBI circulars and updates",
          type: "Newsletter"
        }
      ],
      guides: [
        {
          title: "NBFC Registration: Step-by-Step Guide",
          topics: ["Eligibility criteria", "Documentation requirements", "Application process", "Post-registration compliance"],
          readTime: "20 min"
        },
        {
          title: "KYC & AML Compliance Handbook",
          topics: ["Customer identification", "Risk categorization", "Suspicious transaction reporting", "Record keeping"],
          readTime: "25 min"
        },
        {
          title: "Payment Aggregator Authorization Guide",
          topics: ["Eligibility and net worth", "Technology requirements", "Application process", "Ongoing compliance"],
          readTime: "18 min"
        },
        {
          title: "Asset Classification & Provisioning",
          topics: ["NPA recognition norms", "Asset categories", "Provisioning requirements", "Restructuring guidelines"],
          readTime: "15 min"
        }
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
      },
      {
        question: "What is CRAR and what is the minimum requirement?",
        answer:
          "CRAR (Capital to Risk-weighted Assets Ratio) measures capital adequacy of NBFCs. RBI mandates minimum CRAR of 15% for all NBFCs. This ensures the entity has sufficient capital buffer to absorb potential losses."
      },
      {
        question: "When is an asset classified as NPA?",
        answer:
          "As per RBI norms, an asset is classified as Non-Performing Asset (NPA) if interest or principal remains overdue for a period of 90 days. However, for certain categories like agricultural loans, different norms may apply."
      },
      {
        question: "What are the different categories of NBFCs?",
        answer:
          "Main categories include: NBFC-Investment and Credit Company (ICC), NBFC-Infrastructure Finance Company (IFC), NBFC-Microfinance Institution (MFI), NBFC-Factors, NBFC-Account Aggregator, and NBFC-Peer to Peer Lending Platform. Each has specific regulations and minimum capital requirements."
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

    complianceCalendar: {
      title: "SEBI Compliance Calendar",
      description: "Stay on track with critical SEBI compliance deadlines for listed companies",
      deadlines: [
        {
          period: "Quarterly",
          filings: [
            { form: "Financial Results", description: "Standalone and consolidated quarterly results", dueDate: "45 days from quarter end" },
            { form: "Corporate Governance Report", description: "Compliance report on governance norms", dueDate: "21 days from quarter end" },
            { form: "Shareholding Pattern", description: "Report on shareholding distribution", dueDate: "21 days from quarter end" },
            { form: "Statement of Investor Complaints", description: "Complaints received and resolved", dueDate: "21 days from quarter end" }
          ]
        },
        {
          period: "Half-Yearly",
          filings: [
            { form: "Related Party Transactions", description: "Disclosure of RPTs on consolidated basis", dueDate: "Within 15 days of publication of results" },
            { form: "Compliance Certificate", description: "Certificate on share transfer compliance", dueDate: "Within 30 days of half year" }
          ]
        },
        {
          period: "Annual",
          filings: [
            { form: "Annual Report", description: "Complete annual report with financials", dueDate: "21 days before AGM" },
            { form: "Annual Secretarial Compliance Report", description: "Report on all applicable compliances", dueDate: "Within 60 days of FY end" },
            { form: "CEO/CFO Certification", description: "Certification on financial statements", dueDate: "Before board approval of results" },
            { form: "Business Responsibility Report", description: "For top 1000 listed entities", dueDate: "With annual report" }
          ]
        },
        {
          period: "Event-Based",
          filings: [
            { form: "Material Events", description: "Immediate disclosure of material events", dueDate: "Within 24 hours of event" },
            { form: "Board Meeting Intimation", description: "Notice of board meeting", dueDate: "At least 5 days in advance" },
            { form: "Outcome of Board Meeting", description: "Decisions taken in board meeting", dueDate: "Within 30 minutes of meeting conclusion" }
          ]
        }
      ]
    },

    industryGuidance: {
      title: "Sector-Specific SEBI Compliance",
      description: "Specialized compliance solutions for different market segments",
      sectors: [
        {
          name: "IT & Software Companies",
          challenges: [
            "Revenue recognition compliance under Ind AS",
            "Disclosure of client concentration risks",
            "Employee stock option (ESOP) accounting",
            "Segment reporting for diverse service lines"
          ],
          solutions: [
            "Quarterly revenue audit and certification",
            "Risk disclosure framework implementation",
            "ESOP valuation and disclosure support",
            "Segment-wise financial reporting systems"
          ]
        },
        {
          name: "Banking & Financial Services",
          challenges: [
            "Dual regulation under RBI and SEBI",
            "NPA disclosure requirements",
            "Capital adequacy reporting",
            "Related party transactions with group entities"
          ],
          solutions: [
            "Coordinated RBI-SEBI compliance calendar",
            "Asset quality review and disclosure",
            "Basel III compliance reporting",
            "RPT approval and disclosure framework"
          ]
        },
        {
          name: "Pharmaceuticals",
          challenges: [
            "R&D expense capitalization disclosures",
            "Product approval impact on stock price",
            "USFDA inspection outcomes disclosure",
            "Patent litigation material events"
          ],
          solutions: [
            "R&D accounting policy formulation",
            "Timely material event disclosure protocols",
            "Regulatory inspection disclosure framework",
            "Litigation tracking and reporting"
          ]
        },
        {
          name: "Real Estate & Infrastructure",
          challenges: [
            "Project-wise revenue recognition",
            "Land bank disclosure requirements",
            "Construction progress reporting",
            "Joint venture and SPV disclosures"
          ],
          solutions: [
            "Project accounting systems",
            "Asset disclosure frameworks",
            "Progress monitoring and reporting",
            "Consolidated financial statement preparation"
          ]
        },
        {
          name: "Manufacturing & Automotive",
          challenges: [
            "Inventory valuation disclosures",
            "Raw material price fluctuation impacts",
            "Plant closure or expansion announcements",
            "Supply chain disruption disclosures"
          ],
          solutions: [
            "Inventory accounting policy compliance",
            "Commodity hedging disclosure support",
            "Material event identification protocols",
            "Business continuity disclosure frameworks"
          ]
        },
        {
          name: "E-commerce & Retail",
          challenges: [
            "Customer acquisition cost disclosures",
            "Platform vs inventory model distinction",
            "Marketplace transaction reporting",
            "Festive season impact materiality"
          ],
          solutions: [
            "Business model disclosure frameworks",
            "Revenue stream clarification",
            "Segment reporting implementation",
            "Seasonality disclosure protocols"
          ]
        }
      ]
    },

    violations: {
      title: "Common SEBI Violations & Enforcement",
      description: "Understanding regulatory risks and maintaining compliance discipline",
      commonViolations: [
        {
          violation: "Delayed Financial Results",
          impact: "Critical",
          penalty: "Fine of ₹5,000 per day for listed entity and ₹1,000 per day for CEO/CFO, suspension of trading",
          prevention: "Robust quarter-end closing process, audit coordination, pre-closure reviews"
        },
        {
          violation: "Non-disclosure of Material Events",
          impact: "Critical",
          penalty: "Penalty up to ₹25 crore or 3 times profit, debarment of directors",
          prevention: "Material event identification framework, compliance officer training, disclosure protocols"
        },
        {
          violation: "Insider Trading",
          impact: "Critical",
          penalty: "Penalty up to ₹25 crore or 3 times profit, imprisonment up to 10 years",
          prevention: "Strict code of conduct, trading window enforcement, UPSI handling protocols"
        },
        {
          violation: "Corporate Governance Violations",
          impact: "High",
          penalty: "Fine up to ₹1 lakh per day, replacement of non-compliant directors",
          prevention: "Board composition monitoring, committee compliance tracking, independence verification"
        },
        {
          violation: "Inadequate Related Party Disclosures",
          impact: "High",
          penalty: "Monetary penalties, restatement of financials, audit committee penalties",
          prevention: "RPT policy implementation, materiality threshold monitoring, quarterly RPT reviews"
        },
        {
          violation: "Non-compliance with Shareholding Pattern",
          impact: "Medium",
          penalty: "Fine up to ₹1 lakh per day of delay",
          prevention: "Automated reconciliation systems, depository linkage, timely data collection"
        }
      ],
      enforcementMechanism: {
        title: "SEBI Enforcement Process",
        steps: [
          "Surveillance and market monitoring",
          "Preliminary inquiry and investigation",
          "Show cause notice issuance",
          "Reply and personal hearing",
          "Adjudication order",
          "Recovery proceedings or appeals"
        ],
        timeline: "6 months to 2 years depending on complexity",
        consequences: ["Monetary penalties", "Disgorgement of profits", "Debarment from markets", "Director disqualification", "Criminal prosecution"]
      }
    },

    caseStudies: {
      title: "SEBI Compliance Success Stories",
      description: "How we've helped companies navigate complex regulatory challenges",
      studies: [
        {
          title: "Tech Unicorn IPO - Complete Listing Compliance Setup",
          industry: "Technology",
          challenge: "A tech unicorn preparing for IPO needed to establish comprehensive SEBI compliance infrastructure from scratch. The company had complex ESOP structures, multiple share classes, and international subsidiaries requiring consolidated reporting.",
          solution: "We established complete governance framework including board committees, insider trading code, RPT policy, and disclosure procedures. Implemented automated compliance tracking systems and trained management on LODR obligations.",
          outcome: "Successful IPO listing with zero compliance deficiencies. All pre-IPO disclosures completed on time, enabling smooth regulatory approvals.",
          impact: "₹5,000 crore IPO completed successfully, robust compliance culture established for ongoing operations"
        },
        {
          title: "Banking Major - Material Event Disclosure Framework",
          industry: "Financial Services",
          challenge: "A large private sector bank faced scrutiny for delayed disclosure of NPA provisioning requirements. SEBI initiated inquiry for potential material event non-disclosure.",
          solution: "We developed a comprehensive material event identification matrix, established cross-functional disclosure committee, and implemented real-time monitoring dashboards for potential material events.",
          outcome: "Successfully represented the bank before SEBI, demonstrated adequate processes going forward, avoided major penalties.",
          impact: "Reduced disclosure timeline from 48 hours to 6 hours, prevented potential penalty of ₹10+ crore"
        },
        {
          title: "Pharma Company - Insider Trading Code Implementation",
          industry: "Pharmaceuticals",
          challenge: "Post a major insider trading allegation against a key executive, the company needed to overhaul its insider trading prevention mechanisms and restore investor confidence.",
          solution: "Implemented digital pre-clearance platform, structured trading window calendar aligned with results disclosure, established designated persons list with automated monitoring, and conducted company-wide UPSI handling training.",
          outcome: "Zero insider trading violations in 3 years post-implementation, successful SEBI audit clearance.",
          impact: "Restored investor confidence, stock price recovered 40% within 6 months of framework implementation"
        },
        {
          title: "Infrastructure Conglomerate - Related Party Transaction Compliance",
          industry: "Infrastructure",
          challenge: "A diversified infrastructure group with 200+ entities faced challenges in identifying and disclosing related party transactions across group companies, leading to compliance gaps.",
          solution: "Developed automated RPT tracking system integrating with accounting software, established materiality thresholds, implemented quarterly RPT review process with audit committee, and created consolidated RPT disclosure framework.",
          outcome: "100% RPT identification and disclosure, audit qualifications removed, improved governance ratings.",
          impact: "Enhanced ESG scores by 25 points, avoided potential restatement of 3 years of financials"
        }
      ]
    },

    resources: {
      title: "SEBI Compliance Resources",
      description: "Comprehensive tools and guides for maintaining regulatory compliance",
      tools: [
        {
          name: "LODR Compliance Checklist",
          description: "Complete checklist covering all Listing Obligations and Disclosure Requirements",
          type: "Interactive PDF"
        },
        {
          name: "Material Event Assessment Tool",
          description: "Decision tree for determining materiality and disclosure requirements",
          type: "Excel Tool"
        },
        {
          name: "Corporate Governance Scorecard",
          description: "Self-assessment tool for evaluating governance compliance",
          type: "Dashboard"
        },
        {
          name: "Insider Trading Code Template",
          description: "Ready-to-use code of conduct for insider trading prevention",
          type: "Word Template"
        },
        {
          name: "RPT Policy Generator",
          description: "Customizable related party transaction policy framework",
          type: "Document Template"
        },
        {
          name: "SEBI Circular Tracker",
          description: "Real-time updates on new SEBI regulations and amendments",
          type: "Email Alert System"
        }
      ],
      guides: [
        {
          title: "Complete Guide to LODR Compliance",
          topics: ["Quarterly disclosures", "Annual reporting", "Material events", "Corporate actions"],
          readTime: "25 min"
        },
        {
          title: "Insider Trading Prevention Handbook",
          topics: ["UPSI definition", "Trading windows", "Pre-clearance procedures", "Disclosure requirements"],
          readTime: "18 min"
        },
        {
          title: "Corporate Governance Best Practices",
          topics: ["Board composition", "Committee formation", "Independent directors", "Performance evaluation"],
          readTime: "22 min"
        },
        {
          title: "IPO Compliance Roadmap",
          topics: ["Pre-IPO preparations", "Offer document", "Listing process", "Post-listing obligations"],
          readTime: "30 min"
        }
      ]
    },

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
      },
      {
        question: "What is LODR and who does it apply to?",
        answer:
          "LODR (Listing Obligations and Disclosure Requirements) Regulations, 2015 apply to all companies whose securities are listed on recognized stock exchanges in India. It mandates continuous disclosures, corporate governance norms, and investor protection measures."
      },
      {
        question: "What is considered a material event under SEBI regulations?",
        answer:
          "Material events are those which may have a bearing on the performance/operations of the listed entity or price-sensitive information. Examples include: major contracts, mergers & acquisitions, changes in key management, regulatory actions, credit rating changes, and significant financial events. These must be disclosed within 24 hours."
      },
      {
        question: "What are the requirements for independent directors?",
        answer:
          "Listed companies must have at least one-third of the board as independent directors (half for companies where chairman is executive/promoter). Independent directors must meet independence criteria, serve maximum 2 consecutive terms of 5 years each, and cannot hold more than 7 listed company directorships (3 if MD/WTD elsewhere)."
      },
      {
        question: "How does the insider trading code work?",
        answer:
          "Companies must frame an insider trading code covering: identification of insiders and connected persons, trading window closure periods (typically before financial results), pre-clearance requirements for trades above threshold, and disclosure of holdings. Designated persons must disclose their trades and cannot trade during closure periods."
      },
      {
        question: "What are related party transactions (RPT) and how are they regulated?",
        answer:
          "RPTs are transactions between the company and its related parties (promoters, directors, key management, group companies). Material RPTs require prior shareholder approval. All RPTs must be at arm's length and in ordinary course of business. Quarterly disclosure and audit committee approval is mandatory."
      },
      {
        question: "What is the timeline for filing quarterly results?",
        answer:
          "Listed companies must file quarterly financial results within 45 days from end of quarter. For companies with listed debt securities only, the timeline is 45 days for Q1, Q2, Q3 and 60 days for Q4. Results must be accompanied by limited review report by auditors."
      },
      {
        question: "What is the penalty for delayed disclosure of financial results?",
        answer:
          "Listed entity is liable to pay fine of ₹5,000 per day of delay, and each director/officer in default faces ₹1,000 per day. Additionally, stock exchange may suspend trading in securities. Persistent delays can lead to delisting proceedings and further regulatory action."
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

    complianceCalendar: {
      title: "MCA Compliance Calendar",
      description: "Never miss critical ROC deadlines with our comprehensive filing calendar",
      deadlines: [
        {
          period: "Quarterly",
          filings: [
            { form: "Board Meeting", description: "Mandatory board meeting every quarter", dueDate: "Within 120 days of previous meeting" },
            { form: "E-form ADT-1", description: "Appointment of auditor (if applicable)", dueDate: "Within 15 days of AGM" }
          ]
        },
        {
          period: "Annual",
          filings: [
            { form: "AOC-4", description: "Filing of financial statements and annual accounts", dueDate: "Within 30 days of AGM" },
            { form: "MGT-7", description: "Annual return filing", dueDate: "Within 60 days of AGM" },
            { form: "DIR-3 KYC", description: "Director KYC filing", dueDate: "By 30th September annually" },
            { form: "Annual General Meeting", description: "Hold AGM within stipulated time", dueDate: "Within 6 months of FY end (30th September)" },
            { form: "ADT-1", description: "Appointment/re-appointment of auditors", dueDate: "Within 15 days of AGM" },
            { form: "DPT-3", description: "Return of deposits", dueDate: "On or before 30th June annually" }
          ]
        },
        {
          period: "Event-Based",
          filings: [
            { form: "DIR-12", description: "Changes in directors (appointment/resignation)", dueDate: "Within 30 days of change" },
            { form: "MGT-14", description: "Filing of board/shareholder resolutions", dueDate: "Within 30 days of passing resolution" },
            { form: "SH-7", description: "Alteration in share capital", dueDate: "Within 30 days of alteration" },
            { form: "INC-22", description: "Notice of situation/change of registered office", dueDate: "Within 30 days of change" },
            { form: "INC-28", description: "Change in name of company", dueDate: "Within 30 days of special resolution" }
          ]
        },
        {
          period: "Periodic Compliance",
          filings: [
            { form: "Board Meetings", description: "Minimum 4 board meetings per year", dueDate: "Gap not more than 120 days" },
            { form: "Audit Committee Meeting", description: "For applicable companies", dueDate: "At least 4 times a year" },
            { form: "Statutory Registers", description: "Maintenance of mandatory registers", dueDate: "Ongoing" }
          ]
        }
      ]
    },

    industryGuidance: {
      title: "Entity-Specific MCA Compliance",
      description: "Tailored compliance solutions for different company types",
      sectors: [
        {
          name: "Private Limited Companies",
          challenges: [
            "Minimum 2 directors and 2 shareholders requirement",
            "Restrictions on transfer of shares",
            "Compliance with related party transaction norms",
            "Maintenance of statutory books and registers"
          ],
          solutions: [
            "Director appointment and KYC compliance",
            "Share transfer documentation and filing",
            "RPT policy framework and approval matrix",
            "Digital register maintenance systems"
          ]
        },
        {
          name: "One Person Company (OPC)",
          challenges: [
            "Nominee director appointment requirement",
            "Conversion to private limited on threshold breach",
            "Annual compliance with relaxed norms",
            "Limited business activity restrictions"
          ],
          solutions: [
            "Nominee appointment documentation",
            "Threshold monitoring and timely conversion",
            "Simplified compliance management",
            "Business expansion advisory"
          ]
        },
        {
          name: "Public Limited Companies",
          challenges: [
            "Minimum 7 shareholders and 3 directors",
            "Mandatory audit committee and nomination committee",
            "Stringent disclosure and transparency requirements",
            "Quarterly compliance monitoring"
          ],
          solutions: [
            "Board constitution and committee formation",
            "Comprehensive compliance calendar",
            "Disclosure framework implementation",
            "Quarterly compliance tracking"
          ]
        },
        {
          name: "Section 8 Companies (NPO)",
          challenges: [
            "License renewal and compliance with objectives",
            "Restrictions on profit distribution",
            "Minimum 2 directors requirement",
            "Application of income for charitable purposes"
          ],
          solutions: [
            "License maintenance and renewal support",
            "Governance framework for NPOs",
            "Director compliance management",
            "Fund utilization tracking and reporting"
          ]
        },
        {
          name: "Foreign Companies",
          challenges: [
            "Filing of FC-1 and FC-2 forms",
            "Annual accounts filing in prescribed format",
            "Changes in directors and authorized representatives",
            "Compliance with Indian accounting standards"
          ],
          solutions: [
            "Foreign company registration assistance",
            "Ongoing filing and disclosure support",
            "Liaison with Indian representatives",
            "Accounting standard compliance advisory"
          ]
        },
        {
          name: "Startups & Small Companies",
          challenges: [
            "Exemptions under small company criteria",
            "Startup India registration benefits",
            "Compliance relaxations and their applicability",
            "Cost-effective compliance management"
          ],
          solutions: [
            "Small company criteria assessment",
            "Startup registration and benefits advisory",
            "Optimized compliance frameworks",
            "Affordable compliance packages"
          ]
        }
      ]
    },

    violations: {
      title: "Common MCA Violations & Penalties",
      description: "Understanding non-compliance risks and ensuring timely adherence",
      commonViolations: [
        {
          violation: "Delayed Filing of Annual Returns (MGT-7)",
          impact: "High",
          penalty: "₹100 per day of delay (company) + ₹100 per day per officer in default. Maximum penalty can go up to ₹5 lakh for company",
          prevention: "Automated compliance calendar, advance preparation of annual return, timely AGM scheduling"
        },
        {
          violation: "Non-filing of Financial Statements (AOC-4)",
          impact: "Critical",
          penalty: "₹1,000 per day of delay for company and every officer. Can lead to striking off of company name from register",
          prevention: "Timely audit completion, advance board meeting scheduling, systematic documentation"
        },
        {
          violation: "Non-compliance with Board Meeting Requirements",
          impact: "High",
          penalty: "₹25,000 fine for company and ₹5,000 for each director. Repeated violations can lead to director disqualification",
          prevention: "Quarterly board meeting calendar, automated reminders, proper notice and agenda circulation"
        },
        {
          violation: "Failure to File DIR-3 KYC",
          impact: "Critical",
          penalty: "DIN becomes deactivated/marked as 'Deactivated due to non-filing of DIR-3 KYC'. Penalty of ₹5,000 for delayed filing",
          prevention: "Annual DIR-3 KYC filing reminder system, director database maintenance"
        },
        {
          violation: "Non-maintenance of Statutory Registers",
          impact: "Medium",
          penalty: "₹50,000 fine for company and ₹1,000 per day for continuing violation per officer",
          prevention: "Digital statutory register systems, regular updates, dedicated compliance personnel"
        },
        {
          violation: "Acceptance of Deposits without Compliance",
          impact: "Critical",
          penalty: "Imprisonment up to 7 years and fine up to ₹50 crore. Company liable to refund with interest",
          prevention: "Understanding deposit regulations, legal opinion for any fund raising, proper documentation"
        }
      ],
      strikeOffProcess: {
        title: "Company Strike-Off & Dormant Status",
        strikeOff: {
          grounds: [
            "Non-filing of financial statements/annual returns for continuous 2 years",
            "Non-commencement of business within 1 year of incorporation",
            "Not carrying on business for 2 immediately preceding financial years",
            "Defunct company"
          ],
          consequences: ["Company name removed from ROC", "Dissolution of company", "Assets vest with government", "Revival requires NCLT approval"]
        },
        dormantStatus: {
          eligibility: "Company formed for future project or holding asset with no significant accounting transactions",
          process: ["File MSC-1 along with indemnity bond", "File MSC-3 every year", "File MSC-4 for becoming active again"],
          benefits: ["Reduced compliance burden", "Lower penalties", "Easy revival process"]
        }
      }
    },

    caseStudies: {
      title: "MCA Compliance Success Stories",
      description: "How we've helped companies maintain perfect ROC compliance",
      studies: [
        {
          title: "Startup to Public Company - Complete Transformation",
          industry: "Technology",
          challenge: "A rapidly growing tech startup needed to convert from private to public limited company in preparation for listing. The company had pending compliances for 2 years including unfiled annual returns, board meeting gaps, and unresolved audit qualifications.",
          solution: "We conducted comprehensive compliance audit, filed all pending forms with condonation applications, regularized board meetings, resolved audit qualifications, and executed seamless conversion to public limited company. Post-conversion, established robust compliance framework with quarterly reviews.",
          outcome: "All 18 pending compliances cleared within 90 days. Successful conversion to public limited company. Zero compliance gaps at the time of SEBI due diligence for IPO.",
          impact: "Enabled ₹800 crore IPO, established compliance culture preventing future violations"
        },
        {
          title: "Preventing Strike-Off - Last Minute Rescue",
          industry: "Manufacturing",
          challenge: "A manufacturing company received strike-off notice from ROC for non-filing of returns for 2 consecutive years. The company had been dormant but directors were unaware of ongoing compliance requirements.",
          solution: "Filed urgent representation against strike-off notice with detailed explanation. Simultaneously filed all pending returns (4 years of AOC-4 and MGT-7) with additional fees and condonation. Regularized director KYC and updated registered office details.",
          outcome: "Strike-off proceedings dropped by ROC. Company restored to active status with all compliances up to date.",
          impact: "Saved company from dissolution, preserved ₹50 crore asset base, avoided NCLT revival proceedings costing ₹10+ lakh"
        },
        {
          title: "Section 8 Company - License Renewal & Compliance",
          industry: "Non-Profit",
          challenge: "An educational trust operating as Section 8 company faced potential license cancellation due to non-compliance with charitable objects and delayed filing of annual documents.",
          solution: "Prepared detailed report demonstrating application of funds for charitable purposes, regularized all pending filings, restructured activities to align with MOA objectives, and established quarterly compliance review mechanism.",
          outcome: "License retained, compliance status restored, received appreciation from ROC for improved governance.",
          impact: "Continued operations serving 5,000+ students annually, maintained tax exemptions worth ₹2 crore per year"
        },
        {
          title: "Multi-Subsidiary Group - Centralized Compliance Management",
          industry: "Retail",
          challenge: "A retail group with 25 subsidiary companies faced compliance chaos with multiple missed deadlines, inconsistent documentation, and lack of centralized oversight. Annual compliance cost was ₹40 lakh with frequent penalties.",
          solution: "Implemented group-level compliance management system with centralized calendar, standardized documentation templates, automated reminder systems, and dedicated compliance team. Created dashboard for real-time compliance status tracking across all entities.",
          outcome: "Zero missed deadlines in subsequent 3 years. Reduced compliance cost by 35% through efficiency. Avoided penalties worth ₹15 lakh annually.",
          impact: "Improved governance ratings, investor confidence increased, streamlined operations across group"
        }
      ]
    },

    resources: {
      title: "MCA Compliance Resources",
      description: "Essential tools and guides for maintaining corporate compliance",
      tools: [
        {
          name: "Annual Compliance Checklist",
          description: "Month-wise compliance calendar for companies",
          type: "Excel Template"
        },
        {
          name: "Board Resolution Templates",
          description: "Ready-to-use templates for common board resolutions",
          type: "Word Documents"
        },
        {
          name: "Statutory Register Formats",
          description: "Prescribed formats for all mandatory registers",
          type: "Excel Templates"
        },
        {
          name: "Fee Calculator",
          description: "Calculate ROC filing fees including additional fees for delays",
          type: "Interactive Tool"
        },
        {
          name: "Form Requirement Matrix",
          description: "Quick reference for which form to file for different events",
          type: "PDF Guide"
        },
        {
          name: "MCA Notification Tracker",
          description: "Updates on latest MCA circulars and rule changes",
          type: "Email Alerts"
        }
      ],
      guides: [
        {
          title: "Company Incorporation Guide",
          topics: ["Name approval", "SPICe+ filing", "Post-incorporation compliance", "Initial statutory registers"],
          readTime: "20 min"
        },
        {
          title: "Annual Filing Handbook",
          topics: ["AOC-4 preparation", "MGT-7 filing", "AGM compliance", "Board report requirements"],
          readTime: "25 min"
        },
        {
          title: "Director Compliance Manual",
          topics: ["DIN application", "DIR-3 KYC", "Appointment/resignation procedures", "Disclosure requirements"],
          readTime: "15 min"
        },
        {
          title: "Statutory Meetings Guide",
          topics: ["Board meeting requirements", "AGM/EGM procedures", "Notice requirements", "Minutes drafting"],
          readTime: "18 min"
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
      },
      {
        question: "What is the penalty for delayed filing of annual returns?",
        answer:
          "For MGT-7 (annual return), the penalty is ₹100 per day of delay for the company and ₹100 per day for every officer in default. For AOC-4 (financial statements), it's ₹1,000 per day for company and every officer. The total penalty can go up to ₹5 lakh for the company."
      },
      {
        question: "What is DIR-3 KYC and when should it be filed?",
        answer:
          "DIR-3 KYC is an annual KYC filing required for all directors holding a Director Identification Number (DIN). It must be filed between April 1st and September 30th every year. Non-filing leads to deactivation of DIN and penalty of ₹5,000."
      },
      {
        question: "How many board meetings are mandatory in a year?",
        answer:
          "Minimum 4 board meetings must be held every year with maximum gap of 120 days between two consecutive meetings. At least one meeting must be held in each half of the calendar year. Violation attracts penalty of ₹25,000 for company and ₹5,000 per director."
      },
      {
        question: "What happens if my company doesn't file returns for 2 years?",
        answer:
          "If a company fails to file financial statements or annual returns for continuous 2 years, the Registrar may initiate strike-off proceedings. The company name can be removed from the register of companies, leading to dissolution. Revival requires NCLT proceedings which are time-consuming and expensive."
      },
      {
        question: "What is a small company and what are the exemptions?",
        answer:
          "A small company is one with paid-up capital not exceeding ₹4 crore and turnover not exceeding ₹40 crore. Exemptions include: no requirement for cash flow statement, relaxed board report requirements, lesser quorum for meetings, and certain compliance relaxations. One-person companies and Section 8 companies cannot be classified as small companies."
      },
      {
        question: "Can I file forms after the due date?",
        answer:
          "Yes, most forms can be filed after due date with payment of additional fees. The additional fee structure is: up to 30 days delay - normal additional fees; 31-60 days - 2 times additional fees; 61-90 days - 4 times; 91-180 days - 6 times; beyond 180 days - 10 times normal additional fees. Some forms require condonation of delay."
      },
      {
        question: "What statutory registers must a company maintain?",
        answer:
          "Mandatory registers include: Register of Members, Register of Debenture Holders, Foreign Register (if applicable), Register of Loans/Guarantees/Securities, Register of Investments, Register of Contracts in which Directors are interested, Register of Directors and KMP, Register of Charges, and Minutes Books. These must be maintained at registered office and available for inspection."
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