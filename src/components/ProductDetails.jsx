import React, { useEffect, useState } from "react";
import SharedCard from "./../shared-components/SharedCard";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../custom-hook/useFetch";
import axios from "axios";

export default function ProductDetails() {
  const { id } = useParams();
  const baseUrl = `http://localhost:3000/products/${id}`;
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(baseUrl);
      setProduct(response.data);
    } catch (error) {
      setIsError(error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <SharedCard
        title={`Product Details ${id}`}
        className="alert-dark bg-black text-white"
      >
        <p className="lead text-start">
          Product Name : <span className="fw-bold">{product.name}</span>
        </p>

        <p className="lead text-start">
          Product Price : <span className="fw-bold">${product.price}</span>
        </p>
        <Link to="/products" className="btn btn-primary ">
          Back To Products
        </Link>
      </SharedCard>
    </>
  );
}
