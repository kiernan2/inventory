import React from "react";
import Stock from "./Stock";
import Add from "./Add";

class Store extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisiblePage: false,
      mainStockList: []
    };
  }

  menuToggle = () => {
    if (this.state.formVisiblePage === false) {
      this.setState({
        formVisiblePage: true
      })
    } else {
      this.setState({
        formVisiblePage: false
      })
    }
  }

  addNewBean = (newBean) => {
    const newMainStockList = this.state.mainStockList.concat(newBean)
    this.setState({
      mainStockList: newMainStockList,
      formVisiblePage: false
    });
  }

  render() {
    let currentlyVisibleState = null;
    if (this.state.formVisiblePage === false) {
      currentlyVisibleState = <Stock stock={this.state.mainStockList} />
    } else if (this.state.formVisiblePage === true) {
      currentlyVisibleState = <Add addNewBeanToList={this.addNewBean} />
    }

    return (
      <React.Fragment>
        <button onClick={this.menuToggle}>Toggle</button>
        {currentlyVisibleState}
      </React.Fragment>
    )
  }
}

export default Store;