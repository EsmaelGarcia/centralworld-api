const CollectionFactoryContract = {
  MAINNET_721_PRIVATE: '0xa4fDb09e1796730bfBA8a352074F0dd65D400Dd4', //CentralWorldNFTFactoryPrivate
  MAINNET_721_PUBLIC: '0xCC7A2eC7A8A0564518fD3D2ca0Df8B2137626144', //CentralWorldNFTFactory
  TESTNET_721_PRIVATE: '0xe6fC592E29678ae75DDB1D3d0cCCec27653f95c9', //CentralWorldNFTFactoryPrivateRopsten
  TESTNET_721_PUBLIC: '0xe1AD1e2eEE9b0FDb1cbDC884ef856D3aDB11b70D', //CentralWorldNFTFactoryRopsten
  MAINNET_1155_PRIVATE: '0x736Eae40AdFf88570b92378c97a0D11b44E1C953', //CentralWorldArtFactoryPrivate
  MAINNET_1155_PUBLIC: '0x520DaB621f93F59d3557174280AB1B6d4FB8c956', //CentralWorldFactory
  TESTNET_1155_PRIVATE: '0x1C31688c74383CcC2b4FeC8AEd7A63cAF6C0AEcb', //CentralWorldArtFactoryPrivateRopsten
  TESTNET_1155_PUBLIC: '0x0bACD5C9097F583E922A86e9d9C3e0FBa95078D9', //CentralWorldArtFactoryRopsten
  ABI: [
    {
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: 'exists',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function'
    }
  ]
};

module.exports = CollectionFactoryContract;
