const style = {
  height: "50px",
  backgroundColor: "lightgray", // 修正: backGroundColor -> backgroundColor
  padding: "8px",
};

export const Child2 = () => {
  console.log("Child2レンダリング");

  return (
    <div style={style}>
      <p>Child2</p>
    </div>
  );
};
