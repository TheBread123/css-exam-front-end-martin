import Layout from "./layout/javascript files/Layout";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/java script files/MainPage";

//Called by index.js to render web app
//Should contain all the webpages to be used
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
