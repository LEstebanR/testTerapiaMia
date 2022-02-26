import CardNavigator from "./CardNavigator";

const Dowload = () => {
  return (
    <div className="download">
      <h1>Download the extension</h1>
      <p className="download-paragraph">We have got more browsers in the pipeline. Please do let us know if you have got a favourite you will like us to priorize</p>
      <div className="download-card-container">
        <CardNavigator id={"c1"} navigator={"Chrome"} logo={"https://res.cloudinary.com/lesteban/image/upload/v1645677668/terapiamia/logo-chrome_yftaxu.svg"} minimunVersion={62} />
        <CardNavigator  id={"c2"} navigator={"Firefox"} logo={"https://res.cloudinary.com/lesteban/image/upload/v1645677674/terapiamia/logo-firefox_xxfgat.svg"} minimunVersion={55} />
        <CardNavigator id={"c3"} navigator={"Opera"} logo={"https://res.cloudinary.com/lesteban/image/upload/v1645677678/terapiamia/logo-opera_kdcgkt.svg"} minimunVersion={46} />
      </div>
    </div>
  )
}

export default Dowload;