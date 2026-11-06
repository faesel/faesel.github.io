'use client';

import { useState, useEffect, useMemo } from 'react';
import BlogCard from '@/components/BlogCard';
import { BlogPost, BlogPostFields } from '@/types/contentful';
import { getExcerpt, calculateReadingTime } from '@/lib/utils';
import styles from './page.module.css';

interface BlogPageProps {
  posts: BlogPost[];
  allTags: string[];
}

const VISIBLE_TAGS = 8;

export default function BlogPageClient({ posts, allTags }: BlogPageProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [showAllTags, setShowAllTags] = useState(false);

  const rankedTags = useMemo(() => {
    const counts = new Map<string, number>(allTags.map((tag) => [tag, 0]));
    posts.forEach((post) => {
      const fields = post.fields as any as BlogPostFields;
      (fields.tags || []).forEach((tag) => counts.set(tag, (counts.get(tag) || 0) + 1));
    });
    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([tag, count]) => ({ tag, count }));
  }, [posts, allTags]);

  const hiddenCount = Math.max(rankedTags.length - VISIBLE_TAGS, 0);
  const visibleTags = showAllTags
    ? rankedTags
    : rankedTags.filter((t, i) => i < VISIBLE_TAGS || t.tag === selectedTag);

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

      {rankedTags.length > 0 && (
        <div className={styles.filters} role="group" aria-label="Filter articles by topic">
          <button
            className={`${styles.filterButton} ${!selectedTag ? styles.active : ''}`}
            aria-pressed={!selectedTag}
            onClick={() => setSelectedTag(null)}
          >
            All
          </button>
          {visibleTags.map(({ tag, count }) => (
            <button
              key={tag}
              className={`${styles.filterButton} ${selectedTag === tag ? styles.active : ''}`}
              aria-pressed={selectedTag === tag}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
              <span className={styles.tagCount}>
                {count}
              </span>
            </button>
          ))}
          {hiddenCount > 0 && (
            <button
              className={styles.moreButton}
              aria-expanded={showAllTags}
              onClick={() => setShowAllTags((v) => !v)}
            >
              {showAllTags ? 'Show fewer' : `+${hiddenCount} more`}
            </button>
          )}
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
                readingTime={calculateReadingTime(fields.bodym)}
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
