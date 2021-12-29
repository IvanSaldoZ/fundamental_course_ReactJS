import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
  // хук useMemo кэширует состояние переменной и перечитывает это значение только тогда,
  // когда изменились dependencies (deps) - свойства, т.е. второй аргумент хука useMemo
  return useMemo(() => {
    // Если не пустая строка
    if (sort) {
      // Сортируем копию массива - для этого надо его развернуть ([...posts])
      // Для сортировки используется функция localeCompare, которая сравнивает строки
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return posts
  }, [sort, posts]);
}

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);

  return useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
  }, [query, sortedPosts])
}