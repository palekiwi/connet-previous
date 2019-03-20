import * as React from "react";
import { styled, Box, Text, Card, Flex } from "primithemes";
import { Container } from "../../Container";
import { Image } from "../../Image";

const Main = styled(Box)`
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url(${require("./cairo-pentagon-32.png")});
    background-repeat: repeat;
    opacity: 0.1;
  }
`;

const BrandInfo = styled(Card)`
  text-align: center;
  ${props => props.theme.devices[2]} {
    text-align: left;
  }
`;

interface Props {
  logo?: any;
  title: React.ReactNode;
  phone?: React.ReactNode;
  email?: React.ReactNode;
  address?: React.ReactNode[];
}

const Footer: React.SFC<Props> = ({ logo, title, phone, email, address }) => (
  <Box as="footer">
    <Main bg="secondary.dark" color="white.light" py={[4, 4, 5]}>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection={["column", "column", "row"]}
      >
        <Flex style={{ opacity: 1 }} mr={[0, 0, 3]} mb={[3, 3, 0]}>
          {logo && (
            <Image
              critical
              imgStyle={{ width: "100%", height: "100%" }}
              fixed={logo}
            />
          )}
        </Flex>
        <BrandInfo
          justifyContent="center"
          flexDirection="column"
          pl={[0, 0, 3]}
        >
          <Text mb={2} fontSize={3} fontWeight={5}>
            {title}
          </Text>
          {
            <Text lineHeight={2} fontSize={2}>
              {phone}
            </Text>
          }
          {email && (
            <Text lineHeight={2} fontSize={2}>
              {email}
            </Text>
          )}
        </BrandInfo>
      </Flex>
    </Main>
    <Box bg="text.dark">
      <Container>
        <Flex
          p={[2, 2, 0]}
          justifyContent="center"
          alignItems="center"
          flexDirection={["column", "column", "row"]}
          w={1}
        >
          <Text m={2} color="grey.600" fontSize={1}>
            © 2018 Copyright:{" "}
            <Text as="span" color="primary.contrast">
              {title}
            </Text>
          </Text>
          <Text m={2} color="grey.600" fontSize={1}>
            Developed by{" "}
            <Text as="span" color="primary.contrast">
              Yong Chan
            </Text>
          </Text>
        </Flex>
      </Container>
    </Box>
  </Box>
);

export { Footer };
