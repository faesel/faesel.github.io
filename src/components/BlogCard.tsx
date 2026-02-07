import Link from 'next/link';
import Image from 'next/image';
import { BlogCardProps } from '@/types/contentful';
import { formatDate } from '@/lib/utils';
import styles from './BlogCard.module.css';

export default function BlogCard({
  title,
  slug,
  datePublished,
  tags,
  heroUrl,
  excerpt,
}: BlogCardProps) {
  // Deduplicate tags to avoid duplicate keys
  const uniqueTags = tags ? Array.from(new Set(tags)) : [];
  
  return (
    <article className={styles.card}>
      <Link href={`/blog/${slug}`} aria-label={`Read ${title}`}>
        <div className={styles.imageWrapper}>
          <Image
            src={heroUrl}
            alt={title}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      
      <div className={styles.content}>
        <Link href={`/blog/${slug}`}>
          <h3 className={styles.title}>{title}</h3>
        </Link>
        
        <div className={styles.meta}>
          <time className={styles.date} dateTime={datePublished}>
            📅 {formatDate(datePublished)}
          </time>
        </div>
        
        {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
        
        {uniqueTags.length > 0 && (
          <div className={styles.tags}>
            {uniqueTags.map((tag, index) => (
              <span key={`${tag}-${index}`} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
