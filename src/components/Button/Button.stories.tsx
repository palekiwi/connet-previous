import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./index";
import styled from "styled-components";

const stories = storiesOf("Elements|Button", module);

const Container = styled.div`
  ${Button} {
    margin-left: 0.5rem;
  }
`;
const variants: any[] = ["default", "primary", "secondary"];

stories
  .addDecorator(f => <Container>{f()}</Container>)
  .add("default", () => (
    <>
      {variants.map(v => (
        <Button key={v} variant={v}>
          {v}
        </Button>
      ))}
    </>
  ))
  .add("outlined", () => (
    <>
      {variants.map(v => (
        <Button outlined key={v} variant={v}>
          {v}
        </Button>
      ))}
    </>
  ))
  .add("contained", () => (
    <>
      {variants.map(v => (
        <Button contained key={v} variant={v}>
          {v}
        </Button>
      ))}
    </>
  ))
  .add("small", () => (
    <>
      {variants.map(v => (
        <Button small contained key={v} variant={v}>
          {v}
        </Button>
      ))}
    </>
  ))
  .add("large", () => (
    <>
      {variants.map(v => (
        <Button large contained key={v} variant={v}>
          {v}
        </Button>
      ))}
    </>
  ));
