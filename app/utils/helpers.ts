// === Regex pattern giống Lodash ===
const reTrim = /^\s+|\s+$/g;
const reIsBinary = /^0b[01]+$/i;
const reIsOctal = /^0o[0-7]+$/i;
const reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

export function isObject(value: unknown): value is object {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}

export function isSymbol(value: unknown): value is symbol {
  return typeof value === 'symbol' || (isObject(value) && Object.prototype.toString.call(value) === '[object Symbol]');
}

export function toNumber(value: unknown): number {
  if (typeof value === 'number') {
    return value;
  }

  if (isSymbol(value)) {
    return NaN;
  }

  if (isObject(value)) {
    const other = typeof (value as any).valueOf === 'function' ? (value as any).valueOf() : value;
    value = isObject(other) ? `${other}` : other;
  }

  if (typeof value !== 'string') {
    return value === 0 ? 0 : +value!;
  }

  value = (value as string).replace(reTrim, '');

  const isBinary = reIsBinary.test(value as string);
  if (isBinary || reIsOctal.test(value as string)) {
    return parseInt((value as string).slice(2), isBinary ? 2 : 8);
  }

  return reIsBadHex.test(value as string) ? NaN : +(value as string);
}

export const formatDate = (date: Date | null): string => {
  if (!date) return '';
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getMonths = () => {
  return [
    { value: '01', label: 'january' },
    { value: '02', label: 'february' },
    { value: '03', label: 'march' },
    { value: '04', label: 'april' },
    { value: '05', label: 'may' },
    { value: '06', label: 'june' },
    { value: '07', label: 'july' },
    { value: '08', label: 'august' },
    { value: '09', label: 'september' },
    { value: '10', label: 'october' },
    { value: '11', label: 'november' },
    { value: '12', label: 'december' }
  ];
};

export const getYears = () => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: 15 }, (_, i) => String(currentYear - i));
};
