import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState({
    good: 0,
    bad: 0,
    ok: 0,
  })

  return (
    <div>
      <button
        onClick={() => setCounter({ ...counter, good: counter.good + 1 })}
      >
        good
      </button>
      <button onClick={() => setCounter({ ...counter, ok: counter.ok + 1 })}>
        ok
      </button>
      <button onClick={() => setCounter({ ...counter, bad: counter.bad + 1 })}>
        bad
      </button>
      <button
        onClick={() => setCounter({ ...counter, good: 0, bad: 0, ok: 0 })}
      >
        reset stats
      </button>
      <p>good {counter.good}</p>
      <p>ok {counter.ok}</p>
      <p>bad {counter.bad}</p>
    </div>
  )
}
export default App
