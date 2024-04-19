import React, { fn } from "@storybook/test";
import { within, userEvent } from "@storybook/testing-library";
import Alert from "../components/Alert";
import {
  faLightbulb,
  faThumbsUp,
  faHand,
  faHandPointUp,
} from "@fortawesome/free-regular-svg-icons";

// import { faInfoCircle, faExclamationTriangle, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/Alert",
  component: Alert,
  // parameters: { },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    title: "Alert",
    text: "This is an alert.",
    onClose: fn(),
  },
  parameters: {
    controls: { expanded: true },
  },
};

export const Info = {
  args: {
    icon: faLightbulb,
    alertType: "info",
    title: "Info Alert",
    text: "This is a Info alert.",
  },
};

export const Success = {
  args: {
    icon: faThumbsUp,
    alertType: "success",
    title: "Success Alert",
    text: "This is a success alert.",
  },
};

export const Warning = {
  args: {
    icon: faHandPointUp,
    alertType: "warning",
    title: "Warning Alert",
    text: "This is a warning alert.",
  },
};

export const Error = {
  args: {
    icon: faHand,
    alertType: "error",
    title: "Error Alert",
    text: "This is a danger alert.",
  },
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const AlertClosed = {
  args: {
    closeable: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole("button");
    
    await sleep(2000);
    await userEvent.click(button);
  },
};
