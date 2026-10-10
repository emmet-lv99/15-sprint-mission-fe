'use client';

import icSearch from '@/assets/boards/ic_search.svg';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import * as styles from './ArticleSearchBar.css';

function ArticleSearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get('search') || '');

  const handleSearchKeyword = (event) => {
    if (event.key === 'Enter') {
      // 기존의 키워드와 같으면 얼리 return
      if (searchParams.get('search') === keyword) {
        return;
      }
      const params = new URLSearchParams(searchParams.toString());
      params.set('search', keyword);
      params.set('page', 1);
      router.push(`/boards?${params.toString()}`);
    }
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div className={styles.container}>
      <Image className={styles.searchIcon} src={icSearch} alt="서치바 아이콘" />
      <input
        onChange={handleKeywordChange}
        value={keyword}
        onKeyDown={handleSearchKeyword}
        className={styles.searchInput}
        placeholder="검색할 상품을 입력해주세요"
      />
    </div>
  );
}

export default ArticleSearchBar;
