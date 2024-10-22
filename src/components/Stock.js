import React from "react";
import PropTypes from "prop-types";
import Bean from "./Bean";

function Stock(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.stock.map((stock) =>
        <Bean func={props.buyFunc}
          name={stock.name}
          count={stock.count}
          recipe={stock.recipe}
          key={stock.id}
          id={stock.id}
        />
      )}
    </React.Fragment>
  )  
}

Stock.propTypes = {
  stock: PropTypes.array,
  buyFunc: PropTypes.func
};

export default Stock;