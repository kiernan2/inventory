import React from "react";
import PropTypes from "prop-types";

function BeanForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmission}>
        <input
          type="text"
          name="name"
          defaultValue={props?.prvOrder?.name || ""}
          placeholder="noInput" />
        <input
          type="text"
          name="recipe"
          defaultValue={props?.prvOrder?.recipe || ""}
          placeholder="noInput" />
        <input
          type="number"
          name="count"
          defaultValue={props?.prvOrder?.count || 0}
          placeholder="0" />
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