// import { useEffect, useState } from "react";
// import { ColoredMessage } from "./components/ColoredMessage";
import { CssModules } from "./components/CssModules";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";

export const App = () => {
  // // useStateの定義
  // const [num, setNum] = useState(0);

  // //useEffectの定義
  // useEffect(() => {
  //   alert("useEffectが実行されました");
  // }, [num]);

  // // ボタンを押した時に実行する関数を定義
  // const onClickButton = () => {
  //   setNum(num + 1);
  // };

  return (
    <>
      {/* <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColoredMessage />
      <ColoredMessage color="blue" fontSize="24px" message="お元気ですか？" />
      <ColoredMessage color="blue" fontSize="24px">
        お元気ですか？
      </ColoredMessage>
      <ColoredMessage color="pink" fontSize="14px">
        元気ですよ！
      </ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p> */}
      <CssModules />
      <StyledJsx />
      <StyledComponents />
    </>
  );
};
