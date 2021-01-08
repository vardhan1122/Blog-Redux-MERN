import React from 'react';
import './App.css';
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import BlogAdmin from "./components/blogs/BlogAdmin";
import BlogList from "./components/blogs/BlogList";
import UpdateBlog from "./components/blogs/UpdateBlog";
import CreateBlog from "./components/blogs/CreateBlog";
import {Provider} from "react-redux";
import {store} from "./redux/store";

let App = () => {

    return(
        <React.Fragment>
           <Provider store={store}>
               <Router>
                   <Navbar/>
                   <Switch>
                       <Route exact path="/" component={Home}/>
                       <Route exact path='/blogs' component={BlogList}/>
                       <Route exact path='/admin' component={BlogAdmin}/>
                       <Route exact path='/create-blog' component={CreateBlog}/>
                       <Route exact path='/update-blog/:id' component={UpdateBlog}/>
                   </Switch>
               </Router>
           </Provider>
        </React.Fragment>
    );
};
export default App;
