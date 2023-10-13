import React from "react"
import BtnSlide from "./BtnSlide"
import Slide from "./Slide"

const Home = () => {
    const [check, setCheck] = React.useState(1)
    setInterval(changeSlide, 5000)
    function changeSlide() {
        setCheck((prevState) => prevState < 4 ? prevState+=1 : prevState = 0)
    }

    return (
        < div id="home" >
                <input type="radio" name="rad-slide" id="rad0" checked={check === 0 ? true : false} />
                <input type="radio" name="rad-slide" id="rad1" checked={check === 1 ? true : false} />
                <input type="radio" name="rad-slide" id="rad2" checked={check === 2 ? true : false} />
                <input type="radio" name="rad-slide" id="rad3" checked={check === 3 ? true : false} />
                <input type="radio" name="rad-slide" id="rad4" checked={check === 4 ? true : false} />
            <Slide />
            <BtnSlide />
        </div>
    )
}

export default Home