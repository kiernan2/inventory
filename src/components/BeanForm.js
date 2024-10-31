import React from "react";
import PropTypes from "prop-types";

function BeanForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="name"
          defaultValue={props?.prvOrder?.name || ""}
          placeholder="noInput" />
        <input
          type="text"
          name="roast"
          defaultValue={props?.prvOrder?.roast  || ""}
          placeholder="noInput" />
        <input
          type="number"
          name="count"
          defaultValue={props?.prvOrder?.count || 130}
          placeholder="130" />
        <input
          type="number" 
          name="price"
          defaultValue={props?.prvOrder?.price || 5}
          placeholder="5" />
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