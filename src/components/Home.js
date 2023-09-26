import BtnSlide from "./BtnSlide"
import Slide from "./Slide"

const Home = () => {
    return (
            <div id="home">
                <input type="radio" name="rad-slide" id="rad0" />
                <input type="radio" name="rad-slide" id="rad1" checked />
                <input type="radio" name="rad-slide" id="rad2" />
                <input type="radio" name="rad-slide" id="rad3" />
                <input type="radio" name="rad-slide" id="rad4" />
                <Slide />
                <BtnSlide />
            </div>
    )
}

export default Home