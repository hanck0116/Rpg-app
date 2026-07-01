import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({base:'/Rpg-app/',plugins:[react(),VitePWA({registerType:'autoUpdate',includeAssets:['icon.svg'],manifest:{name:'NewTRPG 시트 관리자',short_name:'NewTRPG',description:'오프라인 NewTRPG 플레이어/NPC 시트 관리자',theme_color:'#24143a',background_color:'#120b1f',display:'standalone',start_url:'/Rpg-app/',scope:'/Rpg-app/',icons:[{src:'icon.svg',sizes:'any',type:'image/svg+xml',purpose:'any maskable'}]},workbox:{globPatterns:['**/*.{js,css,html,svg,webmanifest}'],navigateFallback:'/Rpg-app/index.html'}})]});
