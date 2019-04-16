import { styled, css } from "src/theme";

const base = css`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fonts.sans};
  font-weight: 400;
  color: ${props => props.theme.colors.text.dark};
  line-height: ${props => props.theme.lineHeights.wide};
`;

export const H1 = styled.h1`
  ${base}
  font-size: ${props => props.theme.fontSizes[6]};
  line-height: ${props => props.theme.lineHeights.narrow};
`;

export const H2 = styled.h2`
  ${base}
  font-size: ${props => props.theme.fontSizes[5]};
  line-height: ${props => props.theme.lineHeights.narrow};
`;

export const H3 = styled.h3`
  ${base}
  font-size: ${props => props.theme.fontSizes[4]};
  line-height: ${props => props.theme.lineHeights.medium};
`;

export const H4 = styled.h4`
  ${base}
  font-size: ${props => props.theme.fontSizes[3]};
  line-height: ${props => props.theme.lineHeights.medium};
`;

export const H5 = styled.h5`
  ${base}
  font-size: ${props => props.theme.fontSizes[2]};
  line-height: ${props => props.theme.lineHeights.wide};
  font-weight: 300;
`;

export const P = styled.p`
  ${base}
  font-size: ${props => props.theme.fontSizes[2]};
`;
