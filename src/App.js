import { useState } from 'react';
import { InputForm } from './components/input-form'
import { Plan } from './components/plan';

function App() {
  const [data, setData] = useState()

  return (
    <div>
      <h1>👩‍🌾 - Farmer Crossing - 👨‍🌾</h1>
      <InputForm update={setData} />
      <div className="output-area">
        {data && <Plan data={data} />}
      </div>
    </div>
  );
}

export default App;
