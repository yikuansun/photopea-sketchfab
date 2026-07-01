import { exec } from "child_process";

const PORT = 1234;
exec(`npx vite dev --port ${PORT}`);

const url = `https://www.photopea.com#${encodeURIComponent(JSON.stringify({
    environment: {
        plugins: [
            {
                name: "Sketchfab",
                url: `http://localhost:${PORT}/?portal=photopea`,
                icon: "https://yikuansun.github.io/photopea-sketchfab/icon.png",
            }
        ]
    }
}))}`;

console.log(url);

const start = process.platform === 'darwin' ? 'open' : 
              process.platform === 'win32' ? 'start' : 'xdg-open';

exec(`${start} ${url}`);