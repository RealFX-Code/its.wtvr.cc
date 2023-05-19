import FullScreenContainer from "./components/FullScreenContainer";
import "./App.css";

function App() {
  return (
    <>
      <FullScreenContainer>
        <div className="content">
          <h1>
            It's whatever, Don't worry.
          </h1>
          <blockquote>
            It really is. I don't care, neither should you. Don't worry about me when I say it's nothing.
          </blockquote>
        </div>
      </FullScreenContainer>
    </>
  )
}

export { App as default };