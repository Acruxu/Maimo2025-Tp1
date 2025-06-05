import React from "react";

const BtnInfo = ({ id }) => {
  return (
    <a className="bton_mas" href={`/recipe/${id}`}>
      Ver mas
    </a>
  );
};

export default BtnInfo;
