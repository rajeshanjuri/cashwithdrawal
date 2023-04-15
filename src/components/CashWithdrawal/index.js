// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  decreaseBalance = val => {
    this.setState(prevState => ({
      balance: prevState.balance - val,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="bg-conatiner">
        <div className="card-container">
          <div className="williams-container">
            <p className="s-logo">s</p>
            <p className="sarah-name">Sarah Williams</p>
          </div>
          <div className="balance-conatiner">
            <p className="your-balance">Your Balance</p>
            <div className="balance-amount">
              <p className="balance">{balance}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="unorder-list-container">
            {denominationsList.map(eachNum => (
              <DenominationItem
                eachNum={eachNum}
                decreaseBalance={this.decreaseBalance}
                key={eachNum.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
