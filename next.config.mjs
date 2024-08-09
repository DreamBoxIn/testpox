/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Habilita el modo estricto de React para detectar problemas potenciales
  swcMinify: true,       // Habilita la minificación usando SWC para construir el proyecto más rápido

  // Configuración de optimización de imágenes
  images: {
    domains: ['example.com'], // Reemplaza con los dominios desde los que cargarás imágenes externas
    deviceSizes: [320, 420, 768, 1024, 1200], // Configura tamaños de dispositivo
    imageSizes: [16, 32, 48, 64, 96],         // Configura tamaños de imagen
  },

  // Configuración de encabezados para CORS y CSP
  async headers() {
    return [
      {
        source: '/(.*)', // Aplica a todas las rutas
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // Permite acceso desde cualquier origen
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,POST,PUT,DELETE,OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-Requested-With, Content-Type, Authorization',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;