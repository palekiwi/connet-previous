import * as React from "react";
import { styled, Box, Card, Text, Flex } from "primithemes";
import { Logo } from "src/components/Logo";

const Main = styled(Card)`
  position: relative;
  overflow: hidden;
`;

const MainInner = styled(Flex)``;

interface Props {
  logo?: any;
  title: React.ReactNode;
  phone?: React.ReactNode;
  email?: React.ReactNode;
  address?: React.ReactNode[];
}

const Footer: React.SFC<Props> = ({ logo, title, phone, email, address }) => (
  <Box as="footer">
    <Main
      bg="grey.800"
      color="white.light"
      py={4}
      px={3}
      bt={4}
      borderColor="secondary.main"
    >
      <MainInner
        justifyContent="center"
        alignItems="center"
        flexDirection={["column", "column", "row"]}
        py={3}
      >
        {logo ? (
          <Flex style={{ opacity: 0.9 }} w={["220px"]}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={logo.childImageSharp.fixed.src}
            />
          </Flex>
        ) : (
          <Box mr={[0, 0, 4]} mb={[2, 2, 0]}>
            <Logo opacity={0.9} variant="light" width={130} />
          </Box>
        )}
        <Flex justifyContent="center" flexDirection="column">
          <Text mb={2} color="grey.300" fontSize={3} fontWeight={5}>
            {title}
          </Text>
          <Box color="grey.400">
            <Text
              color="inherit"
              lineHeight={2}
              fontSize={2}
              textAlign={["center", "center", "left"]}
            >
              {phone}
            </Text>
            <Text
              color="inherit"
              lineHeight={2}
              fontSize={2}
              textAlign={["center", "center", "left"]}
            >
              {email}
            </Text>
          </Box>
        </Flex>
      </MainInner>
    </Main>
    <Flex bg="black.main" p={3} justifyContent="center">
      <Text color="grey.600" fontSize={1}>
        © 2018 Copyright:{" "}
        <Text as="span" color="primary.contrast">
          {title}
        </Text>
      </Text>
    </Flex>
  </Box>
);

export { Footer };
