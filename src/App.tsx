import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";

const Main = lazy(() => import("./components/Main"));
const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div style={{ padding: "0 20px" }}>...</div>}>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </Suspense>
    </QueryClientProvider>
  );
}
export default App;
