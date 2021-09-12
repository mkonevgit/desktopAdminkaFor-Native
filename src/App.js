import React from "react";
import './App.css';
import DishesList from "./components/DishesList/DishesList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import DishAdd from "./components/DishAdd/DishAdd";
import DishEdit from "./components/DishEdit/DishEdit";
import OrdersList from "./components/OrdersList/OrdersList";

function App() {

  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/" exact component={DishesList} />
              <Route path="/add" exact component={DishAdd} />
              <Route path="/:dishId/edit" exact component={DishEdit} />
              <Route path="/orders" exact component={OrdersList} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;