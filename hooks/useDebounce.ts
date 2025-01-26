
export const useDebounce = <T extends (...args: any[]) => void >(fn:T, delay = 500) => {
    let timeoutId:ReturnType<typeof setTimeout>;
  
    return (...arg:Parameters<T>) => {
      timeoutId && clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...arg), delay);
    };
  };
  export const useAsyncDebounce = <T extends (...args: any[]) => Promise<void>>(fn:T, delay = 500) => {
    let timeoutId:ReturnType<typeof setTimeout>;
  
    return (...arg:Parameters<T>) => {
      timeoutId && clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...arg), delay);
    };
  };
