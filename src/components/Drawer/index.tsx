import * as React from "react";
import styled from "styled-components";
import { animated, useTransition } from "react-spring";

interface DrawerProps {
  anchor: "left" | "right" | "top" | "bottom";
  width: number;
  children({ toggle: any }): any;
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

const Drawer: React.SFC<DrawerProps> = props => {
  const { width, children } = props;
  const [show, set] = React.useState(true);
  const transitions = useTransition(show, null, {
    from: { transform: "translate3d(300px,0,0)", opacity: 0 },
    enter: { transform: "translate3d(0,0,0)", opacity: 1 },
    leave: { transform: "translate3d(300px,0,0)", opacity: 0 },
  });
  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div style={props}>
          <DrawerOverlay onClick={() => set(false)} />
          <DrawerWrapper width={width}>
            <DrawerContent>{children({ toggle: set })}</DrawerContent>
          </DrawerWrapper>
        </animated.div>
      )
  );
};

export { Drawer };
