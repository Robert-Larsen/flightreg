import {Timestamp} from "firebase/firestore";

export interface FlightData {
    id: string;
    airline: string;
    flight: string;
    reg: string;
    from: string;
    to: string;
    type: string;
    departure: Timestamp;
    arrival: Timestamp;
}