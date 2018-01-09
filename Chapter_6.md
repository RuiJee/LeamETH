# 针对Web3.js 的一些简要说明

## 参考 http://web3js.readthedocs.io/en/1.0/

## WEB3 web3.js 是以太坊开源社区提供的连接以太坊客户端的工具

## WEB3 的安装

>npm install web3 --save
>
>在代码里使用
>

```
var Web3 = require('web3');
console.log(web3.version)
```

## web3.eth 这个包允许你使用账户,智能合约的一些操作

>使用 web3.eth 获取当前客户端里的所有账户

```
    const provider = new Web3.providers.HttpProvider(`http://127.0.0.1:7545`)
    let web3 = new Web3(provider)
    web3.eth.getAccounts().then(console.log)
```

## web3.eth.accounts 这个包允许你对账户的一些操作

>使用 web3.eth.accounts 创建ETH账户
```
    console.log(web3.eth.accounts.create())
```

## 以太坊账户与钱包的区别

> 账户是存储ETH的最基本的方式。它只是简单的公私钥对，不需要做任何网络登陆，只需要将交易用私钥签名后发送到区块即可
>
> 钱包是智能合约，它将部署到以太坊的P2P网络上去，它有更多的高级功能如交易记录，取款限额等。
>
> 您可以使用web3.eth.accounts.wallet 来管理您的钱包，如以下代码创建钱包

```
    web3.eth.accounts.wallet.create(2, '54674321§3456764321§345674321§3453647544±±±§±±±!!!43534534534534');
```

> 源码里有一些简单的测试和说明
>
> 下载后npm install
>
> npm run test
> 注意要打开客户端Ganache

>[下一章](./Chapter_7.md)