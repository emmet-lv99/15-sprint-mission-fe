export const queryKeys = {
  articles: {
    all: () => ['article'],
    bestArticles: () => ['article', 'best'],
    list: (queryParams) => ['article', 'list', queryParams],
  },
};
