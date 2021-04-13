import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick }) => (
  <li className={s.ImageGalleryItem}>
    <a href={largeImageURL} onClick={onClick}>
      <img src={webformatURL} alt="" className={s.ImageGalleryItemImage} />
    </a>
  </li>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
