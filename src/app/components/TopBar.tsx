    "use client";

    import {
      PhoneIcon,
      MapPinIcon,
    } from "@heroicons/react/24/outline";
    // Inline SVGs used to avoid external react-icons dependency
    function FacebookIcon(props: { className?: string }) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={props.className}
        >
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.92v-7.03H8.07v-2.9h2.23V9.41c0-2.2 1.31-3.41 3.31-3.41.96 0 1.96.17 1.96.17v2.15h-1.1c-1.08 0-1.42.67-1.42 1.36v1.64h2.42l-.39 2.9h-2.03v7.03C18.34 21.13 22 16.99 22 12z" />
        </svg>
      );
    }
    function InstagramIcon(props: { className?: string }) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={props.className}
        >
          <rect x="2" y="2" width="18" height="18" rx="5" ry="5" strokeWidth="1" />
          <circle cx="12" cy="12" r="3" strokeWidth="1" />
          <circle cx="17.5" cy="6.5" r="1" strokeWidth="1" />   
        </svg>
      );
    }
    export default function TopBar() {
      return (
      <div className="w-full bg-gray-100 text-gray-900 text-xs sm:text-sm">
  <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-3 gap-3">

    {/* Social Icons */}
    <div className="flex items-center space-x-4">
      <FacebookIcon className="h-5 w-5 text-black" />
      <InstagramIcon className="h-5 w-5 text-black" />
    </div>

    {/* Contact Info */}
    <div className="flex flex-col items-center sm:flex-row sm:items-center sm:space-x-6 text-center sm:text-left gap-1">

      <div className="flex items-center space-x-2">
        <PhoneIcon className="h-4 w-4 text-black" />
        <span>phone number</span>
      </div>

      <div className="flex items-center space-x-2">
        <MapPinIcon className="h-4 w-4 text-black" />
        <span>comp address</span>
      </div>

    </div>

  </div>
</div>


    );

    }
