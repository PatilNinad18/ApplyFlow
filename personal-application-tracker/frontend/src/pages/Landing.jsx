import Card from "../components/ui/Card";
import { useNavigate } from "react-router-dom";
const Landing = () => {
  const navigate = useNavigate();

  const handleLogin = () =>{
    navigate("/login")
  }

  const handleRegister = () => {
    navigate("/register")
  }

  return (
    <div>
        <nav className="flex justify-between items-center">
        <div className="flex m-12 gap-2">
          <img
          src="/assets/icon.svg"
          alt="ApplyFlow logo"
          className="h-12 w-12"
          />
          <h1 className="font-bold text-2xl mt-2">ApplyFlow</h1>
        </div>

        <div className="flex items-center gap-10 mr-25">
          <h3>Features</h3>
          <button
           id="auth-button"
           onClick={handleRegister}
           >Sign Up</button>
        </div>
        </nav>

        <h1 className="font-bold text-5xl ml-12">Track All Your Application
          <br />
          <span className="text-indigo-400">in One Place</span>
        </h1>
       <div className="relative w-full h-screen overflow-hidden">
          <img 
            src="/assets/landing.png" 
            alt="landing_bg" 
            className="w-full h-full object-cover"
          />

          <button 
            id="auth-button" 
            className="absolute top-90 left-40 -translate-y-1/2 rounded-full px-6 py-3 bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition-all"
            onClick={handleLogin}
          >
            Get Started - It's Free
            
          </button>
        </div>

        <div className="flex justify-center items-center gap-20">
          <Card title={"Unified DashBoard"} icon={"/assets/dashboard.svg"} info={"Track all your applications, interview statuses, and offer letters in one centralized, real-time view."} />
          <Card title={"Deadline Reminders"} icon={"/assets/trophy.svg"} info={"Never miss an opportunity. Get automated alerts for application closings and upcoming technical rounds."} />
          <Card title={"Resume Builder"} icon={"/assets/handshake.svg"} info={"Generate ATS-friendly resumes instantly with custom templates designed to land you more interviews."} />
        </div>

        <footer className="flex justify-between m-20 text-white font-semibold">
          <p>&copy; 2025 ApplyFlow</p>

          <div className="flex justify-around items-center gap-20">
            <h4>Privacy</h4>
            <h4>Terms</h4>
          </div>
        </footer>

        <div className="h-2"></div>
    </div>
  );
};

export default Landing;
