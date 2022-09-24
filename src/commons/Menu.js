import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";
import * as S from "./styles";

const menuData = [
  { to: "/working", label: "Obras" },
  { to: "/product", label: "Produtos" },
  { to: "/store", label: "Lojas" },
  { to: "/material-costs", label: "Despesa Material" },
  { to: "/working", label: "Despesa Serviço" },
  { to: "/working", label: "Receita" },
  { to: "/working", label: "Balancete" },
];

const Menu = () => {
  const [currentMenuItem, setCurrentMenuItem] = useState();
  const onClickMenuItem = () => {
    console.log(this);
  };

  useEffect(() => {
    console.log("tese123");
  }, [currentMenuItem]);

  return (
    <S.Menu>
      <MenuItem to="/working" label="Obras" active={false} />
      <MenuItem to="/product" label="Produtos" active={true} />
      <MenuItem to="/store" label="Lojas" active={false} />
      <MenuItem to="/material-costs" label="Despesa Material" active={false} />
      <MenuItem to="/working" label="Despesa Serviço" active={false} />
      <MenuItem to="/working" label="Receita" active={false} />
      <MenuItem to="/working" label="Balancete" active={false} />
    </S.Menu>
  );
};

const MenuItem = (props) => {
  const navigate = () => {}; //useNavigate();

  const styles = props.active ? "menuItem menuItemActive" : "menuItem";
  return (
    <S.MenuItem onClick={() => navigate(props.to)}>
      <S.MenuLabel>{props.label}</S.MenuLabel>
    </S.MenuItem>
  );
};

export default () => {
  return (
    <S.MenuContainer>
      <Menu />
    </S.MenuContainer>
  );
};
