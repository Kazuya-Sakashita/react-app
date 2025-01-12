// propsを分割代入を引数の段階で展開することもできる
export const ColoredMessage = ({ color, fontSize, children }) => {
  // propsを分割代入 propsの中からcolor, fontSize, childrenを取り出す props記述が不要になる
  // const { color, fontSize, children } = props;
  const contentStyle = {
    color,
    fontSize,
  };

  return <p style={contentStyle}>{children}</p>;
};
