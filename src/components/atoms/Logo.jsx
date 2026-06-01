export default function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 210 40"
      height="32px"
      className="text-slate-900 dark:text-white transition-colors duration-300"
    >
      <defs>
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <linearGradient id="outerFlameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="#E23B00" />
          <stop offset="40%" stop-color="#FF6A00" />
          <stop offset="80%" stop-color="#FFAA00" />
          <stop offset="100%" stop-color="#FFD060" />
        </linearGradient>

        <linearGradient id="innerGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="#FFA24D" />
          <stop offset="60%" stop-color="#FFF3CE" />
          <stop offset="100%" stop-color="#FFFFFF" />
        </linearGradient>
      </defs>

      <g transform="translate(0, 0)">
        <path
          d="M 18,37 
             C 10,37 5,30 5,22 
             C 5,13 11,10 13,5 
             C 14,10 17,13 19,10 
             C 21,7 21.5,4 22.5,2 
             C 23.5,6 27,9 29,13 
             C 32,20 31,28 27,33 
             C 24,36 21,37 18,37 Z"
          fill="#FF5100"
          opacity="0.4"
          filter="url(#glow)"
        />

        <path
          d="M 18,36 
             C 10.5,36 6,29.5 6,21.5 
             C 6,13 11.5,10 14,5.5 
             C 14.7,11 17.3,13.5 19,11 
             C 20.6,8.2 21.1,4.5 22,2.5 
             C 22.7,7 26.5,9.7 28.3,14.2 
             C 31,20.5 30.1,27.7 26.5,32.8 
             C 24.1,35.5 20.8,36 18,36 Z"
          fill="url(#outerFlameGrad)"
        />

        <path
          d="M 18,17.8
             C 16.9,17.8 16.2,18.7 16.2,19.6 
             C 16.2,20.8 17.3,21.4 18,21.4 
             C 18.7,21.4 19.8,20.8 19.8,19.6 
             C 19.8,18.7 19.1,17.8 18,17.8 Z"
          fill="url(#innerGrad)"
        />

        <path
          d="M 17.6,22.9
             C 16.4,23.2 15.3,24.5 15.5,26.8 
             C 15.7,29.1 16.7,31.3 18.2,32 
             C 20,32.7 20.9,31.1 20.5,29.1 
             C 20.2,27.1 18.9,24.5 18.3,23 
             C 18.2,22.5 17.8,22.5 17.6,22.9 Z"
          fill="url(#innerGrad)"
        />
      </g>

      <g id="Logo-Text" transform="translate(45, 27)">
        <text
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="900"
          fontSize="22"
          letterSpacing="1"
          fill="currentColor"
        >
          IGNITE{" "}
          <tspan fontWeight="normal" fill="currentColor">
            LEARN
          </tspan>
        </text>
      </g>
    </svg>
  );
}
