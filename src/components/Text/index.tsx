import { styled, Text as Base } from "primithemes";

export const Text = styled(Base)`
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes[2]};
`;

export const Heading = styled(Text)`
  font-size: ${props => props.theme.fontSizes[3]};
`;
