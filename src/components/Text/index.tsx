import { styled, css } from "src/theme";

interface Props {
  fontWeight?: "thin" | "bold";
  color?: string;
}

const base = css<Props>`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fonts.sans};
  font-weight: 400;
  color: ${props => props.theme.colors.text.dark};
`;

export const Canon = styled.div`
  ${base};
  font-size: 32px;
  font-height: 36px;
  ${props => props.theme.devices[2]} {
    font-size: 44px;
    font-height: 48px;
  }
`;

export const Trafalgar = styled.div`
  ${base};
  font-size: 24px;
  font-height: 28px;
  ${props => props.theme.devices[2]} {
    font-size: 36px;
    font-height: 40px;
  }
`;

export const Paragon = styled.div`
  ${base};
  font-size: 22px;
  font-height: 26px;
  ${props => props.theme.devices[2]} {
    font-size: 28px;
    font-height: 32px;
  }
`;

export const DoublePica = styled.div`
  ${base};
  font-size: 20px;
  font-height: 24px;
  ${props => props.theme.devices[2]} {
    font-size: 24px;
    font-height: 28px;
  }
`;

export const GreatPrimer = styled.div`
  ${base};
  font-size: 18px;
  font-height: 22px;
  ${props => props.theme.devices[2]} {
    font-size: 20px;
    font-height: 24px;
  }
`;

export const BodyCopy = styled.div`
  ${base};
  font-size: 16px;
  font-height: 22px;
  ${props => props.theme.devices[2]} {
    font-size: 18px;
    font-height: 24px;
  }
`;

export const Pica = styled.div`
  ${base};
  font-size: 16px;
  font-height: 20px;
  ${props => props.theme.devices[2]} {
    font-size: 18px;
    font-height: 22px;
  }
`;

export const LongPrimer = styled.div`
  ${base};
  font-size: 15px;
  font-height: 18px;
  ${props => props.theme.devices[2]} {
    font-size: 15px;
    font-height: 20px;
  }
`;

export const Brevier = styled.div`
  ${base};
  font-size: 14px;
  font-height: 18px;
  ${props => props.theme.devices[2]} {
    font-size: 14px;
    font-height: 18px;
  }
`;

export const Minion = styled.div`
  ${base};
  font-size: 12px;
  font-height: 16px;
  ${props => props.theme.devices[2]} {
    font-size: 13px;
    font-height: 16px;
  }
`;
