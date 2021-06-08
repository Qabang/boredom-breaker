import { useState } from 'react'

function Filter(props) {
  const [isActivity, setIsActivity] = useState(false)
  const categories = [
    'education',
    'recreational',
    'social',
    'diy',
    'charity',
    'cooking',
    'relaxation',
    'music',
    'busywork',
  ]

  function handleSubmit(event) {
    setIsActivity(!isActivity)
    event.preventDefault()
    props.activityCallback(isActivity, event.target.categories.value)
  }

  return (
    <form
      className="mb-5 p-3 d-flex justify-content-between flex-column"
      onSubmit={handleSubmit}
    >
      <div className="d-flex flex-column">
        <label className="m-2" htmlFor="filter">
          Filter on category:
        </label>
        <select
          className="m-auto custom-select p-2"
          name="categories"
          id="filter"
        >
          <option value="">Random Category</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <input
        className="btn btn-primary p-3 "
        type="submit"
        value="Inspire me!"
      />
    </form>
  )
}

export default Filter
