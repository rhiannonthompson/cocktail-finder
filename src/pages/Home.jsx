import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import Scroll from "../components/Scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "10px, 0",
  },
  background: {
    paddingTop: theme.spacing(8),
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Scroll showBellow={250} />
      <Container maxWidth="lg" className={classes.root}>
        <Container maxWidth="sm">
          <SearchForm />
        </Container>
        <CocktailList />
      </Container>
    </div>
  );
}
