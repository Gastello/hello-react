import React from "react";
import { PureComponent, useState, FC } from "react";
import "./App.css";
import logo from "./logo.svg";
import { Footer } from "./Footer";
import { JSX } from "react/jsx-runtime";

const reactName = "React";

class Timer extends PureComponent {
  state = { time: 0 };
  _timeIncrease = () => {
    setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  };
  render() {
    return this.state.time === 0 ? (
      <div>
        <button onClick={this._timeIncrease}>Start Timer</button>
      </div>
    ) : (
      <div>Time: {this.state.time} seconds</div>
    );
  }
}
const BtnWithCounter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Clicked: {counter} times
      </button>
    </div>
  );
};

type CircleProps = { color: string; radius: number; opacity: number };
const Circle: FC<CircleProps> = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.color,
        width: props.radius,
        height: props.radius,
        opacity: props.opacity,
        borderRadius: "50%",
        margin: "20px auto", 
      }}
    ></div>
  );
};
const App = () => (
  <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <h1>{"Hello, " + reactName + "!"}</h1>
    <h1>
      <i>JavaScript - бібліотека для створення користувацьких інтерфейсів</i>
    </h1>
    <h2>Створення проєкту</h2>
    <p>npx create-react-app myproj --template typescript</p>
    <h2>Структура проєкту</h2>
    <img src={require("./images/1.png")} alt="" />
    <h2>Запуск проєкту для локальної розробки</h2>
    <p>npm start</p>
    <h2>Запуск тестів проєкту</h2>
    <p>npm test</p>
    <h2>Запуск проєкту для production</h2>
    <p>npm run build</p>
    <p>
      При застосуванні цієї команди проєкт збирається в один файл та
      мініфікується.
    </p>
    <h2>Конвертація create-react-app проєкту в звичайний react</h2>
    <p>npm run eject</p>
    <p>
      Якщо потрібно налаштувати проєкт з нуля під себе, то використовується ця
      команда.
    </p>
    <img src={require("./images/2.png")} alt="" />
    <h2>Використання змінних у коді</h2>
    <img src={require("./images/3.png")} alt="" />
    <h1>Компоненти</h1>
    <Timer />
    <h1>Хуки</h1>
    <BtnWithCounter />
    <h1>Передача аргументів у компонент</h1>
    <h2>Props</h2>
    <Circle color="red" radius={200} opacity={0.4}></Circle>
    <Circle color="yellow" radius={200} opacity={0.4}></Circle>
    <Circle color="green" radius={200} opacity={1}></Circle>
    <Footer copyright="Created by Gastello" />
  </div>
);

export default App;
