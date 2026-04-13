import heroImg from "../assets/images/hero_img.png";
import thinking from "../assets/images/thinking-face.png";
import Navbar from "../components/Navbar";
function Home() {
  return (
    <>
      {/* <section className="h-screen w-full bg-black relative"> */}
      {/* <div */}
      {/* className="absolute inset-0 bg-cover bg-center" */}
      {/* style={{ backgroundImage: `url(${heroImg})` }} */}
      {/* ></div> */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div> */}
      {/* <div className="relative z-10 text-white p-10 items-center justify-center text-center flex">
            <h1 className="text-3xl font-bold">PairUp</h1>
        </div> */}
      {/* <div className="relative z-10 text-center flex flex-col gap-3 items-center justify-center">
          <h1
            className="text-6xl md:text-8xl font-bold tracking-wider"
            style={{
              color: "#fff",
              textShadow: `
          0 0 7px #fff,
          0 0 10px #fff,
          0 0 21px #fff,
          0 0 42px #bc13fe,
        `,
            }}
          >
            PairUp
          </h1>
          <p className="text-purple-200 mt-4 tracking-[0.2em] font-light opacity-80">
            your fav spot to chat
          </p>
        </div> */}
      {/* <div className="relative z-10 text-center flex flex-col items-center justify-center">
          <h1
            className="text-6xl md:text-8xl font-bold tracking-wider"
            style={{
              color: "#fff",
              textShadow: `
                0 0 7px #fff,
                0 0 10px #fff,
                0 0 21px #fff,
                0 0 42px #bc13fe,
              `,
            }}
          >
            PairUp
          </h1>
          <p className="text-purple-200 mt-4 tracking-[0.2em] font-light opacity-80 uppercase text-sm">
            your fav spot to chat
          </p>
        </div> */}
      {/* </section> */}
      <Navbar />
      <section className="h-screen w-full bg-black relative flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-t from-black from-10% via-50% to-transparent-50%"></div>

        <div className="relative z-10 text-center flex flex-col items-center">
          <h1
            className="text-7xl md:text-9xl font-bold tracking-tighter"
            style={{
              color: "#fff",
              textShadow: `
                0 0 20px #bb13fe3e`,
            }}
          >
            PairUp
          </h1>
          <p className="text-purple-200 mt-10 tracking-[0.6em] opacity-80 text-xs">
            Exclusively for grown ups
          </p>
          <div className="text-white flex gap-3 mt-10">
            <a
              href="/init"
              className="p-2 bg-white rounded-md text-black font-bold w-25 text-2xl"
            >
              Chat
            </a>
            <a
              href="#knowmore"
              className="p-2 border rounded-md w-30 justify-center items-center text-center flex hover:bg-purple-200 hover:text-black font-bold"
            >
              Know more
            </a>
          </div>
        </div>
      </section>
      <section
        className="h-screen w-full bg-black flex items-center justify-center"
        id="knowmore"
      >
        <div className="pt-0 flex flex-col justify-center items-center">
          <div className="flex justify-center items-center text-center">
            <h1 className="text-[50px] font-bold bg-gradient-to-r from-fuchsia-950 to-purple-600 bg-clip-text text-transparent italic">
              What/Why PairUp
            </h1>
            <img src={thinking} alt="emoji" className="rounded-md" />
            <span className="text-[50px] font-bold text-purple-600 italic">
              ???
            </span>
          </div>
          <a href="#about" className="text-gray-700 font-bold italic">
            scroll down
          </a>
        </div>
      </section>
      <section
        className="h-screen bg-black flex flex-col justify-center text-center"
        id="about"
      >
        <h1 className="font-mono text-white text-4xl">About</h1>
        <p className="font-special text-white p-10">
          The antique clock on the mantelpiece struck twelve, its deep chime
          echoing through the silent, dust-moted hallway of the ancestral
          estate. Outside, the silver moonlight filtered through the gnarled
          branches of ancient oaks, casting long, skeletal shadows that danced
          across the velvet curtains. A single candle flickered in the drafty
          library, where the scent of old parchment and cedarwood hung heavy in
          the air. Somewhere in the distance, a loon called out across the
          glassy surface of the lake, a lonely sound that seemed to punctuate
          the stillness of the midnight hour. Every creak of the floorboards
          told a story of generations long passed, of secrets whispered in
          corners and laughter that had since faded into the walls. The air was
          cool, carrying the faint, sweet promise of jasmine from the garden
          below. Within this sanctuary of stone and timber, time seemed to
          stretch and thin, blurring the line between what was remembered and
          what was merely imagined. It was a place where the modern world felt
          like a distant rumor, easily forgotten amidst the weight of history
          and the comforting embrace of the dark. As the embers in the fireplace
          breathed their last orange gasp, a profound sense of peace settled
          over the room, as if the house itself were finally exhaling after a
          long, weary day.
        </p>
      </section>
      <footer className="w-full py-6 bg-black text-white/60 text-center font-special">
        <p>&copy; {new Date().getFullYear()} PairUp All rights reserved.</p>
      </footer>
    </>
  );
}

export default Home;

/*

<div className="pt-30">
          <div className="flex justify-center items-center text-center">
            <h1 className="text-[50px] font-bold text-fuchsia-950 italic">
              What/Why PairUP
            </h1>
            <img src={thinking} alt="emoji" className="rounded-md" />
            <span className="text-[50px] font-bold text-fuchsia-950 italic">???</span>
          </div>
        </div>


*/
