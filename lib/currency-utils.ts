/**
 * Currency utility functions for consistent formatting across the application
 */

// Available currencies with their symbols and locale information
export const CURRENCIES = {
  INR: { symbol: '₹', locale: 'en-IN', name: 'Indian Rupee' },
  USD: { symbol: '$', locale: 'en-US', name: 'US Dollar' },
  EUR: { symbol: '€', locale: 'en-EU', name: 'Euro' },
  GBP: { symbol: '£', locale: 'en-GB', name: 'British Pound' },
  JPY: { symbol: '¥', locale: 'ja-JP', name: 'Japanese Yen' },
  CAD: { symbol: 'C$', locale: 'en-CA', name: 'Canadian Dollar' },
  AUD: { symbol: 'A$', locale: 'en-AU', name: 'Australian Dollar' },
} as const;

export type CurrencyCode = keyof typeof CURRENCIES;

/**
 * Format amount with currency symbol
 */
export function formatCurrency(
  amount: number, 
  currencyCode: CurrencyCode = 'INR',
  options: Intl.NumberFormatOptions = {}
): string {
  const currency = CURRENCIES[currencyCode];
  if (!currency) {
    throw new Error(`Unsupported currency code: ${currencyCode}`);
  }

  return new Intl.NumberFormat(currency.locale, {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...options,
  }).format(amount);
}

/**
 * Get currency symbol for a currency code
 */
export function getCurrencySymbol(currencyCode: string = 'INR'): string {
  const code = currencyCode as CurrencyCode;
  return CURRENCIES[code]?.symbol || '₹';
}

/**
 * Get currency name for a currency code
 */
export function getCurrencyName(currencyCode: CurrencyCode = 'INR'): string {
  return CURRENCIES[currencyCode]?.name || 'Indian Rupee';
}

/**
 * Format amount for display in forms (without currency formatting)
 */
export function formatAmount(amount: number, decimals: number = 2): string {
  return amount.toFixed(decimals);
}

/**
 * Default currency for the application
 */
export const DEFAULT_CURRENCY: CurrencyCode = 'INR';
