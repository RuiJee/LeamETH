# ETH钱包的实现

## 前言

> 此项目只完成ETH的账号申请。

## 编写ETH钱包

> 使用Web3 api 创建ETH账户
>
> 在这里将使用API web3.eth.accounts.create() 来创建账户(注意，创建账户只是在离线环境生成一对公私钥)
>
> const result = this.state.web3.eth.accounts.create()
>
> result 中可获得ETH的地址与私钥
>
> 代码如下

```
import React, { Component } from 'react'
import getWeb3 from './utils/getWeb3'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

/**
* @author   作者:  qugang
* @E-mail   邮箱: qgass@163.com
* @date     创建时间：2018/1/3
* 类说明     ETH钱包实现
*/


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      web3: null,
      accounts: [],
      coinbaseAccount: '',
      newAccount: ''
    }

  }

  componentWillMount() {

    getWeb3
      .then(results => {
        this.setState({
          web3: results.web3
        })
      })
      .catch(() => {
        console.log('Error finding web3.')
      })
  }

  handleSendBallot(e) {
    e.preventDefault()
    console.log(`user : ${this.user.value}`)
    console.log(`password : ${this.password}`)
    const result = this.state.web3.eth.accounts.create()

    this.setState({
      newAccount: {
        user: this.user.value,
        password: this.password.value,
        address: result.address,
        privateKey: result.privateKey
      }
    })

    this.state.accounts.push({
      user: this.user.value,
      password: this.password.value,
      address: result.address,
      privateKey: result.privateKey
    })

    console.log(this.state.accounts)

  }

  render() {
    return (
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
          <a href="#" className="pure-menu-heading pure-menu-link">Truffle Box</a>
        </nav>
        <main className="container">
          {/* <div className="pure-g">
            <div className="pure-u-1-1">
              <h1>创建的账户</h1>
              <p>主席: {this.state.coinbaseAccount}</p>
              {this.state.accounts.map((account) =>
                <p>投票账户{account} </p>
              )}
            </div>
          </div> */}

          <form>
            <h1>创建账户</h1>
            <label>请输入用户名</label>
            <input id="user" type="text" ref={(i) => { if (i) { this.user = i } }} ></input>
            <label>请输入账户密码</label>
            <input id="password" type="text" ref={(i) => { if (i) { this.password = i } }} ></input>
            <button onClick={this.handleSendBallot.bind(this)}>创建账户</button>
          </form>

          {this.state.accounts.map((account) =>
            <div className="pure-g">
            <div className="pure-u-1-1">
              <h1>账户:{account.user}</h1>
              <p>创建的密码:{account.password}</p>
              <p>ETH钱包的私钥:{account.address}</p>
              <p>ETH钱包公钥的地址:{account.privateKey}</p>
              </div>
            </div>
          )}
        </main>

      </div>
    );
  }
}

export default App

```

> 完整的示列在:https://github.com/qugang/ETHWallet
>
> 参考 http://web3js.readthedocs.io/en/1.0/web3-eth.html
>
>[下一章](./Chapter_6.md)