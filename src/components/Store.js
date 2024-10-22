import React from "react";
import Stock from "./Stock";
import Add from "./Add";

class Store extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisiblePage: false,
      mainStockList: [],
      selectedObject: null,
      editing: false
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

  editFunction = (beanId) => {
    const foundObject = this.state.mainStockList.find(bean => bean.id === beanId);
    this.setState({ selectedObject: foundObject })
    this.setState({ editing: true })
  }

  buyFunction = (beanId) => {
    const foundObject = this.state.mainStockList.find(bean => bean.id === beanId);
    const updatedObject = { ...foundObject, count: foundObject.count - 1 }
    if (updatedObject.count < 0) {
      return;
    }
    const editingMainStockList = this.state.mainStockList
      .filter(bean => bean.id !== beanId)
      .concat(updatedObject);
    this.setState({
      mainStockList: editingMainStockList
    });
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
    if (this.state.editing) {
      
    } else if (this.state.formVisiblePage === false) {
      currentlyVisibleState = <Stock stock={this.state.mainStockList} buyFunc={this.buyFunction} />
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