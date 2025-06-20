import axios from "axios";

const Api = 'http://localhost:5000/api/items';

export const reportItem = (itemData) => axios.post(Api, itemData)
export const getItemByType = (type) => axios.get(`${Api}/${type}`);