const getRelativePath = fullPath => {
  const pathArr = fullPath.split('/');
  if (pathArr.length > 1) return pathArr[pathArr.length - 1];
  return fullPath;
};

const checkUserAuth = (userEmail, users) =>
  users.find(user => user.email === userEmail);

const getStorageData = key => {
  let item = null;
  if (typeof key === 'string') item = localStorage.getItem(key);
  return item;
};

const setStorageData = (key, data) => {
  if (typeof key === 'string' && typeof data === 'string') {
    localStorage.setItem(key, data);
  }
};

const removeStorageData = key => localStorage.removeItem(key);

export {
  getRelativePath,
  checkUserAuth,
  getStorageData,
  setStorageData,
  removeStorageData,
};
