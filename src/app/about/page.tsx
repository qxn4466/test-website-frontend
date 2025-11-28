"use client";

import Image from "next/image";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Hero Section */}
      {/* ================================
    COMPANY OVERVIEW CARDS SECTION
================================ */}
<section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
  
  {/* Card 1 — R&D */}
  <div className="bg-black-50 rounded-2xl p-8 shadow-md">
    <div className="text-4xl mb-4">🧪</div>
    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
      Research & Development
    </h2>
    <p className="text-black-600 leading-7">
      Our R&D team pushes the boundaries of drone autonomy through cutting-edge
      advancements in AI, deep learning, computer vision, and sensor fusion.
      From swarm intelligence to GPS-denied navigation, we develop breakthrough
      technologies in partnership with universities and defense labs.
    </p>
  </div>

  {/* Card 2 — Product Development */}
  <div className="bg-black-50 rounded-2xl p-8 shadow-md">
    <div className="text-4xl mb-4">🛠️</div>
    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
      Product Development
    </h2>
    <p className="text-black-600 leading-7">
      We build complete mission-ready drone platforms—airframes, sensors,
      avionics, autopilots, and AI software. Our systems are designed for
      precision, durability, secure communication, and harsh environments.
      Certified under FAA, EASA and MIL-STD standards.
    </p>
  </div>

  {/* Card 3 — Client Engagement */}
  <div className="bg-black-50 rounded-2xl p-8 shadow-md">
    <div className="text-4xl mb-4">🤝</div>
    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
      Client Engagement & Project Management
    </h2>
    <p className="text-black-600 leading-7">
      We deliver tailored end-to-end solutions: requirement analysis, system
      design, POC demonstrations, milestone-based execution, pilot training,
      regulatory support, and operational deployment for enterprise and defense
      missions.
    </p>
  </div>

  {/* Card 4 — After Sales Support */}
  <div className="bg-black-50 rounded-2xl p-8 shadow-md">
    <div className="text-4xl mb-4">🛡️</div>
    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
      After-Sales Support & Lifecycle Management
    </h2>
    <p className="text-black-600 leading-7">
      We provide 24/7 technical assistance, remote diagnostics, OTA software
      updates, AI model improvements, hardware repairs, performance analytics,
      and upgrade paths—ensuring your drone fleet stays mission-ready.
    </p>
  </div>

</section>

{/* Closing Statement */}
<p className="text-xl italic text-center text-blue-700 max-w-4xl mx-auto mb-20 px-4">
  "From concept to deployment—and every flight in between—we are your trusted
  partner in autonomous aerial intelligence."
</p>

    </div>
  );
}
