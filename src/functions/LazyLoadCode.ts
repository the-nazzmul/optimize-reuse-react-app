import { lazy } from "react";

export const LazyLoadCode = (path: string, namedExport: string | null) => {
  return lazy(() => {
    const promise = import(path);
    if (namedExport === null) {
      return promise;
    } else {
      return promise.then((module) => ({ default: module[namedExport] }));
    }
  });
};
