export const getCurrencySymbol = (currency: string) => {
  switch (currency) {
    case 'USD':
      return '$';
    case 'GBP':
      return '£';
    case 'EUR':
      return '€';
    default:
      return '$';
  }
};
