import React from 'react'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'
import weather_icon from '../../Best_Todo_App/images/weather_icon.svg'
import { BsFillBrightnessHighFill, BsDropletFill, BsCloudSun } from "react-icons/bs";
import { BiTransferAlt } from "react-icons/bi";



const Weather_Card = ({ getData }) => {

    const {
        name,
        country,
        humidity,
        last_updated_epoch,
        pressure_mb,
        temp_c,
        text,
        wind_kph
    } = getData;


    let sec = last_updated_epoch;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}: ${date.getMinutes()}`

    return (
        <>

            <Card className='shadow' style={{ width: '38rem', margin: "auto", marginTop: "50px", justifyContent: "center" }}>
                <Card.Img variant="top" src={weather_icon} style={{ width: "5rem", margin: "auto", marginTop: "20px", marginBottom: "20px" }} />
                <Card.Body style={{ padding: "0px", margin: "-0.5px" }}>
                    <div className="weather_details">
                        <div className="weather_data weather_temp"><div>{temp_c}&deg;</div></div>
                        <div className="weather_data">
                            <div className="weather_condition">Clouds</div>
                            <div className="place">{name}, {country}</div>
                        </div>
                        <div className="weather_data date_time">
                            <div className="date">{new Date().toLocaleString()}</div>
                        </div>
                    </div>
                    <div className="weather_cloudes">
                        <div className="icons_data icons"><BsFillBrightnessHighFill /></div>
                        <div className="icons_data">
                            <div className="time_sunset">
                                <p>{timeStr}</p>
                                <div>Sunset</div>
                            </div>
                        </div>
                        <div className="icons_data icons">
                            <BsDropletFill />
                        </div>
                        <div className="icons_data">
                            <p>Humidity</p>
                            <div>{humidity}</div>
                        </div>
                        <div className="icons_data icons">
                            <BsCloudSun />
                        </div>
                        <div className="icons_data">
                            <p>Presure</p>
                            <div>{pressure_mb}</div>
                        </div>
                        <div className="icons_data icons">
                            <BiTransferAlt />
                        </div>
                        <div className="icons_data">
                            <p>{text}</p>
                            <div>{wind_kph}</div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default Weather_Card