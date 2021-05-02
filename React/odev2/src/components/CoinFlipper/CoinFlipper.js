import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      side: "tura",
      flipping: false,
      count: 0,
      tura: 0,
      yazi: 0,
    };
  }
  static defaultProps = {
    para: ["tura", "yazi"],
  };
  handleClick = () => {
    let para = [...this.props.para];

    this.setState({ flipping: true });
    setTimeout(() => this.setState({ flipping: false }), 1000);
    this.setState({ count: this.state.count + 1 });

    const random = Math.floor(Math.random() * 1 + 0.5);
    this.setState({ side: para[random], flipping: true });

    if (para[random] === "tura") {
      return this.setState({ tura: this.state.tura + 1 });
    } else if (para[random] === "yazi") {
      return this.setState({ yazi: this.state.yazi + 1 });
    }
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          <div>
            Toplam
            <strong> {this.state.count} </strong>
            atıştan
          </div>
          <div>
            <strong> {this.state.yazi} </strong>yazı
          </div>
          <div>
            <strong> {this.state.tura} </strong>
            tura
          </div>
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
