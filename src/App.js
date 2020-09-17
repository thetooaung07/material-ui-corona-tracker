import React from 'react';
import './App.css';
import HomeNav from './Components/Nav/HomeNav';
import ContentBody from './Components/Nav/ContentBody';
import { Grid } from '@material-ui/core';

function App() {
  return (
    <div className="App">
     <HomeNav></HomeNav>

     {/* <Grid container direction="row" justify="center" alignItems="center">
       <Grid item xs={12} sm={3}> */}
         <ContentBody></ContentBody>
       {/* </Grid>
     </Grid> */}
    
    </div>
  );
}

export default App;
