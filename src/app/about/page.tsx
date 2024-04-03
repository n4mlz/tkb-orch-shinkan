import Header from "@/components/Header/Header";
import styles from "@app/about/about.module.scss";

const About = () => {
  return (
    <>
      <Header isHome={false} />
      <div className={styles.pageContainer}>
        <div className={styles.pageTitle}>
          <h1>基本情報</h1>
        </div>
        <div className={styles.profile}>
          <h2>プロフィール</h2>
          <div className={styles.profileContent}>
            1974年創団。現在団員100名を数え、筑波大学内では最大規模を誇る課外活動団体の1つである。
            春・秋に定期演奏会を、冬にプロムナードコンサートを開催し、活動の中心としているほか、
            各パート・セクションでのアンサンブルコンサートやソロコンサート、依頼演奏などの活動、大学・大学院の卒業式・入学式における奏楽も行っている。
            常任指揮者を置かず、定期演奏会には内外で活躍中のプロの指揮者をお招きし、
            また、団員の演奏技術・音楽性の向上のため、各パート・セクションでトレーナーのご指導を受けている。
            <br />
            第30回定期演奏会以降、5年ごとの記念定期演奏会を中心につくば・東京での2都市公演を数多く行っている。現在、より良い音楽を追求しながら、地域の音楽文化のさらなる発展に貢献しようと団員一同精力的に活動している。
          </div>
        </div>
        <div className={styles.overview}>
          <h2>概要</h2>
          <table className={styles.overviewTable}>
            <tbody>
              <tr>
                <th>名称</th>
                <td>筑波大学管弦楽団</td>
              </tr>
              <tr>
                <th>顧問</th>
                <td>
                  佐藤 聡
                  <br />
                  筑波大学 学術情報メディアセンター 准教授
                </td>
              </tr>
              <tr>
                <th>団長</th>
                <td>齋藤 史陽</td>
              </tr>
              <tr>
                <th>所在地</th>
                <td>
                  〒305-8577
                  <br />
                  茨城県つくば市天王台1-1-1
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.schedule}>
          <h2>練習日程</h2>
          <table className={styles.scheduleTable}>
            <tbody>
              <tr>
                <th />
                <th>弦楽器</th>
                <th>木管楽器</th>
                <th>金管・打楽器</th>
              </tr>
              <tr>
                <th>場所</th>
                <td>5C棟6階</td>
                <td>5C棟4階など</td>
                <td>課外活動練習施設</td>
              </tr>
              <tr>
                <th>時間</th>
                <td>
                  月・木 18:30~21:00
                  <br />土 9:30~12:00
                </td>
                <td>
                  火・木 18:30~21:00
                  <br />土 9:30~12:00
                </td>
                <td>
                  火・木 18:30~21:00
                  <br />土 9:30~12:00
                </td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li>合奏が火・木・土のいずれかに入る場合があります。</li>
            <li>長期休暇中は練習日程が増える場合があります。</li>
            <li>予約可能な練習室や放課後利用できる教室があり、練習日程以外も自主練習が出来ます。</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
