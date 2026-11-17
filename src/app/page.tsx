import Link from 'next/link';
import Image from 'next/image';
import BlogCard from '@/components/BlogCard';
import { GitHubActivity } from '@/components/GitHubActivity';
import { getAllBlogPosts } from '@/lib/contentful';
import { getGitHubActivity } from '@/lib/github';
import { BlogPostFields } from '@/types/contentful';
import { getExcerpt, calculateReadingTime } from '@/lib/utils';
import { JsonLd } from '@/lib/jsonld';
import { siteConfig, getAbsoluteUrl } from '@/lib/config';
import styles from './page.module.css';

export const revalidate = 3600; // Revalidate every hour

export default async function HomePage() {
  const [allPosts, githubActivity] = await Promise.all([
    getAllBlogPosts(),
    getGitHubActivity(new URL(siteConfig.social.github).pathname.slice(1), ['BinaryMeadow']),
  ]);
  const featuredPosts = allPosts.slice(0, 3);

  // Generate ItemList JSON-LD for featured posts
  const featuredPostsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Featured Articles',
    itemListElement: featuredPosts.map((post, index) => {
      const fields = post.fields as any as BlogPostFields;
      return {
        '@type': 'ListItem',
        position: index + 1,
        url: getAbsoluteUrl(`/blog/${fields.slug}`),
        name: fields.title,
      };
    }),
  };

  return (
    <>
      <JsonLd data={featuredPostsJsonLd} />
      
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Hi, I'm{' '}
            <span className={styles.highlight}>
              <span className={styles.visuallyHidden}>{siteConfig.author.name}</span>
              <span aria-hidden="true" className={styles.waveName}>
                {Array.from(siteConfig.author.name).map((letter, index) => (
                  <span key={index} className={styles.waveLetter}>{letter}</span>
                ))}
              </span>
            </span>
          </h1>
          <p className={styles.heroSubtitle}>
            <span className={styles.heroSubtitleLine}>
              Software developer, app maker and founder of Binary&nbsp;Meadow.
            </span>
            <span className={styles.heroSubtitleLine}>
              I build useful apps and developer tools, and share what I learn along the way.
            </span>
          </p>
          <div className={styles.heroButtons}>
            <Link href="/blog" className={styles.heroButtonPrimary}>
              Read the Blog
            </Link>
            <Link href="/projects" className={styles.heroButtonSecondary}>
              View Projects
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Featured Articles</h2>
        <div className={styles.grid}>
          {featuredPosts.map((post) => {
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
        
        {allPosts.length > 3 && (
          <div className={styles.viewAll}>
            <Link href="/blog" className={styles.viewAllLink}>
              View All Articles →
            </Link>
          </div>
        )}
      </section>

      <section className={styles.section} aria-labelledby="apps-title">
        <h2 id="apps-title" className={styles.sectionTitle}>My Apps</h2>
        <p className={styles.sectionIntro}>
          Ideas turned into everyday tools, built and cared for by me.
        </p>
        <div className={styles.showcaseGrid}>
          <article className={styles.appCard}>
            <div className={styles.cardHeading}>
              <Image
                src="/images/opdsy.webp"
                alt="OPDSy app icon"
                width={88}
                height={88}
                className={styles.appIcon}
              />
              <div>
                <p className={styles.eyebrow}>Books, comics &amp; audiobooks</p>
                <h3 className={styles.cardTitle}>OPDSy</h3>
                <div className={styles.rating}>
                  <span className={styles.ratingScore}>
                    5.0<span className={styles.visuallyHidden}> out of 5 stars</span>
                  </span>
                  <span className={styles.stars} aria-hidden="true">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="m12 2.5 2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.52l-5.88 3.09 1.12-6.55-4.76-4.64 6.58-.96Z" />
                      </svg>
                    ))}
                  </span>
                  <span>19 reviews (and counting)</span>
                </div>
              </div>
            </div>
            <p className={styles.appTagline}>Your files and your servers, one library.</p>
            <p className={styles.cardDescription}>
              Read books and comics, listen to audiobooks, and bring your local files
              and self-hosted OPDS libraries together. Available on Android and iOS,
              with no ads, no tracking and no subscription.
            </p>
            <figure className={styles.reviewQuote}>
              <blockquote>
                <p>
                  With a good server, it&rsquo;s basically Netflix for ebooks. Clean UI and
                  just works!
                </p>
              </blockquote>
              <figcaption>Google Play review</figcaption>
            </figure>
            <div className={styles.storeBadges}>
              <a href="https://play.google.com/store/apps/details?id=com.opdsy">
                <Image
                  src="/badges/google-play-badge.png?v=2"
                  alt="Get OPDSy on Google Play"
                  width={134}
                  height={40}
                  className={styles.storeBadge}
                />
              </a>
              <a href="https://apps.apple.com/app/opdsy/id6827915459">
                <Image
                  src="/badges/app-store-badge.svg"
                  alt="Download OPDSy on the App Store"
                  width={120}
                  height={40}
                  className={styles.storeBadge}
                />
              </a>
            </div>
            <a href="https://www.binarymeadow.com/apps/opdsy/" className={styles.textLink}>
              Explore OPDSy &rarr;
            </a>
          </article>

          <article className={styles.companyCard}>
            <Image
              src="/images/binary-meadow-logo.webp"
              alt="Binary Meadow logo"
              width={72}
              height={72}
              className={styles.companyLogo}
            />
            <p className={styles.eyebrow}>My independent software studio</p>
            <h3 className={styles.cardTitle}>Binary Meadow</h3>
            <p className={styles.cardDescription}>
              The home for the apps I build. A small UK studio focused on thoughtful
              software, privacy and products made to last.
            </p>
            <a href="https://www.binarymeadow.com" className={styles.textLink}>
              Visit Binary Meadow &rarr;
            </a>
            <a href="https://www.binarymeadow.com/#apps" className={styles.textLink}>
              See all my apps &rarr;
            </a>
          </article>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="github-title">
        <h2 id="github-title" className={styles.sectionTitle}>On GitHub</h2>
        <div className={styles.githubPanel}>
          <div className={styles.githubProfile}>
            <div>
              <p className={styles.eyebrow}>Open source &amp; side projects</p>
              <h3 className={styles.cardTitle}>@faesel</h3>
              <p className={styles.cardDescription}>
                I work across TypeScript, .NET and cloud-native software.
                My GitHub is where I share developer tools, experiments and
                projects you can explore, use and contribute to.
              </p>
            </div>
            <a href={siteConfig.social.github} className={styles.viewAllLink}>
              View my GitHub profile &rarr;
            </a>
          </div>
          <GitHubActivity activity={githubActivity} />
        </div>
      </section>
    </>
  );
}
