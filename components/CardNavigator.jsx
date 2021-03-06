import Button from "./Button";

const CardNavigator = (props) => {
  const {navigator, logo, minimunVersion, id} = props;
  return (
    <div className="cardNavigator" id={id}>
      <img src={logo} alt="logo" ></img>
      <p>Add to {navigator}</p>
      <p>Minimum version {minimunVersion}</p>
      <div className="card-buttonContainer">
        <Button primary>Add & Install Extension</Button>
      </div>
    </div>
  )

}

export default CardNavigator;