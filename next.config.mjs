/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            { source: '/meus_filhos', destination: '/meus-filhos', permanent: true },
        ];
    },
};

export default nextConfig;
