import React, { useEffect, useState } from "react";
import axios from "axios";
import SharedCard from "../shared-components/SharedCard";
import { Button, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom"; // Added useNavigate

export default function ProductForm() {
  const { id } = useParams();
  const navigate = useNavigate(); // For navigation after submission
  const baseUrl = `http://localhost:3000/products/${id}`;
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  // Initial form state
  const initialFormState = {
    name: "",
    price: 0,
  };

  const [formValues, setFormValues] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const fetchProduct = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(baseUrl);
      setFormValues(response.data);
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id !== "0") {
      fetchProduct();
    } else {
      // Reset form when creating new product
      setFormValues(initialFormState);
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      if (id === "0") {
        // Create new product
        await axios.post("http://localhost:3000/products", formValues);
        // Reset form after successful submission
        setFormValues(initialFormState);
        // Optional: Show success message or redirect
        // navigate('/products'); // Uncomment to redirect after submission
      } else {
        // Update existing product
        await axios.put(baseUrl, formValues);
        // Optional: Redirect after edit
        navigate("/products");
      }
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SharedCard title="Product Form" className="alert-light">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="w-50 m-auto mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Name"
            value={formValues.name}
            onChange={handleInputChange}
            disabled={isLoading}
          />
        </Form.Group>

        <Form.Group className="w-50 m-auto mb-3" controlId="formBasicPassword">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            placeholder="Price"
            value={formValues.price}
            onChange={handleInputChange}
            disabled={isLoading}
          />
        </Form.Group>

        <Button variant="dark" type="submit" disabled={isLoading}>
          {id === "0" ? "Add New Product" : "Edit Product"}
        </Button>
        {isError && (
          <div className="text-danger mt-2">Error: {isError.message}</div>
        )}
      </Form>
    </SharedCard>
  );
}
