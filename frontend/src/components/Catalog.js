// src/components/Catalog.js

import styled from "styled-components";
import Product from "./Product";
import useSWR from "swr";
import { keyBy } from "lodash";

const Container = styled.div`
  column-gap: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 16px;
`;

function fetcher(...args) {
  return fetch(...args).then((res) => res.json());
}

const getUrl = (path) => `http://0.0.0.0:3000/${path}`;

export default function Catalog() {

  const { data, error } = useSWR(getUrl("products"), fetcher);

  if (error) {
    return <p>Ups! something happened here.</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }
  // const getUrl = (path) => `http://0.0.0.0:3000/${path}`;
  // const productsResponse = useSWR(getUrl("products"), fetcher);

  //const { data: productsData, error: productsError } = productsResponse;
  // console.log(productsResponse)
  // console.log(productsData);
  // console.log(productsError);
  // const cartResponse = useSWR(getUrl("cart"), fetcher);

  // const { data: cartData, error: cartError } = cartResponse;

  // if (productsError || cartError) {
  //   console.log(cartError)
  //   return <p>Ups! something happened here.</p>;
  // }

  // if (!productsData || !cartData) {
  //   console.log(productsData)
  //   console.log(cartData)
  //   return <p>Loading...</p>;
  // }

  //const itemsByProductId = keyBy(cartData.orderItems, "productId");


  return (
    <Container>
      {data.products.map((product) => {
        //const itemInCart = itemsByProductId[product.id];

        const productProps = { ...product };

        // if (itemInCart) {
        //   productProps.quantityInCart = itemInCart.quantity;
        // }

        return <Product key={product.id} {...productProps} />;
      })}
    </Container>
  );
}