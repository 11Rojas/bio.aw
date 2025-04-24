import Header from "@/components/layout/header"
import Hero from "./components/hero"
import Stats from "./components/stats"
import Features from "./components/features"
import Footer from "@/components/layout/footer"

const Home:React.FC = () => {

    return (
        <main className="">
            <Header/>
            <Hero/>
            <Stats/>
            <Features/>
            <Footer/>
        </main>
    )
}


export default Home