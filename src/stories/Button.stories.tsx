import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "The button expect a variant.",
    },
    children: {
      description: "The label is passed as children.",
    }
  },
  args: {
    variant: "primary",
    children: "Click me",
    onClick: () => {
      console.log("Button clicked");
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export const Default = {
  args: {
    variant: "primary",
  },
};

export const Secondary = {
  args: {
    variant: "secondary",
  },
};
