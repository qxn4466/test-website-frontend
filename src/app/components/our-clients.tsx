"use client";

import type { ReactNode } from "react";
import {
  Rocket,
  BadgeCheck,
  Video,
  Shield,
  Phone,
} from "lucide-react";

/* ---------------- Floating Card Component ---------------- */

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
        floating-card 
        transition-all duration-500
        hover:-translate-y-4 hover:shadow-2xl
      `}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{text}</p>
    </div>
  );
}

/* ---------------- Main Page Component ---------------- */

export default function FloatingInfoCards() {
  return (
    <div className="w-full max-w-6xl mx-auto py-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* CARD 1 */}
        <FloatingCard
          color="bg-pink-50 hover:bg-pink-100"
          icon={<Rocket size={40} className="text-pink-600" />}
          title="Partner with the Next Leader in Drone AI"
          text={`We are in the advanced prototype and pilot-project phase,
seeking strategic founding partners for commercial and governmental deployments.`}
        />

        {/* CARD 2 */}
        <FloatingCard
          color="bg-violet-50 hover:bg-violet-100"
          icon={<BadgeCheck size={40} className="text-violet-600" />}
          title="Current Status & Achievements"
          text={`• Field-tested autonomous drones (BVLOS, GPS-denied, AI)
• Real-world demos (SAR, security, inspection, mapping)
• Multiple patents pending
• Backed by top-tier engineers & advisors`}
        />

        {/* CARD 3 */}
        <FloatingCard
          color="bg-cyan-50 hover:bg-cyan-100"
          icon={<Video size={40} className="text-cyan-600" />}
          title="Live Prototype Demonstrations"
          text={
            <>
              → <a href="#" className="text-blue-600 underline">Night SAR mission demo</a>{"\n"}
              → <a href="#" className="text-blue-600 underline">GPS-denied navigation</a>{"\n"}
              → <a href="#" className="text-blue-600 underline">Swarm coordination</a>{"\n"}
              → <a href="#" className="text-blue-600 underline">Obstacle avoidance at 80 km/h</a>
            </>
          }
        />

        {/* CARD 4 */}
        <FloatingCard
          color="bg-lime-50 hover:bg-lime-100"
          icon={<Shield size={40} className="text-lime-600" />}
          title="Target Sectors"
          text={`• Defense & homeland security
• Infrastructure inspection
• Public safety & disaster response
• Agriculture & surveying
• Mining & construction monitoring`}
        />

        {/* CARD 5 */}
        <FloatingCard
          color="bg-orange-50 hover:bg-orange-100"
          icon={<Phone size={40} className="text-orange-600" />}
          title="Become an Early Customer"
          text={
            <>
              Ready to become one of our first reference customers?{"\n\n"}
              <b>Email:</b> hello@yourcompany.com{"\n"}
              <b>Phone:</b> +1 (XXX) XXX-XXXX{"\n\n"}
              <a href="#" className="text-blue-600 underline font-semibold">
                Book a live demo →
              </a>
            </>
          }
        />

      </div>
    </div>
  );
}
