'use strict';

//环境类，接受客户的请求，然后将请求委托给某个策略处理
class Contexttt {
  constructor(type){
    switch(type) {
      case "A":
        this.strategy = new ConcreteStrategyA();
          break;
      case "B":
        this.strategy = new ConcreteStrategyB();
          break;
      default:
        this.strategy = new ConcreteStrategyA();
    }
  }

  ContextInterface (){
    this.strategy.AlgorithmInterface();
  }
}

//策略类，封装了具体的算法，负责具体的计算过程
class Strategy {
  constructor() {
  }

  AlgorithmInterface (){
  }
}

class ConcreteStrategyA extends Strategy{
  constructor() {
    super()
    facade.log('ConcreteStrategyA created');
  }

  AlgorithmInterface (){
    facade.log('ConcreteStrategyA algorithm');
  }
}

class ConcreteStrategyB extends Strategy{
  constructor() {
    super()
    facade.log('ConcreteStrategyB created');
  }

  AlgorithmInterface (){
    facade.log('ConcreteStrategyB algorithm');
  }
}

//《JavaScript设计模式与开发实践》
const strategies = {
  'A': () => {
    facade.log('Another StrategyA algorithm');
  },
  'B': () => {
    facade.log('Another StrategyB algorithm');
  }
};

const contexttt = ( strategyCode ) => {
    strategies[strategyCode]();
};

function init_Strategy() {
  let contextA = new Contexttt("A");
  contextA.ContextInterface();
  let contextB = new Contexttt("B");
  contextB.ContextInterface();
  contexttt('A');
  contexttt('B');
}
