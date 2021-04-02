export const formatPrice = (int) => {
  if (!int) return null;
  var parts = int.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",").replace(/-/g, "");
  return parts.join(".");
};

export const computeDays = (n) => {
  const days = n / 24;
  return days.toFixed(0);
};

export const roundLogic = (n) => {
  if (typeof n === "string") n = +n;
  if (typeof n !== "number") return null;
  if (n < 1) return formatPrice(n.toFixed(4));
  if (n % 1 === 0) return formatPrice(n.toFixed(0));
  return formatPrice(n.toFixed(2));
};
