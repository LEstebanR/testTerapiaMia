import Button from "./Button";

const Intro = () => {
  return (
    <>
      <section className="intro">
        <img className="ilustration" src="https://res.cloudinary.com/lesteban/image/upload/v1645674465/terapiamia/illustration-hero_d5f7lh.svg" alt="logo" />
        <div>
          <h1>A simple Bookmark manager</h1>
          <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
          <div className="intro-buttons">
            <Button primary>Get it on Chrome</Button>
            <Button secondary>Get it in Firefox</Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Intro;