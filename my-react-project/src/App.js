import axios from 'axios'
import { useState, useEffect } from 'react'

import Filter from './Filter'
import Device from './Device'

import './App.css'

function App() {
  const url = 'https://www.boredapi.com/api/activity/'
  const [data, setData] = useState('')
  const [isActivity, setIsActivity] = useState(true)
  const [category, setCategory] = useState('')
  const [query, setQuery] = useState(url)

  let handleActivity = (data, cat) => {
    setCategory(cat)

    // Check if there is a category.
    if (cat) {
      // Add query to url.
      setQuery(url + '?type=' + cat)
    } else {
      // "Reset" url.
      setQuery(url)
    }
    // Update data.
    setIsActivity(data)
  }

  useEffect(() => {
    axios.get(query).then((res) => {
      setData(res.data)
    })
  }, [query, isActivity])

  return (
    <div className="App p-4">
      <h1 className="mt-4">Boredom Breaker</h1>
      <section className="mb-auto d-flex flex-column justify-content-center">
        {data && (
          <>
            <h2 className="category-title">{category ? category : 'All'}</h2>
            <ul className="p-0">
              <li className="list-group-item active">{data.activity}</li>
              <li className="list-group-item">
                Recomended amount of participants:{' '}
                <span className="font-weight-bold">{data.participants}</span>
              </li>
            </ul>
          </>
        )}
        <Filter activityCallback={handleActivity} />
      </section>
      <footer>
        <Device />
      </footer>
    </div>
  )
}

export default App
