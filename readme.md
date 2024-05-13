<!--
sm - 640
md - 768
lg - 1024
xl - 1280
2xl - 1536
xs - 475 -->

<!-- min-width -->

<!-- theme : {
screens:{
'sm':'992px'
},
} -->

<!-- both -->

<!-- theme : {
screens:{
'sm':{'min':'0px','max':'640px'},
md.............
},
} -->

<!-- https://mobirise.com/extensions/shopm5/fabric-store/ -->
<!-- https://mobirise.com/extensions/shopm5/fabric-store/ -->

npm init -y
npm install -D tailwindcss postcss autoprefixer vite
npx tailwindcss init -p
create input.css and add :
@tailwind base;
@tailwind components;
@tailwind utilities;

in tailwind.config.js replace content:[] to content:["*"],
add "start":"vite" in script in package.json
npm run start

item.style.transform = `translateX(-${index * 100}%)`;

press r + enter to restart the server
press u + enter to show server url  
press o + enter to open in browser  
press c + enter to clear console  
press q + enter to quit


all api = https://search.brave.com/search?q=free+api&source=desktop&summary=1



Shoelace : useful for add better features in website, not provide too much stylish but yeah it is good
Tan-Stack : it's used in frameworks mostly 
Radix UI : Don't Style Too Much But Add Functionality, 
React Aria : similar and competitor of Radix UI
Shad-Cn : it uses Radix UI and work more on it, so we can say Shad-Cn> Radix UI and React Aria
DaisyUi : It uses tailwind and bootstrap, because we add so much classes in tailwind, but they put all classes in this framework and more readable