import React from "react";
import PropTypes from "prop-types";
import BeanForm from "./BeanForm";

function Edit(props){

  function editObjectOnList(event){
    event.preventDefault();
    props.editObjectOnList({
      name: event.target.name.value,
      recipe: event.target.recipe.value,
      count: parseInt(event.target.count.value)
    });
  }

  return (
    <React.Fragment>
      <BeanForm
        formSubmissionHandler={editObjectOnList}
        prvOrder={props.theObject}
      />
    </React.Fragment>
  );
}

Edit.propTypes = {
  editObjectOnList: PropTypes.func,
  theObject: PropTypes.object
};

export default Edit