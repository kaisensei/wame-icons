import type { Meta, StoryObj } from '@storybook/react';
import Calendar from './Calendar';
import { SvgSize } from '../util';

const meta: Meta<typeof Calendar> = {
  title: "common/Calendar",
  component: Calendar,
}; 

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const xs: Story = {
  name: "xs",
  args:{
    className: 'calendar',
    size: SvgSize.xs,
  },
};

export const sm: Story = {
  name: "sm",
  args:{
    className: 'calendar',
    size: SvgSize.sm,
  },
};

export const md: Story = {
  name: "md",
  args:{
    className: 'calendar',
    size: SvgSize.md,
  },
};

export const lg: Story = {
  name: "lg",
  args:{
    className: 'calendar',
    size: SvgSize.lg,
  },
};

export const xl: Story = {
  name: "xl",
  args:{
    className: 'calendar',
    size: SvgSize.xl,
  },
}