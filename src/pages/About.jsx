import React from 'react'
import { Container, Typography, makeStyles, Link, Button } from '@material-ui/core'
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(6),
      marginTop: theme.spacing(1),
    },
  },
  titleSection: {
    display: "flex",
    justifyContent: "space-around",
    padding: theme.spacing(2),
  },
  title: {
    // textTransform: "uppercase",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0),
    },
  },
}));

export default function About() {
  
  const classes = useStyles();
  const history = useHistory();

  function handlePageChange() {
    history.push("/");
  }

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography color="textSecondary" className={classes.title} variant="h2" component="h2">
      about this project
      </Typography>
      <Typography className={classes.paragraph} variant="h6" component="p" gutterBottom>
      Cocktail Finder was designed as an exercise to learn how to call and query an API using React. This application uses <Link href="https://www.thecocktaildb.com/">The CocktailDB</Link>, an open crowed-sourced database, for all the cocktail recipes and images. The front-end was built with modern React, using a hooks-based implementation with the inbuilt context provider for state management. The project uses Material-UI for styling the React components, with a custom theme created for the project. Feel free to checkout the code for Cocktail Finder on <Link href="https://github.com/rhiannonthompson/cocktail-finder">github</Link>.
      </Typography>
      <Button
        onClick={handlePageChange}
        size="large"
        style={{marginTop: 20}}
      >
        Back
      </Button>
    </Container>
  )
}
