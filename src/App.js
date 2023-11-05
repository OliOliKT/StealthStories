import "./App.css";
import Footer from "./components/footer";
import CommentComponent from "./components/CommentComponent";
import TopBar from "./components/topBarComponent";

import IndvidualPost from "./pages/IndividualPost";
import TrendingFeed  from "./pages/TrendingFeed";

function App() {
  return (
    <div className="App">
      <TrendingFeed />
    </div>
  );
}

export default App;
