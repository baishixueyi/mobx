import { observable, autorun, computed, action } from "mobx";

class Todo {
  @observable todos = [];

  constructor() {
    autorun(() => {
      console.log(
        `剩余任务：${this.uncompletedCount}`,
        this.todos
          .filter((todo) => !todo.completed)
          .map((todo) => todo.title)
          .join(",")
      );
    });
  }
  @computed get uncompletedCount() {
    return this.todos.filter((todo) => !todo.completed).length;
  }
  @action addTodo(title) {
    this.todos.push({
      title: title,
      completed: false
    });
  }
  @action doTask() {
    this.todos.find((todo) => !todo.completed).completed = true;
  }
}

let todo = (window.todo = new Todo());
todo.addTodo("吃饭");
todo.doTask();