import Header from "@/components/layout/header"
import Hero from "./components/hero"
import Stats from "./components/stats"
import Features from "./components/features"

const Home:React.FC = () => {

    return (
        <main className="">
            <Header/>
            <Hero/>
            <Stats/>
            <Features/>
        </main>
    )
}


export default Home