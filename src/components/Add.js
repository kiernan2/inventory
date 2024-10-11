import React from "react";
import PropTypes from "prop-types";
import BeanForm from "./BeanForm";
import { v4 } from "uuid";

function Add(props) {

  function addBeanToList(event) {
    event.preventDefault();
    props.addNewBeanToList({
      name: event.target.name.value,
      recipe: event.target.recipe.value,
      count: parseInt(event.target.count.value),
      id: v4(),
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
  addNewBeanToList: PropTypes.func
};

export default Add;