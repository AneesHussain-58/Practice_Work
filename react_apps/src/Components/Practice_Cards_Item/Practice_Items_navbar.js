import React, { useState } from 'react'
import Card_Api from './Card_api';
import LocalApi from './localApi'
import Navbar_items from './Navbar_items'

const uniqueData = [...new Set(LocalApi.map((curElem) => {
  return curElem.category;
}
)
), "All",
]

const Practice_Items_navbar = () => {
  const [getApi, setApiData] = useState(LocalApi);
  const [uniqueValue, setUniqueValue] = useState(uniqueData);

  const getData = (category) => {
    if (category === "All") {
      setApiData(LocalApi)
      return
    }
    const updateed = LocalApi.filter((curElem) => {
      return curElem.category === category;
    })
    setApiData(updateed);
  }

  return (
    <>
      <Navbar_items getData={getData} uniqueValue={uniqueValue} />
      <Card_Api getApi={getApi} />
    </>
  )
}

export default Practice_Items_navbar