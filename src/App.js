import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed, Test } from "./components/index";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={< Feed />}  />
          <Route path="/video/:id"  element={< VideoDetail />}  />
          <Route path="/channel/:id"  element={< ChannelDetail />}  />
          <Route path="/search/:searchTerm"  element={< SearchFeed />}  />
          <Route path="/test"  element={< Test />}  />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
