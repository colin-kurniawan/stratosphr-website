import { Link } from "react-router-dom";
import { Workflow, ExternalLink, Search, Filter } from "lucide-react";
import PortalLayout from "@/components/PortalLayout";
import GlassCard from "@/components/GlassCard";
import StatusBadge from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mockAutomations, formatDateTime } from "@/lib/mockData";

const PortalAutomations = () => {
  return (
    <PortalLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              My Automations
            </h1>
            <p className="text-muted-foreground">
              Manage and monitor all your automation workflows
            </p>
          </div>
          <Button variant="default">
            Request New Automation
          </Button>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search automations..."
              className="pl-10 bg-muted/50 border-border/50"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter size={18} />
            Filter
          </Button>
        </div>

        {/* Automations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockAutomations.map((automation) => (
            <Link key={automation.id} to={`/portal/automations/${automation.id}`}>
              <GlassCard hover className="h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Workflow size={24} className="text-primary" />
                  </div>
                  <StatusBadge status={automation.status} />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {automation.name}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Success Rate</span>
                    <span className="text-foreground font-medium">{automation.successRate}%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-success rounded-full"
                      style={{ width: `${automation.successRate}%` }}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {automation.connectedApps.slice(0, 3).map((app) => (
                    <span 
                      key={app} 
                      className="px-2 py-1 rounded text-xs bg-muted text-muted-foreground"
                    >
                      {app}
                    </span>
                  ))}
                  {automation.connectedApps.length > 3 && (
                    <span className="px-2 py-1 rounded text-xs bg-muted text-muted-foreground">
                      +{automation.connectedApps.length - 3}
                    </span>
                  )}
                </div>

                <div className="pt-4 border-t border-border/30 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    {automation.totalExecutions.toLocaleString()} executions
                  </span>
                  <span className="text-muted-foreground">
                    {formatDateTime(automation.lastRun)}
                  </span>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>

        {mockAutomations.length === 0 && (
          <GlassCard className="text-center py-16">
            <Workflow size={64} className="mx-auto text-muted-foreground/50 mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No automations yet</h3>
            <p className="text-muted-foreground mb-6">
              Contact us to get started with your first automation workflow
            </p>
            <Button variant="default">Request New Automation</Button>
          </GlassCard>
        )}
      </div>
    </PortalLayout>
  );
};

export default PortalAutomations;
