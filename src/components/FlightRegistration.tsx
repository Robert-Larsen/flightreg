import {Button, Container, TextInput} from "@mantine/core";
import {DateTimePicker} from "@mantine/dates";
import {useEffect, useState} from "react";
import {Flight} from "../model/Flight.ts";
import {fetchFlights} from "../api/flightFetch.ts";


function FlightRegistration () {

  const [flights, setFlights] = useState<Flight[]>([]);
  const [uniqueFlights, setUniqueFlights] = useState<string[]>([]);
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    fetchFlights(setFlights);
  }, []);

  useEffect(() => {
    const unique = flights.map((f) => f.data.reg)
      .filter((item, i, ar) => ar.indexOf(item) === i);
    setUniqueFlights(unique);
  }, [flights]);


    return (
        <Container>
            <TextInput label="Selskap" placeholder="Selskap"/>
            <TextInput label="Flight" placeholder="Flight"/>
            <TextInput label="Reg" placeholder="Reg"
                       onChange={(e) => setWarning(uniqueFlights.includes(e.target.value)) }
                       onBlur={(e) => setWarning(uniqueFlights.includes(e.target.value)) }
            />
            {warning && <div>Du har flydd dette flyet før!</div>}
            <TextInput label="Fra" placeholder="Fra"/>
            <TextInput label="Til" placeholder="Til"/>
            <TextInput label="Type" placeholder="Type"/>
            <DateTimePicker label="Avgang" placeholder="Avgang"></DateTimePicker>
            <DateTimePicker label="Ankomst" placeholder="Ankomst"></DateTimePicker>
            <Button>Registrer</Button>
        </Container>
    );
}

export default FlightRegistration;