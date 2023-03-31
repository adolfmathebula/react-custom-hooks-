import useStringLength from "./useStringLength";
import { useState, useEffect } from "react";

//usage
// with textarea input
const YourReactCompoent = () => {
  const [text, setText] = useState<string>("");
  const { stringLength } = useStringLength(text);

  return (
    <div>
      <h3>useStringLength Hook</h3>
      <br />
      <textarea
        rows={10}
        cols={50}
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="Your text goes here"
      ></textarea>
      <br />
      <br />
      <p>characters: {stringLength}</p>
    </div>
  );
};

export default YourReactCompoent;
