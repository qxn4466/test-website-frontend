export default function AboutSection() {
  return (
    <section id="about" className="w-full py-16 bg-white px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT SIDE — ABOUT TEXT */}
        <div>
          <h2 className="text-3xl font-bold mb-4 border-b-4 border-black inline-block">
            ABOUT XXX
          </h2>

          <p className="text-gray-700 leading-7 bg-gray-100 p-4 mt-4 shadow-sm rounded-md">
            We are a next-generation drone AI company specializing in autonomous unmanned aerial 
            systems for enterprise and defense applications. By combining state-of-the-art artificial 
            intelligence, deep learning, and robust hardware design, we deliver drones that see, 
            think, and act—without human intervention.
          </p>
        </div>

        {/* RIGHT SIDE — FEATURE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {/* Feature 1 */}
          <div>
            <div className="text-black-600 text-4xl mb-2">👥</div>
            <h3 className="font-bold bg-gray-200 px-2 inline-block">Customer Satisfaction</h3>
            <p className="mt-2 bg-gray-100 p-3 shadow-sm rounded-md">
              We strive to exceed our customers’ expectations and ensure their complete satisfaction.
            </p>
          </div>

          {/* Feature 2 */}
          <div>
            <div className="text-black-600 text-4xl mb-2">💡</div>
            <h3 className="font-bold bg-gray-200 px-2 inline-block">Continuous Innovations</h3>
            <p className="mt-2 bg-gray-100 p-3 shadow-sm rounded-md">
              Exploring new technologies to deliver advanced and cutting-edge solutions for our clients.
            </p>
          </div>

          {/* Feature 3 */}
          <div>
            <div className="text-black-600 text-4xl mb-2">🧑‍💼</div>
            <h3 className="font-bold bg-gray-200 px-2 inline-block">Integrity</h3>
            <p className="mt-2 bg-gray-100 p-3 shadow-sm rounded-md">
              We maintain strong data integrity through robust security measures and quality control.
            </p>
          </div>

          {/* Feature 4 */}
          <div>
            <div className="text-black-600 text-4xl mb-2">🎯</div>
            <h3 className="font-bold bg-gray-200 px-2 inline-block">Passion for Excellence</h3>
            <p className="mt-2 bg-gray-100 p-3 shadow-sm rounded-md">
              We are committed to delivering exceptional hybrid solar solutions that exceed expectations.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
