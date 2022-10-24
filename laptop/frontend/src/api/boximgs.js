import axios from 'axios';

const url = 'http://localhost:5000/boximgs';

export const fetchBoximgs = () => axios.get(url);

export const createBoximg = (newBoximg) => axios.post(url, newBoximg);

export const updateBoximg = (id, updateBoximg) => axios.patch(`${url}/${id}`, updateBoximg);

export const deleteBoximg = (id) => axios.delete(`${url}/${id}`);
