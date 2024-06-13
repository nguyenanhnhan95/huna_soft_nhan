export const ctx = "http://localhost:3000";
export const debounce =  (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
export const informationModalDelete = {
  title: "Bạn có muốn xóa dữ liệu này ?"
}