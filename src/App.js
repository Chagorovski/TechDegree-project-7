import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios';
import './css/index.css';
import apiKey from './config';

import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';


class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  } 

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query)  => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=${query}&api_key=${apiKey}&safe_search=1&per_page=24&format=json&nojsoncallback=1`)
      .then(res => {
        this.setState({
          photos: res.data.photos.photo,
          loading: false
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
          <SearchForm onSearch={ this.performSearch } />
          <Nav takePhotos={ this.performSearch } />
          {
            (this.state.loading)
              ? <p>Loading...</p>
              : <PhotoContainer data={this.state.photos}/>
          }
        </div>
      </Router>
    )
  }
}

export default App;
