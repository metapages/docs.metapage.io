/**
 * Swizzled Playground component
 * The PlaygroundProvider is wrapped in BrowserOnly to handle SSR issues
 * Original: @docusaurus/theme-live-codeblock
 */

import React, {type ReactNode} from 'react';
import PlaygroundProvider from '@theme/Playground/Provider';
import PlaygroundContainer from '@theme/Playground/Container';
import PlaygroundLayout from '@theme/Playground/Layout';

import type {Props} from '@theme/Playground';

export default function Playground({
  children,
  transformCode,
  ...props
}: Props): ReactNode {
  return (
    <PlaygroundContainer>
      <PlaygroundProvider code={children} {...props}>
        <PlaygroundLayout />
      </PlaygroundProvider>
    </PlaygroundContainer>
  );
}

