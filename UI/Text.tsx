import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import classNames from 'classnames';
import { type FC, type PropsWithChildren } from 'react';

const textStyles = cva('', {
  variants: {
    variant: {
      title: 'font-nunitoSans text-6xl',
      titleS: 'font-inter text-6xl',
      'body-m': 'font-nunitoSans',
    },
  },
  defaultVariants: {
    variant: 'body-m',
  },
});

type Props = {
  className?: string;
} & VariantProps<typeof textStyles>;
const Text: FC<PropsWithChildren<Props>> = ({
  className,
  variant,
  children,
}) => {
  return (
    <div className={classNames(textStyles({ variant }), className)}>
      {children}
    </div>
  );
};

export default Text;
