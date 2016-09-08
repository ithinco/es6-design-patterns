'use strict';

外部迭代器
class Iterator {
    constructor() {
    }

    First (){
    }

    Next (){
    }

    IsDone (){
    }

    CurrentItem (){
    }
}

class ConcreteIterator extends Iterator {
    constructor(aggregate) {
        super()
        facade.log('ConcreteIterator created')
        this.index = 0
        this.aggregate = aggregate
    }

    First (){
        return this.aggregate.list[0]
    }

    Next (){
        this.index += 2
        return this.aggregate.list[this.index]
    }

    CurrentItem (){
        return this.aggregate.list[this.index]
    }
}

class Aggregate {
    constructor() {
    }

    CreateIterator (){
    }
}

class ConcreteAggregate extends Aggregate {
    constructor(list) {
        super()
        this.list = list
        facade.log('ConcreteAggregate created')
    }

	CreateIterator (){
		this.iterator = new ConcreteIterator(this);
    }
}

//《松本行宏的程序世界》

const anotherIterator = (obj) => {
  let current = 0;

  let first = () => {
    return obj[0];
  }

  let next = () => {
    current += 1;
    return obj[current];
  };

  let isDone = () => {
    return current >= obj.length;
  };

  let getCurrentItem = () => {
    return obj[current];
  };

  return {
    first,
    next,
    isDone,
    getCurrentItem
  };

}


function init_Iterator() {
  let aggregate = new ConcreteAggregate([0,1,2,3,4,5,6,7]);
  aggregate.CreateIterator();
  facade.log(aggregate.iterator.First());
  facade.log(aggregate.iterator.Next());
  facade.log(aggregate.iterator.CurrentItem());
  facade.log('Another Iterator');
  let anotherIte = anotherIterator(aggregate); 
  facade.log(anotherIte.first());
  facade.log(anotherIte.next());
  facade.log(anotherIte.getCurrentItem());
}