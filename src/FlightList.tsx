import {useEffect, useState} from "react";
import {getFlights} from "./firebase";
import { QuerySnapshot } from 'firebase/firestore';


interface Flight {
    id: string;
    data: FlightData;
}
interface FlightData {
    id: string;
    airline: string;
    flight: string;
    reg: string;
    from: string;
    to: string;
    type: string;

}

function FlightList () {
    const [flights, setFlights] = useState<Flight[]>([]);

    useEffect(() => {
        async function fetchFlights() {
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
        fetchFlights();
    }, []);


    return (
        <div>
            <ul>
                {flights.map((flight) => (
                    <li key={flight.id}>
                        <strong>Arline:</strong> {flight.data.airline}<br />
                        <strong>Reg:</strong> {flight.data.reg}<br />
                        <strong>Flight:</strong> {flight.data.flight}<br />
                        <strong>From:</strong> {flight.data.from}<br />
                        <strong>To:</strong> {flight.data.to}<br />
                        <strong>Type:</strong> {flight.data.type}<br />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FlightList;