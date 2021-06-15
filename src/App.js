import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
function App() {

  // N.B. to make react-router to work with netlify you MUST
  // add a _redirects file to the public folder 
  // and write /* /index.html 200 

  // when deploying with git you have to change the build
  // command to "CI= react-scripts test" in the package.json
  // file
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/cocktail/:id">
          <SingleCocktail/>
        </Route>
        <Route path="*">
          <Error/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
