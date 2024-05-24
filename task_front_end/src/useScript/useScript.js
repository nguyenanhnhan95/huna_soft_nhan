import { useEffect } from "react";

const useScript = url => {
    useEffect(() => {
      const script = document.createElement('script');
      console.log(script)
      console.log(url)
      script.src = url;
      script.async = true;
      console.log(script)
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      }
    }, [url]);
  };
  export default useScript;