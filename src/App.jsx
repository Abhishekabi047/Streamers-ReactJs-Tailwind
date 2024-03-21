import Sidebar from "./components/SideBar/Sidebar"
import Trending from "./components/Trending/trending"
import Carousel from "./components/carousel/carousel"
import Header from "./components/header/header"


function App() {
  return (
    <div className="h-screen"> 
      <Header/>
      <div className="flex h-screen ">
      <Sidebar/>
      <div>
      <Trending/>
      {/* <Carousel/>  */}
      <Trending/>
      <Trending/>
      <Trending/>
      </div>
      </div>
    </div>
  )

}

export default App
