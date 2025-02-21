import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Layout from "./components/Layout";
import Test from "./pages/Test";
import Results from "./pages/Results";
import TestHistory from "./pages/TestHistory";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route element={<ProtectedRoute isAuthenticated={false} />}>
            <Route path="test" element={<Test />} />
            <Route path="results" element={<Results />} />
            <Route path="history" element={<TestHistory />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
