import React from "react";
import PropTypes from "prop-types";
import Bean from "./Bean";
import { v4 } from "uuid";

function Stock(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.stock.map((stock) =>
        <Bean name={stock.name}
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
  stock: PropTypes.array
};

export default Stock;