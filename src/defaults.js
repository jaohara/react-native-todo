// defaults.js - some default values 
const defaultUser = "jaohara"

const todos = [
  {
    name: "Name for Todo List",
    created: "Date for todo list",
    user: defaultUser,
    todos: [
      // not important, not due, done
      {
        complete: true,
        // due: "Due date, which could be undefined or null (which?)",
        due: "2022-10-31T16:07:55.004Z",
        important: false, //boolean value
        todo: "Buy groceries",
      },
      // not important, overdue, not done 
      {
        complete: false,
        due: "2022-10-01T16:07:55.004Z",
        important: false,
        todo: "Use coupon",
      },
      // important, not due, not done
      {
        complete: false,
        due: "2022-11-01T16:28:06.671Z",
        important: true,
        todo: "Mail November rent check",
      },
      // important, overdue, not done
      {
        complete: false,
        due: "2022-10-01T16:28:06.671Z",
        important: true,
        todo: "Mail October rent check",
      },
    ],
  }
]

export default defaults = {
  todos: todos,
  user: defaultUser,
};