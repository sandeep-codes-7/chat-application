import { useEffect, useState } from "react";
import heroImg from "../assets/images/hero_img.png";

const Initiator = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black backdrop-blur-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a
            href="/"
            className="text-white font-bold text-2xl tracking-tighter"
          >
            PairUp<span className="text-purple-500">.</span>
          </a>

          {/* Links */}
          {/* <div className="flex gap-8 text-white/80 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Buy me a coffee
            </a>
          </div> */}

          {/* Action Button */}
          <button className="px-5 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-full text-sm font-semibold transition-all shadow-lg shadow-purple-500/20">
            Buy me a coffee
          </button>
        </div>
      </nav>
      <section className="h-screen w-full bg-black relative flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-t from-black from-10% via-50% to-transparent-50%"></div>

        <div className="relative z-10 text-center flex flex-col items-center">
          {/* <div className="bg-black rounded-[2rem] w-[40rem] h-[20rem]">
            <h2 className="text-white p-10">Set your data</h2>
            
          </div> */}
          <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-[2rem] w-[40rem] p-10 flex flex-col gap-8 shadow-2xl">
            <h2 className="text-purple-500 text-2xl font-bold tracking-tight">
              Set your data
            </h2>

            <div className="flex flex-col gap-6">
              

              {/* Gender Selection */}
              <div>
                <label className="text-purple-200 text-sm uppercase tracking-widest mb-3 block opacity-70">
                  Gender
                </label>
                <div className="flex gap-6 justify-center items-center">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="gender"
                      className="w-5 h-5 accent-purple-500 bg-transparent border-white/20"
                    />
                    <span className="text-white group-hover:text-purple-300 transition-colors">
                      Male
                    </span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="gender"
                      className="w-5 h-5 accent-purple-500 bg-transparent border-white/20"
                    />
                    <span className="text-white group-hover:text-purple-300 transition-colors">
                      Female
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-purple-200 text-sm uppercase tracking-widest opacity-70">
                  nickname
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sandy"
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-white/20"
                />
              </div>

              {/* Interests Field */}
              <div className="flex flex-col gap-2">
                <label className="text-purple-200 text-sm uppercase tracking-widest opacity-70">
                  Interests
                </label>
                <input
                  type="text"
                  placeholder="e.g. Gaming, Music, Coding..."
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-white/20"
                />
              </div>
            </div>

            <button className="mt-4 bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-xl transition-all active:scale-95 shadow-lg shadow-purple-500/20">
              Ready to enter
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Initiator;
