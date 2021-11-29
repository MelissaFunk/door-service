import { useState, useEffect } from 'react'
import ServiceCard from './ServiceCard'

function Services({ currentUser }) {
  const [currentService, setCurrentService] = useState([])

  useEffect(() => {
    fetch('/services')
    .then(res => res.json())
    .then(setCurrentService)
  }, [])

  const currentServices = () => {
    return currentService.filter(service => {
      return (service.user_id === currentUser.id) && (service.agreed === true)
    })
  }

  const pendingServices = () => {
    return currentService.filter(service => {
      return (service.user_id === currentUser.id) && (service.agreed === false)
    })
  }

  const completedServices = () => {
    return currentService.filter(service => {
      return (service.user_id === currentUser.id) && (service.rated === true)
    })
  }

  return (
    <div>
      <h1>Current Service</h1>
      {currentServices().map(service =>
      <div>
        <ServiceCard service={service} key={service.id}/>
        <p>Price: ${service.price}</p>
        <button>Rate This Service</button>
      </div>
      )}

      <h1>Pending Services</h1>
      {pendingServices().map(service =>
        <ServiceCard service={service} key={service.id}/>
      )}

      <h1>Completed Services</h1>
      {completedServices().map(service =>
      <div>
        <ServiceCard service={service} key={service.id}/>
        <p>Price: ${service.price}</p>
      </div>
      )}
    </div>
  )
}

export default Services