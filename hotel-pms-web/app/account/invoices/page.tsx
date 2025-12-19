import { getInvoices } from "@/services/account";

export default async function InvoicesPage() {
  const invoices = await getInvoices();

  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold">Invoices</h1>

      <div className="rounded-xl border bg-white divide-y">
        {invoices.map((inv: any) => (
          <div key={inv.id} className="p-4 flex items-center justify-between">
            <div>
              <div className="font-medium">{inv.name || `Invoice #${inv.id}`}</div>
              <div className="text-sm text-gray-500">{inv.invoice_date || ""}</div>
            </div>
            <div className="font-semibold">{inv.amount_total} {inv.currency || ""}</div>
          </div>
        ))}
        {!invoices.length ? <div className="p-4 text-sm text-gray-600">No invoices yet.</div> : null}
      </div>
    </div>
  );
}
