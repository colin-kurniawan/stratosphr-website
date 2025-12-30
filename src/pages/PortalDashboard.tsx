import { Link } from "react-router-dom";
import { 
  Activity, 
  Workflow, 
  CheckCircle2, 
  DollarSign, 
  ArrowUpRight,
  ArrowRight,
  Clock,
  AlertCircle
} from "lucide-react";
import PortalLayout from "@/components/PortalLayout";
import GlassCard from "@/components/GlassCard";
import StatusBadge from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { mockAutomations, mockExecutions, formatDateTime } from "@/lib/mockData";

const stats = [
  { 
    label: "Active Automations", 
    value: "4", 
    icon: Workflow, 
    change: "+1 this month",
    trend: "up" 
  },
  { 
    label: "Total Executions", 
    value: "5,492", 
    icon: Activity, 
    change: "+12% from last month",
    trend: "up" 
  },
  { 
    label: "Success Rate", 
    value: "98.2%", 
    icon: CheckCircle2, 
    change: "+0.5%",
    trend: "up" 
  },
  { 
    label: "Est. Cost Savings", 
    value: "$4,200", 
    icon: DollarSign, 
    change: "This month",
    trend: "neutral" 
  },
];

const PortalDashboard = () => {
  const { user } = useAuth();
  const activeAutomations = mockAutomations.filter((a) => a.status === "active");
  const recentExecutions = mockExecutions.slice(0, 8);

  return (
    <PortalLayout>
      <div className="max-w-7xl mx-auto">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Welcome back, {user?.name?.split(" ")[0] || "there"}!
          </h1>
          <p className="text-muted-foreground">
            Here's an overview of your automation performance
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <GlassCard key={stat.label} className="p-5">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <stat.icon size={20} className="text-primary" />
                </div>
                {stat.trend === "up" && (
                  <span className="text-success text-xs font-medium flex items-center gap-1">
                    <ArrowUpRight size={14} />
                    {stat.change}
                  </span>
                )}
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </GlassCard>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Active Automations */}
          <div className="lg:col-span-2">
            <GlassCard className="p-0 overflow-hidden">
              <div className="p-5 border-b border-border/50 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-foreground">Your Automations</h2>
                <Link to="/portal/automations">
                  <Button variant="ghost" size="sm" className="text-primary">
                    View All <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
              
              <div className="divide-y divide-border/30">
                {mockAutomations.slice(0, 4).map((automation) => (
                  <Link
                    key={automation.id}
                    to={`/portal/automations/${automation.id}`}
                    className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Workflow size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{automation.name}</div>
                        <div className="text-sm text-muted-foreground">
                          Last run: {formatDateTime(automation.lastRun)}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="hidden sm:block text-right">
                        <div className="text-sm font-medium text-foreground">{automation.successRate}%</div>
                        <div className="text-xs text-muted-foreground">Success rate</div>
                      </div>
                      <StatusBadge status={automation.status} />
                    </div>
                  </Link>
                ))}
              </div>

              {mockAutomations.length === 0 && (
                <div className="p-8 text-center">
                  <Workflow size={48} className="mx-auto text-muted-foreground/50 mb-4" />
                  <p className="text-muted-foreground mb-4">No automations yet</p>
                  <Button variant="default">Request New Automation</Button>
                </div>
              )}
            </GlassCard>
          </div>

          {/* Recent Activity */}
          <div>
            <GlassCard className="p-0 overflow-hidden">
              <div className="p-5 border-b border-border/50">
                <h2 className="text-lg font-semibold text-foreground">Recent Executions</h2>
              </div>
              
              <div className="divide-y divide-border/30 max-h-[400px] overflow-y-auto">
                {recentExecutions.map((execution) => (
                  <div key={execution.id} className="p-4 flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      execution.status === "success" 
                        ? "bg-success/20" 
                        : execution.status === "failed"
                        ? "bg-destructive/20"
                        : "bg-muted"
                    }`}>
                      {execution.status === "success" ? (
                        <CheckCircle2 size={16} className="text-success" />
                      ) : execution.status === "failed" ? (
                        <AlertCircle size={16} className="text-destructive" />
                      ) : (
                        <Clock size={16} className="text-muted-foreground" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium text-foreground truncate">
                        {execution.automationName}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{formatDateTime(execution.timestamp)}</span>
                        <span>•</span>
                        <span>{execution.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 flex flex-wrap gap-3">
          <Button variant="outline">
            Request New Automation
          </Button>
          <Button variant="outline">
            Submit Support Ticket
          </Button>
          <Button variant="ghost">
            View Documentation
          </Button>
        </div>
      </div>
    </PortalLayout>
  );
};

export default PortalDashboard;
