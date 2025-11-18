export type InvoiceItem = {
  id?: string;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
  sort_order: number;
};

export type InvoiceFormData = {
  client_id: string;
  title: string;
  status: 'paid' | 'unpaid' | 'overdue' | 'partially_paid';
  tax_percentage: number;
  due_date: string;
  payment_method?: 'cash' | 'upi' | 'bank_transfer' | null;
  payment_date?: string;
  paid_amount: number;
  notes: string;
  items: InvoiceItem[];
};

export function calculateInvoiceTotals(items: InvoiceItem[], taxPercentage: number) {
  const subtotal = items.reduce((sum, item) => sum + item.amount, 0);
  const taxAmount = (subtotal * taxPercentage) / 100;
  const total = subtotal + taxAmount;

  return {
    subtotal: Number(subtotal.toFixed(2)),
    taxAmount: Number(taxAmount.toFixed(2)),
    total: Number(total.toFixed(2)),
  };
}

export async function generateInvoiceNumber(): Promise<string> {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `INV-${year}${month}-${random}`;
}
