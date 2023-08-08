import React from "react";
import { PureComponent, useState, FC, PropsWithChildren } from "react";
import "./App.css";
import logo from "./logo.svg";
import { Footer } from "./Footer";
import { JSX } from "react/jsx-runtime";

const reactName = "React";

type H1Props = {
  text: string;
  isCursive: boolean;
};
class H1 extends PureComponent<H1Props> {
  render() {
    return this.props.isCursive ? (
      <h1>
        <i>{this.props.text}</i>
      </h1>
    ) : (
      <h1>{this.props.text}</h1>
    );
  }
}

type H2Props = {
  text: string,
}
const H2: FC<H2Props> = (props) => {
  return (
    <h2>{props.text}</h2>
  )
}

type PProps = {
  text: string,
}
class P extends PureComponent<PProps>{
  render(){
    return (
      <p>{this.props.text}</p>
    )
  }
}

type ImgProps = {
  src: string,
  className: string,
  alt: string,
}
const Img: FC<ImgProps> = (props) => {
  return (
    <img src={props.src} className={props.className} alt={props.alt} />
  )
}

const NewbieInfo = () => (
  <>
    <Img src={logo} className="App-logo" alt="logo"/> 
    <H1 text={"Hello, " + reactName + "!"} isCursive={false} />
    <H1 text="JavaScript - бібліотека для створення користувацьких інтерфейсів" isCursive={true}></H1>
    <H2 text="Створення проєкту" />
    <P text="npx create-react-app myproj --template typescript"/> 
    <H2 text="Структура проєкту" /> 
    <Img src={require("./images/1.png")} className="" alt=""/>
    <H2 text="Запуск проєкту для локальної розробки" />  
    <P text="npm start"/>  
    <H2 text="Запуск тестів проєкту" />  
    <P text="npm test"/>  
    <H2 text="Запуск проєкту для production" />   
    <P text="npm run build"/>  
    <P text="При застосуванні цієї команди проєкт збирається в один файл та
      мініфікується."/>  
    <H2 text="Конвертація create-react-app проєкту в звичайний react" />  
    <P text="npm run eject"/>  
    <P text="Якщо потрібно налаштувати проєкт з нуля під себе, то використовується ця
      команда."/>   
    <Img src={require("./images/2.png")} className="" alt=""/>
    <H2 text="Використання змінних у коді" />   
    <Img src={require("./images/3.png")} className="" alt=""/>
  </>
);

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

type LineProps = { height: string; width: string; color: string };
class Line extends PureComponent<LineProps> {
  render() {
    return (
      <div
        style={{
          height: this.props.height,
          width: this.props.width,
          backgroundColor: this.props.color,
          margin: "30px auto",
        }}
      ></div>
    );
  }
}

type FrameProps = PropsWithChildren<{}>;

const Frame: FC<FrameProps> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        height: "300px",
        alignItems: "center",
        justifyContent: "center",
        border: "5px yellow dashed",
      }}
    >
      {props.children}
    </div>
  );
};

type CallbackProps = {
  doSomething: (text: string) => void;
};

const CallbackFC: FC<CallbackProps> = (props) => {
  return (
    <button onClick={() => props.doSomething("some magic power.")}>
      Click on me to feel the power of getting data from component!
    </button>
  );
};

type GetColorButtonProps = {
  getColor: (color: string) => void,
}
const GetColorButton: FC<GetColorButtonProps> = (props) => {
  const myColor = 'green';
  return (
    <button 
    onClick={()=>{
      props.getColor("I am " + myColor);
    }}
    style={{
      backgroundColor: "green",
      padding: 20,
      color: 'white',
    }}>
      Click on me to find out the truth!
    </button>
  )
}
const App = () => (
  <div className="App">
    <NewbieInfo />
    <H1 text="Компоненти" isCursive={false}></H1> 
    <Timer /> 
    <H1 text="Хуки" isCursive={false}></H1> 
    <BtnWithCounter /> 
    <H1 text="Передача аргументів у компонент" isCursive={false}></H1> 
    <H2 text="Props" />  
    <Circle color="red" radius={200} opacity={0.4}></Circle>
    <Circle color="yellow" radius={200} opacity={0.4}></Circle>
    <Circle color="green" radius={200} opacity={1}></Circle>
    <Line color="grey" width="70%" height="5px"></Line> 
    <H2 text="Передача компонента як аргумент" />   
    <Frame>I am text in the center!</Frame>
    <H1 text="Отримання даних з компоненту" isCursive={false}></H1>
    <H2 text="Callback – найкращий варіант"/>
    <CallbackFC doSomething={(text) => alert(text)} />
    <Line color="grey" width="70%" height="5px"></Line> 
    <GetColorButton getColor={(color)=>alert(color)}/>
    <Footer copyright="Created by Gastello" />
  </div>
);

export default App;
