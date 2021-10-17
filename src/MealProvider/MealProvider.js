import { createContext } from "react";
import useMealdb from "../hooks/useMealdb";

export const MealContext = createContext();

const MealProvider = ({children}) => {
    const allMeal = useMealdb();
    console.log(allMeal);
    <MealContext.Provider value={allMeal}>
        {children}
    </MealContext.Provider>
}

export default MealProvider;