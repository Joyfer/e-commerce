import { Grid } from "@material-ui/core";
import ArticleCard from "./ArticleCard";

const ArticlesCardsList = ({ cardInformation }) => {
  return (
    <Grid container spacing={2}>
      {cardInformation.map(({ id, name, price, images }) => {
        return (
          <ArticleCard
            key={id}
            image={images[0]}
            name={name}
            category="Zapatillas deportivas"
            price={price}
            id={id}
          ></ArticleCard>
        );
      })}
    </Grid>
  );
};

export default ArticlesCardsList;
