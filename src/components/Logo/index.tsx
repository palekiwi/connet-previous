import * as React from "react";
import { css, styled } from "primithemes";
import { darken } from "src/utils/helpers";

interface Props {
  variant?: "mono";
  opacity?: number;
  width: number;
}

const original = css`
  & * {
    opacity: 1;
  }
  & #text-main {
    fill: ${props => props.theme.colors.primary.main};
  }
  & #text-shadow {
    fill: ${props => darken(props.theme.colors.primary.main)(1.3)};
  }
  & #elipse {
    fill: ${props => props.theme.colors.secondary.main};
  }
`;
const mono = css`
  & * {
    opacity: 0.4;
  }
  & #text-main {
    fill: ${props => props.theme.colors.grey[800]};
  }
  & #text-shadow {
    fill: ${props => props.theme.colors.grey[900]};
  }
  & #elipse {
    fill: ${props => props.theme.colors.grey[800]};
  }
`;

const Svg = styled.svg<Props>`
  ${original};
  opacity: ${props => props.opacity};
  & * {
    transition: all 400ms ease-out;
  }
  ${props => props.variant === "mono" && mono}
`;

export const Logo: React.SFC<Props> = ({ variant, opacity, width }) => (
  <Svg
    width={width}
    height="100%"
    variant={variant}
    opacity={opacity}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 54.75"
    id="svg8"
  >
    <filter id="dropshadow" height="130%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
      <feOffset dx="-2" dy="6" result="offsetblur" />
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.8" />
      </feComponentTransfer>
      <feMerge>
        <feMergeNode />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    <g id="logo">
      <path
        id="elipse"
        d="M53.64 6.3C26.1 2.03 2.14 9.16.14 22.2c-2.02 13.05 18.68 27.06 46.22 31.31s51.5-2.88 53.5-15.92c2.02-13.05-18.68-27.06-46.22-31.3zm39.12 28.05c-1.64 10.7-22.8 16.3-47.24 12.53C21.08 43.13 2.6 31.4 4.25 20.7 5.9 10.02 27.05 4.4 51.5 8.18c24.45 3.77 42.92 15.49 41.27 26.17z"
      />
      <g id="text">
        <g id="text-shadow">
          <path
            id="text-shadow-2"
            d="M69.48.97V12L63.98.97l-.01.02V.97h-6.7v6.76C53.35 3.08 46.47 0 38.62 0 26.41 0 16.51 7.48 16.51 16.7c0 9.23 9.9 16.7 22.11 16.7 7.84 0 14.73-3.08 18.65-7.72v6.7h6.7V20.12l5.5 12.22v.06h.03l.02.04.07-.04h6.9V.97h-7.01zM43.56 7.1c2.82 0 5.44.56 7.66 1.52H35.9a19.26 19.26 0 0 1 7.66-1.52zm0 19.77c-7.92 0-14.35-4.42-14.35-9.88 0-2.7 1.56-5.13 4.1-6.92v5.04h7.5v9.22h10.33v-9.22h6.13v4.79c-1.8 4.04-7.26 6.97-13.71 6.97z"
          />
          <path
            id="text-shadow-1"
            d="M65.62.97V12L60.12.97 60.1 1V.97h-6.7v6.76C49.5 3.08 42.6 0 34.77 0 22.54 0 12.65 7.48 12.65 16.7c0 9.23 9.9 16.7 22.1 16.7 7.85 0 14.74-3.08 18.66-7.72v6.7h6.7V20.12l5.5 12.22v.06h.03l.02.04.07-.04h6.89V.97h-7zM39.7 7.1c2.82 0 5.44.56 7.65 1.52H32.04A19.25 19.25 0 0 1 39.7 7.1zm0 19.77c-7.93 0-14.35-4.42-14.35-9.88 0-2.7 1.56-5.13 4.09-6.92v5.04h7.5v9.22h10.34v-9.22h6.13v4.79c-1.8 4.04-7.26 6.97-13.71 6.97z"
          />
        </g>
        <path
          id="text-main"
          d="M69.48 1.25v11.02l-5.5-11.02-.01.02v-.02h-6.7v6.76C53.35 3.36 46.47.28 38.62.28c-12.21 0-22.11 7.48-22.11 16.7 0 9.23 9.9 16.7 22.11 16.7 7.84 0 14.73-3.08 18.65-7.73v6.71h6.7V20.4l5.5 12.22v.06h.03l.03.05.06-.06h6.9V1.27h-7.01zM43.56 7.38c2.82 0 5.44.56 7.66 1.52H35.9a19.26 19.26 0 0 1 7.66-1.52zm0 19.77c-7.92 0-14.35-4.42-14.35-9.88 0-2.7 1.56-5.13 4.1-6.92v5.04h7.5v9.22h10.33V15.4h6.13v4.79c-1.8 4.04-7.26 6.97-13.71 6.97z"
        />
      </g>
    </g>
  </Svg>
);
