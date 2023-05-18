import { create } from "twrnc";

const useTailwind = () => {
  const tw = create(require("../tailwind.config"));
  return tw;
};

export default useTailwind;
