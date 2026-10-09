'use client';

import { useQuery } from '@tanstack/react-query';
import BestArticleItem from './BestArticleItem';
import * as styles from './BestArticleList.css';

const fetchBestArticles = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/articles?page=1&pageSize=3`,
  );
  if (!response.ok) {
    throw new Error('베스트 게시글을 불러오는데 실패했습니다.');
  }
  return response.json();
};

function BestArticleList() {
  const {
    data: articles,
    isPending,
    error,
  } = useQuery({
    queryKey: ['bestArticles'],
    queryFn: fetchBestArticles,
  });

  if (isPending) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>에러가 발생했습니다: {error.message}</div>;
  }

  console.log(articles.data.list);
  return (
    <div className={styles.container}>
      {articles.data.list.map((article) => (
        <BestArticleItem key={article.id} {...article} />
      ))}
    </div>
  );
}

export default BestArticleList;
