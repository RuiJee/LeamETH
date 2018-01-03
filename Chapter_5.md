# ETH钱包的实现

## 需要了解的知识

> 本章将完成ETH的钱包编写，将实现ETH钱包的功能，生成地址，转账，保存私钥等。

## 编写ETH钱包

> 使用Web3 api 创建ETH账户
>
> 在这里将使用API web3.eth.accounts.create() 来创建账户(注意，创建账户只是在离线环境生成一对公私钥)
>
> const result = this.state.web3.eth.accounts.create()
>
> result 中可获得ETH的地址与私钥
>

## 向您创建的ETH账户转入一个ETH

>使用Web3 api 向您的ETH 账户转一个ETH
>
> 参考 http://web3js.readthedocs.io/en/1.0/web3-eth.html
>
>[下一章](./Chapter_6.md)