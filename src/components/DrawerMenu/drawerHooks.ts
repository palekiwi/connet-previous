import { useEffect, useState } from "react";
import { useTransition } from "react-spring";

const useToggle = () => {
  const [show, set] = useState(false);
  const open = () => {
    set(true);
  };

  const close = () => {
    set(false);
  };

  return { show, open, close };
};

const useKeyDown = (show: boolean, close: () => void) => {
  useEffect(() => {
    const handler = e => {
      if (e.keyCode === 27) close();
    };
    if (show) document.body.addEventListener("keydown", handler);
    else document.body.removeEventListener("keydown", handler);
    return () => document.body.removeEventListener("keydown", handler);
  }, [show]);
};

const useDisableBodyScroll = (show: boolean) => {
  useEffect(() => {
    document.body.style.overflowY = show ? "hidden" : "scroll";
  }, [show]);
};

export const useDrawer = () => {
  const { show, open, close } = useToggle();
  useDisableBodyScroll(show);
  useKeyDown(show, close);
  return { show, open, close };
};

export const useSlide = (show, width: string) => {
  const drawer = useTransition(show, null, {
    from: { transform: `translate3d(${width},0,0)` },
    enter: { transform: `translate3d(0,0,0)` },
    leave: { transform: `translate3d(${width},0,0)` },
  });

  return { drawer };
};

export const useOverlay = show => {
  const overlay = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return { overlay };
};
