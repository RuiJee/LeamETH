/*
 * @Author: qugang 
 * @Date: 2018-01-09 12:35:49 
 * @Last Modified by:   qugang 
 * @Last Modified time: 2018-01-09 12:35:49 
 */


import chalk from 'chalk';
import assert from 'assert';
import chai from 'chai';
import Web3 from 'web3'

describe('Web3', function () {
    describe('#Web3', function () {
        const provider = new Web3.providers.HttpProvider(`http://localhost:8545`)
        let web3 = new Web3(provider)

        this.timeout(15000);
        it('测试Web3获取版本号',function(){
            chai.expect(web3.version).to.not.equal(undefined)
        })
    })
})