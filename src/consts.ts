type WelcomeEvent = {
  date: Date;
  events: string[];
};

export const eventList: WelcomeEvent[] = [
  { date: new Date(2024, 4 - 1, 5), events: ["入学式一斉新歓"] },
  { date: new Date(2024, 4 - 1, 6), events: ["新歓本祭"] },
  { date: new Date(2024, 4 - 1, 12), events: ["食事会"] },
  { date: new Date(2024, 4 - 1, 16), events: ["アンサンブルコンサート", "オーケストラパーティー", "入団説明会"] },
  { date: new Date(2024, 4 - 1, 17), events: ["楽器体験"] },
  { date: new Date(2024, 4 - 1, 20), events: ["オーケストラコンサート"] },
  { date: new Date(2024, 4 - 1, 23), events: ["アンサンブルコンサート", "オーケストラパーティー"] },
  { date: new Date(2024, 4 - 1, 24), events: ["初心者座談会"] },
  { date: new Date(2024, 4 - 1, 25), events: ["ノバホール公開練習"] },
  { date: new Date(2024, 4 - 1, 27), events: ["全体会・入団説明会"] },
  { date: new Date(2024, 4 - 1, 28), events: ["一次締切"] },
  { date: new Date(2024, 5 - 1, 7), events: ["入団説明会"] },
  { date: new Date(2024, 5 - 1, 31), events: ["新歓期間終了"] },
];
