'use client';

import { useState, useEffect } from 'react';
import BlogCard from '@/components/BlogCard';
import { BlogPost, BlogPostFields } from '@/types/contentful';
import { getExcerpt } from '@/lib/utils';
import styles from './page.module.css';

interface BlogPageProps {
  posts: BlogPost[];
  allTags: string[];
}

export default function BlogPageClient({ posts, allTags }: BlogPageProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    if (selectedTag) {
      setFilteredPosts(
        posts.filter((post) => {
          const fields = post.fields as any as BlogPostFields;
          return fields.tags.includes(selectedTag);
        })
      );
    } else {
      setFilteredPosts(posts);
    }
  }, [selectedTag, posts]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Blog</h1>
        <p className={styles.subtitle}>
          Articles about technology, coding, and more
        </p>
      </header>

      {allTags.length > 0 && (
        <div className={styles.filters}>
          <button
            className={`${styles.filterButton} ${!selectedTag ? styles.active : ''}`}
            onClick={() => setSelectedTag(null)}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`${styles.filterButton} ${selectedTag === tag ? styles.active : ''}`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {filteredPosts.length > 0 ? (
        <div className={styles.grid}>
          {filteredPosts.map((post) => {
            const fields = post.fields as any as BlogPostFields;
            return (
              <BlogCard
                key={post.sys.id}
                title={fields.title}
                slug={fields.slug}
                datePublished={fields.datePublished}
                tags={fields.tags}
                heroUrl={`https:${(fields.hero as any).fields.file.url}`}
                excerpt={getExcerpt(fields.bodym)}
              />
            );
          })}
        </div>
      ) : (
        <p className={styles.noResults}>
          No articles found for the selected tag.
        </p>
      )}
    </div>
  );
}
