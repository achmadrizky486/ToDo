import React from 'react';
import './App.css';
import Todo from './todo/Todo';


const App = () => {
  return (
    <div className='App'>
      <Todo />
    </div>
  )
}


// -----Buat Component didalam-------------------------------
// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>Ini Component</h2>
//       </div>
//     )
//   }
// }
// ---------------------------------------------------------

// -----------Render Pakai Function-------------------------
// function App() {
//   return (
//     <div>
//       <h1 className='header'>
//         Hello World
//       </h1>
//       <Header />
//       <p>Lorem ipsum dolor sit amet</p>
//     </div>
//   )
// }
// -----------------------------------------------------


// -----------------Render pakai class---------------------
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1 className='header'>
//           Hello World
//         </h1>
//         <p>Lorem ipsum dolor sit amet</p>
//       </div>
//     )
//   }
// }
// -----------------------------------------------------

export default App;
