const Multicall = artifacts.require("Multicall");
const uniswapV2Factory = artifacts.require("UniswapV2Factory");
const WATP = artifacts.require("WATP");
const uniswapV2Router02 = artifacts.require("UniswapV2Router02");
const uniswapV2ERC20 = artifacts.require("UniswapV2ERC20");
const feeToSetter='lat12vt5sjef39u5wd4uf4hkj8fmayle55qaghrt24'; //有权更改 feeTo 地址的账户,为当前合约部署者

module.exports = async function(deployer) {
   await deployer.deploy(uniswapV2Factory,feeToSetter);
   console.log('uniswapV2Factory at:',uniswapV2Factory.address);

   await  deployer.deploy(WATP);
   console.log('WATP at:',WATP.address);

   await  deployer.deploy(uniswapV2Router02,uniswapV2Factory.address,WATP.address);
   console.log('uniswapV2Router02 at:',uniswapV2Router02.address);

//   await  deployer.deploy(uniswapV2ERC20);
//   console.log('uniswapV2ERC20 at:',uniswapV2ERC20.address);

   await deployer.deploy(Multicall);
   console.log('Multicall  at:',Multicall.address);

   var factory = new web3.platon.Contract(require("../build/contracts/UniswapV2Factory.json")['abi'], uniswapV2Factory.address, {net_type:"atp"});

   var initHash = await factory.methods.INIT_UNISWAPV2PAIR_HASH().call();
   console.log("initHash is at:",initHash);
};