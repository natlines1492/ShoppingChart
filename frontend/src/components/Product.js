
import styled from "styled-components";
import PlusIcon from "./PlusIcon";

const Container = styled.div`
  max-width: 360px;
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
  background-color: white;
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
  color: #1BC100;
  font-size: 14px;
  font-weight: 700;
`;



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
      <div>
        <Name>{name}</Name>
        <Brand>{brand}</Brand>
        <Presentation>{presentation}</Presentation>
        <Price>${price}</Price>
        {quantityInCart > 0 && (
          <QuantityInCart>{quantityInCart} in cart</QuantityInCart>
        )}
      </div>
    </Container>
  );
}