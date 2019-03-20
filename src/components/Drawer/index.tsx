import * as React from "react";
import styled from "styled-components";
import { Transition } from "react-spring";

interface DrawerProps {
  anchor: "left" | "right" | "top" | "bottom";
  width: number;
  open: boolean;
  handleClose(): void;
  toggleMenu(): void;
}

const DrawerWrapper = styled.div<{ width: number }>`
  z-index: 1400;
  position: absolute;
  width: ${props => props.width}px;
  top: 0;
  right: 0;
  display: block;
`;

const DrawerOverlay = styled.div<{ onClick(): void }>`
  z-index: 1400;
  opacity: 0;
  position: fixed;
  height: 100vh;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
`;

const DrawerContent = styled.div`
  z-index: 1400;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

interface State {
  animating: boolean;
}

class Drawer extends React.Component<DrawerProps, State> {
  state: State = { animating: false };

  render() {
    const { width, open, handleClose, children } = this.props;
    return (
      <>
        <Transition
          items={open}
          from={{ transform: "translate3d(300px,0,0)", opacity: 0 }}
          enter={{ transform: "translate3d(0,0,0)", opacity: 1 }}
          leave={{ transform: "translate3d(300px,0,0)", opacity: 0 }}
        >
          {open => props =>
            open && (
              <>
                <DrawerOverlay
                  style={{ opacity: props.opacity }}
                  onClick={handleClose}
                />
                <DrawerWrapper
                  width={width}
                  style={{ transform: props.transform }}
                >
                  <DrawerContent>{children}</DrawerContent>
                </DrawerWrapper>
              </>
            )}
        </Transition>
      </>
    );
  }
}

export { Drawer };
