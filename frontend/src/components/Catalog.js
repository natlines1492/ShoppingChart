// src/components/Catalog.js

import styled from "styled-components";
import Product from "./Product";
import useSWR from "swr";

const Container = styled.div`
  column-gap: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 16px;
`;

function fetcher(...args) {
  return fetch(...args).then((res) => res.json());
}

export default function Catalog() {
  const { data, error } = useSWR("http://localhost:3000/products", fetcher);

  if (error) {
    return <p>Ups! something happened here.</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      {data.products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </Container>
  );
}