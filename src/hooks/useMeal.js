import { useContext } from "react"
import { MealContext } from "../MealProvider/MealProvider";

const useMeal = () => {
    return useContext(MealContext)
}

export default useMeal;