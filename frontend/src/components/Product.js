
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

const Counter = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 50%;
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

export default function Product(props) {
  const { image, name, brand, presentation, price } = props;

  return (
    <Container>
      <ImageBox>
        <Image src={image}></Image>
        <Counter><PlusIcon/></Counter>
      </ImageBox>
      <Name>{name}</Name>
      <Brand>{brand}</Brand>
      <Presentation>{presentation}</Presentation>
      <Price>${price}</Price>
    </Container>
  );
}