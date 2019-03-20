import * as React from "react";
import { Menu } from "styled-icons/material/Menu";
import { Button } from "../Button";
import { styled } from "primithemes";

const Icon = styled(Menu)``;

const MenuButton: React.SFC<{ onClick(): void }> = ({ onClick }) => (
  <Button round small onClick={onClick}>
    <Icon size={24} />
  </Button>
);

export { MenuButton };
