import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider, Title, ScrollArea, Tabs } from "@mantine/core";
import FlightList from "./components/FlightList";
import FlightRegistration from "./components/FlightRegistration";
import Login from "./components/Login";
import { configuredFirebase } from "./firebase";

function App() {
  return (
    <MantineProvider>
      <Title>Flightreg</Title>
      <Login
        uiConfig={{
          signInOptions: [
            configuredFirebase.auth.GoogleAuthProvider.PROVIDER_ID,
          ],
        }}
        firebaseAuth={configuredFirebase.auth()}
      />
      <Tabs defaultValue="flightlist">
        <Tabs.List>
          <Tabs.Tab value="flightlist">Flights</Tabs.Tab>
          <Tabs.Tab value="registration">Registrering</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="flightlist">
          <ScrollArea h={600}>
            <FlightList />
          </ScrollArea>
        </Tabs.Panel>
        <Tabs.Panel value="registration">
          <FlightRegistration />
        </Tabs.Panel>
      </Tabs>
    </MantineProvider>
  );
}

export default App;
