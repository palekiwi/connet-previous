import styled, { css } from "styled-components";
import { gap, widths, color } from "src/theme";
import { desktop, wide } from "src/theme/media";

export const Container = styled.div`
  border: 1px solid ${color("grey.100")};
  padding: 0 ${gap};
  margin: 0 auto;
  width: 100%;
  ${desktop(css`
    max-width: ${widths[2]};
  `)}
  ${wide(css`
    max-width: ${widths[3]};
  `)}
`;
