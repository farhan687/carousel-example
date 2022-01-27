import React, { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import { getCities } from '../api';
import Card from '../components/Card';

import Styles from './CityListContainer.module.scss';

const CityListContainer = () => {
  const [cityList, setCityList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getCities()
      .then(({ data }) => setCityList(data))
      .catch((error) => setErrorMessage(error));
  }, []);

  if (errorMessage) {
    return (
      <p>
        Fetching data failed due to:
        {' '}
        {errorMessage}
      </p>
    );
  }

  return (
    <section className={Styles.container}>
      <h1>
        Carousel Example
      </h1>
      <Carousel items={cityList}>
        {({ item, isActive }) => (
          <Card
            key={item._id}
            title={item.title}
            images={item.images}
            shouldChangeImage={isActive}
          />
        )}
      </Carousel>
    </section>
  );
};

export default CityListContainer;
