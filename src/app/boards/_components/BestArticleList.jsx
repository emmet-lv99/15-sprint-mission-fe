'use client';

import { fetchArticles } from '@/lib/api/articles';
import { queryKeys } from '@/lib/queryKeys';
import { useQuery } from '@tanstack/react-query';
import BestArticleItem from './BestArticleItem';
import * as styles from './BestArticleList.css';

const queryParams = {
  page: 1,
  pageSize: 3,
};

function BestArticleList() {
  const { data: articles, isPending, error } = useQuery({
    queryKey: queryKeys.articles.bestArticles(),
    queryFn: () => fetchArticles(queryParams),
  });

  if (isPending) {
    return <div>로딩중...</div>;
  }

  if (error) {
    return <div>베스트 게시글을 불러오는데 실패했습니다.</div>;
  }

  return (
    <div className={styles.container}>
      {articles.data.list.map((article) => (
        <BestArticleItem key={article.id} {...article} />
      ))}
    </div>
  );
}

export default BestArticleList;
