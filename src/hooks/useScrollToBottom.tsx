import { useEffect, useRef } from "react";

function useScrollToBottom<T>(dependency: T) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [dependency]);

  return containerRef;
}

export default useScrollToBottom;
