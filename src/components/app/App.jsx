import './App.scss';

import Header from '../header/index.jsx';
import Footer from '../footer/index.jsx';
import Container from '../container/index.jsx';

function App() {
  return (
    <div className="app">
        <Header />
        <Container />
        <Footer />
    </div>
  );
}

export default App;
