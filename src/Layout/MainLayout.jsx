import React from "react";
import SharedCard from "../shared-components/SharedCard";
import { ProductDetails, Header, ProductList } from "../components";
import { Home, NotFound, ProductForm, Products } from "./../Pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout";

export default function MainLayout() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/products/:id/edit" element={<ProductForm />} />
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
