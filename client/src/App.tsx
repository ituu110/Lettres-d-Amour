import { Switch, Route, Router } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import LoginPage from "@/pages/LoginPage";
import LetterPage from "@/pages/LetterPage";
import HashGenerator from "@/pages/HashGenerator";
import { useHashLocation } from "@/lib/useHashLocation";
import "./styles/fonts.css";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router hook={useHashLocation}>
        <div className="min-h-screen bg-background font-serif">
          <Switch>
            <Route path="/" component={LoginPage} />
            <Route path="/letter" component={LetterPage} />
            {/* 開発環境でのみ表示 */}
            {import.meta.env.DEV && (
              <Route path="/generate-hash" component={HashGenerator} />
            )}
          </Switch>
          <Toaster />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;