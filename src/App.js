import { useState } from 'react';
import Navbar from './components/navbar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Bio from './components/bio';
import Work from './components/work';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  const [pageState, setPageState] = useState({
    bio: true,
    work: false,
    contact: false
  })

  return (
    <>
    <Box minHeight="100vh">
    <CssBaseline />
    <Navbar pageState={pageState} setPageState={setPageState} />
    {pageState.bio ? <Bio /> : ''}
    {pageState.work ? <Work /> : ''}
    {pageState.contact ? <Contact /> : ''}
    <Footer />
    </Box>
    </>
  );
}

export default App;
