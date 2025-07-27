// yandex-metrika.d.ts
export {};

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ym: (counterId: number, method: string, ...args: any[]) => void;
  }
}