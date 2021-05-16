// interface
// type
const myIdGen = (function* () {
  let id = Date.now();
  while (true) yield id++;
})();
// console.log(myIdGen.next(), myIdGen.next());

class Todo {
  id: number;
  text: string;
  constructor(todoText: string) {
    this.text = todoText;
    this.id = myIdGen.next().value;
  }
}

export default Todo;
