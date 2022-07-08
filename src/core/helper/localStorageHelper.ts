export const getLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : false;
};

export const setLocalStorage = (key: string, value: any) => {
  value && localStorage.setItem(key, JSON.stringify(value));
};
