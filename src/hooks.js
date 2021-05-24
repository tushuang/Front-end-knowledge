/*
 * @Author: your name
 * @Date: 2021-04-27 19:26:44
 * @LastEditTime: 2021-04-28 14:09:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /app/src/hooks.js
 */
import React, { useState, Suspense } from "react";

const OtherComponent = React.lazy(() => import("./test"));

function TestHooks(props) {
  const [num, setNum] = useState(0);

  const [num2, setNum2] = useState(0);
  const onOk1 = () => {
    setNum(num + 1);
  };
  const onOk2 = () => {
    setNum2(num2 + 1);
    // setTimeout(() => {
    // setNum((num) => {
    //   console.log("setTimeout", num);
    //   return num + 1;
    // });
    //   setNum(num + 1);
    // }, 0);
  };
  return (
    <div>
      <button onClick={onOk1}>点击num加1-hook</button>
      <button onClick={onOk2}>点击num2加-hook</button>
      <h2>num:{num}</h2>
      <h2>num2:{num2}</h2>
      {num === 2 && (
        <Suspense fallback={<div>Loading...</div>}>
          <OtherComponent />
        </Suspense>
      )}
    </div>
  );
}

export default TestHooks;
