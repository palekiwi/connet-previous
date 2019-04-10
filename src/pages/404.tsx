import * as React from "react";
import { Flex, Text } from "primithemes";
import { Logo } from "src/components/Logo";

const NotFound: React.SFC<{}> = () => {
  return (
    <Flex
      style={{ flexGrow: 1, height: "100%" }}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Logo width={400} />
      <Text m={3} is="h1" fontSize={[6, 6, 7]} color="secondary.main">
        404
      </Text>
      <Text is="h2" color="text.main">
        Not Found
      </Text>
    </Flex>
  );
};

export default NotFound;
