import { TonConnectUI } from '@tonconnect/ui-react';

type WalletState = {
  balance?: string;
  address?: string;
  access_token?: string;
  connector?: TonConnectUI;
};

type WalletActions = {
  connect: (chain: string, body: any) => Promise<void>;
  disconnect: () => Promise<void>;
  setTonConnector: (connector: TonConnectUI) => void;
}

export type WalletStore = WalletState & WalletActions;
