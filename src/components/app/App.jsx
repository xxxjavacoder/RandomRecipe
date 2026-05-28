import './App.scss';

import Header from '../layout/header/index.jsx';
import Footer from '../layout/footer/index.jsx';
import Container from '../layout/container/index.jsx';

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
