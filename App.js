const container= React.createElement('div' ,{id:"parent"}, [
    React.createElement('div',{id:"child"} , [React.createElement('h1' ,{} , "i am h1 tag") , React.createElement('h2' ,{} , "i am h2 tag")]
),
React.createElement('div',{id:"child2"} , [React.createElement('h1' ,{} , "i am h1 tag") , React.createElement('h2' ,{} , "i am h2 tag")]
)
]
);
console.log(container); //return object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
console.log(root)
