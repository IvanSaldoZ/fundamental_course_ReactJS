import {useEffect, useRef} from "react";

export const useObserver = (ref, canLoad, isLoading, callback) => {
  const observer = useRef();

  useEffect(() => {
    var options = {
      root: document,
    }
    var callbackIn = function (entries, observer) {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      /* Content excerpted, show below */
      if (entries[0].isIntersecting && canLoad) {
        callback()
      }
    };
    observer.current = new IntersectionObserver(callbackIn, options);
    observer.current.observe(ref.current)
  }, [isLoading])
}