import { StarBackground } from "../components/StarBackground"
import ThemeToggle from "../components/ThemeToggle"


const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* theme toggle */}
      <ThemeToggle />
      {/* background effect  */}
      <StarBackground />
      {/* navbar */}

      {/* main content */}

      {/* footer  */}
    </div>
  )
}

export default Home
