import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft, 
  ExternalLink, 
  Play, 
  Pause, 
  Activity,
  CheckCircle2,
  Clock,
  Zap,
  AlertCircle,
  Download
} from "lucide-react";
import PortalLayout from "@/components/PortalLayout";
import GlassCard from "@/components/GlassCard";
import StatusBadge from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { mockAutomations, mockExecutions, formatDateTime, formatDate } from "@/lib/mockData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AutomationDetail = () => {
  const { id } = useParams();
  const automation = mockAutomations.find((a) => a.id === id) || mockAutomations[0];
  const executions = mockExecutions.filter((e) => e.automationId === automation.id);

  const stats = [
    { label: "Total Executions", value: automation.totalExecutions.toLocaleString(), icon: Activity },
    { label: "Success Rate", value: `${automation.successRate}%`, icon: CheckCircle2 },
    { label: "Avg Duration", value: automation.avgDuration, icon: Clock },
    { label: "Trigger", value: automation.triggerType, icon: Zap },
  ];

  return (
    <PortalLayout>
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <Link
          to="/portal/automations"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Automations
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                {automation.name}
              </h1>
              <StatusBadge status={automation.status} />
            </div>
            <p className="text-muted-foreground">
              Last run: {formatDateTime(automation.lastRun)}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant={automation.status === "active" ? "outline" : "default"}
              className="gap-2"
            >
              {automation.status === "active" ? (
                <>
                  <Pause size={18} />
                  Pause
                </>
              ) : (
                <>
                  <Play size={18} />
                  Activate
                </>
              )}
            </Button>
            <Button variant="glass" className="gap-2">
              <ExternalLink size={18} />
              View in n8n
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <GlassCard key={stat.label} className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <stat.icon size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-lg font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Execution History */}
          <div className="lg:col-span-2">
            <GlassCard className="p-0 overflow-hidden">
              <div className="p-5 border-b border-border/50 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-foreground">Execution History</h2>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Download size={16} />
                  Export
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/30">
                    <tr>
                      <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Date/Time</th>
                      <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Status</th>
                      <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Duration</th>
                      <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/30">
                    {executions.length > 0 ? executions.map((execution) => (
                      <tr key={execution.id} className="hover:bg-muted/20">
                        <td className="px-4 py-3 text-sm text-foreground">
                          {formatDateTime(execution.timestamp)}
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                            execution.status === "success" 
                              ? "text-success" 
                              : execution.status === "failed"
                              ? "text-destructive"
                              : "text-muted-foreground"
                          }`}>
                            {execution.status === "success" ? (
                              <CheckCircle2 size={14} />
                            ) : execution.status === "failed" ? (
                              <AlertCircle size={14} />
                            ) : (
                              <Clock size={14} />
                            )}
                            {execution.status.charAt(0).toUpperCase() + execution.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">
                          {execution.duration}
                        </td>
                        <td className="px-4 py-3">
                          <button className="text-xs text-primary hover:underline">
                            View logs
                          </button>
                        </td>
                      </tr>
                    )) : (
                      <tr>
                        <td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">
                          No executions yet
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </div>

          {/* Configuration */}
          <div>
            <GlassCard className="mb-6">
              <h3 className="font-semibold text-foreground mb-4">Connected Apps</h3>
              <div className="space-y-2">
                {automation.connectedApps.map((app) => (
                  <div 
                    key={app}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/30"
                  >
                    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                      {app.charAt(0)}
                    </div>
                    <span className="text-sm text-foreground">{app}</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard>
              <h3 className="font-semibold text-foreground mb-4">Configuration</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Trigger Type</span>
                  <span className="text-foreground">{automation.triggerType}</span>
                </div>
                {automation.schedule && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Schedule</span>
                    <span className="text-foreground">{automation.schedule}</span>
                  </div>
                )}
              </div>
            </GlassCard>

            {/* Documentation */}
            <div className="mt-6">
              <Accordion type="single" collapsible>
                <AccordionItem value="how-it-works" className="border-border/50">
                  <AccordionTrigger className="text-foreground">How It Works</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm">
                    This automation triggers on incoming webhooks and processes data through your connected apps.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="troubleshooting" className="border-border/50">
                  <AccordionTrigger className="text-foreground">Troubleshooting</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm">
                    If you're experiencing issues, check the execution logs for error details or contact support.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
};

export default AutomationDetail;
