import React, { useState } from 'react'
import ManuApi from './Api';
import Manuapi from './Api'
import Cards_Items from './Cards_Items'
import NavbarComp from './NavbarComp';

// getting the unique category when i add any category my api then I need to display that category as well as category data by using spread operator and Set method

const uniqueList = [...new Set(
    ManuApi.map((curElem) => {
        // I need only category of the api so 
        return curElem.category;
    })
), "All",
]
console.log(uniqueList)

const Restuarant = () => {
    // Getting All the unique value from uniqueList and pass to the NavbarComp
    const [uniqueUpdatedlist, setUniqueUpdatedlist] = useState(uniqueList);

    const [manuapi, setManuapi] = useState(Manuapi);

    // filtering the data from the ManuApi to get perticular data then use filter method
    const filterItem = (selectedCategory) => {
        // getting All the value from ManuApi so we use the if condition to get all the data from ManuApi
        if (selectedCategory === "All") {
            setManuapi(ManuApi);
            return;
        }

        // Getting perticular data using filter method from ManuApi
        const updateList = ManuApi.filter((curElem) => {
            return curElem.category === selectedCategory;
        })
        setManuapi(updateList);
    }
    return (
        <>
            <NavbarComp filterItem={filterItem} uniqueUpdatedlist={uniqueUpdatedlist} />
            <Cards_Items manuapi={manuapi} />
        </>
    )
}

export default Restuarant