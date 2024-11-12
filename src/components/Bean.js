import React from "react";
import PropTypes from "prop-types";

function Bean(props) {
  return (
    <React.Fragment>
      <h3>{props.name}: amount in stock: {props.count === 0 ? "Out of Stock":props.count}</h3>
      <p>{props.roast}</p>
      <p>{" $ " + props.price}</p>
      <button onClick={() => props.func(props.id)}>buy</button>
      <button onClick={() => props.edit(props.id)}>edit</button>
      <button onClick={() => props.delete(props.id)}>delete</button>
    </React.Fragment>
  )
}

Bean.propTypes = {
  name: PropTypes.string,
  count: PropTypes.number,
  roast: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  func: PropTypes.func,
  edit: PropTypes.func,
  delete: PropTypes.func
};

export default Bean;