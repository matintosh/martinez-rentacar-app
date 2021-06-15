import {useState} from 'react';
import {getCars} from '../services/requests/cars';

export default function useCarsContext() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCars = async () => {
    setLoading(true);
    const cars = await getCars();

    setCars(cars.data);
    setLoading(false);
  };

  return {cars, fetchCars, loading};
}
