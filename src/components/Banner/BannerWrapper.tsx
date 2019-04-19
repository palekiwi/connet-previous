import * as React from "react";
import styled, { css } from "styled-components";
import { color } from "src/theme";
import { desktop } from "src/theme/media";
import { Image } from "src/components/Image";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  min-height: 240px;
  display: flex;
  border-bottom: 2px solid ${color("secondary.main")};
  justify-content: flex-end;
  ${desktop(css`
    min-height: 500px;
    max-height: 600px;
  `)}
`;

const ImageWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Inner = styled.div`
  z-index: 0;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-top: 1px solid ${color("white.light")};
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.75)
  );
`;

interface BannerProps {
  image: any;
}

const BannerWrapper: React.SFC<BannerProps> = ({ image, children }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image style={{ width: "100%" }} fluid={image} />
      </ImageWrapper>
      <Inner>{children}</Inner>
    </Wrapper>
  );
};

export { BannerWrapper, BannerProps };
