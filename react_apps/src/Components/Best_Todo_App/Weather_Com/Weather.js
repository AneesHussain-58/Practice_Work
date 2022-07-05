// This is the weather api url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&lat=35&lon=139&appid=60ce67f20b46928d6ff00ac102f9b50b`

import React, { useState, useEffect } from 'react'
import { Container, FormControl, InputGroup, Button } from 'react-bootstrap'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BiSearchAlt2 } from "react-icons/bi";
import Weather_Card from './Weather_Card';
import './weather.css'

const Weather = () => {
    const [searchValue, setSearchValue] = useState("Nawabshah")
    const [getData, setGetData] = useState("")

    const SearchValues = async () => {
        try {
            let url = `http://api.weatherapi.com/v1/current.json?key=059b456162f644e5b8580514221206&q=${searchValue}&aqi=no`

            let res = await fetch(url);
            let data = await res.json();

            let { name, country } = data.location
            let { text } = data.current.condition
            const { temp_c, wind_kph, pressure_mb, humidity, last_updated_epoch } = data.current

            let newDataInfo = {
                name,
                last_updated_epoch,
                text,
                temp_c,
                wind_kph,
                country,
                humidity,
                pressure_mb
            }
            setGetData(newDataInfo)
            // console.log(newDataInfo)
            // console.log(data)

        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        SearchValues()
    }, [])


    return (
        <section id='weather_section'>
            <Container className='container'>
                <div className="inner_card">
                    <InputGroup className="mb-3 sm" style={{ width: "28rem", margin: "auto" }}>
                        <InputGroup.Text id="basic-addon1"><BiSearchAlt2 /></InputGroup.Text>
                        <FormControl column sm="12"
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <Button variant="secondary" size="sm" onClick={SearchValues}>Search</Button>
                    </InputGroup>
                    <Weather_Card getData={getData}/>
                </div>
            </Container>
        </section>
    )
}

export default Weather