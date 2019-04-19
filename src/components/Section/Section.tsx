import * as React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Section: React.SFC<{}> = ({ children }) => <Card>{children}</Card>;
