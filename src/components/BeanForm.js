import React from "react";
import PropTypes from "prop-types";

function BeanForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="name"
          defaultValue={props?.prvOrder?.name || "name of item"}
          placeholder="name of item" />
        <input
          type="text"
          name="roast"
          defaultValue={props?.prvOrder?.roast  || "Item description"}
          placeholder="Item description" />
        <input
          type="number"
          name="count"
          defaultValue={props?.prvOrder?.count  || "Stock Amount"}
          placeholder="Stock Amount" />
        <input
          type="number" 
          name="price"
          defaultValue={props?.prvOrder?.price || null}
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