/* eslint-disable react/no-array-index-key */
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import Styles from './Carousel.module.scss';
import { getNextIndex, getPrevIndex, groupDataInBatch } from '../utils';

const Carousel = ({
  items,
  children,
  defaultActive,
  size,
}) => {
  const [active, setActive] = useState(defaultActive);
  const groupedItems = useMemo(() => groupDataInBatch(items, size), [items, size]);
  const handleNext = () => setActive(getNextIndex(active, items.length));
  const handlePrev = () => setActive(getPrevIndex(active, items.length));
  const slidesStyle = { left: `${active * -100}%` };
  const itemContainerStyle = { width: `${100 / size}%` };
  const isPreviousDisabled = active === 0;
  const isNextDisabled = active === groupedItems.length - 1;

  return (
    <div className={Styles['carousel-container']}>
      <div className={Styles.carousel}>
        <div className={Styles.slides} style={slidesStyle}>
          {groupedItems.map((group, index) => (
            <section
              key={index}
              className={Styles.slide}
            >
              <div className={Styles['slide-content']}>
                {group.map((item, itemIndex) => (
                  <div
                    className={Styles['item-container']}
                    style={itemContainerStyle}
                    key={itemIndex}
                  >
                    {children({ item, isActive: index === active })}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
      <div className={Styles['carousel-action-row']}>
        <button
          disabled={isPreviousDisabled}
          type="button"
          onClick={handlePrev}
        >
          Previous
        </button>
        <button
          disabled={isNextDisabled}
          type="button"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.any,
  ).isRequired,
  children: PropTypes.func.isRequired,
  defaultActive: PropTypes.number,
  size: PropTypes.number,
};

Carousel.defaultProps = {
  defaultActive: 0,
  size: 4,
};

export default Carousel;
