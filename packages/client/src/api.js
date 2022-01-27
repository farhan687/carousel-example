const BASE_URL = 'http://localhost:5872';

export const getCities = () => (
  new Promise((resolve) => {
    fetch(`${BASE_URL}/cities`)
      .then((response) => response.json())
      .then((data) => resolve({ data }));
  })
);

export default getCities;
