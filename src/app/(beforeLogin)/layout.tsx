import React, { ReactNode } from 'react';
import styles from '@/app/(beforeLogin)/_component/main.module.css';

type Props = { children: ReactNode; modal: ReactNode };

export default function layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}

// 주소가 localhost:3001일 때는 children -> page.tsx, modal -> @modal/default.tsx
// 주소가 localhost:3001/i/flow/signin 때는 children -> i/flow/signin/page.tsx, modal -> @modal/i/flow/signin/page.tsx
