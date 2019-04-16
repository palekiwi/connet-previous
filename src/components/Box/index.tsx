import { styled } from "src/theme";

interface Props {
  bg?: string;
}

export const Box = styled.div<Props>`
  background: ${({ bg, theme }) => bg && theme.f.col(bg)};
  color: ${({ color, theme }) => color && theme.f.col(color)};
`;
