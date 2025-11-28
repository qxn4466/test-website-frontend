  import Navbar from "./components/Navbar";
  import TopBar from "./components/TopBar";
  import ImageSlider from "./components/ImageSlider";
  import Footer from "./components/Footer";

  export default function Home() {
    return (
      <div>
        <TopBar />
        <Navbar />

        <main className="text-center mt-20 mb-20">
          <h1 className="text-4xl font-bold text-blue-700">
            Welcome to ABC
          </h1>

          {/* Image Slider */}
          <div className="mt-10">
            <ImageSlider />
          </div>


          {/* ======================================
    ABOUT ABC SECTION
  ====================================== */}
  <section className="max-w-7xl mx-auto px-5 py-20">
    
    {/* Main Title */}
    <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
      <span className="text-blue-700">ABOUT</span>{" "}
      <span className="text-blue-700">ABC</span>
    </h2>

    <div className="grid md:grid-cols-2 gap-12">
      
      {/* LEFT SIDE — Main paragraph */}
  <p className="text-black-700 leading-8 text-lg text-justify">
    We pride ourselves on being at the forefront of autonomous aerial intelligence, 
    delivering mission-critical Drone AI systems that think, decide, and operate without human intervention. 
    Founded on the belief that true autonomy is the future of unmanned aviation, we provide complete 
    end-to-end solutions — from groundbreaking research and in-house hardware-software development 
    to tailored integration, regulatory compliance, deployment, and lifelong fleet support. 
    With relentless focus on real-world performance, we harness the latest advances in computer vision, 
    edge AI, sensor fusion, and swarm intelligence to empower defense forces, public safety agencies, 
    energy operators, and precision industries with drones that are safer, smarter, and fully independent — today.
  </p>

      {/* RIGHT SIDE — 4 benefit items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

        {/* Item 1 */}
        <div>
          <div className="text-blue-600 text-4xl mb-2">👥</div>
          <h3 className="font-semibold text-gray-900 text-lg">Customer Satisfaction</h3>
          <p className="text-black-600 leading-7 text-lg text-justify">
            We strive to exceed our customers’ expectations on every mission, delivering reliable, 
            autonomous drone systems that perform flawlessly when lives, assets, or critical operations are on the line.
          </p>
        </div>

        {/* Item 2 */}
        <div>
          <div className="text-blue-600 text-4xl mb-2">💡</div>
          <h3 className="font-semibold text-gray-900 text-lg">Continuous Innovations</h3>
          <p className="text-black-600 leading-7 text-lg text-justify">
            We never stop pushing the boundaries of AI and robotics — constantly developing next-generation computer vision, 
            edge AI, swarm intelligence, and GPS-denied autonomy to keep our clients years ahead of the competition.
          </p>
        </div>

        {/* Item 3 */}
        <div>
          <div className="text-blue text-4xl mb-2">🛡️</div>
          <h3 className="font-semibold text-gray-900 text-lg">Integrity</h3>
          <p className="text-black-600 leading-7 text-lg text-justify">
            We prioritize safety, data security, and regulatory compliance above all. 
            Every system we build adheres to the highest aviation, cybersecurity, and 
            ethical AI standards with full transparency and robust redundancy.
          </p>
        </div>

        {/* Item 4 */}
        <div>
          <div className="text-blue-600 text-4xl mb-2">🎯</div>
          <h3 className="font-semibold text-gray-900 text-lg">Passion for Excellence</h3>
          <p className="text-black-600 leading-7 text-lg text-justify">
            We are obsessed with perfection in flight. From the first line of code to the final mission 
            handover, we are driven to deliver the world’s most capable, intelligent drones that surpass 
            expectations every single time.
          </p>
        </div>

      </div>
    </div>
  </section>


        </main>
      </div>
    );
  }
