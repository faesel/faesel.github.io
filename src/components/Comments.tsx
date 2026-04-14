'use client';

import Giscus from '@giscus/react';
import styles from './Comments.module.css';

export default function Comments(): React.ReactElement {
  return (
    <section className={styles.comments} aria-label="Comments">
      <h2 className={styles.heading}>Comments</h2>
      <Giscus
        repo="faesel/faesel.github.io"
        repoId="MDEwOlJlcG9zaXRvcnkyNzYzMjYxNjM="
        category="General"
        categoryId="DIC_kwDOEHhnE84C608x"
        mapping="og:title"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="noborder_light"
        lang="en"
        loading="lazy"
      />
    </section>
  );
}
