import axios from 'axios';

const url = 'http://localhost:5000/carousels';

export const fetchCarousels = () => axios.get(url);

export const createCarousel = (newCarousel) => axios.post(url, newCarousel);

export const updateCarousel = (id, updatedCarousel) => axios.patch(`${url}/${id}`, updatedCarousel);

export const deleteCarousel = (id) => axios.delete(`${url}/${id}`);