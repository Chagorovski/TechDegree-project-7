import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import './css/index.css';
import apiKey from './config';

import Header from './Components/Header';
import PhotoContainer from './Components/PhotoContainer';
import NotFound from './Components/NotFound';
import Spiner from './Spiner/Spiner';


class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true,
    };
  } 

  //Lifecycle method to update the state
  componentDidMount() {
    this.performSearch();
  }

  // Method to fetch the flicker endpoint and updating the state
  performSearch = (query = 'world')  => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=${query}&api_key=${apiKey}&safe_search=1&per_page=24&format=json&nojsoncallback=1`)
      .then(res => {
        this.setState({
          photos: res.data.photos.photo,
          loading: false,
        })
      })
      .catch(err => {
        console.log('There was an error while fetching and parsing the data', err);
      });
  }

  render() {
    
    return (
      <Router>
        <div className="container">
         <Route path={'/'} render={ () => <Header onSearch={ this.performSearch } />}/> 
          <Switch>
            {this.state.loading ? <Spiner /> : null}
            <Route exact path="/" render={() => <Redirect to="/world" />} />
            <Route exact path="/world" render={() => <PhotoContainer data={this.state.photos} />} />
            <Route exact path="/wide" render={ () => <PhotoContainer data={this.state.photos} /> } />
            <Route exact path="/window" render={ () => <PhotoContainer data={this.state.photos}  /> } />
            <Route component={ NotFound }/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
