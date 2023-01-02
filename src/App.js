import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Routes, Route, HashRouter } from "react-router-dom";
import Taipei from "./Pages/Taipei";
import Taichung from "./Pages/Taichung";
import Tainan from "./Pages/Tainan";
import Other from "./Pages/Other";

// const LazyOther = lazy(() => import("./Pages/Other"));
// const LazyTainan = lazy(() => import("./Pages/Tainan"));

const theme = createTheme({
  typography: {
    fontFamily: "Noto Serif TC,Noto Sans TC,Modak",
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1.2rem",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textAlign: "center",
          fontFamily: "Noto Serif TC",

          height: "60vh",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontFamily: "Noto Sans TC",
          textAlign: "center",
        },
      },
    },
  },
});

function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <div className="app">
          <Header />

          <Routes>
            <Route path="/" element={<Taipei />} exact />
            <Route path="/taichung" element={<Taichung />} />
            <Route path="/tainan" element={<Tainan />} />
            <Route path="/other" element={<Other />} />
            <Route path="*" element={<Taipei />} />
          </Routes>

          <Footer />
        </div>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
