/**
 * Основная функция для совершения запросов по Yandex API.
 * */
const createRequest = (options = {}) => {
  (async () => {
    let response = await fetch(
      Yandex.HOST +
        options.path +
        (options.data.way
          ? `?path=${encodeURIComponent(options.data.way)}`
          : "") +
        (options.data.url
          ? `&url=${encodeURIComponent(options.data.url)}`
          : "") +
        (options.data.mediaType
          ? `?media_type=${options.data.mediaType}`
          : "") +
        (options.data.limit >= 0 ? `&limit=${options.data.limit}` : ""),
      {
        method: options.method,
        headers: {
          Authorization: options.headers.Authorization,
        },
      }
    );

    let result;
    try {
      result = await response.json();
    } catch (err) {
      console.log(err.message);
      result = null;
    }
    return options.callback(result);
  })();
};
