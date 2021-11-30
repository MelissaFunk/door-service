import { useState, useEffect } from 'react'
import ServiceCard from './ServiceCard'

function Services({ currentUser }) {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('/services')
    .then(res => res.json())
    .then(setServices)
  }, [])

  const currentServices = () => {
    return services.filter(service => {
      return (service.user_id === currentUser.id) && (service.status === "Current")
    })
  }

  const pendingServices = () => {
    return services.filter(service => {
      return (service.user_id === currentUser.id) && (service.status === "Pending")
    })
  }

  const completedServices = () => {
    return services.filter(service => {
      return (service.user_id === currentUser.id) && (service.status === "Completed")
    })
  }


  return (
    <div>
      <h1>Current Service</h1>
      {currentServices().map(service =>
        <ServiceCard service={service} key={service.id}/>
      )}

      <h1>Pending Services</h1>
      {pendingServices().map(service =>
        <ServiceCard service={service} key={service.id}/>
      )}

      <h1>Completed Services</h1>
      {completedServices().map(service =>
        <ServiceCard service={service} key={service.id}/>
      )}
    </div>
  )
}

export default Services