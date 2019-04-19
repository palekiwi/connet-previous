import * as React from "react";
import { LangsContainer } from "src/components/Langs";
import styled, { css } from "styled-components";
import { color, space } from "src/theme";
import { desktop } from "src/theme/media";
import { brevier } from "src/theme/typography";

interface Props {
  height: number;
  phone: string;
}

const Wrapper = styled.div<{ height: number }>`
  ${brevier}
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${props => props.height}px;
  background: ${color("primary.main")};
  color: ${color("white.light")};
  padding: 0 ${space(3)};
  ${desktop(css`
    padding: 0 ${space(4)};
  `)}
  margin-bottom: 0;
`;

const Left = styled.div``;

const Phone = styled.span``;

const TopBar: React.SFC<Props> = ({ height, phone }) => {
  return (
    <Wrapper height={height}>
      <Left>
        <Phone>{phone}</Phone>
      </Left>
      <LangsContainer />
    </Wrapper>
  );
};

export { TopBar };
