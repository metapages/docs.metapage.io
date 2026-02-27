/**
 * Swizzled Mermaid component to handle SSR issues with useColorMode
 * Original: @docusaurus/theme-mermaid
 */

import React, {useEffect, useRef, type ReactNode} from 'react';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import {ErrorBoundaryErrorMessageFallback} from '@docusaurus/theme-common';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {
  MermaidContainerClassName,
  useMermaidRenderResult,
} from '@docusaurus/theme-mermaid/client';
import type {Props} from '@theme/Mermaid';
import type {RenderResult} from 'mermaid';

import styles from './styles.module.css';

function MermaidRenderResult({
  renderResult,
}: {
  renderResult: RenderResult;
}): ReactNode {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const div = ref.current!;
    renderResult.bindFunctions?.(div);
  }, [renderResult]);

  return (
    <div
      ref={ref}
      className={`${MermaidContainerClassName} ${styles.container}`}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: renderResult.svg}}
    />
  );
}

function MermaidRenderer({value}: Props): ReactNode {
  // Always call the hook (required by React rules)
  // The hook internally uses useColorMode which requires ColorModeProvider
  // The ErrorBoundary will catch any context errors
  const renderResult = useMermaidRenderResult({text: value});
  
  if (renderResult === null) {
    return <div className={styles.container}>Loading diagram...</div>;
  }
  
  return <MermaidRenderResult renderResult={renderResult} />;
}

export default function Mermaid(props: Props): ReactNode {
  // ErrorBoundaries don't catch hook errors, so we need to prevent the hook from being called
  // if the context isn't available. Since we can't conditionally call hooks, we'll
  // just let it fail gracefully and show loading state
  return (
    <ErrorBoundary
      fallback={() => <div className={styles.container}>Loading diagram...</div>}>
      <BrowserOnly fallback={<div className={styles.container}>Loading diagram...</div>}>
        {() => <MermaidRenderer {...props} />}
      </BrowserOnly>
    </ErrorBoundary>
  );
}

