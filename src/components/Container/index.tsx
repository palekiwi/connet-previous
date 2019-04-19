import styled, { css } from "styled-components";
import { gap, widths } from "src/theme";
import { desktop, wide } from "src/theme/media";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  ${desktop(css`
    max-width: calc(${widths[2]} - 2 * ${gap});
  `)}
  ${wide(css`
    max-width: calc(${widths[3]} - 2 * ${gap});
  `)}
`;
