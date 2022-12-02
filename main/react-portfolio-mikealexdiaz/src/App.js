import Navbar from './components/navbar';
import CssBaseline from '@mui/material/CssBaseline';
import Bio from './components/bio';
import Work from './components/work';
import Contact from './components/contact';

function App() {
  return (
    <>
    <CssBaseline />
    <Navbar />
    <Bio />
    <Work />
    <Contact />
    </>
  );
}

export default App;
