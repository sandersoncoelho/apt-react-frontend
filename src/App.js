import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

import Menu from "./commons/Menu";
import Content from "./commons/Content";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const Header = styled.div`
  background-color: #337dff;

  height: 50px;
  border-radius: 12px;
  margin: 8px;
`;

export default function Apt() {
  // render() {
  return (
    <>
      {/* <Router> */}
      <div className="horizontalLayout">
        <Menu></Menu>
        <div className="verticalLayout">
          <Header></Header>
          <Content></Content>
        </div>
      </div>
      {/* </Router> */}
    </>
  );
  // }
}
