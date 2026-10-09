'use client';

import BestArticleList from './_components/BestArticleList';
import * as styles from './page.css';

function BoardListPage() {
  return (
    <article className={styles.container}>
      <div className={styles.content}>
        <section>
          <h2 className={styles.sectionTitle}>베스트 게시글</h2>
          <div className={styles.bestArticleListContainer}>
            <BestArticleList />
          </div>
        </section>
        <section>
          <h2 className={styles.sectionTitle}>게시글</h2>
        </section>
      </div>
    </article>
  );
}

export default BoardListPage;
