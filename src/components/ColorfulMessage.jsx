import React from "react";

export const ColofulMessage = (props) => {
  console.log(props);

  const { color, children } = props;
  const contentStyle = {
    color, //JSの書き方：同じ名前の変数名の値を設定する場合、省略が出来る
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

// export default ColofulMessage;
