import { useEffect, useState } from 'react'
import DriverCard from './DriverCard'

function Drivers() {
  const [drivers, setDrivers] = useState([])
  const [filterBy, setFilterBy] = useState("All")

  useEffect(() => {
    fetch('/drivers')
    .then(res => res.json())
    .then(setDrivers)
  }, [])

  const handleFilterChange = (e) => {
    setFilterBy(e.target.value)
  }

  const filteredDrivers = () => {
    return drivers.filter(driver => {
      if(filterBy === "All") {
        return true
      } else {
        return driver.available_services.includes(filterBy)
      }
    })
  }

  const displayedDrivers = () => {
    return filteredDrivers().map(driver =>
      <DriverCard driver={driver} key={driver.id}/>
    )
  }

  return(
    <div>
      <h1>Available Drivers</h1>
      <label>Search by Service: </label>
      <select onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="Disability Support">Disability Support</option>
        <option value="Hauling">Hauling</option>
        <option value="Pets">Pets</option>
      </select>
      {displayedDrivers()}
    </div>
  )
}

export default Drivers