import GlobalLayout from '@/components/layout/GlobalLayout';
import '@/styles/reset.css.js';
import '@/styles/tokens.css.js';
import localFont from 'next/font/local';

export const metadata = {
  title: 'My Mission App',
  description: 'Sprint Mission 7 Frontend',
};

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
  weight: '45 920',
});

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className={pretendard.className}>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
