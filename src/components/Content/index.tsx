import { styled, Box } from "primithemes";

export const Content = styled(Box)`
  width: 100%;
  overflow: auto;
  box-sizing: border-box;
  font-family: ${props => props.theme.fonts.sans};
  color: ${props => props.theme.colors.text.dark};
  p {
    font-size: ${props => props.theme.fontSizes[2]};
    line-height: ${props => props.theme.lineHeights[2]};
    margin-top: ${props => props.theme.sizes[3]};
    margin-bottom: ${props => props.theme.sizes[3]};
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    line-height: ${props => props.theme.lineHeights[1]};
  }
  h1 {
    font-size: ${props => props.theme.fontSizes[6]};
    margin-top: ${props => props.theme.sizes[4]};
    margin-bottom: ${props => props.theme.sizes[3]};
    color: ${props => props.theme.colors.text.dark};
  }
  h2 {
    font-size: ${props => props.theme.fontSizes[5]};
    margin-top: ${props => props.theme.sizes[3]};
    margin-bottom: ${props => props.theme.sizes[2]};
  }
  h3 {
    font-size: ${props => props.theme.fontSizes[4]};
    margin-top: ${props => props.theme.sizes[3]};
    margin-bottom: ${props => props.theme.sizes[2]};
  }
  h4 {
    font-size: ${props => props.theme.fontSizes[3]};
    margin-top: ${props => props.theme.sizes[3]};
    margin-bottom: ${props => props.theme.sizes[2]};
  }
  h5 {
    font-size: ${props => props.theme.fontSizes[2]};
    margin-top: ${props => props.theme.sizes[3]};
    margin-bottom: ${props => props.theme.sizes[2]};
  }
  img {
    display: block;
    margin: 0 auto;
    height: 100%;
    width: 100%;
    max-width: 768px;
  }
`;
