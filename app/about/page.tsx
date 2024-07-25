import styles from "../../styles/about.module.css";

export const metadata = {
  title: "About",
};

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <h1>Create Movie App With Next JS </h1>
      <p>Next JS version 14를 공부하면서 간단하게 만들어 본 영화 앱 입니다.</p>
      <a href="https://github.com/min-s9709" target="_blank">
        @min-s9709
      </a>
    </div>
  );
}
