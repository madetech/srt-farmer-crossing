import { useCallback, useState } from "react"

export const InputForm = ({ update }) => {
  const [corn, setCorn] = useState(0)
  const [geese, setGeese] = useState(0)

  const onSubmit = useCallback((e) => {
    console.log('submit')
    e.preventDefault()

    update({ corn, geese })
  }, [update, corn, geese])

  return <form id="form" onSubmit={onSubmit}>
    <label htmlFor="num_corn">Enter number of bags of corn</label>
    <input
      type="number"
      name="num_corn"
      min="0"
      step="1"
      value={corn}
      onChange={(e) => setCorn(e.target.value)}
    />
    <label htmlFor="num_geese">Enter number of geese
    <input
      type="number"
      name="num_geese"
      min="0"
      step="1"
      value={geese}
      onChange={(e) => setGeese(e.target.value)}
    />
    </label>
    <input
      type="submit"
      className="submit"
      value="Calculate plan"
    />
  </form>

}
