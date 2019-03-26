import * as React from "react";
import { styled, Box, Flex, Card } from "primithemes";
import { Image } from "../Image";

const Wrapper = styled(Card)`
  position: relative;
  overflow: hidden;
  min-height: 240px;
  ${props => props.theme.devices[2]} {
    min-height: 500px;
    max-height: 600px;
  }
`;

const ImageWrapper = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Overlay = styled(Card)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

interface BannerProps {
  image: any;
}

const BannerWrapper: React.SFC<BannerProps> = ({ image, children }) => {
  return (
    <Wrapper bb={2} borderColor="secondary.main" justifyContent="flex-end">
      <ImageWrapper>
        <Image style={{ width: "100%" }} fluid={image} />
      </ImageWrapper>
      <Flex color="white.light" style={{ position: "relative" }} w={1}>
        <Overlay
          bt={1}
          borderColor="white.light"
          bg="linear-gradient(to top, rgba(255,255,255,1.0), rgba(255,255,255,0.75))"
        />
        <Box w={1} style={{ zIndex: 1 }}>
          {children}
        </Box>
      </Flex>
    </Wrapper>
  );
};

export { BannerWrapper, BannerProps };
