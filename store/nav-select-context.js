import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
const NavContext = createContext({
  path: "",
  pathHandler: (currentPath) => {},
});

export const NavContextProvider = (props) => {
  const router = useRouter();
  useEffect(() => {
    const { pathname } = router;
    setPath(pathname);
  }, [router.pathname]);
  const [path, setPath] = useState(null);

  const context = {
    path: path,
  };
  return (
    <NavContext.Provider value={context}>{props.children}</NavContext.Provider>
  );
};

export default NavContext;
