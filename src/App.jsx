import { useState } from "react";
import { Card } from "./components/Card";

function App() {
  // 管理フラグ
  const [isAdmin, setIsAdmin] = useState(false);

  // [切り替え]押下時
  const onClickSwitch = () => setIsAdmin(!isAdmin);
  return (
    <>
      {/* 管理者フラグがtureの時とそれ以外で文字を出しわけ */}
      {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
      <button onClick={onClickSwitch}>切り替え</button>
      <Card isAdmin={isAdmin} />
    </>
  );
}

export default App;
