import "./App.css";
import Footer from "./components/footer";
import CommentComponent from "./components/CommentComponent";
import TopBar from "./components/topBarComponent";

import TrendingFeed from "./pages/TrendingFeed";

function App() {
  return (
    <div className="App">
      <TopBar />
      <CommentComponent />
      <Footer />
    </div>
  );
}

export default App;
