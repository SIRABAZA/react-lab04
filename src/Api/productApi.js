import axios from "axios";

const baseUrl = "http://localhost:3000/products";

const getAllProduct = () => axios.get(baseUrl);

const getProductById = (id) => axios.get(`${baseUrl}/${id}`);

const addNewProduct = (product) => axios.post(baseUrl, product);

const deleteProduct = (id) => axios.delete(`${baseUrl}/${id}`);

const editProduct = (productId, product) =>
  axios.put(`${baseUrl}/${productId}`, product);

export {
  getAllProduct,
  getProductById,
  addNewProduct,
  deleteProduct,
  editProduct,
};
