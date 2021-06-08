import { useState } from 'react'

/* globals device */
function Device() {
  const [isActive, setIsActive] = useState(false)
  function handleClick() {
    setIsActive(!isActive)
  }
  return (
    <>
      {device && (
        <section className="device">
          <button className="btn btn-outline-info" onClick={handleClick}>
            Device information
          </button>
          <div className={`info ${isActive ? 'visible' : 'hidden'}`}>
            <h2>Device</h2>
            <ul>
              {device.model && <li>Model: {device.model}</li>}
              {device.platform && <li>Platform: {device.platform}</li>}
              {device.uuid && <li>UUID: {device.uuid}</li>}
              {device.version && <li>Version: {device.version}</li>}
              {device.manufacturer && (
                <li>Manufacturer: {device.manufacturer}</li>
              )}
              {device.serial && <li>Serial: {device.serial}</li>}
              {device.isVirtual && <li>Running on a simulator</li>}
            </ul>
          </div>
        </section>
      )}
    </>
  )
}

export default Device
