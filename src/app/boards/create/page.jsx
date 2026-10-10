'use client';

import { createArticle } from '@/lib/api/articles';
import { queryKeys } from '@/lib/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import * as styles from './page.css';

function CreateArticle() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: (newArticle) => createArticle(newArticle),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.articles.all() });
      router.push('/boards');
    },
    onError: (error) => {
      alert('게시글 등록에 실패했습니다. 다시 시도해주세요.');
      console.error(error);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();

    if (!trimmedTitle || !trimmedContent) {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }

    mutate({
      title: trimmedTitle,
      content: trimmedContent,
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.header}>
        <h2>게시글 쓰기</h2>
        <button disabled={isPending} type="submit">
          {isPending ? '등록 중...' : '등록'}
        </button>
      </div>
      <div className={styles.body}>
        <div className={styles.fieldGroup}>
          <label htmlFor="title">*제목</label>
          <input
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="content">*내용</label>
          <textarea
            id="content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </div>
      </div>
    </form>
  );
}

export default CreateArticle;
