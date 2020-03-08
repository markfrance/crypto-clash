import {
  BitcoinIcon,
  BitcoinCashIcon,
  LitecoinIcon,
  EthereumIcon,
  TetherIcon,
  StellarIcon,
  ZCashIcon,
} from '../components/CurrencyIcons';

export const getAssetIconFromTicker = (ticker: string) => {
  switch (ticker) {
    case 'BTC':
      return BitcoinIcon;
    case 'BCH':
      return BitcoinCashIcon;
    case 'LTC':
      return LitecoinIcon;
    case 'ETH':
      return EthereumIcon;
    case 'USDT':
      return TetherIcon;
    case 'XLM':
      return StellarIcon;
    case 'ZEC':
      return ZCashIcon;
    default:
      return;
  }
};
