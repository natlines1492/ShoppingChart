import styled from "styled-components";
import React from "react";
import useSWR from "swr";
import Catalog from "../components/Catalog";
import CartIcon from "../components/CartIcon";
import getApiUrl from "../utils/utils";
import { useNavigate } from "react-router-dom";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 32px;
`;

const CartButton = styled.button`
  align-items: center;
  background-color: black;
  border-radius: 32px;
  cursor: pointer;
  display: flex;
  height: 48px;
  justify-content: space-between;
  padding: 0 24px;
  position: absolute;
  right: 0;
  top: 0;
`
const Quantity = styled.span`
  color: white;
  font-size: 24px;
  font-weight: 500;
  margin-left: 12px;
`;

function fetcher(...args) {
  return fetch(...args).then((res) => res.json());
}

export default function Home() {

  const navigate = useNavigate();

  const onCartClickHandler = () => {
    navigate("/cart")
  };

  const productsResponse = useSWR(getApiUrl("products"), fetcher);

  const { data: productsData, error: productsError } = productsResponse;

  const cartResponse = useSWR(getApiUrl("cart"), fetcher);

  const { data: cartData, error: cartError, mutate: cartMutate } = cartResponse;

  if (productsError || cartError) {
    return <p>Ups! something happened here.</p>;
  }

  if (!productsData || !cartData) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Title>My Store</Title>
      <Catalog
        cartMutate={cartMutate}
        cartData={cartData}
        productsData={productsData}
      />
      <CartButton onClick={onCartClickHandler}>
        <CartIcon />
        <Quantity>{cartData.orderItems.length}</Quantity>
      </CartButton>
    </Container>
  );
}