
import { useState, useMemo } from "react";

// function FavoriteColor() {
//     const [count, setCount] = useState(0);
//     const [calculation, setCalculation] = useState(0);
  
//     useEffect(() => {
//       setCalculation(() => count * 2);
//     }, [count]); // <- add the count variable here
//     console.log(count);
  
//     return (
//       <>
//         <p>Count: {count}</p>
//         <button onClick={() => setCount((c) => c + 1)}>+</button>
//         <p>Calculation: {calculation}</p>
//       </>
//     );
// }


// const initialTodos = [
//     {
//       id: 1,
//       title: "Todo 1",
//       complete: false,
//     },
//     {
//       id: 2,
//       title: "Todo 2",
//       complete: false,
//     },
//   ];
  
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "COMPLETE":
//         return state.map((todo) => {
//           if (todo.id === action.id) {
//             return { ...todo, complete: !todo.complete };
//           } else {
//             return todo;
//           }
//         });
//       default:
//         return state;
//     }
//   };

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };
  
function Component1() {
    const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
  }

export default Component1;