import React from 'react';
import Counter from "./Component/Counter";
import Stats from "./Component/Stats";

const initialState = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  }
];

export default function App() {

  const [state, setState] = React.useState(initialState);

  const totalCount = () => {
    state.reduce((total, counter) => total + counter.count, 0)
  };

  const increment = (id) => {
    const updatedState = state.map(counter => {
      if (counter.id === id) {
        return {
          ...counter,
          count: counter.count + 1,
        }
      }
      return { ...counter };
    });
  }

  const decrement = (id) => {
    const updatedState = state.map(counter => {
      if (counter.id === id) {
        return {
          ...counter,
          count: counter.count - 1,
        }
      }
      return { ...counter };
    });
  }

  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">Sample counter application</h1>
      <div className="max-w-md mx-auto mt-10 space-y-5">
        {
          state.map((count) => (
            <Counter key={count.id} id={count.id} increment={increment} decrement={decrement} />
          ))
        }


        <Stats count={totalCount()} />
      </div>
    </div>
  );
}

