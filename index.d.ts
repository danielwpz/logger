type LogFunc = (...args: any[]) => any
export type LoggerOption = LogFunc | { transporter?: LogFunc }
export default function (opts?: LoggerOption): any
