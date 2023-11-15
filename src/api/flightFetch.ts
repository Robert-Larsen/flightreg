import {Flight} from "../model/Flight.ts";
import {QuerySnapshot} from "firebase/firestore";
import {getFlights} from "../firebase.ts";
import {FlightData} from "../model/FlightData.ts";

export async function fetchFlights(setFlights: (flights: Flight[]) => void) {
  try {
    const querySnapshot: QuerySnapshot = await getFlights();

    const flights: Flight[] = [];
    querySnapshot.forEach((doc) => {
      const data: FlightData = doc.data() as FlightData;
      flights.push({
        id: doc.id,
        data
      });
    });
    setFlights(flights);
  } catch(error) {
    console.error('Error fetching flights:', error);
  }
}
