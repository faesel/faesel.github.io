import { Asset, Entry, EntrySkeletonType } from 'contentful';

export interface BlogPostFields {
  hero: Asset;
  title: string;
  tags: string[];
  slug: string;
  datePublished: string;
  bodym: string;
}

interface BlogPostSkeleton extends EntrySkeletonType {
  contentTypeId: 'theCodeTransposerBlogPosts';
  fields: BlogPostFields;
}

export type BlogPost = Entry<BlogPostSkeleton, undefined, string>;

export interface BlogCardProps {
  title: string;
  slug: string;
  datePublished: string;
  tags: string[];
  heroUrl: string;
  excerpt?: string;
}

export interface ProjectFields {
  title: string;
  description: string;
  image?: Asset;
  link?: string;
  tags?: string[];
}
