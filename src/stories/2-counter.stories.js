import React from "react";
import { action } from "@storybook/addon-actions";
import { Counter } from "../App";

export default {
  title: "Counter",
  component: Counter
};

export const CounterExample = () => <Counter onSubmit={action("click")} />;
