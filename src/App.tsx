import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


const initialFlights: IFlight[] =
    [
        {
            flightnumber: 'SK1326',
            origin: 'OSL',
            dest: 'AES',
            date: new Date('2022-02-10'),
            registration: 'LN-RRN'
        }
    ]

const App = () => {

    const [flights, setFlights] = useState(initialFlights)
  return (
      <>
        <h1>Flightreg</h1>
          <div>
              {
                  flights.map(flight =>  {
                      return (
                          <div>
                              <p>Flightnummer {flight.flightnumber}</p>
                              <p>Avreise {flight.origin}</p>
                              <p>Ankomst {flight.dest}</p>
                              <p>Registration {flight.registration}</p>
                          </div>
                      )

                  })

              }
          </div>


      </>  )
}

interface IFlight {
    flightnumber: string
    origin: string
    dest: string
    date: Date
    registration: string
}

export default App;
