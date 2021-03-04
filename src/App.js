import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import 'modern-normalize/modern-normalize.css';
import './styles.scss';

const API_KEY = '20531807-1479c72a34e3a5f5276de9d68';
const URL = 'https://pixabay.com/api/';

class App extends Component {
  state = {
    hits: [],
  };

  // componentDidMount() {
  //   axios
  //     .get(
  //       `${URL}?key=${API_KEY}&q=cat&image_type=photo&orientation=horizontal&page=1&per_page=12`,
  //     )
  //     .then(response => {
  //       this.setState({
  //         hits: response.data.hits,
  //       });
  //     });
  // }

  onChangeQuery = query => {
    axios
      .get(
        `${URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&page=1&per_page=12`,
      )
      .then(response => {
        this.setState({
          hits: response.data.hits,
        });
      });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery hits={this.state.hits} />
        <Modal />
      </>
    );
  }
}

export default App;

// 20531807-1479c72a34e3a5f5276de9d68
// https://pixabay.com/api/
