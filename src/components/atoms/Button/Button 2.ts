import { useState } from "react";

const useButton = () => {
  const [data] = useState<boolean>();

  return data;
};

export default useButton;
