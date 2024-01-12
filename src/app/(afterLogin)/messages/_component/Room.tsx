'use client';

import { faker } from '@faker-js/faker';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import dayjs from 'dayjs';
import styles from '../message.module.css';
import { useRouter } from 'next/navigation';

dayjs.locale('ko');
dayjs.extend(relativeTime);

export default function Room() {
  const router = useRouter();
  const User = {
    id: 'hero',
    nickname: '영웅',
    Messages: [
      { roomId: 123, content: '안녕하세요.', createdAt: new Date() },
      { roomId: 123, content: '안녕히가세요.', createdAt: new Date() },
    ],
  };

  const onClick = () => {
    router.push(`/messages/${User.Messages.at(-1)?.roomId}`);
  };

  return (
    <div className={styles.room} onClickCapture={onClick}>
      <div className={styles.roomUserImage}>
        <img src={faker.image.avatar()} alt='' />
      </div>
      <div className={styles.roomChatInfo}>
        <div className={styles.roomUserInfo}>
          <b>{User.nickname}</b>
          &nbsp;
          <span>@{User.id}</span>. &nbsp;
          <span className={styles.postDate}>
            {dayjs(User.Messages?.at(-1)?.createdAt).fromNow(true)}
          </span>
        </div>
        <div className={styles.roomLastChat}>
          {User.Messages?.at(-1)?.content}
        </div>
      </div>
    </div>
  );
}
