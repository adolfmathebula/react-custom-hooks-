import { useState, useEffect } from "react";

//hook
//get String Length of the string in text area as you type
//or you can pass the textReceived on submit

const useStringLength = (textReceived: string) => {
  const [stringLength, setStringLength] = useState<number>(0);

  const textLength: number = textReceived.length;

  useEffect(() => {
    const getStringLength = () => {
      setStringLength(textLength);
    };

    getStringLength();
  }, [textReceived]);

  return { stringLength };
};

export default useStringLength;
