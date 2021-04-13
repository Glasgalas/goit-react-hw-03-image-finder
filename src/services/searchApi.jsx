import axios from 'axios';

const keyApi = '20402396-fe73999763fab4baba9c844c1';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const imageApi = ({ query = '', currentPage = 1 }) => {
  return axios
    .get(
      `?key=${keyApi}&q=${query}&page=${currentPage}&per_page=12&image_type=photo&orientation=horizontal`,
    )
    .then(response => response.data.hits);
};

export default imageApi;
