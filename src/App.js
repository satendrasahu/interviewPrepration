import React from "react";
import { Routes, Route } from "react-router-dom";
import Timer from "./containers/Timer";
import Home from "./containers/Home";
import Navbar from "./components/Navbar";
import StopWatch from "./containers/StopWatch";
import TicTacToe from "./containers/TicTacToe";
import List from "./containers/List";
const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/stopwatch" element={<StopWatch />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </>
  );
};

export default App;
