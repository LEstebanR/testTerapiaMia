import Button from "./Button";

const Questions = () => {
  return (
    <>
      <h1>Frequently Asked Questions</h1>
      <p>Here are some of our FAQs. If you have any other questions you'd like answereded please feel free to email us.</p>
      <details >
        <sumary>What is Bookmark?</sumary>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur assumenda, ratione aliquid culpa, illo facilis reiciendis quidem similique fuga nemo minima eveniet. Autem pariatur, neque quidem nesciunt nihil voluptatem officia!</p>
      </details>
      <details>
        <sumary>How can I request anew browser?</sumary>
        <p>Vivamus luctus eros aliquet convails ultrices Mauris auge massa, ultrices non liguia. Suspedisse imperdiet.Vivamus luctus eros aliquet convails ultrices Mauris auge massa, ultrices non liguia. Suspedisse imperdiet.Vivamus luctus eros aliquet convails ultrices Mauris auge massa, ultrices non liguia. Suspedisse imperdiet.</p>
      </details>
      <details>
        <sumary>Is tehre a mobile app?</sumary>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur assumenda, ratione aliquid culpa, illo facilis reiciendis quidem similique fuga nemo minima eveniet. Autem pariatur, neque quidem nesciunt nihil voluptatem officia!</p>
      </details>
      <details>
        <sumary>What about Chromium browsers?</sumary>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur assumenda, ratione aliquid culpa, illo facilis reiciendis quidem similique fuga nemo minima eveniet. Autem pariatur, neque quidem nesciunt nihil voluptatem officia!</p>
      </details>
      <Button primary>Back to Home</Button>
    </>
  )
}

export default Questions;