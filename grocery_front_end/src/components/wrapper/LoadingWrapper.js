import BackdropLoading from "../../utils/BackdropLoading";
import { useEffect, useState } from "react";

const LoadingWrapper = ({ children }) => {
    const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(false);
    }, 1000); // 2 seconds delay

    return () => clearTimeout(timer); // Clean up the timer
  }, []);
    return (
        <>
            <div style={{ visibility: hidden ? 'hidden' : 'visible' }}>
                {children}
            </div>
            {hidden && (
                <BackdropLoading />
            )}
        </>
    )
}
export default LoadingWrapper;