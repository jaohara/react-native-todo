// defaults.js - some default values 
const defaultUser = "jaohara"

const todos = [
  {
    id: 1,
    name: "First Todo List",
    created: "10/05/2022",
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
  },
  {
    id: 2,
    name: "Another Todo List",
    created: "10/06/2022",
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
    ],
  },
  {
    id:3, 
    name: "Empty List",
    created: "10/07/2022",
    user: defaultUser,
    todos: [],
  },
]

const defaults =  {
  todos: todos,
  user: defaultUser,
};

export default defaults;