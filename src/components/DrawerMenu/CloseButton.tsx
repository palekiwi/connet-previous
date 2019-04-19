import * as React from "react";
import { Close } from "styled-icons/material/Close";
import styled from "styled-components";
import { Button } from "src/components/Button";

const Icon = styled(Close)``;

const CloseButton: React.SFC<{ onClick(): void }> = ({ onClick }) => (
  <Button round small onClick={onClick}>
    <Icon size={24} />
  </Button>
);

export { CloseButton };
