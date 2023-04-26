import styled from "styled-components";
import { Link } from "gatsby";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? `lightgoldenrodyellow` : `#077BF1`)};
  white-space: nowrap;
  padding: ${({ big }) => (big ? `16px 40px` : `10px 32px`)};
  font-size: ${({ big }) => (big ? `20px` : `18px`)};
  color: black;
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? `50px` : `none`)};

  &:hover {
    background: ${({ primary }) => (primary ? `#077BF1` : `lightgoldenrodyellow`)};
    /* transform: translateY(-2px); */
    transform: all 0.2s ease-in-out;
  }
`;
