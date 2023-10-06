import React, { Component, useState  } from 'react';
import RecipeNavBar from '../NavBars/RecipeNavBar';

class RecipeContainer extends Component {
    //needs to have a navbar: for the top that contains a profile image in the top right corner, the title should be right in the middle. 
    //10% of the screen. should not be visiible when scrolling down 
    //include search bar
    //beveled container for recipe results
    //recipe result container: contain number of recipes we have delivered. 
    //two items per row. flex box
    let [message: string, setMessage: string] = useState("hello there");


    return (
      <>
         <RecipeNavBar/>
         <RecipeResultContainer/>
      </>

}

export default RecipeContainer;