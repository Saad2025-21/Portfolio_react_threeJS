import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/home";
import About from "./sections/about";
import Friends from "./sections/friends"
import Contacts from "./sections/contacts";
import Footer from "./sections/footer";

import { Meteors } from "./components/meteors";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <Meteors className="fixed inset-0 " />
      {/* Foreground */}
      <main className="relative z-10">
        <div className="container mx-auto max-w-7xl">
          <Navbar />
          <Hero />
          <About />
          <Friends />
          <Contacts />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default App;