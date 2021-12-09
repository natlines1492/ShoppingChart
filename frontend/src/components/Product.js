
import styled from "styled-components";
import PlusIcon from "./PlusIcon";

const Container = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  max-width: 360px;
  padding: 5px;
  > :not(:last-child) {
    margin-bottom: 4px;
  }
  > :first-child {
    display: block;
    margin-bottom: 8px;
  }
`;

const ImageBox = styled.div`
  position: relative;
`;

const Counter = styled.button`
  align-items: center;
  background-color: #77de9e;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: center;
  position: absolute;
  right: 16px;
  top: 16px;
  width: 56px;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
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

const Price = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

const QuantityInCart = styled.p`
  color: #25d366;
  font-size: 14px;
  font-weight: 700;
`;

const Body = styled.div`
  line-height: 1.5;
`




export default function Product(props) {
  const {
    id,
    image,
    name,
    brand,
    presentation,
    price,
    quantityInCart = 0,
    onAddProduct,
  } = props;

  return (
    <Container>
      <ImageBox>
        <Image src={image}></Image>
        <Counter onClick={() => onAddProduct(id, quantityInCart  + 1)}>
          <PlusIcon />
        </Counter>
      </ImageBox>
      <Body>
        <Name>{name}</Name>
        <Brand>{`Marca: ${brand}`}</Brand>
        <Presentation>{presentation}</Presentation>
        <Price>${parseFloat(price).toFixed(2)}</Price>
        {quantityInCart > 0 && (
          <QuantityInCart>{quantityInCart} in cart</QuantityInCart>
        )}
      </Body>
    </Container>
  );
}