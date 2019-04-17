import { styled, Box } from "primithemes";
import { weight, color } from "src/theme";
import { trafalgar, paragon, bodyCopy } from "src/theme/typography";

export const Content = styled(Box)`
  width: 100%;
  overflow: auto;
  box-sizing: border-box;
  color: ${color("text.dark")};
  h1 {
    ${trafalgar}
    font-weight: ${weight("bold")};
  }
  h2 {
    ${paragon}
  }
  h3 {
  }
  h4 {
  }
  h5 {
  }
  p {
    ${bodyCopy};
  }
  img {
    display: block;
    margin: 0 auto;
    height: 100%;
    width: 100%;
    max-width: 768px;
  }
`;
