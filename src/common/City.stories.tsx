import type { Meta, StoryObj } from '@storybook/react';
import City from './City';
import { SvgSize } from '../util';

const meta: Meta<typeof City> = {
  title: "common/City",
  component: City,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const xs: Story = {
  name: "xs",
  args:{
    className: 'city',
    size: SvgSize.xs,
  },
};

export const sm: Story = {
  name: "sm",
  args:{
    className: 'city',
    size: SvgSize.sm,
  },
};

export const md: Story = {
  name: "md",
  args:{
    className: 'city',
    size: SvgSize.md,
  },
};

export const lg: Story = {
  name: "lg",
  args:{
    className: 'city',
    size: SvgSize.lg,
  },
};

export const xl: Story = {
  name: "xl",
  args:{
    className: 'city',
    size: SvgSize.xl,
  },
}