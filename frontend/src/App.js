import Desktop from "./desktop";
import MobileComponent from "./Mobile";
function App() {
  // Logic to determine if user is on a mobile device
  const isMobile = window.innerWidth <= 768; // Example: consider screens with width 768px or less as mobile

  return (
    <div>
      {isMobile ? <MobileComponent /> : <Desktop />}
    </div>
  );
}

export default App;
