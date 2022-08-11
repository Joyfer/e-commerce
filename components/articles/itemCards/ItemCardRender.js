import React from "react";
import { Grid } from "@material-ui/core";

import ItemCard from "../ItemCard";
import useAppContext from "../../../context/Context";

const ItemCardRender = ({ cardInformation, heightDivList }) => {
  const { isMobileScreen } = useAppContext();

  if (isMobileScreen === true) {
    return cardInformation.map((el) => {
      return (
        <div key={el.id}>
          <ItemCard itemInfo={el} heightProp={heightDivList}></ItemCard>
        </div>
      );
    });
  }

  return cardInformation.map((el) => {
    return (
      <Grid item sm={6} md={4} key={el.id}>
        <div>
          <ItemCard itemInfo={el} heightProp={heightDivList}></ItemCard>
        </div>
      </Grid>
    );
  });
};

export default ItemCardRender;
