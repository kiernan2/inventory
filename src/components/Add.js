import React from "react";
import PropTypes from "prop-types";
import BeanForm from "./BeanForm";
import { v4 } from "uuid";

function Add(props) {

  function addBeanToList(event) {
    event.preventDefault();
    props.addNewItemToList({
      name: event.target.name.value,
      roast: event.target.roast.value,
      count: 130,
      origin: event.target.origin.value,
      price: parseInt(event.target.price.value),
      id: v4()
    });

  }

  return (
    <React.Fragment>
      <BeanForm
        formSubmissionHandler={addBeanToList}
        buttonText="Help" />
    </React.Fragment>
  );
}

Add.propTypes = {
  addNewItemToList: PropTypes.func
};

export default Add;