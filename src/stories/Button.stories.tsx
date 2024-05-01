import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'The button expect a variant.',
    },
  },
  args: {
    variant: 'primary',
    children: 'button',
    onClick: () => {
      console.log('Button clicked');
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export const Default = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
  },
};

export const Tertiary = {
  args: {
    variant: 'tertiary',
  },
};

export const disabled = {
  args: {
    disabled: true,
  },
};
