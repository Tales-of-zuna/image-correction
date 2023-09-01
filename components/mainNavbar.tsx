"use client";
import { Image } from "@nextui-org/react";

const MainNavbar = () => {
  return (
    <div className=" w-screen fixed bg-transparent py-8 flex justify-center">
      <div className=" w-2/3 flex items-center text-stone-700 justify-between">
        <button className="px-4 items-center py-2 flex gap-4 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-stone-100"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <title>vimeo</title>
            <path
              className="path"
              d="M22,7.42C21.91,9.37 20.55,12.04 17.92,15.44C15.2,19 12.9,20.75 11,20.75C9.85,20.75 8.86,19.67 8.05,17.5C7.5,15.54 7,13.56 6.44,11.58C5.84,9.42 5.2,8.34 4.5,8.34C4.36,8.34 3.84,8.66 2.94,9.29L2,8.07C3,7.2 3.96,6.33 4.92,5.46C6.24,4.32 7.23,3.72 7.88,3.66C9.44,3.5 10.4,4.58 10.76,6.86C11.15,9.33 11.42,10.86 11.57,11.46C12,13.5 12.5,14.5 13.05,14.5C13.47,14.5 14.1,13.86 14.94,12.53C15.78,11.21 16.23,10.2 16.29,9.5C16.41,8.36 15.96,7.79 14.94,7.79C14.46,7.79 13.97,7.9 13.46,8.12C14.44,4.89 16.32,3.32 19.09,3.41C21.15,3.47 22.12,4.81 22,7.42Z"
            />
          </svg>
          <style jsx>{`
            @media (prefers-reduced-motion) {
              .path {
                animation: none !important;
                stroke-dasharray: unset !important;
              }
            }
            @keyframes grow {
              0% {
                stroke-dashoffset: 1px;
                stroke-dasharray: 0 100px;
                opacity: 0;
              }
              10% {
                opacity: 1;
              }
              40% {
                stroke-dasharray: 100px 0;
              }
              85% {
                stroke-dasharray: 100px 0;
              }
              95%,
              to {
                stroke-dasharray: 0 100px;
              }
            }

            .path {
              stroke-dashoffset: 1px;
              stroke-dasharray: 100px 0;
              animation: grow 10s ease forwards infinite;
              transform-origin: center;
              stroke: #292524;
              animation-delay: 0s;
            }
          `}</style>
          <p className="text-xl font-bold">{`< Image correction />`}</p>
        </button>
        <button className="px-4 py-2 transition-all transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl shadow-sm active:scale-95 font-bold text-white rounded-xl bg-stone-500">
          Need help?
        </button>
      </div>
    </div>
  );
};

export default MainNavbar;
