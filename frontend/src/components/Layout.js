import styled from "styled-components"; 

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding-top: 64px;
  color: #444;
`;

export default function Layout({ children }) {
  return <Container>{children}</Container>;
}
