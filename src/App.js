import React, { Component } from 'react';
// import axios from 'axios';
import Searchbar from './components/Searchbar';
import hitsApi from './services/hitsApi';
import Loader from 'react-loader-spinner';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';
import 'modern-normalize/modern-normalize.css';
import './styles.scss';

class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    prevState.searchQuery !== this.state.searchQuery && this.fetchHits();

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      hits: [],
      error: null,
    });
  };

  fetchHits = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { currentPage, searchQuery };

    this.setState({ isLoading: true });

    hitsApi
      .fetchHits(options)
      .then(hits => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { hits, isLoading, error, showModal } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        {error && <span>ERROR</span>}
        <ImageGallery hits={this.state.hits} onClick={this.toggleModal} />
        {isLoading && (
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        )}
        <Button hits={hits} isLoading={isLoading} onClick={this.fetchHits} />
        {showModal && <Modal onClose={this.toggleModal} />}
      </>
    );
  }
}

export default App;
