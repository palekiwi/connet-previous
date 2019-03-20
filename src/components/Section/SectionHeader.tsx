import * as React from "react";
import { Flex, Text } from "primithemes";

interface Props {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  body?: React.ReactNode[];
}

export const SectionHeader: React.SFC<Props> = ({
  children,
  title,
  subtitle,
  body,
}) => (
  <Flex mt={4} m={3} flexDirection="column" style={{ maxWidth: 600 }}>
    <Text
      textAlign="center"
      is="h2"
      fontWeight={2}
      fontSize={[5, 5, 6]}
      color="text.dark"
    >
      {title}
    </Text>
    {!!subtitle && (
      <Text
        mt={3}
        fontWeight={3}
        fontSize={3}
        color="primary.main"
        textAlign="center"
      >
        {subtitle}
      </Text>
    )}
    {!!body &&
      body.map((x, i) => (
        <Text
          mt={3}
          color="text.dark"
          textAlign="center"
          lineHeight={2}
          key={i}
        >
          {x}
        </Text>
      ))}
  </Flex>
);
