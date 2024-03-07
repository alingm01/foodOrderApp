import { useEffect, useState } from 'react';
import Meals from './Meals';

const Menu = () => {
  const [availableMeals, setAvailableMeals] = useState([])

  useEffect(() => {
    async function fetchMeals() {
       const meals = await fetchAvailableMeals();
       setAvailableMeals(meals); 
    }
    fetchMeals()
  }, [])

  const fetchAvailableMeals = async () => {
    const response = await fetch('http://localhost:3000/meals');
    const resData = await response.json();
    return resData;
  }

  return (
        <Meals meals={availableMeals} />
  )
}

export default Menu;