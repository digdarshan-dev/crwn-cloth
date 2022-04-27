import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

import { getCategoriesCollectionAndDocument } from "../utils/firebase/firebase.utils";

export const CategoryContext = createContext({
  categoriesMap: [],
});

export const CategoryProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState([]);

  useEffect(() => {
    const getCategorymap = async () => {
      const categoryMap = await getCategoriesCollectionAndDocument(
        "categories"
      );
      setCategoriesMap(categoryMap);
    };
    getCategorymap();
  }, []);
  const value = { categoriesMap };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
