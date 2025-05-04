import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFetch } from "../custom-hook/useFetch";

export default function ProductList() {
  const baseUrl = "http://localhost:3000/products";

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(baseUrl);
      setProducts(response.data);
    } catch (error) {
      setIsError(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(`${baseUrl}/${id}`);
      setProducts(products.filter((prod) => prod.id != id));
    } catch (error) {
      isError(error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="container mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.name}</td>
              <td>{prod.price}</td>
              <td>
                <Link to={`/products/${prod.id}`}>
                  <i className="fs-5 mx-2 bi bi-eye-fill text-success"></i>
                </Link>
                <Link to={`/products/${prod.id}/edit`}>
                  <i className="fs-5 mx-2 bi bi-pencil-square text-info"></i>
                </Link>
                <i
                  onClick={() => deleteProduct(prod.id)}
                  className="fs-5 mx-2 bi bi-trash3-fill text-danger"
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
