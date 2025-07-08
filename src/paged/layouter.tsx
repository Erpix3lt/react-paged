import { useLayoutEffect } from "react";
// @ts-expect-error No typings
import { Previewer } from "pagedjs";

type Flow = {
  total: number;
}

export function Layouter() {
  useLayoutEffect(() => {
    const previewer = new Previewer();

    const styleURL = "/print.css";

    previewer
      .preview(
        document.querySelector("#pagedjsdocroot")?.innerHTML || "",
        [styleURL],
        document.querySelector("#preview")
      )
      .then((flow: Flow) => {
        console.log("preview rendered, total pages", flow.total);
      });

    return () => {
      document.head
        .querySelectorAll("[data-pagedjs-inserted-styles]")
        .forEach((e) => e.parentNode?.removeChild(e));
    };
  }, []);

  return <div></div>;
}