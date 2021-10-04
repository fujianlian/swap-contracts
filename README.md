# Install Truffle

Please refer to: https://devdocs.alaya.network/alaya-devdocs/zh-CN/Alaya-Truffle

# Update value of `feeToSetter` in `migrations/2_deploy_contracts.js` to Contract Deployer

```
const feeToSetter='atp1jtfqqqr6436ppj6ccnrh8xjg7qals3ctnnmurp'; //the current contract deployer has the right to change the feeTo address
```

# Modify Chain Configuration

```shell
vi truffle-config.js
```

```
host: "10.1.1.50",     // The server host of blockchain
port: 6789,            // Port number
network_id: "*",       // Any network (default: none)
from: "atp1jtfqqqr6436ppj6ccnrh8xjg7qals3ctnnmurp", // The wallet address of contract deployment
gas: 4612388,
gasPrice: 500000000004,
```

# Import the Wallet Private Key and Unlock the Wallet

- Skip this step if you have imported before

alaya-truffle console

```
web3.platon.personal.importRawKey("Wallet Private Key","Wallet Password");
web3.platon.personal.unlockAccount('Wallet Address','Wallet Password',999999);
```

# Contract Deployment

alaya-truffle migrate --f 2 --to 2 --skip-dry-run

# Record the deployed contract address (fill according to the actual deployment result)

```
uniswapV2Factory at: atp10phjn89dfwqp5vyxf2tg3cqeturhwhcua3vqt2
WATP at: atp1pdrmvas4tlypyy4w78y2jk7d5yqxw2975z259m
uniswapV2Router02 at: atp19rlj0nsjrna7uw09agzzufy4uuvfkwr8zeeall
Multicall  at: atp1h7z3egxfcrv2xhzhtpuuqqcu5glcmcfa9zwp9q
initHash is at: 0x2aadd7c61745fb2e70e789bfac72e2ec87b7c7da19da6cb5ae3ae36f54a6a3c7
```