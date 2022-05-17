import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFilter } from "../api";
import Loader from "../components/Loader";
import MealList from "../components/MealList";

export default function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilter(name).then((data) => setMeals(data.meals));
  }, [name]);
  return(
    <>
     {!meals.length ? <Loader /> : <MealList meals={meals} /> }
    </>
  ) 
}
