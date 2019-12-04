import React from "react";

const Ingridient = props => {
  let ingridient = null;

  switch (props.type) {
    case "bread-botom":
      ingridient = <div className="BreadBotom"></div>;
      break;
    case "bread-top":
      ingridient = (
        <div className="BreadTop">
          <div className="Seed1"></div>
          <div className="Seed1"></div>
        </div>
      );
      break;

    case "meat":
      ingridient = <div className="Meat"></div>;
      break;
    case "cheese":
      ingridient = <div className="Cheese"></div>;
      break;
    case "bacon":
      ingridient = <div className="Bacon"></div>;
      break;
    case "salad":
      ingridient = <div className="Salad"></div>;
      break;
    default:
      ingridient = null;
  }
  return ingridient;
};

export default Ingridient;
