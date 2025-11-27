"use client";

import type { ReactNode } from "react";
import { Rocket, BadgeCheck, Video, Shield, Phone } from "lucide-react";

/* ---------------- Card Component ---------------- */

type FloatingCardProps = {
  icon: ReactNode;
  title: string;
  text: ReactNode;
  color: string;
};

function FloatingCard({ icon, title, text, color }: FloatingCardProps) {
  return (
    <div
      className={`
        p-8 rounded-3xl shadow-lg border
        ${color}
        transition-all duration-500
        hover:-translate-y-3 hover:shadow-2xl
      `}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <div className="text-gray-700 leading-relaxed">{text}</div>
    </div>
  );
}

/* ---------------- Main Section ---------------- */

export default function OurClients() {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* CARD 1 */}
        <FloatingCard
          color="bg-pink-50 hover:bg-pink-100"
          icon={<Rocket size={40} className="text-pink-600" />}
          title="Partner with the Next Leader in Drone AI"
          text={
            <>
              We are in the advanced prototype and pilot-project phase,
              seeking strategic founding partners for commercial and
              governmental deployments.
            </>
          }
        />

        {/* CARD 2 */}
        <FloatingCard
          color="bg-violet-50 hover:bg-violet-100"
          icon={<BadgeCheck size={40} className="text-violet-600" />}
          title="Current Status & Achievements"
          text={
            <ul className="list-disc pl-5 space-y-1">
              <li>Field-tested autonomous drones (BVLOS, GPS-denied, AI)</li>
              <li>Real-world demos (SAR, security, inspection, mapping)</li>
              <li>Multiple patents pending</li>
              <li>Backed by top-tier engineers & advisors</li>
            </ul>
          }
        />

        {/* CARD 3 */}
        <FloatingCard
          color="bg-cyan-50 hover:bg-cyan-100"
          icon={<Video size={40} className="text-cyan-600" />}
          title="Live Prototype Demonstrations"
          text={
            <ul className="space-y-1">
              <li>
                →{" "}
                <a href="#" className="text-blue-600 underline">
                  Night SAR mission demo
                </a>
              </li>
              <li>
                →{" "}
                <a href="#" className="text-blue-600 underline">
                  GPS-denied navigation
                </a>
              </li>
              <li>
                →{" "}
                <a href="#" className="text-blue-600 underline">
                  Swarm coordination
                </a>
              </li>
              <li>
                →{" "}
                <a href="#" className="text-blue-600 underline">
                  Obstacle avoidance at 80 km/h
                </a>
              </li>
            </ul>
          }
        />

        {/* CARD 4 */}
        <FloatingCard
          color="bg-lime-50 hover:bg-lime-100"
          icon={<Shield size={40} className="text-lime-600" />}
          title="Target Sectors"
          text={
            <ul className="list-disc pl-5 space-y-1">
              <li>Defense & homeland security</li>
              <li>Infrastructure inspection</li>
              <li>Public safety & disaster response</li>
              <li>Agriculture & surveying</li>
              <li>Mining & construction monitoring</li>
            </ul>
          }
        />

        {/* CARD 5 */}
        <FloatingCard
          color="bg-orange-50 hover:bg-orange-100"
          icon={<Phone size={40} className="text-orange-600" />}
          title="Become an Early Customer"
          text={
            <div className="space-y-2">
              <p>Ready to become one of our first reference customers?</p>

              <p>
                <b>Email:</b>{" "}
                <a href="mailto:hello@yourcompany.com" className="text-blue-600 underline">
                  hello@yourcompany.com
                </a>
              </p>

              <p>
                <b>Phone:</b> +1 (XXX) XXX-XXXX
              </p>

              <a
                href="#"
                className="text-blue-600 underline font-semibold mt-2 inline-block"
              >
                Book a live demo →
              </a>
            </div>
          }
        />

      </div>
    </section>
  );
}
