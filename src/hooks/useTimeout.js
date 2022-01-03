import {useCallback, useEffect, useRef} from 'react';

export default function useTimeout(callback, delay) {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  });

  const clear = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  });

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    reset();
  }, [clear, set]);

  return {reset, clear};
}