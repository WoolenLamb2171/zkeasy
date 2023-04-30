export const allTasks = {
  journey0: {
    task1: 10,
  },
  journey1: {
    task11: 10,
    task12: 10,
    task13: 10,
    task14: 10,
    task15: 10,
    task16: 10,
  },
  journey2: {
    task21: 30,
    task22: 30,
    task23: 30,
    task24: 30,
    task25: 30,
    task26: 30,
    task27: 30,
    task28: 30,
    task29: 30,
    task201: 30,
    task202: 30,
    task203: 30,
  },
  journey3: {
    task31: 50,
    task32: 50,
    task33: 50,
    task34: 50,
    task35: 50,
    task36: 50,
    task37: 50,
    task38: 50,
    task39: 50,
    task301: 50,
    task302: 50,
  },
  journeyEnd: {
    task01: 110,
    task02: 110,
  },
};

export const replaceValuesWithZero = (obj) => {
  const newObj = {};
  for (let journey in obj) {
    newObj[journey] = {};
    for (let task in obj[journey]) {
      newObj[journey][task] = 0;
    }
  }
  return newObj;
};
const testData = {
  journey0: {
    nick: "Journey prepartion",
    title: "First steps in ZkSync",
    journeyDesc:
      'ZKSync is a Layer-2 protocol that scales Ethereum with ZK tech. It\'s main chain is ZKSync Era. To use zkSync and zkEase, you need two things: 1. To add zkSync Era into your Web3 wallet. You can do it by visiting https://chainlist.org/chain/324 and clicking "add on metamask" button. 2. You need to have ZKSync ETH in your wallet. You can do it by bridging your ETH from Ethereum mainnet using official bridge https://bridge.zksync.io/.',
    tasks: {
      task1: {
        title: "Bridge to ZKSync ERA",
        exp: 10,
        source: "zkSync.io",
        link: "https://bridge.zksync.io/",
        taskDesc:
          'Select "Deposit" tab, then select ETH from the token list. Input the amount of ETH you want to bridge to zkSync Era Mainnet. Click "Deposit" button to bridge to the same address OR click on "Deposit to another address on zkSync Era Mainnet" and enter the address you want to bridge to. Confirm the transaction in your Web3 wallet and wait up to 5 minutes for ETH to be available on your zkSync account.',
      },
    },
  },
  journey1: {
    nick: "Journey One",
    title: "Basic swaps and mints",
    journeyDesc:
      'In the Journey One we invite you to try basic actions on some of the zkSync ecosystem protocols (currently Mute, Onchain Trade, Mintsquare, SpaceSwap and SyncSwap). The actions available are mint, wrap and NFT mint. 1. Swap: exchange any token for another through a decentralized exchange (DEX). 2. Wrap: In this case, you deposit ETH into a smart contract and receive wrapped ETH (WETH, an ERC-20 token) in exchange. From user standpoint, there is not so much difference between swaps and wraps, however the transaction will be marked differently ("Wrap" method instead of "Swap" method. 3. Mint: a process of creating NFT on blockchain. You will interact with NFT platform smart-contract and deploy your own NFT.',
    tasks: {
      task11: {
        title: "Make any swap",
        exp: 10,
        source: "Mute.io",
        link: "https://app.mute.io/swap",
        taskDesc:
          'Connect your Web3 wallet. Then, select a token you want to exchange in the "send" tab. After that, select a token you want to receive in the "get" tab. Optionally - adjust the slippage (difference between the expected price of a trade and the actual price at which the trade is executed) tolerance by clicking on gear-shaped button above "send" tab. Enter the amount of tokens you want to exchange. Click "swap" and confirm transaction through your Web3 wallet. If you are exchanging any ERC-20 token (basically, any token rather than ETH), you will first need to click on "approve" button and approve spending limit through your Web3 wallet, before you can do the swap.',
      },
      task12: {
        title: "Wrap any amount of ETH",
        exp: 10,
        source: "Mute.io",
        link: "https://app.mute.io/swap",
        taskDesc:
          'Connect your Web3 wallet. Then, select a token you want to exchange in the "send" tab. After that, select a token you want to receive in the "get" tab. Optionally - adjust the slippage (difference between the expected price of a trade and the actual price at which the trade is executed) tolerance by clicking on gear-shaped button above "send" tab. Enter the amount of tokens you want to exchange. Click "swap" and confirm transaction through your Web3 wallet. If you are exchanging any ERC-20 token (basically, any token rather than ETH), you will first need to click on "approve" button and approve spending limit through your Web3 wallet, before you can do the swap.',
      },
      task13: {
        title: "Swap any token",
        exp: 10,
        source: "Onchain.trade",
        link: "https://onchain.trade/#/trade",
        taskDesc:
          'Connect your Web3 wallet. Then, select a token you want to exchange in the upper tab of the "swap" tab. After that, select a token you want to receive in the bottom tab of the "swap" tab. Optionally - adjust the slippage (difference between the expected price of a trade and the actual price at which the trade is executed) tolerance by clicking on dots-shaped button on the upper-right corner of the window. Enter the amount of tokens you want to exchange. Click "swap" and confirm transaction through your Web3 wallet. If you are exchanging any ERC-20 token (basically, any token rather than ETH), you will first need to click on "approve" button and approve spending limit through your Web3 wallet, before you can do the swap.',
      },
      task14: {
        title: "Mint any NFT",
        exp: 10,
        source: "Mintsquare.io",
        link: "https://mintsquare.io/mint",
        taskDesc:
          'Connect your Web3 wallet. Then, upload any media you want to use for your NFT into "upload" window. Give your NFT a name through "Name your NFT" tab. Optionally - add description, external link and attributes through the corresponding tabs, this will be saved in your NFT metadata. Click on "Mint" button and confirm your transaction through Web3 wallet. After the transaction is confirmed, you will get a pop-up prompting you to visit your profile, where you can view your newly minted NFT.',
      },
      task15: {
        title: "Swap any token",
        exp: 10,
        source: "Spacefi.io",
        link: "https://swap-zksync.spacefi.io/#/swap",
        taskDesc:
          'Connect your Web3 wallet. Then, select a token you want to exchange in the "from" tab. After that, select a token you want to receive in the "to" tab. Optionally - adjust the slippage (difference between the expected price of a trade and the actual price at which the trade is executed) tolerance by clicking on gear-shaped button in the upper-right corner of the window. Enter the amount of tokens you want to exchange. Click "swap" and confirm transaction through your Web3 wallet. If you are exchanging any ERC-20 token (basically, any token rather than ETH), you will first need to click on "approve" button and approve spending limit through your Web3 wallet, before you can do the swap.',
      },
      task16: {
        title: "Swap any token",
        exp: 10,
        source: "Syncswap.xyz",
        link: "https://syncswap.xyz/",
        taskDesc:
          'Connect your Web3 wallet. Then, select a token you want to exchange in the upper tab. After that, select a token you want to receive in the tab below. Optionally - adjust the slippage (difference between the expected price of a trade and the actual price at which the trade is executed) tolerance and gas price by clicking on gear-shaped button above the swap tabs. Enter the amount of tokens you want to exchange. Click "swap" and confirm transaction through your Web3 wallet. If you are exchanging any ERC-20 token (basically, any token rather than ETH), you will first need to click on "approve" button and approve spending limit through your Web3 wallet, before you can do the swap.',
      },
    },
  },
  journey2: {
    nick: "Journey Two",
    title: "Advanced swaps, LP, Leveraged Trading",
    journeyDesc:
      "In the Journey Two we invite you to do more advanced actions on the zkSync ecosystem protocols (currently Multichain,, Onchain Trade, Mintsquare, Nexon Finance, SpaceSwap and Unidex). The actions available are liquidity provision, leveraged trading, collateral supliment, NFT buying. 1. Liquidity provision: A liquidity pool is a pair of tokens, where users deposit equal values of both tokens to create a market for those tokens. These pools enable trading between the token pairs without the need for an order book or a centralized counterparty. There are multiple benefits associated with liquidity provision, for example, you can collect Liquidity Provider fees. 2. Leveraged trading: kind of trading which enables you to trade with loaned capital, increasing your position size. 3. Collateral suppliment: some DeFi protocols allow you to lock some of your assets on their platforms, using it as a collateral, and take a loan, secured by the collateral. 4. NFT buying: You can buy and sell various NFTs on NFT marketplaces.",
    tasks: {
      task21: {
        title: "Buy MUTE",
        exp: 30,
        source: "Mute.io",
        link: "https://app.mute.io/swap",
        taskDesc:
          'Connect your Web3 wallet. Then, select a token you want to exchange in the "send" tab. After that, select MUTE token in the "get" tab. Optionally - adjust the slippage (difference between the expected price of a trade and the actual price at which the trade is executed) tolerance by clicking on gear-shaped button above "send" tab. Enter the amount of tokens you want to exchange, you can choose any amount. Click "swap" and confirm transaction through your Web3 wallet. If you are exchanging any ERC-20 token (basically, any token rather than ETH), you will first need to click on "approve" button and approve spending limit through your Web3 wallet, before you can do the swap.',
      },
      task22: {
        title: "Buy SPACE",
        exp: 30,
        source: "Spacefi.io",
        link: "https://swap-zksync.spacefi.io/#/swap",
        taskDesc:
          'Connect your Web3 wallet. Then, select a token you want to exchange in the "from" tab. After that, select SPACE token in the "to" tab. Optionally - adjust the slippage (difference between the expected price of a trade and the actual price at which the trade is executed) tolerance by clicking on gear-shaped button in the upper-right corner of the window. Enter the amount of tokens you want to exchange, you can choose any amount. Click "swap" and confirm transaction through your Web3 wallet. If you are exchanging any ERC-20 token (basically, any token rather than ETH), you will first need to click on "approve" button and approve spending limit through your Web3 wallet, before you can do the swap.',
      },
      task23: {
        title: "Add any amount of any token to any pool",
        exp: 30,
        source: "Multichain.org",
        link: "https://app.multichain.org/#/pool",
        taskDesc:
          'Connect your Web3 wallet. Choose any pool (currently, ETH, USDC, xcRMRK, Array, iUSD and iZi pools are available on zkSync) and click "add" button. Input the amount of tokens you want to add and click "add" if you selected ETH and confirm the transaction in your Web3 wallet. If you selected any other token - first click on "approve", confirm in your Web3 wallet and then click on "add" and confirm in the wallet.',
      },
      task24: {
        title: "Add liquidity to any pool",
        exp: 30,
        source: "Onchain.trade",
        link: "https://onchain.trade/#/pools",
        taskDesc:
          'Connect your Web3 wallet. Choose any pool and click on the "+" deposit button. Input the amount of tokens you want to add and click "add liquidity", then confirm the transaction in your Web3 wallet.',
      },
      task25: {
        title: "Buy any existing NFT",
        exp: 30,
        source: "Mintsquare.io",
        link: "https://mintsquare.io/collections/zksync",
        taskDesc:
          'Connect your Web3 wallet. Scroll the page to see the available collections and open any collection you like. A collection page will open, allowing you to pick NFTs, listed for sale. Hover your mouse on the NFT you like and "add to cart" button will appear. Click on it and then click "purchase" and confirm with Web3 wallet. Be mindful of the NFT prices, which can be inadequately high.',
      },
      task26: {
        title: "Approve 'use as collateral' ",
        exp: 30,
        source: "Nexon.finance",
        link: "https://app.nexon.finance/",
        taskDesc:
          'Connect your Web3 wallet. Scroll the page down to see ETH and USDC tabs and click "supply" button. In the popup you will see "use as collateral" option with a circle button. Click on the circle button and confirm the transaction in your Web3 wallet to enable using this asset as collateral.',
      },
      task27: {
        title: "Supply USDC or ETH",
        exp: 30,
        source: "Nexon.finance",
        link: "https://app.nexon.finance/",
        taskDesc:
          'Connect your Web3 wallet. Scroll the page down to see ETH and USDC tabs and click "supply" button. Enter the amount of tokens you wish to supply and press on "supply" button. Confirm transaction in your Web3 wallet.',
      },
      task28: {
        title: "Add liquidity to any pool",
        exp: 30,
        source: "Spacefi.io",
        link: "https://swap-zksync.spacefi.io/#/pool",
        taskDesc:
          'Connect your Web3 wallet. Click on "add liquidity" in the "pool" tab. Select TWO tokens you wish to add from the droplist and enter the amount of tokens to add (must be equal in value). Click on "approve" button to approve spending, confirm the transaction in your Web3 wallet, then press "supply" button and confirm the transaction again.',
      },
      task29: {
        title: "Open a long or short position",
        exp: 30,
        source: "Unidex.exchange",
        link: "https://leverage.unidex.exchange/#/trade",
        taskDesc:
          'Connect your Web3 wallet. Select pair you want to trade on the left side of the window (example: NEAR-USD). Input amount of USDC you want to use in the trade in "Size (USDC)" tab. Adjust leverage with a slider below the tab (example - switch it to 10x). Click on "Long" or "Short" button and click "confirm order" in the pop-up. Then confirm it with you Web3 wallet. Your trade is now open and we suggest you immediately go to the next to close your trade!',
      },
      task201: {
        title: "Close your position",
        exp: 30,
        source: "Unidex.exchange",
        link: "https://leverage.unidex.exchange/#/trade",
        taskDesc:
          'You can see your position in the bottom of the page, below the main dashboard. Click on the "x" button behind "close trade" tab and input the size to close (to close the trade for good, enter the full position size). Press "close position" button and confirm in the Web3 wallet.',
      },
      task202: {
        title: "Add liquidity to USDC pool",
        exp: 30,
        source: "Unidex.exchange",
        link: "https://leverage.unidex.exchange/#/pool",
        taskDesc:
          'Connect your Web3 wallet. Enter amount of USDC you wish to add in the "Deposit amount" tab. Click on "approve" button and confirm the spending limit in the Web3 wallet, then click on "Deposit" button and confirm in the Web3 wallet.',
      },
    },
  },
  journey3: {
    nick: "Journey Three",
    title: "Lend and Borrow, Bons, Remove liquidity and more",
    journeyDesc: "Test INFO",
    tasks: {
      task31: {
        title: "Lock any amount of token in DAO for any amount of time",
        exp: 50,
        source: "Mute.io",
        link: "https://app.mute.io/dao",
        taskDesc: "Test INFO",
      },
      task32: {
        title: "Add liquidity to MUTE/WETH pool",
        exp: 50,
        source: "Mute.io",
        link: "https://app.mute.io/pool",
        taskDesc: "Test INFO",
      },
      task33: {
        title: "Redeem any amount of token from DAO",
        exp: 50,
        source: "Mute.io",
        link: "https://app.mute.io/dao",
        taskDesc: "Test INFO",
      },
      task34: {
        title: "Convert SPACE to xSPACE",
        exp: 50,
        source: "Spacefi.io",
        link: "https://app.spacefi.io/#/xSPACE",
        taskDesc: "Test INFO",
      },
      task35: {
        title: "Unbond xSPACE",
        exp: 50,
        source: "Spacefi.io",
        link: "https://app.spacefi.io/#/xSPACE",
        taskDesc: "Test INFO",
      },
      task36: {
        title: "Borrow USDC or ETH",
        exp: 50,
        source: "Nexon.finance",
        link: "https://app.nexon.finance",
        taskDesc: "Test INFO",
      },
      task37: {
        title: "Repay USDC or ETH",
        exp: 50,
        source: "Nexon.finance",
        link: "https://app.nexon.finance/",
        taskDesc: "Test INFO",
      },
      task38: {
        title: "Withdraw USDC or ETH",
        exp: 50,
        source: "Nexon.finance",
        link: "https://app.nexon.finance/",
        taskDesc: "Test INFO",
      },
      task39: {
        title: "Remove any amount of any token from any pool",
        exp: 50,
        source: "Multichain.org",
        link: "https://app.multichain.org/#/pool",
        taskDesc: "Test INFO",
      },
      task301: {
        title: "Remove liquidity from the pool",
        exp: 50,
        source: "Unidex.exchange",
        link: "https://leverage.unidex.exchange/#/pool",
        taskDesc: "Test INFO",
      },
      task302: {
        title: "Remove liquidity from any pool",
        exp: 50,
        source: "Syncswap.xyz",
        link: "https://syncswap.xyz/pools",
        taskDesc: "Test INFO",
      },
    },
  },
  journeyEnd: {
    nick: "Journey End",
    title: "Bridges",
    journeyDesc: "Test INFO",
    tasks: {
      task01: {
        title: "Bridge any amount of ETH from zkSync Era to any chain",
        exp: 110,
        source: "Orbiter.finance",
        link: "https://www.orbiter.finance",
        taskDesc: "Test INFO",
      },
      task02: {
        title: "Bridge any token from zkSync ERA",
        exp: 110,
        source: "Multichain.org",
        link: "https://app.multichain.org/#/router ",
        taskDesc: "Test INFO",
      },
    },
  },
};
const jsonString = JSON.stringify(testData);
