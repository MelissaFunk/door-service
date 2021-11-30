import { useState, useEffect } from 'react'
import ServiceRequestCard from './ServiceRequestCard'

function ServiceRequests({ currentDriver }) {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('/services')
    .then(res => res.json())
    .then(setServices)
  }, [])

  const currentServices = () => {
    return services.filter(service => {
      return (service.driver_id === currentDriver.id) && (service.status === "Current")
    })
  }

  const pendingServices = () => {
    return services.filter(service => {
      return (service.driver_id === currentDriver.id) && (service.status === "Pending")
    })
  }

  const completedServices = () => {
    return services.filter(service => {
      return (service.driver_id === currentDriver.id) && (service.status === "Completed")
    })
  }


  return (
    <div>
      <h1>Current Service</h1>
      {currentServices().map(service =>
        <ServiceRequestCard service={service} key={service.id}/>
      )}

      <h1>Pending Services</h1>
      {pendingServices().map(service =>
        <ServiceRequestCard service={service} key={service.id}/>
      )}

      <h1>Completed Services</h1>
      {completedServices().map(service =>
        <ServiceRequestCard service={service} key={service.id}/>
      )}
    </div>
  )
}

export default ServiceRequests