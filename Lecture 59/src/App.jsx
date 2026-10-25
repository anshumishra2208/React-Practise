import Componets from "./components/Componets"
import Usercard from "./components/Usercard"
import { Header as Header2 } from "./components/Componets"
import Profile from "./components/Profile"
import Welcome from "./components/Welcome"
import LoginStatus from "./components/LoginStatus"
import Products from "./components/Products"
import StudentList from "./components/StudentList"
import Card from "./components/Card"

const students = [
  {
    name: "anshu",
    marks: 98,
    city: "ara"
  },

  {
    name: "aman",
    marks: 92,
    city: "delhi"
  },

  {
    name: "rahul",
    marks: 100,
    city: "chandigarh"
  }
]


const products = [
  {
    title: "iphone",
    price: 293475
  },

  {
    title: "laptop",
    price: 23
  },

  {
    title: "pen",
    price: 8753
  }
]

const user = {
  name: "anshu",
  age: 19,
  city: "ara",
  isLoggedIn: true
}


function App() {

  return (
    <>
      <Header2 />
      <Usercard />
      <Componets />
      <Profile user={user} />
      <Welcome name={"anshu"} />
      <LoginStatus user={user} />
      <Products products={products} />
      <StudentList students={students} />
      <Card>
        <p>hello</p>
        <p>hii</p>
      </Card>
    </>
  )
}

export default App
