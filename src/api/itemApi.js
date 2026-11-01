import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5000/api/items",
});

export const reportItem = async (data) => {
  return Api.post("/", data);
};

export const getItemByType = (type) => {
  return Api.get(`/${type}`);
};
