import './App.css'
import '@mantine/core/styles.css';
import {MantineProvider, Title} from '@mantine/core';
import { Tabs } from '@mantine/core';
import FlightList from "./FlightList";

function App() {

    return (
        <MantineProvider>
            <Title>Flightreg</Title>
            <Tabs defaultValue="flights">
                <Tabs.List>
                    <Tabs.List>
                        <Tabs.Tab value="flights">
                            Flights
                        </Tabs.Tab>
                        <Tabs.Tab value="registration">
                            Registration
                        </Tabs.Tab>
                    </Tabs.List>
                </Tabs.List>
                <Tabs.Panel value="flights">
                    <FlightList/>
                </Tabs.Panel>
                <Tabs.Panel value="registration">
                    Registration
                </Tabs.Panel>
            </Tabs>
        </MantineProvider>
    )
}

export default App
