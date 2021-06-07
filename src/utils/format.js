export function middleEllipsis(text) {
  return text.substr(0, 4) + '...' + text.substr(text.length - 4, text.length);
}

export function thousandSeparator(number) {
  try {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } catch (e) {
    return number;
  }
}

export function titleCase(str) {
  let splitStr = str.toLowerCase().split(' ');
  for (let i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(' ');
}
