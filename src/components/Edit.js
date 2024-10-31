import React from "react";
import PropTypes from "prop-types";
import BeanForm from "./BeanForm";

function Edit(props){

  function editObjectOnList(event){
    event.preventDefault();
    props.editObjectOnList({
      name: event.target.name.value,
      roast: event.target.roast.value,
      count: parseInt(event.target.count.value),
      price: parseInt(event.target.price.value)
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