const now = new Date();

export default [
     {
          id: 0,
          title: "Today",
          start: new Date(new Date().setHours(new Date().getHours() - 3)),
          end: new Date(new Date().setHours(new Date().getHours() + 3))
     },
     {
          id: 1,
          title: "asdasdhjkl",
          start: new Date(new Date().setHours(new Date().getHours() - 3)),
          end: new Date(new Date().setHours(new Date().getHours() + 3))
     },
     // {
     //      id: 2,
     //      title: "Happy Hour",
     //      start: new Date(2023, 16, 2, 17, 0, 0, 0),
     //      end: new Date(2023, 17, 2, 17, 30, 0, 0),
     //      desc: "Most important meal of the day"
     // },
];
