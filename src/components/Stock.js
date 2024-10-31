import React from "react";
import PropTypes from "prop-types";
import Bean from "./Bean";

function Stock(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.stock.map((stock) =>
        <Bean func={props.buyFunc}
          edit={props.editFunc}
          delete={props.deleteFunc}
          name={stock.name}
          count={stock.count}
          price={stock.price}
          roast={stock.roast}
          key={stock.id}
          id={stock.id}
        />
      )}
    </React.Fragment>
  )  
}

Stock.propTypes = {
  stock: PropTypes.array,
  buyFunc: PropTypes.func,
  editFunc: PropTypes.func,
  deleteFunc: PropTypes.func
};

export default Stock;