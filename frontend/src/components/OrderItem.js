import styled from "styled-components";

const Container = styled.div`
  display: flex;
  &:not(:first-of-type) {
    margin-top: 24px;
  }
  &:not(:last-of-type) {
    border-bottom: 1px solid #ccc;
    margin-bottom: 24px;
    padding-bottom: 24px;
  }
`;

const Image = styled.img`
  height: 160px;
  object-fit: cover;
  width: 160px;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  padding: 8px 16px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.p`
  font-weight: 500;
`;

const Brand = styled.p`
  font-weight: 400;
`;

const Presentation = styled.p`
  font-weight: 400;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  color: #000;
  font-size: 16px;
  height: 46px;
  text-align: center;
  width: 70px;
`;

const ActionsContainer = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

const RemoveButton = styled.button`
  background-color: transparent;
  color: #777777;
  cursor: pointer;
  text-decoration: underline;
`;

function OrderItem(props) {
  return (
    <Container {...props}>
      <Image src={props.image} />
      <BodyContainer>
        <InfoContainer>
          <Name>{props.name}</Name>
          <Brand>{props.brand}</Brand>
          <Presentation>{props.presentation}</Presentation>
        </InfoContainer>
        <Input
          type="number"
          defaultValue={props.quantity}
          onChange={(e) =>
            props.onQuantityChange(props.productId, Number(e.target.value))
          }
        />
      </BodyContainer>
      <ActionsContainer>
        <Price>${props.price}</Price>
        <RemoveButton onClick={() => props.onQuantityChange(props.productId, 0)}>
          Remove
        </RemoveButton>
      </ActionsContainer>
    </Container>
  );
}

export default OrderItem;