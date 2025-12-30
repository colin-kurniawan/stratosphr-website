// Mock data for the STRATOSPHR application

export interface Client {
  id: string;
  name: string;
  company: string;
  email: string;
  status: "active" | "paused" | "churned";
  plan: "starter" | "professional" | "enterprise";
  mrr: number;
  automationsCount: number;
  lastActivity: string;
  createdAt: string;
}

export interface Automation {
  id: string;
  name: string;
  clientId: string;
  status: "active" | "paused" | "error";
  successRate: number;
  totalExecutions: number;
  lastRun: string;
  avgDuration: string;
  connectedApps: string[];
  triggerType: string;
  schedule?: string;
}

export interface Execution {
  id: string;
  automationId: string;
  automationName: string;
  status: "success" | "failed" | "pending";
  timestamp: string;
  duration: string;
}

export interface SupportTicket {
  id: string;
  subject: string;
  description: string;
  status: "open" | "in_progress" | "resolved" | "closed";
  priority: "low" | "medium" | "high" | "urgent";
  clientId: string;
  clientName: string;
  automationId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Template {
  id: string;
  name: string;
  category: string;
  description: string;
  appsRequired: string[];
  setupTime: string;
  basePrice: number;
  popular: boolean;
}

// Mock Clients
export const mockClients: Client[] = [
  {
    id: "client-1",
    name: "John Smith",
    company: "Acme Corp",
    email: "john@acmecorp.com",
    status: "active",
    plan: "professional",
    mrr: 3500,
    automationsCount: 5,
    lastActivity: "2024-01-15T10:30:00Z",
    createdAt: "2023-06-01T00:00:00Z",
  },
  {
    id: "client-2",
    name: "Sarah Johnson",
    company: "TechStart Inc",
    email: "sarah@techstart.io",
    status: "active",
    plan: "enterprise",
    mrr: 8500,
    automationsCount: 12,
    lastActivity: "2024-01-14T16:45:00Z",
    createdAt: "2023-03-15T00:00:00Z",
  },
  {
    id: "client-3",
    name: "Mike Wilson",
    company: "GrowthCo",
    email: "mike@growthco.com",
    status: "paused",
    plan: "starter",
    mrr: 1500,
    automationsCount: 2,
    lastActivity: "2024-01-10T09:00:00Z",
    createdAt: "2023-09-20T00:00:00Z",
  },
];

// Mock Automations
export const mockAutomations: Automation[] = [
  {
    id: "auto-1",
    name: "Lead Capture to CRM",
    clientId: "client-1",
    status: "active",
    successRate: 98.5,
    totalExecutions: 1234,
    lastRun: "2024-01-15T10:25:00Z",
    avgDuration: "2.3s",
    connectedApps: ["Typeform", "HubSpot", "Slack"],
    triggerType: "Webhook",
  },
  {
    id: "auto-2",
    name: "Invoice Processing",
    clientId: "client-1",
    status: "active",
    successRate: 99.2,
    totalExecutions: 567,
    lastRun: "2024-01-15T09:00:00Z",
    avgDuration: "5.1s",
    connectedApps: ["Gmail", "QuickBooks", "Google Drive"],
    triggerType: "Schedule",
    schedule: "Every day at 9:00 AM",
  },
  {
    id: "auto-3",
    name: "Customer Support Router",
    clientId: "client-1",
    status: "active",
    successRate: 97.8,
    totalExecutions: 2345,
    lastRun: "2024-01-15T10:30:00Z",
    avgDuration: "1.2s",
    connectedApps: ["Zendesk", "Slack", "Notion"],
    triggerType: "Webhook",
  },
  {
    id: "auto-4",
    name: "Social Media Scheduler",
    clientId: "client-1",
    status: "paused",
    successRate: 95.0,
    totalExecutions: 890,
    lastRun: "2024-01-10T12:00:00Z",
    avgDuration: "3.5s",
    connectedApps: ["Buffer", "Canva", "Google Sheets"],
    triggerType: "Schedule",
    schedule: "Every Monday at 8:00 AM",
  },
  {
    id: "auto-5",
    name: "Voice AI Receptionist",
    clientId: "client-1",
    status: "active",
    successRate: 99.5,
    totalExecutions: 456,
    lastRun: "2024-01-15T10:28:00Z",
    avgDuration: "45s",
    connectedApps: ["Retell AI", "Cal.com", "Slack"],
    triggerType: "Inbound Call",
  },
];

// Mock Executions
export const mockExecutions: Execution[] = [
  { id: "exec-1", automationId: "auto-1", automationName: "Lead Capture to CRM", status: "success", timestamp: "2024-01-15T10:25:00Z", duration: "2.1s" },
  { id: "exec-2", automationId: "auto-3", automationName: "Customer Support Router", status: "success", timestamp: "2024-01-15T10:24:00Z", duration: "1.3s" },
  { id: "exec-3", automationId: "auto-5", automationName: "Voice AI Receptionist", status: "success", timestamp: "2024-01-15T10:22:00Z", duration: "42s" },
  { id: "exec-4", automationId: "auto-1", automationName: "Lead Capture to CRM", status: "failed", timestamp: "2024-01-15T10:20:00Z", duration: "0.5s" },
  { id: "exec-5", automationId: "auto-2", automationName: "Invoice Processing", status: "success", timestamp: "2024-01-15T09:00:00Z", duration: "5.2s" },
  { id: "exec-6", automationId: "auto-1", automationName: "Lead Capture to CRM", status: "success", timestamp: "2024-01-15T08:45:00Z", duration: "2.4s" },
  { id: "exec-7", automationId: "auto-3", automationName: "Customer Support Router", status: "success", timestamp: "2024-01-15T08:30:00Z", duration: "1.1s" },
  { id: "exec-8", automationId: "auto-5", automationName: "Voice AI Receptionist", status: "success", timestamp: "2024-01-15T08:15:00Z", duration: "38s" },
  { id: "exec-9", automationId: "auto-1", automationName: "Lead Capture to CRM", status: "success", timestamp: "2024-01-15T07:50:00Z", duration: "2.0s" },
  { id: "exec-10", automationId: "auto-3", automationName: "Customer Support Router", status: "pending", timestamp: "2024-01-15T07:30:00Z", duration: "-" },
];

// Mock Support Tickets
export const mockTickets: SupportTicket[] = [
  {
    id: "ticket-1",
    subject: "Lead sync not working",
    description: "The lead capture automation stopped syncing to HubSpot yesterday.",
    status: "open",
    priority: "high",
    clientId: "client-1",
    clientName: "Acme Corp",
    automationId: "auto-1",
    createdAt: "2024-01-15T08:00:00Z",
    updatedAt: "2024-01-15T08:00:00Z",
  },
  {
    id: "ticket-2",
    subject: "Request for new integration",
    description: "We'd like to add Salesforce integration to our workflow.",
    status: "in_progress",
    priority: "medium",
    clientId: "client-2",
    clientName: "TechStart Inc",
    createdAt: "2024-01-14T14:00:00Z",
    updatedAt: "2024-01-15T09:30:00Z",
  },
  {
    id: "ticket-3",
    subject: "Billing question",
    description: "Need clarification on the recent invoice charges.",
    status: "resolved",
    priority: "low",
    clientId: "client-3",
    clientName: "GrowthCo",
    createdAt: "2024-01-12T10:00:00Z",
    updatedAt: "2024-01-13T11:00:00Z",
  },
  {
    id: "ticket-4",
    subject: "Voice AI not answering calls",
    description: "The voice agent seems to be offline since this morning.",
    status: "open",
    priority: "urgent",
    clientId: "client-1",
    clientName: "Acme Corp",
    automationId: "auto-5",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
  },
  {
    id: "ticket-5",
    subject: "Performance optimization request",
    description: "Would like to discuss ways to improve workflow execution speed.",
    status: "closed",
    priority: "low",
    clientId: "client-2",
    clientName: "TechStart Inc",
    createdAt: "2024-01-08T09:00:00Z",
    updatedAt: "2024-01-10T15:00:00Z",
  },
];

// Mock Templates
export const mockTemplates: Template[] = [
  {
    id: "template-1",
    name: "Lead Generation Pipeline",
    category: "Lead Gen",
    description: "Automatically capture leads from multiple sources and route them to your CRM with qualification scoring.",
    appsRequired: ["Typeform", "HubSpot", "Slack"],
    setupTime: "3-5 days",
    basePrice: 1800,
    popular: true,
  },
  {
    id: "template-2",
    name: "E-commerce Order Sync",
    category: "E-commerce",
    description: "Sync orders between Shopify, QuickBooks, and your inventory management system.",
    appsRequired: ["Shopify", "QuickBooks", "Airtable"],
    setupTime: "4-6 days",
    basePrice: 2200,
    popular: true,
  },
  {
    id: "template-3",
    name: "Customer Support Automation",
    category: "Support",
    description: "Route and categorize support tickets automatically with AI-powered classification.",
    appsRequired: ["Zendesk", "Slack", "Notion"],
    setupTime: "2-4 days",
    basePrice: 1500,
    popular: false,
  },
  {
    id: "template-4",
    name: "AI Voice Receptionist",
    category: "Voice AI",
    description: "24/7 voice agent to handle inbound calls, book appointments, and qualify leads.",
    appsRequired: ["Retell AI", "Cal.com", "CRM"],
    setupTime: "5-7 days",
    basePrice: 3500,
    popular: true,
  },
  {
    id: "template-5",
    name: "Invoice Processing",
    category: "Finance",
    description: "Extract data from invoices using AI and sync to your accounting software.",
    appsRequired: ["Gmail", "QuickBooks", "Google Drive"],
    setupTime: "3-5 days",
    basePrice: 1600,
    popular: false,
  },
  {
    id: "template-6",
    name: "Social Media Scheduler",
    category: "Marketing",
    description: "Schedule and publish content across multiple social platforms from a single source.",
    appsRequired: ["Buffer", "Canva", "Google Sheets"],
    setupTime: "2-3 days",
    basePrice: 1200,
    popular: false,
  },
];

// Helper functions
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const formatDateTime = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(amount);
};
