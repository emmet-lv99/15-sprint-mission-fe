'use client';

import logo from '@/assets/common/logo.svg';
import wordType from '@/assets/common/word_type.svg';
import { textLg } from '@/styles/typography.css';
import Image from 'next/image';
import Link from 'next/link';
import * as styles from './Navigation.css';

function Navigation() {
  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <Link href={'/'} className={styles.logoWrapper}>
          <Image className={styles.logo} src={logo} alt="로고 이미지" />
          <Image src={wordType} alt="워드 타입" />
        </Link>
        <button className={`${styles.loginButton} ${textLg.semibold}`}>
          로그인
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
