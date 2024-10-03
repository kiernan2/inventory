import React from "react"
import Stock from "./Stock";


class Store extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainStockList: []
    };
  }

  render() {
    return (
      <Stock/>
    )
  }
}

export default Store;