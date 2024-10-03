import React from "react";
import PropTypes from "prop-types"

function Bean(props) {
  return (
    <React.Fragment>
      <h3>{props.name} - {props.count === 0 ? "Out of Stock":props.count}</h3>
    </React.Fragment>
  )
}

Bean.propTypes = {
  name: PropTypes.string,
  const: PropTypes.number,
  description: PropTypes.string,
  id: PropTypes.string
};

export default Bean;