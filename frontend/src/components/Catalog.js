// src/components/Catalog.js

import styled from "styled-components";
import Product from "./Product";
import { keyBy } from "lodash";
import getApiUrl from "../utils/utils";

const Container = styled.div`
  column-gap: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 16px;
`;

export default function Catalog(props) {
  const { productsData, cartData, cartMutate } = props;

  const itemsByProductId = keyBy(cartData.orderItems, "productId");

  const onAddProductHandler = async (productId, quantity) => {
    
    await fetch(getApiUrl("cart/upsert"), {
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

  return (
    <Container>
      {productsData.products.map((product) => {
        const itemInCart = itemsByProductId[product.id];

        const productProps = { ...product };

        if (itemInCart) {
          productProps.quantityInCart = itemInCart.quantity;
        }

        return (
          <Product
            key={product.id}
            {...productProps}
            onAddProduct={onAddProductHandler}
          />
        );
      })}
    </Container>
  );
}