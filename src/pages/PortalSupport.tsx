import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Plus, 
  Search, 
  MessageSquare, 
  Clock,
  CheckCircle2,
  AlertCircle,
  ChevronRight
} from "lucide-react";
import PortalLayout from "@/components/PortalLayout";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mockTickets, formatDateTime } from "@/lib/mockData";

const priorityColors = {
  low: "text-muted-foreground bg-muted",
  medium: "text-warning bg-warning/20",
  high: "text-orange-500 bg-orange-500/20",
  urgent: "text-destructive bg-destructive/20",
};

const statusIcons = {
  open: Clock,
  in_progress: MessageSquare,
  resolved: CheckCircle2,
  closed: CheckCircle2,
};

const PortalSupport = () => {
  const [filter, setFilter] = useState<"all" | "open" | "closed">("all");
  
  const clientTickets = mockTickets.filter((t) => t.clientId === "client-1");
  
  const filteredTickets = clientTickets.filter((ticket) => {
    if (filter === "all") return true;
    if (filter === "open") return ticket.status === "open" || ticket.status === "in_progress";
    return ticket.status === "resolved" || ticket.status === "closed";
  });

  return (
    <PortalLayout>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Support
            </h1>
            <p className="text-muted-foreground">
              Get help with your automations and account
            </p>
          </div>
          <Button variant="default" className="gap-2">
            <Plus size={18} />
            New Ticket
          </Button>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search tickets..."
              className="pl-10 bg-muted/50 border-border/50"
            />
          </div>
          <div className="flex gap-2">
            {["all", "open", "closed"].map((f) => (
              <Button
                key={f}
                variant={filter === f ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(f as typeof filter)}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* Tickets List */}
        <div className="space-y-4">
          {filteredTickets.map((ticket) => {
            const StatusIcon = statusIcons[ticket.status];
            return (
              <GlassCard key={ticket.id} hover className="p-0">
                <Link 
                  to={`/portal/support/${ticket.id}`}
                  className="flex items-center justify-between p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      ticket.status === "open" || ticket.status === "in_progress"
                        ? "bg-primary/10"
                        : "bg-success/10"
                    }`}>
                      <StatusIcon size={20} className={
                        ticket.status === "open" || ticket.status === "in_progress"
                          ? "text-primary"
                          : "text-success"
                      } />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{ticket.subject}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-1 mb-2">
                        {ticket.description}
                      </p>
                      <div className="flex items-center gap-3">
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${priorityColors[ticket.priority]}`}>
                          {ticket.priority.toUpperCase()}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {formatDateTime(ticket.createdAt)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-muted-foreground" />
                </Link>
              </GlassCard>
            );
          })}

          {filteredTickets.length === 0 && (
            <GlassCard className="text-center py-12">
              <MessageSquare size={48} className="mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No tickets found</h3>
              <p className="text-muted-foreground mb-6">
                {filter === "all" 
                  ? "You haven't created any support tickets yet"
                  : `No ${filter} tickets`}
              </p>
              <Button variant="default" className="gap-2">
                <Plus size={18} />
                Create New Ticket
              </Button>
            </GlassCard>
          )}
        </div>
      </div>
    </PortalLayout>
  );
};

export default PortalSupport;
