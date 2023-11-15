import './App.css'
import '@mantine/core/styles.css';
import {MantineProvider, Title, ScrollArea, Tabs} from '@mantine/core';
import FlightList from "./components/FlightList";
import FlightRegistration from "./components/FlightRegistration";

function App() {

    return (
        <MantineProvider>
            <Title>Flightreg</Title>
            <Tabs defaultValue="flightlist">
                <Tabs.List>
                    <Tabs.Tab value="flightlist">
                        Flights
                    </Tabs.Tab>
                    <Tabs.Tab value="registration">
                        Registrering
                    </Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="flightlist">
                    <ScrollArea h={600}>
                        <FlightList/>
                    </ScrollArea>
                </Tabs.Panel>
                <Tabs.Panel value="registration">
                    <FlightRegistration/>
                </Tabs.Panel>
            </Tabs>

        </MantineProvider>
    )
}

export default App
