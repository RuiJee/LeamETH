/*
 * @Author: qugang 
 * @Date: 2018-01-09 12:35:45 
 * @Last Modified by:   qugang 
 * @Last Modified time: 2018-01-09 12:35:45 
 */


import chalk from 'chalk';
import assert from 'assert';
import chai from 'chai';
import Web3 from 'web3'

describe('Web3Account', function () {
    describe('#Web3Account', function () {
        const provider = new Web3.providers.HttpProvider(`http://127.0.0.1:7545`)
        let web3 = new Web3(provider)

        this.timeout(15000);
        it('测试Web3获取所有账户',function(done){
             web3.eth.getAccounts().then(function(result){
                chai.expect(result).to.not.equal(undefined)
                done()
             })
        })

        it('测试Web3订阅区块链事件(此功能1.0还未支持))',function(done){
            web3.eth.subscribe('logs',{
                address:"0x16e8Ede1D564c1f7749a0D72AAcc012D8BbF466C"
            },function(error,result){
                done()
            })
        })

        it('测试Web3创建账户',function(){
           const result =  web3.eth.accounts.create()

           chai.expect(result).to.not.equal(undefined)
        })

        it('测试web3签名交易',function(done){
            web3.eth.accounts.signTransaction({
                to: '0xF0109fC8DF283027b6285cc889F5aA624EaC1F55',
                value: '1000000000',
                gas: 2000000
            }, '0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318').then(function(result){
                // 1.0 不支持 web3.eth.accounts.recoverTransaction(result.rawTransaction)
                done()
            })
        })

        it('测试HASH消息',function(){
           const result =  web3.eth.accounts.hashMessage("Hello World")
           chai.expect(result).to.not.equal(undefined)
        })

        it('测试使用私钥签名',function(){
           const result =  web3.eth.accounts.sign("helloWorld", "c5cf8e1ccb6f5df908bdbf050a966901446e30f308e54f8a6370ce8325288a92");
           chai.expect(result).to.not.equal(undefined)
        })

        it('测试使用私钥加密',function(){
           const result =  web3.eth.accounts.encrypt("c5cf8e1ccb6f5df908bdbf050a966901446e30f308e54f8a6370ce8325288a92", "helloWorld");
           chai.expect(result).to.not.equal(undefined)
        })

        it('测试创建用户钱包',function(){
            console.log(web3.eth.accounts.wallet)
        })
        
    })
})