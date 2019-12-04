import React from "react";

const layout = props => {
  return (
    <div>
      <div> toobar, sidedrow and backdrop</div>
      <main>{props.children}</main>
    </div>
  );
};

export default layout;
