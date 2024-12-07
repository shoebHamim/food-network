import "./App.css";
import Navbar from "./Custom Components/Navbar";
import Sidebar from "./Custom Components/Sidebar";

function App() {
  return (
    <div className='flex h-screen relative'>
      <Sidebar />
      <div className="flex flex-col  flex-1">
        <div >
        <Navbar />
        </div>
        <main className="mt-16 border border-red-500 h-full bg-gray-200">
          <h1 className="text-2xl font-bold">hello world</h1>
        </main>
      </div>
 
    </div>
  );
}

export default App;
