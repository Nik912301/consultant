import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import DifferencesSection from './components/DifferencesSection';
import IntroSection from './components/IntroSection';
import Product from './components/Product/Product';


export default function App() {

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <MainSection />
        <DifferencesSection />
        <Product />
      </main>
    </>
  );
}
