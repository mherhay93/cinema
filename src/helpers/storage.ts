export const MOVIES_KEY: string = 'movies_history';

export function addToSessionStorage(key: string, value: string) {
    sessionStorage.setItem(key, value);
}

export function getFromSessionStorage(key: string) {
    return sessionStorage.getItem(key);
}

export function setHistoryMovies(value: string) {
    const history = getFromSessionStorage(MOVIES_KEY);
    const historyArray: string[] = history ? JSON.parse(history) : [];
    const updated = [value, ...historyArray.filter(id => id !== value)];
    addToSessionStorage(MOVIES_KEY, JSON.stringify(updated));
}
