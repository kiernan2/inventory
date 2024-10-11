import React from "react";
import PropTypes from "prop-types";

function Bean(props) {
  return (
    <React.Fragment>
      <h3>{props.name} - {props.count === 0 ? "Out of Stock":props.count}</h3>
      <p>{props.recipe}</p>
    </React.Fragment>
  )
}

Bean.propTypes = {
  name: PropTypes.string,
  count: PropTypes.number,
  recipe: PropTypes.string,
  id: PropTypes.string
};

export default Bean;