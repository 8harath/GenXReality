import About from "./(componets)/About";
import Contact from "./(componets)/Contact";
import Futurevision from "./(componets)/Futurevision";
import Hero from "./(componets)/Hero";
import Joinus from "./(componets)/Joinus";
import Product from "./(componets)/Product";
import Productworking from "./(componets)/Productworking";

export default function Home() {
  return (
  <div>
   <Hero/>
   <About/>
   <Product/>
   <Productworking/>
   <Futurevision/>
   <Joinus/>
   <Contact/>
  </div>
  
  );
}
