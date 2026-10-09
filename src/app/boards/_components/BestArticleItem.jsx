import boardsItemDummy from '@/assets/boards/boards_item_dummy.svg';
import icHeart from '@/assets/boards/ic_heart.svg';
import icMedal from '@/assets/boards/ic_medal.svg';
import Image from 'next/image';
import Link from 'next/link';
import * as styles from './BestArticleItem.css';

function BestArticleItem() {
  return (
    <Link href={''} className={styles.container}>
      {/* 라벨 */}
      <div className={styles.label}>
        <Image src={icMedal} alt="베스트 라벨 아이콘" />
        Best
      </div>
      {/* 컨텐츠 영역 */}
      <div className={styles.content}>
        {/* 아이템 정보 */}
        <div className={styles.itemInfoContent}>
          <p className={styles.itemTitle}>
            맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?
          </p>
          <div className={styles.itemImgContainer}>
            <Image
              className={styles.itemImg}
              src={boardsItemDummy}
              alt="게시글 이미지"
            />
          </div>
        </div>
        {/* 아티클 정보 */}
        <div className={styles.articleInfoContent}>
          {/* 작성자 정보 */}
          <div className={styles.articleInfoUser}>
            <p className={styles.articleInfoUserName}>총명한판다</p>
            <div className={styles.articleInfoLikeContainer}>
              <Image src={icHeart} alt="하트 아이콘" />
              9999+
            </div>
          </div>
          {/* 작성일 */}
          <p className={styles.articleInfoDate}>2024. 04. 16</p>
        </div>
      </div>
    </Link>
  );
}

export default BestArticleItem;
