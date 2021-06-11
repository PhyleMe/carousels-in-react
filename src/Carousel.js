import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import { data } from "./data";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import seven from "./assets/images/seven.jpg";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};

const Carousel = () => {
  return (
    <div style={{ margin: "30px"}}>
      <img src={seven} alt= "Token" className="center"/>
      <h1>AGORA</h1>
      <p>This is the bio about the token.</p>
    <br></br>
      <h1>Exchange with</h1>
      <Slider
       
        // dots
        initialSlide={2}
        infinite
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
        customPaging={(i) => {
          return (
            <div>
              <img
                src={data[i]}
                alt=""
                style={{
                  width: "300px",
                  height: "auto",
                   objectFit: "cover",
                 
                }}
              />
            </div>
          );
        }}
        dotsClass="slick-dots custom-indicator"
      >
        {data.map((item) => (
          <div>
            <img src={item} alt="" style={{ width: "50%", height: "auto",marginLeft:"auto",marginRight:"auto" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
