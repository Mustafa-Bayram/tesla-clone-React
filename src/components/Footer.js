import React from "react";
import styled from "styled-components";

function Footer() {
  return (

    <Container>
      <li>
        <a href="https://github.com/Mustafa-Bayram" target="_blank" rel="noreferrer">
          Tesla-Clone &copy;  2023
        </a>
      </li>
      <li>
        <a href="mailto:ecosoftware45@gmail.com" target="_blank" rel="noreferrer"> Gmail</a>
      </li>
      <li>
        <a href="https://tr.linkedin.com/in/mustafa-bayram-8a7b57194" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </li>
      <li>
        <a href="https://github.com/Mustafa-Bayram" target="_blank" rel="noreferrer">
        GitHub
        </a>
      </li>
    </Container>
  );
}

export default Footer;
const Container = styled.nav`
  min-height: 100px;
  background-color: white;
  color: black;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  gap: 20px;
  li {
    list-style: none;
  }
  a:hover{
    color: #000;
  }
  @media (max-width: 768px) {
  flex-direction: column;
    gap: 6px;
  }
`;

