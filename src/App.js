import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import DifferencesSection from './components/DifferencesSection';
import IntroSection from './components/IntroSection';


export default function App() {

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <MainSection />
        <DifferencesSection />
      </main>
    </>
  );
}
