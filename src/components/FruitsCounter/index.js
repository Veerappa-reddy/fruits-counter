import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count: 0}

  onEatMango = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onEatBanana = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="fruits-container-card">
          <h1 className="heading">
            Bob ate {count} mangoes {count} bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="mango"
              />
              <button
                className="button"
                onClick={this.onEatMango}
                type="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="banana"
              />
              <button
                className="button"
                onClick={this.onEatBanana}
                type="button"
              >
                Eat banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
