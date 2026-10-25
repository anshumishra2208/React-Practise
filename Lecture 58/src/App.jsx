
const subjects = ["maths", "english", "hindi", "physics", "chemistry", "biology"]

const colors = ["yellow", "pink", "red", "black", "orange"]

const result = {
  name : "sidhant",
  marks : 80
}


const products = [
  {
    name : "iphone",
    price : 3054695
  },

  {
    name : "laptop",
    price : 23029
  },

  {
    name : "tshirt",
    price : 238
  }
]

function printHello(){
  console.log("hello learner");
}



const user = {
  name: "anshu",
  isOnline: true,
  age: 19,
  city: "ara"
}

function printName(){
    console.log(user.name);
}

const a = 10;
const b = 2;



function App() {

  return (
    <>
      <div>
        <h2>React Basics</h2>
        <p>first lec</p>
        <button>click me</button>
      </div>

      <div>
        <p>sum : {a + b}</p>
        <p>diff : {a - b}</p>
        <p>product : {a * b}</p>
        <p>divide : {a / b}</p>
      </div>

      <div>
        <ul>
          {
            subjects.map((subject) => {
              return <li>{subject}</li>
            })
          }
        </ul>
      </div>

      <div>
        <ul>
          {
            colors.map((color) => {
              return <li>{color}</li>
            })
          }
        </ul>
      </div>

      <div>
        <p>{user.name}</p>
        <p>{user.age}</p>
        <p>{user.city}</p>
      </div>

      <div>
        <p>
          {user.isOnline ? `${user.name} is online` : `${user.name} is oflline`}
        </p>
      </div>

      <div>
        <button onClick={printHello}>click me</button>
        <button onClick={()=>{console.log(user.name);}}>click to get name in console</button>
      </div>

      <div>
        
          {
            products.map(({name,price})=>{
              return <div>
                <p>{name}</p>
                <p>{price}</p>
              </div>
            })
          }
      </div>

      <div>
        {
          result.marks >=33 ? `${result.name} is pass` : `${result.name} is fail`
        }
      </div>

      <div>
        {
          user.isOnline ? `${user.name} is online` : `${user.name} is offline`
        }

        <button onClick={printName}>click me to get username</button>
      </div>

      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7AutEDuDw2LdFUUhUtmi6TdxNIyqGw-7287bsGr4b1A&s=10" alt="spiderman" />
      </div>

      

    </>
  )
}

export default App
