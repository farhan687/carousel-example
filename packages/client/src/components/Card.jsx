import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getNextIndex } from '../utils';

import Styles from './Card.module.scss';

const Card = ({ title, images, shouldChangeImage }) => {
  const [activeImage, setActiveImage] = useState(0);
  useEffect(() => {
    if (shouldChangeImage) {
      const nextActiveImage = getNextIndex(activeImage, images.length);
      setActiveImage(nextActiveImage);
    }
  }, [shouldChangeImage]);

  return (
    <div className={Styles.card}>
      <div className={Styles['card-container']}>
        <div className={Styles['img-container']}>
          <img src={images[activeImage]} alt={title} />
        </div>
        <h4>{title}</h4>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  shouldChangeImage: PropTypes.bool,
};

Card.defaultProps = {
  shouldChangeImage: false,
};

export default Card;
