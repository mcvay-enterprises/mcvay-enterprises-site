export interface Tool {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  categories: string[];
  pricing: string;
  complianceNotes: string;
  websiteUrl: string;
  affiliateUrl: string;
  featured: boolean;
}

export const tools: Tool[] = [
  {
    id: '1',
    name: 'ComplianceGPT',
    slug: 'compliancegpt',
    description: 'AI-powered compliance automation platform for regulatory document analysis and risk assessment.',
    longDescription: 'ComplianceGPT uses advanced language models to analyze regulatory documents, identify compliance gaps, and generate audit-ready reports. It supports multiple regulatory frameworks including SOC 2, GDPR, HIPAA, and ISO 27001.',
    categories: ['Compliance', 'Document Analysis', 'Risk Management'],
    pricing: 'Enterprise - Contact for pricing',
    complianceNotes: 'SOC 2 Type II certified, GDPR compliant, data residency options available',
    websiteUrl: 'https://example.com/compliancegpt',
    affiliateUrl: '',
    featured: true
  },
  {
    id: '2',
    name: 'AuditBot',
    slug: 'auditbot',
    description: 'Automated audit trail generation and compliance monitoring with real-time alerts.',
    longDescription: 'AuditBot continuously monitors your systems and generates comprehensive audit trails that meet regulatory requirements. Features include automated evidence collection, anomaly detection, and customizable compliance dashboards.',
    categories: ['Audit', 'Monitoring', 'Compliance'],
    pricing: 'Starting at $499/month',
    complianceNotes: 'Supports SOC 2, ISO 27001, PCI DSS compliance frameworks',
    websiteUrl: 'https://example.com/auditbot',
    affiliateUrl: '',
    featured: true
  },
  {
    id: '3',
    name: 'PolicyAI',
    slug: 'policyai',
    description: 'Generate, manage, and update compliance policies automatically using AI.',
    longDescription: 'PolicyAI helps organizations create and maintain up-to-date compliance policies. The platform uses AI to suggest policy updates based on regulatory changes and industry best practices.',
    categories: ['Policy Management', 'Documentation', 'Compliance'],
    pricing: 'Free tier available, Pro starts at $199/month',
    complianceNotes: 'Templates for GDPR, CCPA, HIPAA, and other major regulations',
    websiteUrl: 'https://example.com/policyai',
    affiliateUrl: '',
    featured: false
  },
  {
    id: '4',
    name: 'DataGuardian',
    slug: 'dataguardian',
    description: 'Privacy-focused data classification and protection with automated compliance checks.',
    longDescription: 'DataGuardian automatically classifies sensitive data across your organization and applies appropriate protection measures. Features include data discovery, classification, and automated compliance reporting.',
    categories: ['Data Privacy', 'Security', 'Compliance'],
    pricing: 'Starting at $799/month',
    complianceNotes: 'GDPR Article 30 compliant, supports data mapping requirements',
    websiteUrl: 'https://example.com/dataguardian',
    affiliateUrl: '',
    featured: true
  },
  {
    id: '5',
    name: 'RiskScanner',
    slug: 'riskscanner',
    description: 'AI-driven risk assessment and mitigation planning for enterprise compliance.',
    longDescription: 'RiskScanner analyzes your organization\'s systems and processes to identify potential compliance risks. It provides actionable mitigation strategies and tracks remediation progress.',
    categories: ['Risk Management', 'Assessment', 'Compliance'],
    pricing: 'Custom pricing based on organization size',
    complianceNotes: 'Aligns with NIST, ISO 31000 risk management frameworks',
    websiteUrl: 'https://example.com/riskscanner',
    affiliateUrl: '',
    featured: false
  },
  {
    id: '6',
    name: 'TrainingHub AI',
    slug: 'traininghub-ai',
    description: 'Automated compliance training platform with personalized learning paths.',
    longDescription: 'TrainingHub AI creates personalized compliance training programs based on employee roles and regulatory requirements. Includes automated tracking and certification management.',
    categories: ['Training', 'Education', 'Compliance'],
    pricing: 'Starting at $15/user/month',
    complianceNotes: 'Supports compliance training requirements for various regulations',
    websiteUrl: 'https://example.com/traininghub',
    affiliateUrl: '',
    featured: false
  },
  {
    id: '7',
    name: 'VendorVet',
    slug: 'vendorvet',
    description: 'Third-party vendor risk assessment and compliance verification automation.',
    longDescription: 'VendorVet streamlines vendor due diligence by automatically collecting and analyzing vendor security and compliance documentation. Includes continuous monitoring and risk scoring.',
    categories: ['Vendor Management', 'Risk Assessment', 'Compliance'],
    pricing: 'Starting at $599/month',
    complianceNotes: 'Supports SOC 2, ISO 27001 vendor assessment requirements',
    websiteUrl: 'https://example.com/vendorvet',
    affiliateUrl: '',
    featured: true
  },
  {
    id: '8',
    name: 'IncidentIQ',
    slug: 'incidentiq',
    description: 'AI-powered incident response and compliance reporting system.',
    longDescription: 'IncidentIQ automates incident detection, response workflows, and compliance reporting. Features include automated breach notification, timeline reconstruction, and regulatory reporting.',
    categories: ['Incident Response', 'Security', 'Compliance'],
    pricing: 'Enterprise - Contact for pricing',
    complianceNotes: 'GDPR breach notification compliant, supports 72-hour reporting',
    websiteUrl: 'https://example.com/incidentiq',
    affiliateUrl: '',
    featured: false
  },
  {
    id: '9',
    name: 'AccessControl Pro',
    slug: 'accesscontrol-pro',
    description: 'Automated access control management with compliance-driven provisioning.',
    longDescription: 'AccessControl Pro manages user access rights across your organization with automated provisioning, deprovisioning, and periodic access reviews. Ensures least-privilege principles are enforced.',
    categories: ['Access Control', 'Identity Management', 'Compliance'],
    pricing: 'Starting at $399/month',
    complianceNotes: 'Supports SOC 2, ISO 27001 access control requirements',
    websiteUrl: 'https://example.com/accesscontrol',
    affiliateUrl: '',
    featured: false
  },
  {
    id: '10',
    name: 'ContractScan',
    slug: 'contractscan',
    description: 'AI contract analysis for compliance risk identification and management.',
    longDescription: 'ContractScan uses natural language processing to analyze contracts for compliance risks, liability clauses, and regulatory obligations. Provides automated alerts for key dates and obligations.',
    categories: ['Contract Management', 'Legal', 'Compliance'],
    pricing: 'Starting at $299/month',
    complianceNotes: 'Identifies GDPR, CCPA, and other regulatory obligations in contracts',
    websiteUrl: 'https://example.com/contractscan',
    affiliateUrl: '',
    featured: false
  },
  {
    id: '11',
    name: 'EncryptionManager',
    slug: 'encryptionmanager',
    description: 'Centralized encryption key management with compliance tracking.',
    longDescription: 'EncryptionManager provides centralized control over encryption keys across your infrastructure. Features include automated key rotation, compliance reporting, and integration with major cloud providers.',
    categories: ['Encryption', 'Security', 'Compliance'],
    pricing: 'Starting at $899/month',
    complianceNotes: 'FIPS 140-2 compliant, supports HIPAA encryption requirements',
    websiteUrl: 'https://example.com/encryptionmanager',
    affiliateUrl: '',
    featured: false
  },
  {
    id: '12',
    name: 'RegWatch',
    slug: 'regwatch',
    description: 'Regulatory change monitoring and impact analysis platform.',
    longDescription: 'RegWatch continuously monitors regulatory changes across multiple jurisdictions and analyzes their impact on your organization. Provides automated alerts and compliance gap analysis.',
    categories: ['Regulatory Intelligence', 'Monitoring', 'Compliance'],
    pricing: 'Starting at $699/month',
    complianceNotes: 'Covers 100+ regulatory frameworks across multiple industries',
    websiteUrl: 'https://example.com/regwatch',
    affiliateUrl: '',
    featured: true
  },
  {
    id: '13',
    name: 'BackupCompliance',
    slug: 'backupcompliance',
    description: 'Automated backup verification and disaster recovery compliance.',
    longDescription: 'BackupCompliance ensures your backup and disaster recovery processes meet regulatory requirements. Features include automated backup testing, compliance reporting, and recovery time tracking.',
    categories: ['Backup', 'Disaster Recovery', 'Compliance'],
    pricing: 'Starting at $449/month',
    complianceNotes: 'Supports business continuity requirements for SOC 2, ISO 27001',
    websiteUrl: 'https://example.com/backupcompliance',
    affiliateUrl: '',
    featured: false
  },
  {
    id: '14',
    name: 'ConsentManager',
    slug: 'consentmanager',
    description: 'Privacy consent management and tracking system for GDPR/CCPA compliance.',
    longDescription: 'ConsentManager handles user consent collection, storage, and management across all touchpoints. Provides audit trails for consent decisions and automated preference management.',
    categories: ['Privacy', 'Consent Management', 'Compliance'],
    pricing: 'Free tier available, Pro starts at $149/month',
    complianceNotes: 'GDPR Article 7 compliant, supports CCPA opt-out requirements',
    websiteUrl: 'https://example.com/consentmanager',
    affiliateUrl: '',
    featured: false
  },
  {
    id: '15',
    name: 'ComplianceHub',
    slug: 'compliancehub',
    description: 'All-in-one compliance management platform with AI-powered automation.',
    longDescription: 'ComplianceHub is a comprehensive platform that combines multiple compliance tools into one unified system. Features include policy management, risk assessment, audit tracking, training, and reporting.',
    categories: ['Platform', 'All-in-One', 'Compliance'],
    pricing: 'Starting at $1,299/month',
    complianceNotes: 'Supports SOC 2, ISO 27001, GDPR, HIPAA, and 20+ other frameworks',
    websiteUrl: 'https://example.com/compliancehub',
    affiliateUrl: '',
    featured: true
  }
];
