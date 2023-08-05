import React from "react";
import { PureComponent } from "react";
import "./App.css";
import logo from "./logo.svg";
import { Footer } from "./Footer";
import { JSX } from "react/jsx-runtime";

class BtnWithCounter extends PureComponent{
  state = {counter: 0};
  private _increment = () => this.setState({counter: this.state.counter + 1});

  render() {
    return (
      <button onClick={this._increment}>
        Clicked: {this.state.counter} times
      </button>
    )
  }
}

const App = () => (
  <div className="App">
     <BtnWithCounter/>
  </div>
);

// const App = () => (
//   <div className="App">
//     <h1>{"Hello, " + myName}</h1>

//     <RandomText />
//     <img src={logo} className="App-logo" alt="logo" />
//     <h1>{react} - Початок</h1>
//     <h1>
//       <i>JavaScript - бібліотека для створення користувацьких інтерфейсів</i>
//     </h1>
//     <h2>Створення проєкту</h2>
//     <p>npx create-react-app myproj --template typescript</p>
//     <h2>Структура проєкту</h2>
//     <img src={require("./images/1.png")} alt="" />
//     <h2>Запуск проєкту для локальної розробки</h2>
//     <p>npm start</p>
//     <h2>Запуск тестів проєкту</h2>
//     <p>npm test</p>
//     <h2>Запуск проєкту для production</h2>
//     <p>npm run build</p>
//     <p>
//       При застосуванні цієї команди проєкт збирається в один файл та
//       мініфікується.
//     </p>
//     <h2>Конвертація create-react-app проєкту в звичайний react</h2>
//     <p>npm run eject</p>
//     <p>
//       Якщо потрібно налаштувати проєкт з нуля під себе, то використовується ця
//       команда.
//     </p>
//     <img src={require("./images/2.png")} alt="" />
//     <h2>Використання змінних у коді</h2>
//     <img src={require("./images/3.png")} alt="" />
//     <Footer copyright="Created by Gastello" />
//   </div>
// );

export default App;
