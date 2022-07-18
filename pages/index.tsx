import NavBar from "../components/Navbar"
import Footer from "../components/Footer"

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <h1 className="flex justify-center text-2xl font-bold">
        Hello
      </h1>

      <Footer />
    </div>
  )
}

export default Home
