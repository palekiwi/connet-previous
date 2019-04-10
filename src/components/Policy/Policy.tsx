import * as React from "react";
import { styled, Box, Flex } from "primithemes";
import { Button } from "src/components/Button";
import { Container } from "src/components/Container";
import { Content } from "src/components/Content";

const Wrapper = styled.div`
  background: ${props => props.theme.colors.white.main};
  z-index: 5;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;
interface Props {
  content: {
    html: string;
  };
}
const Policy: React.SFC<Props> = ({ content }) => {
  const [open, toggle] = React.useState(false);

  const handleAccept = () => {
    window.localStorage.setItem("cookies-policy", "accepted");
    toggle(false);
  };

  React.useEffect(() => {
    const policy = window.localStorage.getItem("cookies-policy");
    if (!(policy && policy === "accepted")) {
      toggle(true);
    }
  }, []);

  return (
    <Wrapper style={{ display: open ? "block" : "none" }}>
      <Container>
        <Flex flexDirection={["column", "row"]} alignItems="center">
          <Box style={{ flexGrow: 1 }} p={3}>
            <Content dangerouslySetInnerHTML={{ __html: content.html }} />
          </Box>
          <Box p={3}>
            <Button onClick={handleAccept} outlined>
              Accept
            </Button>
          </Box>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export { Policy };
