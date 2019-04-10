import { useLayoutEffect } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export const useLockBodyScroll = () => {
  useLayoutEffect(() => {
    disableBodyScroll(document.body, { reserveScrollBarGap: true });

    return () => {
      enableBodyScroll(document.body);
    };
  }, []);
};
