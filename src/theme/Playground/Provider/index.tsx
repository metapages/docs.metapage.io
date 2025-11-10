/**
 * Swizzled PlaygroundProvider component to handle SSR issues with useColorMode
 * Original: @docusaurus/theme-live-codeblock
 */

import React, {type ReactNode} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {LiveProvider} from 'react-live';
import {usePrismTheme} from '@docusaurus/theme-common';

import type {Props} from '@theme/Playground/Provider';

// this should rather be a stable function
// see https://github.com/facebook/docusaurus/issues/9630#issuecomment-1855682643
const DEFAULT_TRANSFORM_CODE = (code: string) => `${code};`;

function PlaygroundProviderRenderer({
  code,
  children,
  ...props
}: Props): ReactNode {
  const prismTheme = usePrismTheme();
  const noInline = props.metastring?.includes('noInline') ?? false;
  return (
    <LiveProvider
      noInline={noInline}
      theme={prismTheme}
      {...props}
      code={code?.replace(/\n$/, '')}
      transformCode={props.transformCode ?? DEFAULT_TRANSFORM_CODE}>
      {children}
    </LiveProvider>
  );
}

export default function PlaygroundProvider(props: Props): ReactNode {
  return (
    <BrowserOnly fallback={<div>Loading code playground...</div>}>
      {() => <PlaygroundProviderRenderer {...props} />}
    </BrowserOnly>
  );
}

