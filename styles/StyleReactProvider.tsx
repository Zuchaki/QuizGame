'use client';

import { StyleProvider } from '@ant-design/cssinjs';
import type { FC, PropsWithChildren } from 'react';

const StyleReactProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <StyleProvider layer>{children}</StyleProvider>;
};

export default StyleReactProvider;
