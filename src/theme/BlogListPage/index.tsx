import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {BlogPostProvider} from '@docusaurus/plugin-content-blog/client';
import type {Props} from '@theme/BlogListPage';

export default function BlogListPage({items, metadata}: Props): JSX.Element {
  return (
    <Layout
      title={metadata.blogTitle ?? 'Blog'}
      description={metadata.blogDescription}>
      <main style={{maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem'}}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}>
          {items.map(({content: BlogPostContent}) => {
            const {metadata: post} = BlogPostContent;
            const image = BlogPostContent.assets?.image ?? (post.frontMatter as {image?: string}).image;
            return (
              <Link
                key={post.permalink}
                to={post.permalink}
                style={{textDecoration: 'none', color: 'inherit'}}>
                <article
                  style={{
                    border: '1px solid var(--ifm-color-emphasis-300)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                  <div
                    style={{
                      height: '180px',
                      backgroundColor: 'transparent',
                      backgroundImage: image ? `url(${image})` : 'none',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div
                    style={{
                      padding: '1rem',
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                    }}>
                    <time
                      style={{
                        fontSize: '0.8rem',
                        color: 'var(--ifm-color-emphasis-600)',
                      }}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <h2 style={{fontSize: '1.1rem', margin: 0}}>{post.title}</h2>
                    <BlogPostProvider content={BlogPostContent} isBlogPostPage={false}>
                      <div className="blog-card-excerpt">
                        <BlogPostContent />
                      </div>
                    </BlogPostProvider>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </main>
    </Layout>
  );
}
