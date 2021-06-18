import React from 'react'
import { Container, Typography, makeStyles } from '@material-ui/core'
import { content } from "../content"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
  },
  titleSection: {
    display: "flex",
    justifyContent: "space-around",
    padding: theme.spacing(2),
    margin: theme.spacing(3),
  },
  title: {
    textTransform: "uppercase",
    marginBottom: theme.spacing(4),
  },
}));

export default function About() {
  
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography color="textSecondary" className={classes.title} variant="h2" component="h2">
      about this project
      </Typography>
      <Typography variant="h6" component="p">
        {content.about}
      </Typography>
    </Container>
  )
}
