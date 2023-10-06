import React from 'react';
import logo from './logo.svg';
import './App.css';
import RecipeContainer from './Components/Containers/RecipeContainer';
import IngredientContainer from './Components/Containers/RecipeContainer';


function App() {
  return (
    <div className="App">
      <head className="App-header">
  
      </head>
        <body>
        <RecipeContainer/>
        <IngredientContainer/>
        </body>
    </div>
  );
}

export default App;
