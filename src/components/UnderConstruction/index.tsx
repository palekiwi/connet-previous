import * as React from "react";
import { Logo } from "src/components/Logo";
import { Box, Flex } from "primithemes";
import { Text } from "src/components/Text";
import { Container } from "src/components/Container";

interface Props {
  title: string;
  phone: string;
  email: string;
}

const UnderConstruction: React.SFC<Props> = ({ title, phone, email }) => (
  <Flex
    flexDirection="column"
    style={{ flexGrow: 1 }}
    alignItems="center"
    justifyContent="center"
  >
    <Container>
      <Flex
        flexDirection="column"
        style={{ flexGrow: 1 }}
        alignItems="center"
        justifyContent="center"
      >
        <Logo width={200} variant="dark" />
        <Text
          fontSize={6}
          my={4}
          is="h1"
          color="text.main"
          textTransform="uppercase"
          textAlign="center"
        >
          Under Construction
        </Text>
        <Text is="p" fontSize={4} textAlign="center">
          This site will be available soon.
        </Text>
      </Flex>
    </Container>
    <Box mt={4} bg="grey.300" w={1} py={3}>
      <Container>
        <Text is="h2" my={2} textAlign="center" fontWeight={3}>
          {title}
        </Text>
        <Text is="p" my={2} textAlign="center" fontWeight={2}>
          {phone}
        </Text>
        <Text is="p" my={2} textAlign="center" fontWeight={2}>
          {email}
        </Text>
      </Container>
    </Box>
  </Flex>
);

export { UnderConstruction };
