import {Autocomplete, Button, Container, TextInput} from "@mantine/core";
import {DateTimePicker} from "@mantine/dates";
import * as data from './airports.json';

function FlightRegistration () {
    const icaos = [...new Set(data.default.map(a => a.ICAO))];
    console.log(icaos)
    return (
        <Container>
            <TextInput label="Selskap" placeholder="Selskap"/>
            <TextInput label="Flight" placeholder="Flight"/>
            <TextInput label="Reg" placeholder="Reg"/>
            <Autocomplete data={icaos} limit={10} label="Fra" placeholder="Fra"/>
            <Autocomplete data={icaos} limit={10} label="Til" placeholder="Til"/>
            <TextInput label="Type" placeholder="Type"/>
            <DateTimePicker label="Avgang" placeholder="Avgang"></DateTimePicker>
            <DateTimePicker label="Ankomst" placeholder="Ankomst"></DateTimePicker>
            <Button>Registrer</Button>
        </Container>
    );
}

export default FlightRegistration;