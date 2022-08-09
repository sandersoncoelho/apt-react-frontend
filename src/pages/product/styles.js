import React from "react";
import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
export const TomatoButton = styled(StyledButton)`
  color: tomato;
  border-color: tomato;
`;

export const ReversedButton = (props) => (
  <StyledButton {...props} children={props.children.split("").reverse()} />
);

export const StyledTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
);

export const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  color: blue;

  &:hover {
    color: red; // <Thing> when hovered
  }

  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }

  & + & {
    background: lime; // <Thing> next to <Thing>
  }

  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }

  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`;
