import styled from "styled-components";
import CheckIcon from "../components/CheckIcon";
import getApiUrl from "../utils/utils";
import useSWR from "swr";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
`;

export default function Thanks() {
  const navigate = useNavigate();

  const onKeepShoppingClickHandler = () => {
    navigate("/");
  };

  function fetcher(...args) {
    return fetch(...args).then((res) => res.json());
  }

  const cartResponse = useSWR(getApiUrl("cart"), fetcher);

  const { data: cartData } = cartResponse;

  if (!cartData) {
    return <p>Loading cart...</p>;
  }

  return (
    <Container>
      <CheckIcon style={{ marginBottom: 32 }} />
      <Title style={{ marginBottom: 16 }}>Thank you for your order</Title>
      <p style={{ marginBottom: 16 }}>Soon your items will be on their way</p>
      <p style={{ marginBottom: 32, fontWeight: 600 }}>Order {cartData.code}</p>
      <Button onClick={onKeepShoppingClickHandler}>KEEP SHOPPING</Button>
    </Container>
  );
}
