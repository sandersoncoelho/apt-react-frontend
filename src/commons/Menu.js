import React from "react";
import { useHistory } from "react-router-dom";
import "./Menu.css";
import * as S from "./styles";

const Menu = () => {
  const onClickMenuItem = () => {
    console.log(this);
  };
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
  let history = useHistory();

  const styles = props.active ? "menuItem menuItemActive" : "menuItem";
  return (
    <S.MenuItem onClick={() => history.push(props.to)}>
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
