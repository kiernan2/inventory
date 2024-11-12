import React from "react";
import Stock from "./Stock";
import Add from "./Add";
import Edit from "./Edit";

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

  editItemFunction = (newItem) => {
    const resetItem = { ...this.state.selectedObject, ...newItem }
    const editList = this.state.mainStockList
      .filter(item => item.id !== this.state.selectedObject.id)
      .concat(resetItem);
    this.setState({ editing: false, mainStockList: editList })
  }

  editFunction = (itemId) => {
    const foundObject = this.state.mainStockList.find(item => item.id === itemId);
    this.setState({ selectedObject: foundObject })
    this.setState({ editing: true })
  }

  buyFunction = (itemId) => {
    const foundObject = this.state.mainStockList.find(item => item.id === itemId);
    const updatedObject = { ...foundObject, count: foundObject.count - 1 }
    if (updatedObject.count < 0) {
      return;
    }
    const editingMainStockList = this.state.mainStockList
      .filter(item => item.id !== itemId)
      .concat(updatedObject);
    this.setState({
      mainStockList: editingMainStockList
    });
  }

  restockFunction = (itemId) => {
    const foundObject = this.state.mainStockList.find(item => item.id === itemId);
    const updatedObject = { ...foundObject, count: foundObject.count + 130 }
    const editingMainStockList = this.state.mainStockList
      .filter(item => item.id !== itemId)
      .concat(updatedObject);
    this.setState({
      mainStockList: editingMainStockList
    });
  }

  addNewItem = (newItem) => {
    const newMainStockList = this.state.mainStockList.concat(newItem)
    this.setState({
      mainStockList: newMainStockList,
      formVisiblePage: false
    });
  }

  removeFunction = (itemId) => {
    const editingMainStockList = this.state.mainStockList
      .filter(item => item.id !== itemId)
      this.setState({
        mainStockList: editingMainStockList,
        editing: false
      });
  }

  render() {
    let currentlyVisibleState = null;
    if (this.state.editing) {
      currentlyVisibleState = <Edit editObjectOnList={this.editItemFunction} theObject={this.state.selectedObject}/>
    } else if (this.state.formVisiblePage === false) {
      currentlyVisibleState = <Stock stock={this.state.mainStockList} buyFunc={this.buyFunction} editFunc={this.editFunction} deleteFunc={this.removeFunction}/>
    } else if (this.state.formVisiblePage === true) {
      currentlyVisibleState = <Add addNewItemToList={this.addNewItem} />
    } 

    return (
      <React.Fragment>
        <button onClick={this.menuToggle}>Toggle Serve/Stock Mode</button>
        {currentlyVisibleState}
      </React.Fragment>
    )
  }
}

export default Store;