import React from "react";
import PropTypes from "prop-types";

function BeanForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="name"
          defaultValue={props?.prvOrder?.name || "Name of item"}
          placeholder="Name of item" />
        <input
          type="text"
          name="roast"
          defaultValue={props?.prvOrder?.roast  || "Item description"}
          placeholder="Item description" />
        <input
          type="text"
          name="origin"
          defaultValue={props?.prvOrder?.origin || "Origin/Seller description"}
          placeholder="Origin/Seller description" />
        <input
          type="number" 
          name="price"
          defaultValue={props?.prvOrder?.price || 0}
          placeholder="Price" />
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

BeanForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  prvOrder: PropTypes.object
};

export default BeanForm;