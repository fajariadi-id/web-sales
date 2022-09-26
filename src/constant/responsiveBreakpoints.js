import { useMediaQuery } from "react-responsive";

const ResponsiveBreakpoints = () => {
  const isSM = useMediaQuery({ query: "(max-width: 576px)" });
  const isMD = useMediaQuery({ query: "(max-width: 768px)" });
  const isLG = useMediaQuery({ query: "(max-width: 992px)" });
  const isXL = useMediaQuery({ query: "(max-width: 1200px)" });
  const isXXL = useMediaQuery({ query: "(max-width: 1400px)" });

  return { isSM, isMD, isLG, isXL, isXXL };
};

export default ResponsiveBreakpoints;
