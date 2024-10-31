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

  editBeanFunction = (newBean) => {
    const resetBean = { ...this.state.selectedObject, ...newBean }
    const editList = this.state.mainStockList
      .filter(bean => bean.id !== this.state.selectedObject.id)
      .concat(resetBean);
    this.setState({ editing: false, mainStockList: editList })
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

  restockFunction = (beanId) => {
    const foundObject = this.state.mainStockList.find(bean => bean.id === beanId);
    const updatedObject = { ...foundObject, count: foundObject.count + 130 }
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

  removeBean = (beanId) => {
    const editingMainStockList = this.state.mainStockList
      .filter(bean => bean.id !== beanId)
      this.setState({
        mainStockList: editingMainStockList,
        editing: false
      });
  }

  render() {
    let currentlyVisibleState = null;
    if (this.state.editing) {
      currentlyVisibleState = <Edit editObjectOnList={this.editBeanFunction} theObject={this.state.selectedObject}/>
    } else if (this.state.formVisiblePage === false) {
      currentlyVisibleState = <Stock stock={this.state.mainStockList} buyFunc={this.buyFunction} editFunc={this.editFunction} deleteFunc={this.removeBean}/>
    } else if (this.state.formVisiblePage === true) {
      currentlyVisibleState = <Add addNewBeanToList={this.addNewBean} />
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