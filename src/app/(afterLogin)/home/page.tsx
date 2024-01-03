import Tab from './_component/Tab';
import TabProvider from './_component/TabProvider';
import styles from './home.module.css';

export default function Home() {
  return (
    <main>
      <TabProvider>
        <Tab />
        {/* <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post /> */}
      </TabProvider>
    </main>
  );
}
