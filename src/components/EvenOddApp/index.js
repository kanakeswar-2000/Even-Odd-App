// Write your code here
import {Component} from 'react'
import './index.css'
class EvenOddApp extends Component {
  state = {count: 0, text: 'Even'}
  randomnum = () => {
    let num = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + num}))
    if (num % 2 === 0) {
      this.setState(() => ({text: 'Even'}))
    } else {
      this.setState(() => ({text: 'Odd'}))
    }
  }
  render() {
    const {count, text} = this.state

    return (
      <div className="bg-container">
        <div class="card-container">
          <h1 className="heading">Count {count}</h1>
          <p className="para">Count is {text}</p>
          <button onClick={this.randomnum}>Increment</button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
