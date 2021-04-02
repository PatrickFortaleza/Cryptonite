export const formatPrice = (int) => {
  if (!int) return null;
  var parts = int.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};

export const computeDays = (n) => {
  const days = n / 24;
  return days.toFixed(0);
};
