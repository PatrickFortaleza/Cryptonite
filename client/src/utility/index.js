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

export const parseDate = (unix) => {
  let date = new Date(+unix);
  // Parse data into a date string
  let parsedDate = Date.parse(date);
  // if can't parse, return the original string
  if (!parsedDate) return date;
  // Make parsedDate into a new Date object
  let d = new Date(parsedDate);
  // config date options
  let dateOptions = { year: "numeric", month: "long", day: "2-digit" };
  let timeOptions = { hour: "numeric", minute: "numeric" };
  // Set current date and time
  let currDate = new Intl.DateTimeFormat("en", dateOptions).format(d);
  let time = new Intl.DateTimeFormat("en", timeOptions).format(d);
  // Return formatted date string
  let dateString = `${currDate} at ${time}`;
  return dateString;
};

export const parseDateISO = (date) => {
  // Parse data into a date string
  const parsedDate = Date.parse(date);
  // if can't parse, return the original string
  if (!parsedDate) return date;
  // Make parsedDate into a new Date object
  const d = new Date(parsedDate);
  // config date options
  const dateOptions = { year: "numeric", month: "long", day: "2-digit" };
  const timeOptions = { hour: "numeric", minute: "numeric" };
  // Set current date and time
  const currDate = new Intl.DateTimeFormat("en", dateOptions).format(d);
  const time = new Intl.DateTimeFormat("en", timeOptions).format(d);
  // Return formatted date string
  const dateString = `${currDate} at ${time}`;
  return dateString;
};
