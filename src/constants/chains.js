import React from "react";
import { ReactComponent as EtherscanLogo } from "../assets/logos/etherscan.svg";
import { ReactComponent as GnosisLogo } from "../assets/logos/gnosis.svg";

export default {
  1: {
    id: '0x1',
    name: "Mainnet",
    rpcUrls: ['https://mainnet.infura.io/v3/'],
    blockExploreUrls: ['https://etherscan.io'],
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH', 
      decimals: 18,
    },
    icon: <EtherscanLogo />,
    scanContractUrl: (contractAddress) =>
      `https://etherscan.io/address/${contractAddress}#code`,
    scanAddressUrl: (address) => `https://etherscan.io/address/${address}`,
    scanAbiUrl: (contractAddress) =>
      `https://api.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}`,
  },
  100: {
    id: '0x60',
    name: "Gnosis",
    rpcUrls: ['https://rpc.gnosischain.com/'],
    blockExploreUrls: ['https://blockscout.com'],
    nativeCurrency: {
      name: 'XDAI',
      symbol: 'xDai', 
      decimals: 18,
    },
    icon: <GnosisLogo />,
    scanContractUrl: (contractAddress) =>
      `https://blockscout.com/xdai/mainnet/address/${contractAddress}/contracts#address-tabs`,
    scanAddressUrl: (address) =>
      `https://blockscout.com/xdai/mainnet/address/${address}`,
    scanAbiUrl: (contractAddress) =>
      `https://blockscout.com/xdai/mainnet/api?module=contract&action=getabi&address=${contractAddress}`,
  },
};
