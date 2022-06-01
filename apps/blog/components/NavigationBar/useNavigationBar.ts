import { useCallback, useState } from "react";

const useNavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = useCallback(() => {
    setExpanded((current) => !current);
  }, []);

  return {
    expanded,
    toggleExpanded,
  };
};

export { useNavigationBar };
