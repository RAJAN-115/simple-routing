import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* Common Header - हर page पर दिखेगा */}
      <header style={{ background: 'lightblue', padding: '20px' }}>
        <h2>My Simple Website</h2>

        {/* Navigation Links */}
        <nav>
          <Link to="/" style={{ marginRight: '20px' }}>
            Home
          </Link>
          <Link to="/about" style={{ marginRight: '20px' }}>
            About
          </Link>
          <Link to="/contact" style={{ marginRight: '20px' }}>
            Contact
          </Link>
        </nav>
      </header>

      {/* Main Content Area */}
      <main style={{ padding: '20px' }}>
        {/* यहाँ child routes render होंगे */}
        <Outlet />
      </main>

      {/* Common Footer - हर page पर दिखेगा */}
      <footer style={{ background: 'lightgray', padding: '10px', textAlign: 'center' }}>
        <p>&copy; 2025 My Simple Website</p>
      </footer>
    </div>
  );
}

export default App;
