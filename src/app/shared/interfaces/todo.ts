export class Todo {
  constructor(  public userId: number,
    public id: number,
    public title: string,
    public  completed: boolean) { }

  //create empty object
  static empty(): Todo {
    return new Todo(0, 0, 'null', false);
  }

}
