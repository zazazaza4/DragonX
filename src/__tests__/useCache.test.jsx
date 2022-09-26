import { useCache } from '../hooks/useCache';
import { renderHook, act } from '@testing-library/react-hooks';

let cache_1 = {
  name: 'Bill',
  age: 12,
  isNormal: true
};

describe('useCatch', () => {
  test('create cache', () => {
    const { result } = renderHook(() => useCache(cache_1, cache_1.name));
    let cache = null;

    act(() => {
      cache = result.current.retrieveData();
    });

    expect(cache).toBe(cache_1);
  });

  test('update cache', () => {
    const { result } = renderHook(() => useCache(cache_1, cache_1.name));

    act(() => {
      result.current.updateCache('No one');
    });

    expect(result.current.retrieveData()).toBe('No one');
  });

  test('delete cache', () => {
    const { result } = renderHook(() => useCache(cache_1, cache_1.name));

    act(() => {
      result.current.removeCache();
    });

    expect(result.current.retrieveData()).toBeNull();
  });
});
