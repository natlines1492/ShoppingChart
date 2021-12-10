import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
`;

const Label = styled.span`
  color: #444;
  font-weight: 400;
`;

function PriceLine(props) {
  return (
    <Container {...props}>
      <Label>{props.label}</Label>
      <Label>${props.price}</Label>
    </Container>
  );
}

export default styled(PriceLine)``;