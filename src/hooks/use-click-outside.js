import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useClickOutside = (ref, actionCreator) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handler = (e) => {
      if (!ref?.current.contains(e.target)) {
        dispatch(actionCreator);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [dispatch, ref, actionCreator]);
};

export default useClickOutside;
