import './App.css'
import '@mantine/core/styles.css';
import {MantineProvider, Title} from '@mantine/core';
import { Tabs } from '@mantine/core';

function App() {

    return (
        <MantineProvider>
            <Title>Flightreg</Title>
            <Tabs defaultValue="flights">
                <Tabs.List>
                    <Tabs defaultValue={"flights"}>
                        <Tabs.List>
                            <Tabs.Tab value="flights">
                                Flights
                            </Tabs.Tab>
                            <Tabs.Tab value="registration">
                                Registration
                            </Tabs.Tab>
                        </Tabs.List>
                    </Tabs>
                </Tabs.List>
                <Tabs.Panel value="flights">
                    Flights
                </Tabs.Panel>
                <Tabs.Panel value="registration">
                    Registration
                </Tabs.Panel>
            </Tabs>
        </MantineProvider>
    )
}

export default App
