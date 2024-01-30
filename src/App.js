import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {

  const [color,setColor]= useState("red");
  const [count,setCouner]= useState(0);
  const [info, setInfo] = useState({
    firstName: "swap",
    lastName: "max",
    age: 24
  });
  const [firstName,setFirstName]= useState("krishna");
  const [arr, setArray] = useState([1, 4, 15, 17, 3, 5, 7]);
  const [products, setProducts] = useState([]);
  const incCounter= ()=> {
    console.log("gssdf");
    setCouner((count) => count+1)
  }
  const decCounter= ()=> {
    console.log("bullet raghava");
    setCouner((count) => count-1);
  }
  const cname= (event) => {
    let fname= event.target.value;
    setFirstName(fname);
   
    
};
const getProducts= ()=>{
  fetch("https://n62pob6cmsbixtuyb7dojyjxui0lfocp.lambda-url.ap-south-1.on.aws/")
  //fetch("https://xhi6z0jgrc.execute-api.ap-south-1.amazonaws.com/Mohan")
  .then((res)=> (res.json()))
  .then((res)=> {
    console.log(res);
    setProducts(res.products);
  });
}

  return (
    <div className="App">
     <h1>Color is: {color}</h1>
     <button onClick={()=>setColor("black")}>Change Color</button>
     <h1>Count is: bullet raghava the {count}</h1>
     <button onClick={incCounter}>Inc Counter +</button>
     <button onClick={decCounter}>Dec Counter +</button>
     <button onClick={getProducts}>getProducts</button>
     <input type="text" name="firstName"  value={firstName} onChange={cname}/>
     <h1>firstName : {firstName} </h1>

     <h1>name {info.firstName}</h1>
     <h1>lname{info.lastName}</h1>
     <h2>age{info.age}</h2> 
  
      <ul>
        {/* Print array using Map */}
        {
          products.map((product) =>
          <li key={product.title}>{product.title}</li>
          //console.log(title)
          )
        }
        </ul>
         
        {/* <img src={"https://cdn.dummyjson.com/product-images/1/1.jpg"} className="logo" alt="Vite logo" /> */}
    </div>
  );
}
export default App;