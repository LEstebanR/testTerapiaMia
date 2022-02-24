import CardNavigator from "./CardNavigator";

const Dowload = () => {
  return (
    <>
      <h1>Download the extension</h1>
      <p>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to priorize</p>
      <CardNavigator navigator={"Chrome"} logo={"https://res.cloudinary.com/lesteban/image/upload/v1645677668/terapiamia/logo-chrome_yftaxu.svg"} minimunVersion={62} />
      <CardNavigator navigator={"Firefox"} logo={"https://res.cloudinary.com/lesteban/image/upload/v1645677674/terapiamia/logo-firefox_xxfgat.svg"} minimunVersion={55} />
      <CardNavigator navigator={"Opera"} logo={"https://res.cloudinary.com/lesteban/image/upload/v1645677678/terapiamia/logo-opera_kdcgkt.svg"} minimunVersion={46} />
    </>
  )
}

export default Dowload;