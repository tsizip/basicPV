const now = new Date();

const events = [
    
     {
          title: "Drink water!",
          start: new Date(new Date().setHours(new Date().getHours() - 3)),
          end: new Date(new Date().setHours(new Date().getHours() + 3))
     },
     {
          title: "Sleep",
          start: new Date(new Date().setHours(new Date().getHours() - 3)),
          end: new Date(new Date().setHours(new Date().getHours() + 3))
     },
    
];
export default events