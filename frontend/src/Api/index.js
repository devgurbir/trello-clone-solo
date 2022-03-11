/** @format */

import axios from "axios";
import { API_ROOT } from "../Utils/constents";

export const fetchBoardDetails = async (id) => {
  const result = await axios.get(`${API_ROOT}/board/${id}`);
  return result.data;
};

export const createNewColumn = async (data) => {
  const result = await axios.post(`${API_ROOT}/column`, data);
  return result.data;
};
export const updateColumnTitle = async (id, data) => {
  const result = await axios.put(`${API_ROOT}/column/${id}`, { title: data });
  return result.data;
};

// export const createNewRow = async (data,token) => {
//   // console.log(token);
//   const result = await axios.post(`${API_ROOT}/row`, data);
//   return result.data;
// };

export const createNewRow = async (data, token) => {
  console.log(token);
  const result = await axios.post(`${API_ROOT}/card/create`, data, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return result.data;
};

export const removeColumn = async (id) => {
  const result = await axios.delete(`${API_ROOT}/column/${id}`);
  console.log(result);
};
