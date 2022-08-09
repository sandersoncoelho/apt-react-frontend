import styled from "styled-components";

export const MenuContainer = styled.div`
  background-color: #337dff;
  width: 200px;
  margin: 8px;
  border-radius: 12px;
`;

export const Menu = styled.div`
  margin-top: 60px;
  margin-left: 12px;
`;

export const MenuLabel = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #fafafa;
  margin-left: 10px;
  margin-right: 10px;
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  width: 100%;

  &:hover {
    background-color: #ffffff;
    cursor: pointer;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;

    ${MenuLabel} {
      background-color: #ffffff;
      color: #337dff;
    }
  }
`;
