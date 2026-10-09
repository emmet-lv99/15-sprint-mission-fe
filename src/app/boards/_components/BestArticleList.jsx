import BestArticleItem from './BestArticleItem';
import * as styles from './BestArticleList.css';

function BestArticleList() {
  return (
    <div className={styles.container}>
      <BestArticleItem />
      <BestArticleItem />
      <BestArticleItem />
    </div>
  );
}

export default BestArticleList;
