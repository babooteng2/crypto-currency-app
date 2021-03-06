const BASE_URL = "https://api.coinpaprika.com/v1";

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinId: any) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) => response.json());
}

export function fetchCoinTickers(coinId: any) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) => response.json());
}

export function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  /* const startDate = endDate - 60 * 60 * 24 * 7 * 2; */
  // coin paprika 정책으로 인해 OHLCV historical data를 하루치만 가져올 수 있음
  const startDate = endDate - 60 * 60 * 24;
  return fetch(
    `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
  ).then((response) => response.json());
}

export function enumKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[] {
  return Object.keys(obj).filter((k) => Number.isNaN(+k)) as K[];
}
