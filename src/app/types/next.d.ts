import type { NextComponentType } from "next";

declare module "next" {
  export type PageProps<P = object> = {
    params?: {
      [key: string]: string | string[];
    };
    searchParams?: {
      [key: string]: string | string[] | undefined;
    };
  } & P;

  export type NextPage<P = object, IP = P> = NextComponentType<PageProps<IP>, IP, P>;
}