import {Stream} from 'xstream';

export interface AdaptStream {
  (s: Stream<any>): any;
}

(global as any).adaptStream = (x => x) as AdaptStream;

export function setAdapt(f: AdaptStream): void {
  (global as any).adaptStream = f;
}

export function adapt(stream: Stream<any>): any {
  return (global as any).adaptStream(stream);
}
