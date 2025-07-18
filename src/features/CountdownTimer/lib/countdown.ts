export type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

/**
 * Возвращает объект времени — либо до события, либо от его начала,
 * либо все 0, если событие завершилось.
 */
export const getTimeLeft = (targetDate: Date): TimeLeft => {
  const now = new Date().getTime();
  const start = targetDate.getTime();
  const end = start + 4 * 24 * 60 * 60 * 1000;

  let time: number;

  if (now < start) {
    time = start - now;
  } else if (now >= start && now < end) {
    time = now - start;
  } else {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(time / (1000 * 60 * 60 * 24)),
    hours: Math.floor((time / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((time / 1000 / 60) % 60),
    seconds: Math.floor((time / 1000) % 60),
  };
};

/**
 * Склоняет слово в зависимости от числа
 */
export const getWordForm = (value: number, forms: [string, string, string]) => {
  const mod10 = value % 10;
  const mod100 = value % 100;
  if (mod10 === 1 && mod100 !== 11) return forms[0];
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return forms[1];
  return forms[2];
};