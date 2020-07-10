import React from "react";
import { ProductGeneral } from "../../interfaces";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "../CardItem/Card";
type Props = {
  data: [ProductGeneral];
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(5),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

const GridLayout = ({ data }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        {data.map((product) => (
          <Grid sm={3}>
            <CardItem data={product} key={product.productId} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default GridLayout;
