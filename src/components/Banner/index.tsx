import * as React from "react";
import { Box, Text } from "primithemes";
import { BannerWrapper } from "./BannerWrapper";

interface BannerProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  image: any;
}

const Banner: React.SFC<BannerProps> = props => {
  return (
    <BannerWrapper image={props.image}>
      <Box p={4}>
        <Text
          is="h1"
          fontSize={[5, 6, 6, 7]}
          color="primary.main"
          fontWeight={2}
          textAlign="center"
          textTransform="uppercase"
          letterSpacing={2}
          lineHeight={1}
        >
          {props.title}
        </Text>
        {props.subtitle && (
          <Text mt={2} fontSize={3} textAlign="center" color="text.main">
            {props.subtitle}
          </Text>
        )}
      </Box>
    </BannerWrapper>
  );
};

export { Banner, BannerProps };
