import * as React from "react";
import { animated } from "react-spring";
import { styled } from "primithemes";
import { useOverlay } from "./drawerHooks";

interface Props {
  show: boolean;
  close(): void;
}

const StyledOverlay = styled(animated.div)`
  z-index: 0;
  position: fixed;
  height: 100vh;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
`;

const DrawerOverlay: React.SFC<Props> = ({ show, close }) => {
  const { overlay } = useOverlay(show);
  return (
    <>
      {overlay.map(
        ({ item, key, props }) =>
          item && <StyledOverlay key={key} style={props} onClick={close} />
      )}
    </>
  );
};

export { DrawerOverlay };
