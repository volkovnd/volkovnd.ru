export function isUndefined(value: unknown): value is undefined {
  return value === undefined;
}

export function isNull(value: unknown): value is null {
  return value === null;
}

export function isNil(input: unknown): input is null | undefined {
  return input == null;
}

export function isBoolean(value: unknown): value is boolean {
  return value === true || value === false;
}

export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}
