(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const L=(e={})=>{const t="/dinushka-portfolio/";return`
    <nav class="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-gray-800 z-50">
      <div class="section-container">
        <div class="flex items-center justify-between h-16 sm:h-20">
          <!-- Navigation Links -->
          <ul class="flex gap-4 sm:gap-8">
            ${e.isProjectPage?`<li><a href="${t}#work" class="nav-link text-sm sm:text-base">3D Design</a></li>
       <li><a href="${t}#design-2d" class="nav-link text-sm sm:text-base">2D Design</a></li>
       <li><a href="${t}#contact" class="nav-link text-sm sm:text-base">Contact</a></li>`:`<li><a href="#work" class="nav-link text-sm sm:text-base">3D Design</a></li>
       <li><a href="#design-2d" class="nav-link text-sm sm:text-base">2D Design</a></li>
       <li><a href="#contact" class="nav-link text-sm sm:text-base">Contact</a></li>`}
          </ul>
          
          <!-- Logo/Name - Centered (hidden on small screens) -->
          <a href="${t}" class="absolute left-1/2 transform -translate-x-1/2 text-lg sm:text-xl font-bold italic text-white hidden lg:block">
            Dinushka Samaranayake
          </a>
          
          <!-- Logo - Right -->
          <a href="${t}" class="flex-shrink-0">
            <img src="${t}logo.jpeg" alt="DS Logo" class="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover" />
          </a>
        </div>
      </div>
    </nav>
  `},P=()=>`
    <section class="pt-16 sm:pt-20 md:pt-24 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden hero-section">
      <!-- Background gradient effect -->
      <div class="absolute inset-0 -z-20 h-full w-full bg-slate-900 opacity-80"></div>
      <div class="absolute inset-0 -z-20 h-full w-full bg-gradient-to-b from-slate-800 to-slate-900"></div>

      <!-- Background Slideshow -->
      <div id="hero-bg" class="absolute inset-0 w-full h-full pointer-events-none z-0"></div>

      <div class="text-center max-w-4xl mx-auto relative z-10">
        <!-- Main heading -->
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-white">
          Hi, I'm Dinushka!
        </h1>

        <!-- Subtitle -->
        <p class="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 font-light max-w-2xl mx-auto">
          Welcome to my portfolio
        </p>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 scroll-indicator cursor-pointer text-gray-500 hover:text-blue-400 transition-colors z-10">
        <svg class="w-6 h-6 sm:w-8 sm:h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <style>
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 0.15;
            transform: translateX(0);
          }
        }
        
        @keyframes slideOutToLeft {
          from {
            opacity: 0.15;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-50px);
          }
        }
        
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 0.15;
            transform: translateX(0);
          }
        }
        
        @keyframes slideOutToRight {
          from {
            opacity: 0.15;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(50px);
          }
        }

        #hero-bg img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          z-index: 0;
        }
        
        #hero-bg img.active.from-left {
          animation: slideInFromLeft 2.5s ease-out forwards;
        }
        
        #hero-bg img.active.from-right {
          animation: slideInFromRight 2.5s ease-out forwards;
        }
        
        #hero-bg img.inactive.to-left {
          animation: slideOutToLeft 2.5s ease-out forwards;
        }
        
        #hero-bg img.inactive.to-right {
          animation: slideOutToRight 2.5s ease-out forwards;
        }
      </style>

    </section>
  `,N=e=>{const t=e.projectType||"Individual",n=e.softwareUsed&&e.softwareUsed.length>0?Array.isArray(e.softwareUsed)?e.softwareUsed.join(", "):e.softwareUsed:"Blender & Adobe After Effects",o=t==="Individual"?"bg-blue-900/50 text-blue-300 border-blue-700/50":"bg-purple-900/50 text-purple-300 border-purple-700/50",s=e.thumbnail?`<img src="${e.thumbnail}" alt="${e.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">`:'<span class="text-gray-600 text-sm">Thumbnail</span>';return`
    <a href="project.html?id=${e.id}" class="project-card group block">
      <div class="h-56 sm:h-64 md:h-72 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center border-b border-gray-700 group-hover:border-gray-600 transition-colors overflow-hidden">
        ${s}
      </div>
      <div class="p-4 sm:p-6 bg-gray-800/30">
        <h3 class="text-xl sm:text-2xl font-bold text-white mb-1">${e.name}</h3>
        <p class="text-gray-400 text-sm sm:text-base mb-4">${e.date}</p>
        <div class="mb-3 sm:mb-4">
          <p class="text-xs sm:text-sm text-gray-500 uppercase tracking-wide mb-2">Software Used</p>
          <p class="text-sm sm:text-base text-gray-300">${n}</p>
        </div>
        <div>
          <p class="text-xs sm:text-sm text-gray-500 uppercase tracking-wide mb-2">Project Type</p>
          <span class="inline-block px-3 py-1 ${o} text-xs sm:text-sm rounded-full border">${t}</span>
        </div>
      </div>
    </a>
  `},B=e=>`
    <section id="work" class="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div class="section-container">
        <div class="mb-12 sm:mb-16 md:mb-20">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Featured Work
          </h2>
          <p class="text-gray-400 text-base sm:text-lg md:text-xl">
            Projects showcasing my passion for 3D modelling, game development, and design.
          </p>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          ${e.map(N).join("")}
        </div>
      </div>
    </section>
  `,z=e=>`
    <a href="2d-project.html?id=${e.id}" class="project-card group block">
      <div class="h-56 sm:h-64 md:h-72 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center border-b border-gray-700 group-hover:border-gray-600 transition-colors overflow-hidden rounded-t-xl">
        <img src="${e.thumbnail}" alt="${e.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.style.display='none'; this.parentElement.innerHTML='<span class=\\'text-gray-600 text-sm\\'>Image coming soon</span>';">
      </div>
      <div class="p-4 sm:p-6 bg-gray-800/30 rounded-b-xl">
        <h3 class="text-lg sm:text-xl font-bold text-white text-center">${e.name}</h3>
      </div>
    </a>
  `,D=e=>`
    <section id="design-2d" class="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div class="section-container">
        <div class="mb-12 sm:mb-16 md:mb-20">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            2D Design
          </h2>
          <p class="text-gray-400 text-base sm:text-lg md:text-xl">
            Illustrations, concept art, and drawings.
          </p>
        </div>

        <!-- 2D Art Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          ${e.map(z).join("")}
        </div>
      </div>
    </section>
  `,_=()=>[{name:"LinkedIn",url:"https://lk.linkedin.com/in/dinushkasam",icon:"linkedin"},{name:"YouTube",url:"https://youtube.com/@dinushkasam",icon:"youtube"},{name:"GitHub",url:"https://github.com/dinushkasam",icon:"github"},{name:"Email",url:"mailto:dinushkasam@gmail.com",icon:"email"}],H={linkedin:`<svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z"/>
  </svg>`,youtube:`<svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>`,github:`<svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>`,email:`<svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>`},q=()=>_().map(t=>`
    <a href="${t.url}" target="_blank" rel="noopener noreferrer" class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-700 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110">
      ${H[t.icon]||""}
    </a>
  `).join(""),O=()=>`
    <section id="contact" class="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div class="section-container max-w-3xl">
        <!-- Contact Heading -->
        <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-8 sm:mb-12">
          Contact
        </h2>

        <!-- Social Links Section -->
        <div class="text-center mb-12 sm:mb-16">
          <p class="text-gray-400 text-base sm:text-lg md:text-xl mb-8">
            You can reach me through any of the following social links
          </p>

          <!-- Social Icons -->
          <div class="flex justify-center gap-6 sm:gap-8 mb-12 sm:mb-16">
            ${q()}
          </div>
        </div>

        <!-- Message Form -->
        <div class="text-center mb-8 sm:mb-12">
          <p class="text-gray-400 text-base sm:text-lg md:text-xl">
            If you have any questions leave me a message
          </p>
        </div>

        <!-- Contact Form -->
        <form class="contact-form space-y-4 sm:space-y-6 max-w-2xl mx-auto" action="https://formsubmit.co/ajax/dinushkasam@gmail.com" method="POST">
          <!-- FormSubmit config -->
          <input type="hidden" name="_subject" value="New Portfolio Contact Message">
          <input type="hidden" name="_template" value="table">
          <!-- Honeypot field for spam protection (hidden from users) -->
          <input type="text" name="_honey" style="display:none" tabindex="-1" autocomplete="off">
          <div>
            <label class="block text-gray-300 text-sm sm:text-base font-medium mb-2">
              Name <span class="text-red-400">*</span>
            </label>
            <input 
              type="text" 
              name="name"
              placeholder="Your Name..." 
              required
              minlength="2"
              maxlength="100"
              class="input-field"
            >
          </div>
          <div>
            <label class="block text-gray-300 text-sm sm:text-base font-medium mb-2">
              Email Address <span class="text-red-400">*</span>
            </label>
            <input 
              type="email" 
              name="email"
              placeholder="Your Email Address..." 
              required
              maxlength="254"
              class="input-field"
            >
          </div>
          <div>
            <label class="block text-gray-300 text-sm sm:text-base font-medium mb-2">
              Message <span class="text-red-400">*</span>
            </label>
            <textarea 
              name="message"
              placeholder="Your Message..." 
              rows="6" 
              required
              minlength="10"
              maxlength="5000"
              class="input-field resize-none"
            ></textarea>
          </div>
          <div class="text-center">
            <button type="submit" class="btn-primary">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  `,S=()=>`
    <footer class="border-t border-gray-800 bg-slate-900/50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div class="section-container">
        <p class="text-gray-500 text-sm sm:text-base">
          &copy; 2026 Dinushka Samaranayake. All rights reserved.
        </p>
      </div>
    </footer>
  `,F=()=>`
    <button id="scroll-to-top" class="fixed bottom-8 right-8 w-14 h-14 bg-gray-700/80 hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 invisible z-50 shadow-lg" aria-label="Scroll to top">
      <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>
    </button>
  `,R={success:"bg-green-600 border-green-500",error:"bg-red-600 border-red-500",info:"bg-blue-600 border-blue-500"},X={success:`<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
  </svg>`,error:`<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
  </svg>`,info:`<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>`};let h=null;const U=()=>(h||(h=document.createElement("div"),h.id="toast-container",h.className="fixed top-4 right-4 z-[100] flex flex-col gap-2",document.body.appendChild(h)),h),b=({message:e,type:t,duration:n=5e3})=>{const o=U(),s=document.createElement("div");s.className=`
    flex items-center gap-3 px-4 py-3 rounded-lg border text-white shadow-lg
    transform translate-x-full opacity-0 transition-all duration-300
    ${R[t]}
  `.trim().replace(/\s+/g," "),s.innerHTML=`
    <span class="flex-shrink-0">${X[t]}</span>
    <span class="text-sm font-medium">${W(e)}</span>
    <button class="ml-2 flex-shrink-0 hover:opacity-70 transition-opacity" aria-label="Close">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  `,o.appendChild(s),requestAnimationFrame(()=>{s.classList.remove("translate-x-full","opacity-0"),s.classList.add("translate-x-0","opacity-100")}),s.querySelector("button")?.addEventListener("click",()=>A(s)),n>0&&setTimeout(()=>A(s),n)},A=e=>{e.classList.add("translate-x-full","opacity-0"),setTimeout(()=>e.remove(),300)},W=e=>{const t=document.createElement("div");return t.textContent=e,t.innerHTML},Y=()=>{const e=document.querySelectorAll('a[href^="#"]'),t=document.querySelectorAll("section[id]");e.forEach(o=>{o.addEventListener("click",s=>{s.preventDefault();const a=o.getAttribute("href");if(a){const r=document.querySelector(a);r&&r.scrollIntoView({behavior:"smooth",block:"start"})}})});const n=()=>{let o="";t.forEach(s=>{const a=s.offsetTop;window.scrollY>=a-300&&(o=s.getAttribute("id")||"")}),e.forEach(s=>{s.classList.remove("text-blue-400"),s.getAttribute("href")===`#${o}`&&s.classList.add("text-blue-400")})};window.addEventListener("scroll",n)},G=()=>{const e=document.querySelector(".scroll-indicator"),t=document.querySelector("#work");e&&t&&e.addEventListener("click",()=>{t.scrollIntoView({behavior:"smooth"})})},V=()=>{const e=document.getElementById("scroll-to-top");if(e){const t=()=>{window.scrollY>300?(e.classList.remove("opacity-0","invisible"),e.classList.add("opacity-100","visible")):(e.classList.remove("opacity-100","visible"),e.classList.add("opacity-0","invisible"))};window.addEventListener("scroll",t),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}},Z=()=>{const e={threshold:.1,rootMargin:"0px 0px -50px 0px"},t=new IntersectionObserver(o=>{o.forEach(s=>{s.isIntersecting&&(s.target.classList.add("opacity-100","translate-y-0"),s.target.classList.remove("opacity-0","translate-y-5"))})},e);document.querySelectorAll(".project-card, .skill-item, .service-card").forEach(o=>{o.classList.add("opacity-0","translate-y-5","transition-all","duration-600"),t.observe(o)})},k="portfolio_scroll_position",J=()=>{sessionStorage.setItem(k,String(window.scrollY))},E=()=>{const e=sessionStorage.getItem(k);if(e!==null){const t=parseInt(e,10);if(!isNaN(t))return requestAnimationFrame(()=>{window.scrollTo(0,t)}),sessionStorage.removeItem(k),!0}return!1},K=()=>{document.querySelectorAll(".project-card").forEach(e=>{e.addEventListener("click",()=>{J()})})},f={NAME_MIN:2,NAME_MAX:100,EMAIL_MAX:254,MESSAGE_MIN:10,MESSAGE_MAX:5e3},Q=[/(\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|ALTER|CREATE|TRUNCATE)\b.*\b(FROM|INTO|TABLE|WHERE)\b)/i,/(\b(OR|AND)\b\s+\d+\s*=\s*\d+)/i,/(--|#|\/\*|\*\/)/,/(\b(EXEC|EXECUTE|XP_)\b)/i,/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,/javascript:/i,/on\w+\s*=/i,/(<iframe|<object|<embed|<applet)/i],ee=()=>{const e=document.querySelector(".contact-form");e&&(e.addEventListener("submit",te),e.querySelectorAll("input, textarea").forEach(n=>{n.addEventListener("blur",o=>{const s=o.target;s.value=j(s.value)})}))},te=async e=>{e.preventDefault();const t=e.target,n=new FormData(t),o=t.querySelector('button[type="submit"]'),s=n.get("_honey");if(s&&s.length>0){b({message:"Message sent successfully!",type:"success"}),t.reset();return}const a={name:j(n.get("name")||""),email:se(n.get("email")||""),message:j(n.get("message")||"")};n.set("name",a.name),n.set("email",a.email),n.set("message",a.message);const r=re(a);if(!r.valid){b({message:r.message,type:"error"});return}if(oe(a)){b({message:"Invalid characters detected. Please remove special sequences.",type:"error"});return}try{if(o&&(o.disabled=!0,o.textContent="Sending..."),(await fetch(t.action,{method:"POST",body:n,headers:{Accept:"application/json"}})).ok)b({message:"Message sent successfully! I'll get back to you soon.",type:"success"}),t.reset();else throw new Error("Form submission failed")}catch(d){b({message:"Failed to send message. Please try again later.",type:"error"}),console.error("Form submission error:",d)}finally{o&&(o.disabled=!1,o.textContent="Send Message")}},j=e=>e?e.replace(/<[^>]*>/g,"").replace(/\0/g,"").replace(/\s+/g," ").trim():"",se=e=>e?e.toLowerCase().trim().replace(/<[^>]*>/g,"").replace(/\s/g,"").replace(/[^a-z0-9.@+_-]/gi,""):"",oe=e=>{const t=`${e.name} ${e.email} ${e.message}`;return Q.some(n=>n.test(t))},re=e=>e.name.trim()?e.name.length<f.NAME_MIN?{valid:!1,message:`Name must be at least ${f.NAME_MIN} characters.`}:e.name.length>f.NAME_MAX?{valid:!1,message:`Name must be less than ${f.NAME_MAX} characters.`}:e.email.trim()?e.email.length>f.EMAIL_MAX?{valid:!1,message:"Email address is too long."}:ae(e.email)?e.message.trim()?e.message.length<f.MESSAGE_MIN?{valid:!1,message:`Message must be at least ${f.MESSAGE_MIN} characters.`}:e.message.length>f.MESSAGE_MAX?{valid:!1,message:`Message must be less than ${f.MESSAGE_MAX} characters.`}:{valid:!0,message:""}:{valid:!1,message:"Please enter a message."}:{valid:!1,message:"Please enter a valid email address."}:{valid:!1,message:"Please enter your email address."}:{valid:!1,message:"Please enter your name."},ae=e=>/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e),x="https://pub-37c984a390cf46e299cda313408bfe6a.r2.dev";async function C(){const e=await fetch(`${x}/index.json?t=${Date.now()}`);if(!e.ok)throw new Error("Failed to fetch project index");return e.json()}async function v(e,t){const n=await fetch(`${x}/${t}/config.json?t=${Date.now()}`);if(!n.ok)throw new Error(`Failed to fetch metadata for project: ${t}`);const o=await n.json(),s=o;return s.id=t,s.thumbnail&&(s.thumbnail=w(t,s.thumbnail)),s.sections&&Array.isArray(s.sections)&&(s.sections=s.sections.map(a=>{const r={...a};return a.type==="grid"&&Array.isArray(a.src)?r.src=a.src.map(d=>w(t,d)):typeof a.src=="string"&&(r.src=w(t,a.src)),a.thumbnail&&(r.thumbnail=w(t,a.thumbnail)),r})),o}async function I(e,t){const n=t.map(o=>v(e,o));return Promise.all(n)}function w(e,t){if(!t)return"";if(t.startsWith("http")||t.startsWith("blob:")||t.startsWith("data:"))return t;const n=t.startsWith("/")?t.slice(1):t;return`${x}/${e}/${n}`}async function T(e){let t=document.getElementById("project-sidebar");t||(t=document.createElement("aside"),t.id="project-sidebar",document.body.appendChild(t));const n=document.querySelector("nav");if(n){const i=document.createElement("button");i.id="sidebar-toggle",i.innerHTML="<span>☰</span>",i.style.position="absolute",i.style.top="50%",i.style.transform="translateY(-50%)",i.style.left="50px",i.style.background="transparent",i.style.border="none",i.style.color="white",i.style.fontSize="24px",i.style.cursor="pointer",i.addEventListener("click",()=>{const c=document.getElementById("project-sidebar");if(c){c.classList.toggle("open");const p=c.querySelectorAll(".sidebar-section");c.classList.contains("open")?p.forEach(m=>m.classList.add("open")):p.forEach(m=>m.classList.remove("open"))}}),n.appendChild(i)}const o=document.createElement("style");o.textContent=`
    #sidebar-toggle {
      outline: none;
    }
    #sidebar-toggle:focus {
      outline: none;
      box-shadow: none;
    }
  `,document.head.appendChild(o);let s=e;s||(s=new URLSearchParams(window.location.search).get("id")||void 0);let a=[],r=[];const d=sessionStorage.getItem("sidebar_projects3d"),l=sessionStorage.getItem("sidebar_projects2d");if(d&&l)try{a=JSON.parse(d),r=JSON.parse(l)}catch{a=[],r=[]}if(!a.length||!r.length){const i=await C();[a,r]=await Promise.all([Promise.all(i["3d"].map(c=>v("3d",c))),Promise.all(i["2d"].map(c=>v("2d",c)))]),sessionStorage.setItem("sidebar_projects3d",JSON.stringify(a)),sessionStorage.setItem("sidebar_projects2d",JSON.stringify(r))}t.innerHTML=`
    <style>
      #project-sidebar {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 200px; /* Increased width */
        background: rgba(15,23,42,0.92);
        border-right: 1px solid #222;
        z-index: 60;
        transition: width 0.25s cubic-bezier(.4,0,.2,1);
        overflow-x: hidden;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 56px;
      }
      #project-sidebar:hover {
        width: 260px;
        box-shadow: 2px 0 16px 0 rgba(0,0,0,0.12);
      }
      .sidebar-section {
        width: 100%;
        margin-bottom: 18px;
      }
      .sidebar-section-header {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        cursor: pointer;
        font-weight: 600;
        color: #cbd5e1;
        font-size: 1rem;
        border-radius: 6px;
        transition: background 0.15s;
      }
      .sidebar-section-header:hover {
        background: #1e293b;
      }
      .sidebar-section-list {
        width: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
        display: none;
        flex-direction: column;
        gap: 2px;
      }
      .sidebar-section.open .sidebar-section-list {
        display: flex;
      }
      .sidebar-item {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 4px 12px;
        border-radius: 6px;
        cursor: pointer;
        transition: background 0.15s;
        white-space: nowrap;
        font-size: 0.95rem;
      }
      .sidebar-item.active {
        background: #334155;
        font-weight: bold;
      }
      .sidebar-thumb {
        width: 32px;
        height: 32px;
        border-radius: 4px;
        object-fit: cover;
        margin-right: 0;
        flex-shrink: 0;
      }
      #project-sidebar:not(:hover) .sidebar-section-header span,
      #project-sidebar:not(:hover) .sidebar-item span {
        display: none;
      }
    </style>
    <div class="sidebar-section" id="sidebar-3d">
      <div class="sidebar-section-header" tabindex="0">
        <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2l9 5-9 5-9-5 9-5zm0 13l9-5-9-5-9 5-9 5zm0 0v9"></path>
        </svg>
        <span>3D Projects</span>
        <button class="dropdown-toggle" aria-label="Toggle 3D Projects">▼</button>
      </div>
      <ul class="sidebar-section-list">
        ${a.map(i=>`
          <li class="sidebar-item${i.id===s?" active":""}" data-id="${i.id}">
            <img src="${i.thumbnail}" alt="${i.name}" class="sidebar-thumb" />
            <span>${i.name}</span>
          </li>
        `).join("")}
      </ul>
    </div>
    <div class="sidebar-section" id="sidebar-2d">
      <div class="sidebar-section-header" tabindex="0">
        <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke-width="2"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h8"/>
        </svg>
        <span>2D Projects</span>
        <button class="dropdown-toggle" aria-label="Toggle 2D Projects">▼</button>
      </div>
      <ul class="sidebar-section-list">
        ${r.map(i=>`
          <li class="sidebar-item${i.id===s?" active":""}" data-id="${i.id}">
            <img src="${i.thumbnail}" alt="${i.name}" class="sidebar-thumb" />
            <span>${i.name}</span>
          </li>
        `).join("")}
      </ul>
    </div>
  `,t.querySelectorAll(".sidebar-section-header").forEach(i=>{i.querySelector(".dropdown-toggle")?.addEventListener("click",p=>{p.stopPropagation();const m=i.parentElement;m&&m.classList.toggle("open")}),i.addEventListener("click",()=>{const p=i.parentElement;p&&p.classList.toggle("open")}),i.addEventListener("keydown",p=>{const m=p;if(m.key==="Enter"||m.key===" "){const y=i.parentElement;y&&y.classList.toggle("open")}})}),t.querySelectorAll("#sidebar-3d .sidebar-item").forEach(i=>{i.addEventListener("click",()=>{const c=i.getAttribute("data-id");c&&(window.location.href=`/project.html?id=${c}`)})}),t.querySelectorAll("#sidebar-2d .sidebar-item").forEach(i=>{i.addEventListener("click",()=>{const c=i.getAttribute("data-id");c&&(window.location.href=`/2d-project.html?id=${c}`)})});const g=document.getElementById("project-sidebar");g&&(g.addEventListener("mouseleave",()=>{g.classList.remove("open")}),g.addEventListener("mouseenter",()=>{g.classList.add("open")}));const u=document.createElement("style");u.textContent=`
    #sidebar-toggle {
      z-index: 100;
    }
    #project-sidebar {
      transform: translateX(-100%);
      transition: transform 0.3s ease;
      background: rgba(15, 23, 42, 0.9); /* Semi-transparent background */
      width: 130px; 
    }
    #project-sidebar.open {
      transform: translateX(0);
    }
    #project-sidebar .sidebar-item {
      background: rgba(255, 255, 255, 0.1); /* Semi-transparent item background */
      font-size: 13px; 
    }
    #project-sidebar .sidebar-item:hover {
      background: rgba(255, 255, 255, 0.2); /* Slightly more visible on hover */
    }
    
    /* Hide sidebar on screens smaller than 1400px to prevent overlap */
    @media (max-width: 1290px) {
      #sidebar-toggle,
      #project-sidebar {
        display: none !important;
      }
    }
  `,document.head.appendChild(u)}const ne=(e,t)=>{const n=document.getElementById("app");n&&(n.innerHTML=`
    ${L()}
    ${P()}
    ${B(e)}
    ${D(t)}
    ${O()}
    ${S()}
    ${F()}
  `,setTimeout(()=>{if(!(typeof E=="function"?E():!1)&&window.location.hash){const s=document.querySelector(window.location.hash);s&&s.scrollIntoView({behavior:"smooth",block:"start"})}fetch(`${x}/index.json?t=${Date.now()}`).then(s=>s.json()).then(s=>{const a=Array.isArray(s.hero)?s.hero:[];if(!a.length)return;const r=a.map(c=>c.startsWith("http")||c.startsWith("blob:")||c.startsWith("data:")?c:`${x}/${c}`);let d=0;const l=document.getElementById("hero-bg");let g=!0;r.forEach(c=>{const p=new window.Image;p.src=c});function u(){return Math.random()>.5?"left":"right"}function i(){if(!l||!r.length)return;d=(d+1)%r.length;const c=document.createElement("img");c.src=r[d];const p=u();if(c.className=`inactive from-${p}`,l.appendChild(c),setTimeout(()=>{c.className=`active from-${p}`},50),g)g=!1;else{const m=l.querySelectorAll("img")[0];if(m){const y=u();m.className=`inactive to-${y}`,setTimeout(()=>{m.parentNode&&m.parentNode.removeChild(m)},2500)}}setTimeout(i,4e3)}setTimeout(i,500)})},0))},ie=async()=>{const e=document.getElementById("nav-container"),t=document.getElementById("footer-container"),n=document.getElementById("project-title"),o=document.getElementById("project-content");e&&(e.innerHTML=L({isProjectPage:!0}),T()),t&&(t.innerHTML=S());const a=new URLSearchParams(window.location.search).get("id");if(a)try{const r=await v("3d",a);if(r&&(n&&(n.textContent=r.name,r.description&&n.insertAdjacentHTML("afterend",`
              <p id="project-description" class="mt-3 sm:mt-4 text-gray-400 max-w-4xl mx-auto leading-relaxed text-sm sm:text-base px-4">
                ${r.description}
              </p>
            `)),document.title=`${r.name} - Dinushka Samaranayake`,o)){let d="";r.sections&&r.sections.length>0&&r.sections.forEach(l=>{if(l.type==="image")d+=`
                  <div class="rounded-2xl shadow-lg overflow-hidden bg-gray-900/20 mb-8 last:mb-0">
                      <img src="${l.src}" alt="${r.name}" class="w-full h-full object-contain cursor-magnify block" data-lightbox>
                  </div>
                `;else if(l.type==="video")d+=`
                  <div class="rounded-2xl overflow-hidden bg-black shadow-lg mb-8 last:mb-0">
                      <video 
                          src="${l.src}" 
                          poster="${l.thumbnail||r.thumbnail||""}"
                          class="w-full h-full object-contain" 
                          ${l.autoplay?"autoplay":""} 
                          ${l.loop?"loop":""} 
                          controls
                      ></video>
                  </div>
                `;else if(l.type==="grid"&&Array.isArray(l.src)){const g=l.src.length===2?"sm:grid-cols-2":"sm:grid-cols-2 lg:grid-cols-3";d+=`
                  <div class="grid grid-cols-1 ${g} gap-4 sm:gap-6 mb-8 last:mb-0">
                    ${l.src.map(u=>`
                      <img src="${u}" alt="${r.name}" class="w-full object-contain rounded-xl shadow-md cursor-magnify hover:scale-[1.01] transition-transform duration-300" data-lightbox>
                    `).join("")}
                  </div>
                `}}),o.innerHTML=d||'<p class="text-center text-gray-500">No content available for this project.</p>',$()}}catch(r){console.error("Error loading project:",r),o&&(o.innerHTML='<p class="text-center text-red-500">Failed to load project details.</p>')}},le=async()=>{const e=document.getElementById("nav-container"),t=document.getElementById("footer-container"),n=document.getElementById("project-title"),o=document.getElementById("artwork-container");e&&(e.innerHTML=L({isProjectPage:!0}),T()),t&&(t.innerHTML=S());const a=new URLSearchParams(window.location.search).get("id");if(a)try{const r=await v("2d",a);if(r&&(n&&(n.textContent=r.name,r.description&&n.insertAdjacentHTML("afterend",`
              <p id="project-description" class="mt-3 sm:mt-4 text-gray-400 max-w-4xl mx-auto leading-relaxed text-sm sm:text-base px-4">
                ${r.description}
              </p>
            `)),document.title=`${r.name} - Dinushka Samaranayake`,o)){let d="";r.sections&&r.sections.length>0&&r.sections.forEach(l=>{if(l.type==="image")d+=`
                  <div class="overflow-hidden rounded-2xl shadow-lg mb-8 last:mb-0 bg-gray-900/20">
                    <img src="${l.src}" alt="${r.name}" class="w-full h-full object-contain cursor-magnify block" data-lightbox>
                  </div>
                `;else if(l.type==="video")d+=`
                  <div class="rounded-2xl overflow-hidden bg-black shadow-lg mb-8 last:mb-0">
                      <video 
                          src="${l.src}" 
                          poster="${l.thumbnail||r.thumbnail||""}"
                          class="w-full h-full object-contain" 
                          ${l.autoplay?"autoplay":""} 
                          ${l.loop?"loop":""} 
                          controls
                      ></video>
                  </div>
                `;else if(l.type==="grid"&&Array.isArray(l.src)){const g=l.src.length===2?"sm:grid-cols-2":"sm:grid-cols-2 lg:grid-cols-3";d+=`
                  <div class="grid grid-cols-1 ${g} gap-4 sm:gap-6 mb-8 last:mb-0">
                    ${l.src.map(u=>`
                      <img src="${u}" alt="${r.name}" class="w-full object-contain rounded-xl shadow-md cursor-magnify hover:scale-[1.01] transition-transform duration-300" data-lightbox>
                    `).join("")}
                  </div>
                `}}),o.innerHTML=d||'<p class="text-center text-gray-500">No content available for this artwork.</p>',$()}}catch(r){console.error("Error loading 2D project:",r),o&&(o.innerHTML='<p class="text-center text-red-500">Failed to load artwork.</p>')}},M=async()=>{try{const e=document.getElementById("app"),t=document.getElementById("artwork-container"),n=document.getElementById("project-content"),o=!!e;if(e){const s=await C(),[a,r]=await Promise.all([I("3d",s["3d"]),I("2d",s["2d"])]);ne(a,r)}else t?await le():n&&await ie();Y(),G(),V(),Z(),ee(),$(),o&&(K(),E()),document.body.classList.add("loaded")}catch(e){console.error("Initialization error:",e),document.body.classList.add("loaded")}},$=()=>{const e=document.getElementById("lightbox"),t=document.getElementById("lightbox-img"),n=document.getElementById("lightbox-close");!e||!t||(document.querySelectorAll("[data-lightbox]").forEach(o=>{o.addEventListener("click",()=>{const s=o;t.src=s.src,t.alt=s.alt,e.classList.remove("hidden"),e.classList.add("flex")})}),document.addEventListener("keydown",o=>{o.key==="Escape"&&!e.classList.contains("hidden")&&(e.classList.add("hidden"),e.classList.remove("flex"))}),e.onclick=o=>{o.target===e&&(e.classList.add("hidden"),e.classList.remove("flex"))},n&&n.addEventListener("click",o=>{o.stopPropagation(),e.classList.add("hidden"),e.classList.remove("flex")}))};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",M):M();
