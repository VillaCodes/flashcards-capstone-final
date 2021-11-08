import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import { useEffect } from "react";
import Home from "./Home/Home";
import AddCard from "./AddCard";
import CreateDeck from "./CreateDeck";
import Deck from "./Deck";
import EditCard from "./EditCard";
import EditDeck from "./EditDeck";
import Study from "./Study"

function Layout() {


  return (
    <div>

      {/* header component */}
      <Header />

      <div className="container mb-4">
        {/* TODO: Implement the screen starting here */}

        <Switch>
    
          {/* home component */}
          <Route path="/" exact>
            <Home />
          </Route>
           {/* createDeck component */}
          <Route path="/decks/new">
            <CreateDeck />
          </Route>

           {/* deck component */}
          <Route path="/decks/:deckId" exact>
            <Deck />
          </Route>

           {/* study component */}
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>

           {/* edit deck component */}
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>

           {/* add card component */}
          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>

           {/* edit card component */}
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>

           {/* not found component for errors */}
          <Route>
            <NotFound />  
          </Route>

        </Switch>
        
      </div>
    </div>
  );
}

export default Layout;
