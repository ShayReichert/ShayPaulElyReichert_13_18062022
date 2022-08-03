import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  border-top: 2px solid #ccc;
  padding: 2rem 0 1.5rem;

  .footer-text {
    margin: 0;
    padding: 0;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <p className="footer-text">Copyright 2020 Argent Bank</p>
    </FooterContainer>
  );
}
export default Footer;
