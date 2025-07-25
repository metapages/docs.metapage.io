import { useLocation } from '@docusaurus/router';
import BlogLayout from '@theme-original/BlogLayout';
import type { Props } from '@theme/BlogLayout';
import { type ReactNode } from 'react';

export default function BlogLayoutWrapper(props: Props): ReactNode {
  const { pathname } = useLocation();

  // Show sidebar only on /blog (or /blog/ with trailing slash)
  const showSidebar = pathname === '/blog' || pathname === '/blog/';

  return (
    <BlogLayout
      {...props}
      sidebar={showSidebar ? props.sidebar : null}
    />
  );
}
