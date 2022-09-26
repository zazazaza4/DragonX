import { useCallback, useMemo, useState } from 'react';

const CACHES: {
  [key: string]: unknown;
} = {};

export type UseCacheType<T> = {
  retrieveData: () => T | null;
  updateCache: (nextData: T) => void;
  removeCache: () => void;
};

export const useCache = <T,>(getData: T, dataKey: string): UseCacheType<T> => {
  const [count, setCount] = useState<number>(0);
  const [isRemove, setIsRemove] = useState<boolean>(false);

  const key = useMemo(() => dataKey, [dataKey]);

  const updateCache = useCallback(
    (data: T) => {
      CACHES[key] = data;
      setCount(Date.now());
    },
    [key]
  );

  const removeCache = useCallback(() => {
    setIsRemove(() => true);
    delete CACHES[key];
    setCount(Date.now());
  }, [key]);

  const retrieveData = useCallback(() => {
    let cachedData = CACHES[key];

    if (cachedData === undefined) {
      const data = getData;

      if (data === null || isRemove) {
        return null;
      }

      cachedData = CACHES[key] = data;
    }

    return cachedData as T | null;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, count]);

  return {
    retrieveData,
    updateCache,
    removeCache
  };
};
