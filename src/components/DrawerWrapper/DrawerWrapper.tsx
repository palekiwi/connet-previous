import * as React from "react";
import { DrawerOverlay } from "./DrawerOverlay";
import styled from "styled-components";
import { Drawer } from "./Drawer";

const StyledWrapper = styled.div`
  z-index: 1400;
  display: block;
`;

interface Props {
  show: any;
  open: any;
  close: any;
  width: string;
  trigger: React.ReactElement;
}

const DrawerWrapper: React.SFC<Props> = ({
  children,
  show,
  open,
  close,
  trigger,
  width,
}) => (
  <StyledWrapper>
    <div onClick={show ? close : open}>{trigger}</div>
    <DrawerOverlay show={show} close={close} />
    <Drawer width={width} show={show}>
      {children}
    </Drawer>
  </StyledWrapper>
);

export { DrawerWrapper };
