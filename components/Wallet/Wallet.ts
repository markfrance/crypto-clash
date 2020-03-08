import { Container } from 'unstated';

interface Asset {
  ticker: string;
  quantity: number;
  index: number;
}

interface State {
  username: string;
  password: string;
  data: Asset[];
}

export class Wallet extends Container<State> {
  state = {
    username: '',
    password: '',
    data: [] as Asset[],
  };

  setUsernameAndPassword = (username: string, password: string) => {
    this.setState({ username, password });
  };

  addAsset = (asset: Asset) => {
    let updatedData = [...this.state.data];
    if (updatedData.length > 0) {
      updatedData.forEach(existingAsset => {
        if (existingAsset.ticker === asset.ticker) {
          asset.quantity += existingAsset.quantity;
          asset.index -= 1;
          updatedData.splice(updatedData.indexOf(existingAsset, 1));
        }
      });
    }
    updatedData = [...updatedData, asset];

    this.setState({ data: updatedData });
  };
}
