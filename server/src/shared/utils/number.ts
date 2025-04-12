// Token decimals by symbol

/**
 * Convert normal number to wei
 * @param amount Amount in normal number (e.g. 0.1)
 * @param decimals Token decimals
 */
export const toWei = (amount: number, decimals: number): string => {
  return (amount * Math.pow(10, decimals)).toString();
};

/**
 * Convert wei to normal number
 * @param amount Amount in wei
 * @param decimals Token decimals
 */
export const fromWei = (amount: string, decimals: number): number => {
  return parseFloat(amount) / Math.pow(10, decimals);
};
