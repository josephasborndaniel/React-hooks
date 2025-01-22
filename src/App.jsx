import User from './components/User'
const users = [
  {
    name: "Joe Rogan",
    profession: "Coach at MMA",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Sarah Connor",
    profession: "Fitness Trainer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "Mike Tyson",
    profession: "Boxing Legend",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "Jessica Alba",
    profession: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "Chris Hemsworth",
    profession: "Actor & Trainer",
    image: "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8"
  },
  {
    name: "Emily Blunt",
    profession: "Yoga Instructor",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "Dwayne Johnson",
    profession: "Actor & Wrestler",
    image: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Selena Gomez",
    profession: "Singer & Actress",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

function App()
{
  return (
    <>
    <div className="">
     {
       users.map(user=>{
        return<User name ={user.name} desc = {user.profession} img={user.image}/>
       })
     }
     {/* <User/> */}
     </div>
    </>
  )
}

export default App;