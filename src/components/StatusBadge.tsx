import { cn } from "@/lib/utils";

type StatusType = "active" | "paused" | "error" | "pending";

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

const statusConfig: Record<StatusType, { label: string; className: string }> = {
  active: {
    label: "Active",
    className: "status-active",
  },
  paused: {
    label: "Paused",
    className: "status-paused",
  },
  error: {
    label: "Error",
    className: "status-error",
  },
  pending: {
    label: "Pending",
    className: "status-pending",
  },
};

const StatusBadge = ({ status, className = "" }: StatusBadgeProps) => {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium",
        config.className,
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {config.label}
    </span>
  );
};

export default StatusBadge;
