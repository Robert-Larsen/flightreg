import {Button, Container, TextInput} from "@mantine/core";
import {DateTimePicker} from "@mantine/dates";


function FlightRegistration () {

    return (
        <Container>
            <TextInput label="Selskap" placeholder="Selskap"/>
            <TextInput label="Flight" placeholder="Flight"/>
            <TextInput label="Reg" placeholder="Reg"/>
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