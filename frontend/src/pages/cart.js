
// src/pages/cart.js
import styled from "styled-components";
import React from "react";
import useSWR from "swr";
import getApiUrl from "../utils/utils";
import { useNavigate } from "react-router-dom";
import BackIcon from "../components/BackIcon";
import OrderItem from "../components/OrderItem";
import PriceLine from "../components/PriceLine";
import Button from "../components/Button";

const Container = styled.div`
  column-gap: 160px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const CartItems = styled.div`
  height: 300px;
`;

const PricingDetails = styled.div`
  height: 300px;
  ${PriceLine}:last-of-type {
    padding-top: 24px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    > span {
      font-weight: 600;
    }
  }
`;

const CompleteOrderButton = styled(Button)`
  justify-content: center;
  margin-top: 24px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 32px;
  display: flex;
  align-items: center;

  ${BackIcon} {
    margin-right: 16px;
    cursor: pointer;
  }
`;

function fetcher(...args) {
  return fetch(...args).then((res) => res.json());
}


export default function Home() {
  const navigate = useNavigate();

  const onBackClickHandler = () => {
    navigate("/");
  };

  const onCompleteOrderButtonClickHandler = async () => {
    await fetch(getApiUrl("order/confirm"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate("/thanks");
  };


  const onQuantityChangeHandler = async (productId, quantity) => {
    await fetch(getApiUrl("cart"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId, quantity }),
    });

    const items = cartData.orderItems.map((item) => {
      const newItem = { ...item };

      if (newItem.productId === productId) {
        newItem.quantity = quantity;
      }

      return newItem;
    });

    cartMutate({ ...cartData, orderItems: items });
  };

  const cartResponse = useSWR(getApiUrl("cart"), fetcher);

  const { data: cartData, error: cartError, mutate: cartMutate } = cartResponse;

  if (cartError) {
    return <p>Ups! something happened here.</p>;
  }

  if (!cartData) {
    return <p>Loading cart...</p>;
  }

  if (!cartData.orderItems.length > 0) {
    return <p>There are no products</p>;
  }

  return (
    <Container>
      <CartItems>
        <Title>
          <BackIcon onClick={onBackClickHandler}/>
          Your Cart
        </Title>
        {cartData.orderItems.map((item) => {
          return (
            <OrderItem
              key={item.id}
              name={item.productName}
              brand={item.productBrand}
              price={item.productPrice}
              presentation={item.productPresentation}
              image={item.productImage}
              quantity={item.quantity}
              productId={item.productId}
              onQuantityChange={onQuantityChangeHandler}
              onRemove={onQuantityChangeHandler}
            />
          );
        })}
      </CartItems>
      <PricingDetails>
        <Title>Summary</Title>
        <PriceLine label="Subtotal" price={cartData.subtotal} />
        <PriceLine
          label="Estimated Shipping & Handling"
          price={cartData.shipping}
        />
        <PriceLine label="Estimated Tax" price={cartData.taxes} />
        <PriceLine label="Total" price={cartData.total} />
        <CompleteOrderButton onClick={onCompleteOrderButtonClickHandler}
        >COMPLETE ORDER</CompleteOrderButton>
      </PricingDetails>
    </Container>
  );
}
