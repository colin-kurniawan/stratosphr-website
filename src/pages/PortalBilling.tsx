import { CreditCard, FileText, Calendar, Download } from "lucide-react";
import PortalLayout from "@/components/PortalLayout";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { formatDate, formatCurrency } from "@/lib/mockData";

const invoices = [
  { id: "INV-001", date: "2024-01-01", amount: 3500, status: "paid" },
  { id: "INV-002", date: "2024-01-15", amount: 300, status: "paid" },
  { id: "INV-003", date: "2024-02-01", amount: 300, status: "pending" },
];

const PortalBilling = () => {
  return (
    <PortalLayout>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Billing
          </h1>
          <p className="text-muted-foreground">
            Manage your subscription and view invoices
          </p>
        </div>

        {/* Current Plan */}
        <GlassCard className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Current Plan</div>
              <h2 className="text-2xl font-bold text-foreground mb-1">Professional</h2>
              <p className="text-muted-foreground">
                3 workflows • 8 app integrations • Voice AI included
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-foreground">$3,500</div>
              <div className="text-sm text-muted-foreground">one-time setup</div>
              <div className="text-sm text-primary mt-1">+ $300/mo maintenance</div>
            </div>
          </div>
        </GlassCard>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Payment Method */}
          <GlassCard>
            <div className="flex items-center gap-3 mb-4">
              <CreditCard size={24} className="text-primary" />
              <h3 className="font-semibold text-foreground">Payment Method</h3>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/30">
              <div className="w-12 h-8 rounded bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-xs font-bold text-primary-foreground">
                VISA
              </div>
              <div>
                <div className="text-foreground font-medium">•••• •••• •••• 4242</div>
                <div className="text-xs text-muted-foreground">Expires 12/25</div>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-4">
              Update Payment Method
            </Button>
          </GlassCard>

          {/* Next Invoice */}
          <GlassCard>
            <div className="flex items-center gap-3 mb-4">
              <Calendar size={24} className="text-primary" />
              <h3 className="font-semibold text-foreground">Next Invoice</h3>
            </div>
            <div className="p-4 rounded-lg bg-muted/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground">Monthly Maintenance</span>
                <span className="text-foreground font-medium">$300.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Due Date</span>
                <span className="text-foreground font-medium">Feb 1, 2024</span>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Invoice History */}
        <GlassCard className="p-0 overflow-hidden">
          <div className="p-5 border-b border-border/50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText size={24} className="text-primary" />
              <h3 className="font-semibold text-foreground">Invoice History</h3>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/30">
                <tr>
                  <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">Invoice</th>
                  <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">Date</th>
                  <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">Amount</th>
                  <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">Status</th>
                  <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="hover:bg-muted/20">
                    <td className="px-5 py-4 text-sm font-medium text-foreground">
                      {invoice.id}
                    </td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">
                      {formatDate(invoice.date)}
                    </td>
                    <td className="px-5 py-4 text-sm text-foreground">
                      {formatCurrency(invoice.amount)}
                    </td>
                    <td className="px-5 py-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        invoice.status === "paid" 
                          ? "bg-success/20 text-success" 
                          : "bg-warning/20 text-warning"
                      }`}>
                        {invoice.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <button className="text-primary hover:underline text-sm flex items-center gap-1">
                        <Download size={14} />
                        PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>
    </PortalLayout>
  );
};

export default PortalBilling;
