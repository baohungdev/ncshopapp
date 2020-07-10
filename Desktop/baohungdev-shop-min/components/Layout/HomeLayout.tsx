import React from "react";
import { ProductGeneral } from "../../interfaces";
import GridLayout from "../Grid/Grid";

type Props = {
  productList: [ProductGeneral];
};

const HomeLayout = ({ productList }: Props) => {
  return (
    <div className="container">
      <GridLayout data={productList} />
    </div>
  );
};

export default HomeLayout;
