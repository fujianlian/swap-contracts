# 安装truffle

请参考：https://devdocs.alaya.network/alaya-devdocs/zh-CN/Alaya-Truffle


# 修改migrations/2_deploy_contracts.js中feeToSetter值为合约部署者
```
const feeToSetter='atp1jtfqqqr6436ppj6ccnrh8xjg7qals3ctnnmurp'; //有权更改feeTo地址的账户,为当前合约部署者
```

# 修改链相关配置
```shell
vi truffle-config.js
```

```
host: "10.1.1.50",     // 区块链所在服务器主机
port: 6789,            // 链端口号
network_id: "*",       // Any network (default: none)
from: "atp1jtfqqqr6436ppj6ccnrh8xjg7qals3ctnnmurp", //部署合约账号的钱包地址
gas: 4612388,
gasPrice: 500000000004,
```

# 导入钱包私钥并解锁钱包
- 如果之前导入过可以跳过此步骤

alaya-truffle console
```
web3.platon.personal.importRawKey("您的钱包私钥","您的钱包密码");
web3.platon.personal.unlockAccount('您的钱包地址','您的钱包密码',999999);
```

# 部署合约
alaya-truffle migrate --f 2 --to 2 --skip-dry-run

# 记录部署合约地址信息(根据实际部署结果填写)
```
uniswapV2Factory at: atp10phjn89dfwqp5vyxf2tg3cqeturhwhcua3vqt2
WATP at: atp1pdrmvas4tlypyy4w78y2jk7d5yqxw2975z259m
uniswapV2Router02 at: atp19rlj0nsjrna7uw09agzzufy4uuvfkwr8zeeall
Multicall  at: atp1h7z3egxfcrv2xhzhtpuuqqcu5glcmcfa9zwp9q
initHash is at: 0x2aadd7c61745fb2e70e789bfac72e2ec87b7c7da19da6cb5ae3ae36f54a6a3c7
```
