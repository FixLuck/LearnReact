import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js'

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {

    setIsFetching(true);

    //Cách 1:
    // fetch('http://localhost:3000/places').then((resp) => {
    //   return resp.json()
    // })
    // .then((resData) => {
    //   setAvailablePlaces(resData.places)
    // })

    //Cách 2:
    async function fetchPlaces() {


      //handle error

      try {
        const places = await fetchAvailablePlaces();

        navigator.geolocation.getCurrentPosition((position) => {

          const sortPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);

          setAvailablePlaces(sortPlaces);
          setIsFetching(false); //đặt fetching thành false khi đã get đc location vì getCurrentPosition trả về 1 promise mà ko biết khi nào xong
        });


      } catch (error) {
        setError({ message: error.message || 'Could not fetch places, please try again later' });
        setIsFetching(false);
      }
    }
    fetchPlaces();
  }, [])


  if (error) {
    return <Error title="An error occurred" message={error.message} />
  }



  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText='Fetching places data...'
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
