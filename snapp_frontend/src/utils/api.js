import axios from "axios";

export const base_url = "http://localhost:8000/api";

export const urls = {
  city: "city",
  category: "category",
  shopFood: "shopFood",
  food: "food",
  search: "search",
};

export const getData = async (url, parameter) => {
  url = `${base_url}/${url}/`;
  if (parameter) {
    url += parameter;
  }
  const { data } = await axios.get(url, {
    timeout: 5000,
  });

  return data;
};
