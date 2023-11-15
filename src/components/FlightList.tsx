import {useEffect, useState} from "react";
import { Accordion } from '@mantine/core';
import {Flight} from "../model/Flight";
import {fetchFlights} from "../api/flightFetch.ts";


function FlightList () {
    const [flights, setFlights] = useState<Flight[]>([]);

    useEffect(() => {
        fetchFlights(setFlights);
    }, []);

    const flightAccordion = flights.map((flight) => (
        <Accordion.Item key={flight.id} value={flight.data.flight + flight.data.departure}>
            <Accordion.Control>{`${flight.data.flight} ${flight.data.departure.toDate().toLocaleString("no-NO")}`}</Accordion.Control>
            <Accordion.Panel>
                <strong>Selskap: </strong>{flight.data.airline}<br/>
                <strong>Flight: </strong>{flight.data.flight}<br/>
                <strong>Reg: </strong>{flight.data.reg}<br/>
                <strong>Fra: </strong>{flight.data.from}<br/>
                <strong>Til: </strong>{flight.data.to}<br/>
                <strong>Type: </strong>{flight.data.type}<br/>
                <strong>Avgang: </strong>{flight.data.departure.toDate().toLocaleString("no-NO")}<br/>
                <strong>Ankomst: </strong>{flight.data.arrival.toDate().toLocaleString("no-NO")}<br/>
            </Accordion.Panel>
        </Accordion.Item>
    ));

    return (
        <Accordion>
            {flightAccordion}
        </Accordion>
    );
}


export default FlightList;