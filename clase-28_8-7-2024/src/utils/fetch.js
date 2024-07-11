/* eslint-disable react/prop-types */
const fetchingData = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

export default fetchingData;
