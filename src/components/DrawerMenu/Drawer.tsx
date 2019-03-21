import * as React from "react";
import { styled } from "primithemes";
import { animated } from "react-spring";
import { useSlide } from "./drawerHooks";

interface Props {
  show: boolean;
  width: string;
}

const Dmenu = styled(animated.div)`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Drawer: React.SFC<Props> = ({ show, width, children }) => {
  const { drawer } = useSlide(show, width);
  return (
    <>
      {drawer.map(
        ({ item, key, props }) =>
          item && (
            <Dmenu key={key} style={{ ...props, width }}>
              {children}
            </Dmenu>
          )
      )}
    </>
  );
};

export { Drawer };
