import styled from "styled-components";
import Catalog from "../components/Catalog";
import CartIcon from "../components/CartIcon";

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

const CartButton = styled.div`
  align-items: center;
  background-color: black;
  border-radius: 32px;
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
`

export default function Home() {
  return (
    <Container>
      <Title>My Store</Title>
      <Catalog />
      <CartButton>
        <CartIcon/>
        <Quantity>
          10
        </Quantity>
      </CartButton>
    </Container>
  );
}