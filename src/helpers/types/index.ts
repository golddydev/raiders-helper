import { Result } from "ts-res";

type ErrType = string | Error | undefined | void;
type Success<T> = T extends { ok: true; data: infer D } ? D : never;

/* eslint-disable @typescript-eslint/no-explicit-any */
type ExtractAsyncData<
  F extends (...args: any[]) => Promise<Result<unknown, ErrType>>
> = Success<Awaited<ReturnType<F>>>;
type ExtractData<F extends (...args: any[]) => Result<unknown, ErrType>> =
  Success<ReturnType<F>>;

export type { ErrType, ExtractAsyncData, ExtractData };
