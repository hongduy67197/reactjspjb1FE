import React from "react";
import "../homePage/ListProduct.css";
import Cards from "../homePage/Cards";

const Icon = (Icons) => {
  console.log(55, Icons);
  return (
    <div>
      {Icons.NewIcon.map((Icon) => {
        console.log(10, Icon);
        return <Cards key={Icon.id} Icon={Icon} item={Icons.productCode} />;
      })}
    </div>
  );
};

export default Icon;
