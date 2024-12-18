export function getRandomNumber(max: number, min = 0) {
  return Math.floor(min + Math.random() * (max - min));
}

export function toInteger(value: string) {
  return parseInt(value, 10);
}

export function toNumber(value: string) {
  return parseFloat(value);
}
