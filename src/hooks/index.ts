import { useLayoutEffect, useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export const useLockBodyScroll = () => {
  useLayoutEffect(() => {
    disableBodyScroll(document.body, { reserveScrollBarGap: true });

    return () => {
      enableBodyScroll(document.body);
    };
  }, []);
};

export const useToggle = () => {
  const [show, set] = useState(false);
  const open = () => {
    set(true);
  };

  const close = () => {
    set(false);
  };

  return { show, open, close };
};
