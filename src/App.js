import React, { Component } from 'react';
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
    largeImageURL: '',
    alt: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, hits } = this.state;
    prevState.searchQuery !== searchQuery && this.fetchHits();

    prevState.hits.length !== hits.length &&
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

  toggleModal = (largeImageURL, alt) => {
    const { showModal } = this.state;

    !showModal && this.setState({ largeImageURL: largeImageURL, alt: alt });

    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { onChangeQuery, toggleModal, fetchHits } = this;
    const {
      hits,
      isLoading,
      error,
      showModal,
      largeImageURL,
      alt,
    } = this.state;

    return (
      <>
        <Searchbar onSubmit={onChangeQuery} />
        {error && <span>ERROR</span>}
        <ImageGallery hits={hits} onClick={toggleModal} />
        {isLoading && (
          <Loader
            className="Loader"
            type="ThreeDots"
            color="#00BFFF"
            height={80}
            width={80}
          />
        )}
        <Button hits={hits} isLoading={isLoading} onClick={fetchHits} />
        {showModal && (
          <Modal
            onClose={toggleModal}
            largeImageURL={largeImageURL}
            alt={alt}
          />
        )}
      </>
    );
  }
}

export default App;
