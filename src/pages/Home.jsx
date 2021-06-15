import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "10px, 0",
  }
}))

export default function Home() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Container maxWidth="sm">
        <SearchForm />
      </Container>
      <CocktailList/>
    </Container>
  );
}
