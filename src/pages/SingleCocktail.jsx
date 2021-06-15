import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, useHistory } from "react-router-dom";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CocktailInfo from "../components/CocktailInfo";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  titleSection: {
    display: "flex",
    justifyContent: "space-around",
    padding: theme.spacing(2),
    margin: theme.spacing(3),
  },
  title: {
    fontSize: 58,
    textTransform: "uppercase",
  },
  paper: {
    maxWidth: 1200,
    padding: theme.spacing(2),
    margin: "auto",
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down('md')]: {
      maxWidth: 500,   
    },
  },
  image: {
    maxWidth: 500,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "2%",
  },
  label: {
    fontSize: 20,
    fontWeight: 600,
  },
  list: {
    padding: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 32,
  },
  buttonArea: {
    marginTop: theme.spacing(3),
  },
  button: {
    "& .MuiButton-text": {
      padding: 18,
    },
  },
  container: {
    "& .MuiGrid-grid-xs-true": {
      maxHeight: "none",
    }
  }
}));

export default function SingleCocktail() {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCocktail = {
            name,
            image,
            info,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);

  function formatItems(items) {
    let cleanItems = items.filter((item) => item).join(", ").toLowerCase();
    return `${cleanItems[0].toUpperCase()}${cleanItems.slice(1)}.`
  }

  function handlePageChange() {
    history.push("/");
  }

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  }

  const { name, image, info, glass, instructions, ingredients } = cocktail;

  const ingredientsList = formatItems(ingredients);

  let cocktailInfo = new Map([
    ["name", name],
    ["type", info],
    ["glass", glass],
    ["instructions", instructions],
    ["ingredients", ingredientsList],
  ]);

  cocktailInfo = {
    labels: [...cocktailInfo.keys()],
    data: [...cocktailInfo.values()],
  };

  return (
    <>
      <div className={classes.titleSection}>
        <Typography
          className={classes.title}
          variant="h1"
          component="h3"
          color="textSecondary"
        >
          {name}
        </Typography>
      </div>
      <div className={classes.root}>
        <Paper elevation={0} className={classes.paper}>
          <Grid justify="space-around" container spacing={4} style={{"alignItems": "center"}}>
            <Grid item>
              <div className={classes.image}>
                <img alt={name} src={image} className={classes.img} />
              </div>
            </Grid>
            <Grid item sm container>
              <Grid item xs container direction="column" spacing={2} style={{"maxWidth" : "none"}}>
                <Grid className={classes.list} item xs>
                  {cocktailInfo.labels.map((item, index) => (
                    <CocktailInfo
                      key={index}
                      item={item}
                      cocktailInfo={cocktailInfo}
                      index={index}
                    />
                  ))}
                  <Grid item className={classes.buttonArea}>
                    <Button
                      color="primary"
                      variant="outlined"
                      className={classes.button}
                      onClick={handlePageChange}
                    >
                      Search for a different cocktail
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  )
}