import Button from './Button.jsx'

const Features = () => {
  return (
    <div className="features">
      <h1>Features</h1>
      <p className="features-paragraph">Our aim is to make it quick and easy for you yo access your favourite websites. Your bookmarks sync between your devices so you can accesss them on the go</p>
      <div className="features-linksContainer">
        <a><p className="features-link top">Simple Bookmarking</p></a>
        <a><p className="features-link">Speedy Searching</p></a>
        <a><p className="features-link">Easy Sharing</p></a>
      </div>
      <div className="features-info">
        <div  iv className="image-container">
          <img className="ilustration" src="https://res.cloudinary.com/lesteban/image/upload/v1645677180/terapiamia/illustration-features-tab-1_eubrr4.svg" alt="logo" />
        </div>
        <div className="features-info-text">
          <h1>Bookmark in one click</h1>
          <p>Organize your bookmark showever you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
          <div className='features-button-container'>
            <Button primary>More info</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features;