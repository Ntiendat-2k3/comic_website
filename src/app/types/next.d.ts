import type { NextComponentType } from "next";

declare module "next" {
  export type PageProps = {
    params?: { 
      [key: string]: string | string[] 
    };
    searchParams?: { 
      [key: string]: string | string[] | undefined 
    };
  };
  
  export type NextPage<P = {}, IP = P> = NextComponentType<PageProps, IP, P>;
}