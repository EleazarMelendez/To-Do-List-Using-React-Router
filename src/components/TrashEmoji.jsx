import * as React from "react"

export const TrashEmoji = (props) => (
    <svg
    id="Icons"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="linear-gradient"
        x1={12}
        x2={12}
        y1={5.34}
        y2={23.104}
      >
        <stop offset={0} stopColor="#766cff" />
        <stop offset={1} stopColor="#3c3cef" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="linear-gradient-2"
        x1={12}
        x2={12}
        y1={-0.255}
        y2={6.042}
      >
        <stop offset={0} stopColor="#a6f9ff" />
        <stop offset={1} stopColor="#3ed0f7" />
      </linearGradient>
      <style>{".cls-2{fill:#2b2be0}"}</style>
    </defs>
    <path
      d="M4 5h16v15a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5Z"
      style={{
        fill: "url(#linear-gradient)",
      }}
    />
    <path
      className="cls-2"
      d="M12 19a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1ZM16 19a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1ZM8 19a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1Z"
    />
    <path
      d="M22 4h-6V3a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H2a1 1 0 0 0 0 2h20a1 1 0 0 0 0-2ZM10 4V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1Z"
      style={{
        fill: "url(#linear-gradient-2)",
      }}
    />
  </svg>
)