import * as React from "react";
import styled, { css } from "styled-components";
import { color } from "src/theme";
import { desktop } from "src/theme/media";
import { Button } from "src/components/Button";
import { Container } from "src/components/Container";
import { Content } from "src/components/Content";

const Wrapper = styled.div`
  background: ${color("white.main")};
  z-index: 5;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const Columns = styled.div`
  display: flex;
  flex-direction: column;
  ${desktop(css`
    flex-direction: row;
  `)}
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
        <Columns>
          <Content dangerouslySetInnerHTML={{ __html: content.html }} />
          <Button onClick={handleAccept} outlined>
            Accept
          </Button>
        </Columns>
      </Container>
    </Wrapper>
  );
};

export { Policy };
