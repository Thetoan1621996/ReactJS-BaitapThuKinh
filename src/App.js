import React, { Component } from "react";
import index from "./index.css";
const arrGlasses = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./glassesImage/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./glassesImage/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./glassesImage/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./glassesImage/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./glassesImage/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

export default class App extends Component {
  state = {
    name: "GUCCI G8850U",
    price: 30,
    url: "./glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  };
  render() {
    return (
      <div className="app">
        <h2 className="content">TRY GLASSES APP ONLINE</h2>
        <div className="model">
          <img src={this.state.url} />
          <div className="infor">
            <h3>Name: {this.state.name}</h3>
            <p>Price: {this.state.price}</p>
            <p>Desc: {this.state.desc}</p>
          </div>
        </div>
        <div className="product">
          <h3>PLEASE CHOOSE A GLASS TO SEE THE DETAIL</h3>
          <div className="div-flex">
            {arrGlasses.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    this.setState({
                      name: item.name,
                      url: item.url,
                      price: item.price,
                      desc: item.desc,
                    });
                  }}
                >
                  <img src={item.url} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
