import { Suspense, lazy } from 'react';
import Loader from './utils/Loader/Loader';
import Layout from '../src/components/ui/Layout';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './Footer/Footer';
import SliderComponent from './components/Sections/SliderComponent';
import Solutions from './components/Sections/Solutions';
import Demo from './components/Sections/Demo';
import Resources from './components/Sections/Resources';
import Testimonials from './components/Sections/Testimonials';
import Posts from './components/Sections/Posts';
import Project from './components/Sections/Project';
import Contact from './components/Sections/Contact';

const LazyProducts = lazy(() => import('./components/Sections/Products'));

function App() {
  return (
    <main>
      <Navbar />
      <Layout>
        <Hero />
        <SliderComponent />
        <Suspense fallback={<Loader />}>
          <LazyProducts />
        </Suspense>
        <Solutions />
        <Demo />
        <Resources />
        <Testimonials />
        <Posts />
        <Project />
        <Contact />
      </Layout>
      <Footer />
    </main>
  );
}

export default App;
