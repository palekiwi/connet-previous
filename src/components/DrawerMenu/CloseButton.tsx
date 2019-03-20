import * as React from "react";
import { Close } from "styled-icons/material/Close";
import { Button } from "../Button";
import { styled } from "primithemes";

const Icon = styled(Close)``;

const CloseButton: React.SFC<{ onClick(): void }> = ({ onClick }) => (
  <Button round small onClick={onClick}>
    <Icon size={24} />
  </Button>
);

export { CloseButton };
