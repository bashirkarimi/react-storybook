import Button from "../components/Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    variant: "primary",
    children: "Click me",
    onClick: () => {
      console.log("Button clicked");
    },
    icon: faPlus,
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
}
