import { makeStyles, Typography, Paper } from "@material-ui/core";
import React from "react";
import { colors } from "../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: "100%",
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
    backgroundColor: colors.off_white,
  },
  label: {
    textTransform: "uppercase",
    paddingRight: theme.spacing(1),
    color: colors.dark_gray,
    fontWeight: 400,
  },
}));

export default function CocktailInfo({ item, index, cocktailInfo }) {
  const classes = useStyles();

  return (
      <Paper elevation={0} className={classes.root}>
      <Typography style={{fontWeight: 500}}variant="h5" component="p" color="textSecondary">
          <span className={classes.label}>{`${item}: `}</span>
          {cocktailInfo.data[index]}
        </Typography>
      </Paper>
  );
}
