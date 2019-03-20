import * as React from "react";
import TV from "react-on-screen";
import { styled } from "primithemes";

const FadeDiv = styled.div<{ isVisible?: boolean }>`
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transform: translateY(${props => (props.isVisible ? "0px" : "-10px")});
  transition: all 400ms ease-out;
  height: 100%;
`;

interface Props {
  once?: boolean;
  partialVisibility?: boolean;
  style?: object;
}

export const FadeIn: React.SFC<Props> = ({ children, ...props }) => (
  <TV {...props}>
    <FadeDiv>{children}</FadeDiv>
  </TV>
);
