export type QuotationItem = {
  id?: string;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
  sort_order: number;
};

export type QuotationFormData = {
  client_id: string;
  title: string;
  status: 'draft' | 'sent' | 'accepted' | 'rejected';
  tax_percentage: number;
  valid_until: string;
  notes: string;
  items: QuotationItem[];
};

export function calculateQuotationTotals(items: QuotationItem[], taxPercentage: number) {
  const subtotal = items.reduce((sum, item) => sum + item.amount, 0);
  const taxAmount = (subtotal * taxPercentage) / 100;
  const total = subtotal + taxAmount;

  return {
    subtotal: Number(subtotal.toFixed(2)),
    taxAmount: Number(taxAmount.toFixed(2)),
    total: Number(total.toFixed(2)),
  };
}

export async function generateQuotationNumber(): Promise<string> {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `QT-${year}${month}-${random}`;
}
