import axios from 'axios';

const url = 'http://localhost:5000/brands';

export const fetchBrands = () => axios.get(url);

export const createBrand = (newBrand) => axios.post(url, newBrand);

export const updateBrand = (id, updatedBrand) => axios.patch(`${url}/${id}`, updatedBrand);

export const deleteBrand = (id) => axios.delete(`${url}/${id}`);
