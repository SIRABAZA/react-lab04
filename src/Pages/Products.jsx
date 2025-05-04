import React from "react";
import SharedCard from "../shared-components/SharedCard";
import { ProductList } from "../components";
import { Form } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import ProductForm from "./ProductForm";

export default function Products() {
  return (
    <>
      <SharedCard title="Our Products" className="alert-light">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/products/0/edit" className="btn btn-outline-dark">
            Add New Product
          </Link>
          <Form.Group className="" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Search..." />
          </Form.Group>
        </div>
        <ProductList />
      </SharedCard>
    </>
  );
}
