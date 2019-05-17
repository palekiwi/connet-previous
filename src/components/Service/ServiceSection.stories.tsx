import * as React from "react";
import { storiesOf } from "@storybook/react";
import { ServiceSection } from "./ServiceSection";

const stories = storiesOf("Components|ServiceSection", module);

stories.add("default", () => <ServiceSection />);
