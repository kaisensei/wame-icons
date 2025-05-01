import type { Meta, StoryObj } from '@storybook/react';
import Arena from './Arena';
import { SvgSize } from '../util';

const meta: Meta<typeof Arena> = {
  title: "common/Arena",
  component: Arena,
}; 

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const xs: Story = {
  name: "xs",
  args:{
    className: 'arena',
    size: SvgSize.xs,
  },
};

export const sm: Story = {
  name: "sm",
  args:{
    className: 'arena',
    size: SvgSize.sm,
  },
};

export const md: Story = {
  name: "md",
  args:{
    className: 'arena',
    size: SvgSize.md,
  },
};

export const lg: Story = {
  name: "lg",
  args:{
    className: 'arena',
    size: SvgSize.lg,
  },
};

export const xl: Story = {
  name: "xl",
  args:{
    className: 'arena',
    size: SvgSize.xl,
  },
};