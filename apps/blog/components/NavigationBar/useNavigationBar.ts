import { useCallback, useState } from "react";

type ToggleExpandedSignature = () => void;

interface UseNavigationBar {
  expanded: boolean;
  toggleExpanded: ToggleExpandedSignature;
}

type UseNavigationBarSignature = () => UseNavigationBar;
const useNavigationBar: UseNavigationBarSignature = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = useCallback<ToggleExpandedSignature>(() => {
    setExpanded((current) => !current);
  }, []);

  return {
    expanded,
    toggleExpanded,
  };
};

export { useNavigationBar };
