import "./App.css";
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="glass backdrop-blur-lg bg-white/5 border-b border-white/10 p-6 text-center shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-white mb-2 tracking-tight">
            World Weather
          </h1>
          <p className="text-blue-200 text-lg font-medium">
            Real-time weather information for world capitals
          </p>
          <div className="mt-4 flex justify-center space-x-6 text-sm text-blue-300">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Live Updates
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Global Coverage
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              Accurate Data
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <WeatherCard />
      </main>

      {/* Footer */}
      <footer className="glass backdrop-blur-lg bg-white/5 border-t border-white/10 p-6 text-center shadow-lg">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <h3 className="text-white font-semibold mb-2">About</h3>
              <p className="text-blue-200 text-sm">
                Professional weather app providing accurate forecasts for major
                cities worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Features</h3>
              <ul className="text-blue-200 text-sm space-y-1">
                <li>• Real-time data</li>
                <li>• Global coverage</li>
                <li>• Detailed metrics</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Tech Stack</h3>
              <p className="text-blue-200 text-sm">
                Built with React, Tailwind CSS, and WeatherAPI
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-4">
            <p className="text-white text-sm">
              &copy; 2026 World Weather . All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
