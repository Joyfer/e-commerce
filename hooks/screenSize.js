import { useState, useEffect } from "react";

export default function useWindowDimensions() {
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const myScript = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 15) {
        setIsEnd(true);
      } else {
        setIsEnd(false);
      }
    };

    myScript();

    window.addEventListener("scroll", myScript);

    return () => {
      window.removeEventListener("scroll", myScript);
    };
  }, []);

  return isEnd;
}
