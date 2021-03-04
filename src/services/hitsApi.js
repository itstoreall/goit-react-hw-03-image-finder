import axios from 'axios';

const API_KEY = '20531807-1479c72a34e3a5f5276de9d68';
const URL = 'https://pixabay.com/api/';

const fetchHits = ({ searchQuery = '', currentPage = 1, per_page = 12 }) => {
  return axios
    .get(
      `${URL}?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`,
    )
    .then(response => response.data.hits);
};

const newHits = { fetchHits };

export default newHits;
