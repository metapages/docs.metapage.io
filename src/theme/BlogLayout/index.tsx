import React from 'react';
import Layout from '@theme/Layout';
import type {Props} from '@theme/BlogLayout';

export default function BlogLayout({
  sidebar: _sidebar,
  toc: _toc,
  children,
  ...layoutProps
}: Props): JSX.Element {
  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg">
        <div className="row">
          <main className="col col--8 col--offset-2">{children}</main>
        </div>
      </div>
    </Layout>
  );
}
