import * as React from "react";
import { Flex } from "primithemes";
import { Text } from "src/components/Text";
import { Container } from "src/components/Container";
import { LangsContainer } from "src/components/Langs";
import { FormattedMessage, defineMessages } from "react-intl";

const messages = defineMessages({
  callUs: {
    id: "header.callUs",
    defaultMessage: "Give us a call now:",
  },
});

interface Props {
  height: number;
  phone: string;
}

const TopBar: React.SFC<Props> = ({ height, phone }) => {
  return (
    <Flex px={3} alignItems="center" style={{ height }} bg="white.light">
      <Container>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          color="text.main"
        >
          <Flex alignItems="center">
            <Text ml={1} fontSize={0} display={["none", "block"]}>
              <FormattedMessage {...messages.callUs} />
            </Text>
            <Text ml={1} fontSize={0} fontWeight={5}>
              {phone}
            </Text>
          </Flex>
          <LangsContainer />
        </Flex>
      </Container>
    </Flex>
  );
};

export { TopBar };
