/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  darkMode: 'class',
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './pages/**/*.js',
    './components/**/*.js',
  ],
  purge: [
    './pages/**/*.js',
    './components/**/*.js',
    './components/**/*.jsx',
  ],
  plugins: [
    require('@headlessui/tailwindcss')
  ],
  theme: {
    colors: {
      'calypso': {
        '50': '#f4f7fb',
        '100': '#e8eef6',
        '200': '#cbdcec',
        '300': '#9dbfdc',
        '400': '#689dc8',
        '500': '#4581b2',
        '600': '#346796',
        '700': '#2b5279',
        '800': '#274665',
        '900': '#253c55',
      },
      'primary': {
        "50":"#eff6ff",
        "100":"#dbeafe",
        "200":"#bfdbfe",
        "300":"#93c5fd",
        "400":"#60a5fa",
        "500":"#3b82f6",
        "600":"#2563eb",
        "700":"#1d4ed8",
        "800":"#1e40af",
        "900":"#1e3a8a"
      },
      'Gray': {
        "50":"#f9fafb",
        "100":"#f3f4f6",
        "200":"#e5e7eb",
        "300":"#d1d5db",
        "400":"#9ca3af",
        "500":"#6b7280",
        "600":"#4b5563",
        "700":"#374151",
        "800":"#1f2937",
        "900":"#111827"
      },
     
    }
    
  },
};

