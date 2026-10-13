(function(){const l={...window.STORE,products:window.PRODUCTS||[]},b=!1,w=null;let c=null,p="";const u="logo.jpg",y=document.getElementById("app"),h={lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',bolt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"/></svg>',chat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg>',code:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 4l-4 16"/></svg>'},$=a=>{const t=Date.parse(a.added||"");return t&&Date.now()-t<14*864e5},s=a=>String(a??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),k=(a,t)=>{const n=Number(a);return(isNaN(n)?s(a):n.toLocaleString("en-US",{maximumFractionDigits:2}))+" <small>"+s(t||l.currency)+"</small>"};function x(){const a=l,t=a.products.filter(e=>e.type!=="free"),n=a.products.filter(e=>e.type==="free"),i=a.ticketUrl?`<a class="ghost" href="${s(a.ticketUrl)}" target="_blank" rel="noopener">${s(a.ticketLabel||"افتح تيكيت")}</a>`:"",o=e=>e.type==="free"?e.link?`<a class="btn" href="${s(e.link)}" target="_blank" rel="noopener">تحميل مجاني</a>`:'<span class="ghost" style="justify-content:center;cursor:default">اطلبه من تيكيت الديسكورد</span>':/^https:\/\//.test(e.payLink||"")?`<a class="btn" href="${s(e.payLink)}" target="_blank" rel="noopener">اشترِ الآن بالبطاقة</a>`:'<button class="ghost" disabled style="opacity:.5;cursor:not-allowed">غير متاح حالياً</button>',g=e=>{const v=e.type==="free";return`<article class="card"><div class="img" data-detail="${s(e.id)}" role="button" tabindex="0" aria-label="تفاصيل ${s(e.name)}">
      <div class="badges">${$(e)?'<span class="badge new">جديد</span>':""}${v?'<span class="badge free">مجاني</span>':""}</div>
      ${e.image?`<img src="${e.image}" alt="${s(e.name)}">`:'<span class="ph">AEVRON</span>'}</div>
      <div class="body"><div class="meta"><span>FIVEM</span><span>QBCORE</span></div><h3>${s(e.name)}</h3><p>${s(e.desc)}</p>
      <div class="foot"><div class="price">${v?'<span class="free">مجاني</span>':k(e.price,e.currency)}</div><button class="linkbtn" data-detail="${s(e.id)}">التفاصيل</button></div>
      <div class="actions">${o(e)}</div></div></article>`},r=(e,v)=>e.length?'<div class="grid">'+e.map(g).join("")+"</div>":`<div class="empty">لا توجد ${v} حالياً.${b?"<br>أضيفيها من لوحة الإدارة.":""}</div>`,m=a.products.some(e=>/^https:\/\//.test(e.payLink||""));return`<div class="hero2"><div>
      <span class="eyebrow"><i></i>FIVEM · QBCORE SCRIPTS</span>
      <h1>${s(a.storeName).replace(/^(AEVR)(O)(N)/,"$1<em>$2</em>$3")}</h1>
      <p class="lead">${s(a.tagline)}</p>
      <div class="cta-row"><a class="btn lg" href="#paid">تصفّح المنتجات</a>${n.length?'<a class="ghost lg" href="#free" style="padding:14px 24px">المنتجات المجانية</a>':""}</div>
    </div><div class="hero-art" aria-hidden="true"><span class="ring r2"></span><span class="ring"></span><img src="${u}" alt=""></div></div>
  <div class="stats">
    <div class="stat"><b class="mono">${t.length}</b><span>منتج مدفوع</span></div>
    <div class="stat"><b class="mono">${n.length}</b><span>منتج مجاني</span></div>
    <div class="stat"><b>بطاقة</b><span>دفع آمن عبر PayPal</span></div>
    <div class="stat"><b>تيكيت</b><span>تسليم ودعم مباشر</span></div>
  </div>
  <section id="paid"><div class="sec-head"><div><span class="kicker">PREMIUM</span><h2>المنتجات المدفوعة</h2><p>سكربتات جاهزة لسيرفرك، بتصميم وهوية AEVRON.</p></div></div>${r(t,"منتجات مدفوعة")}</section>
  <section id="free"><div class="sec-head"><div><span class="kicker">FREE</span><h2>المنتجات المجانية</h2><p>جرّب جودة AEVRON مجاناً.</p></div></div>${r(n,"منتجات مجانية")}</section>
  <section><div class="features">
    <div class="feat"><div class="ic">${h.lock}</div><b>دفع آمن</b><span>ادفع ببطاقتك عبر صفحة PayPal الآمنة، وبياناتك ما تمر على المتجر.</span></div>
    <div class="feat"><div class="ic">${h.bolt}</div><b>تسليم سريع</b><span>بعد الدفع افتح تيكيت في الديسكورد ويوصلك طلبك.</span></div>
    <div class="feat"><div class="ic">${h.chat}</div><b>دعم بعد الشراء</b><span>أي مشكلة بالتركيب نساعدك فيها عبر التيكيت.</span></div>
    <div class="feat"><div class="ic">${h.code}</div><b>مبني لـ QBCore</b><span>سكربتات مصممة لسيرفرات QBCore وبهوية موحّدة.</span></div>
  </div></section>
  <section id="how"><div class="sec-head"><div><span class="kicker">HOW IT WORKS</span><h2>طريقة الطلب</h2></div></div>
    <div class="track"><h3>الدفع بالبطاقة <span class="pill">آمن وسريع</span></h3><ol>
        <li><div><b>اضغط «اشترِ الآن بالبطاقة»</b>تنفتح صفحة الدفع الآمنة من PayPal.</div></li>
        <li><div><b>ادفع واكتب اسمك في الديسكورد</b>عشان نعرفك ونسلّمك.</div></li>
        <li><div><b>افتح تيكيت في الديسكورد</b>ويوصلك المنتج مباشرة.</div></li></ol></div></section>
  <section id="faq"><div class="sec-head"><div><span class="kicker">FAQ</span><h2>أسئلة شائعة</h2></div></div><div class="faq">
    <details><summary>كيف يوصلني المنتج بعد الدفع؟</summary><p>افتح تيكيت وأرسل اسمك في الديسكورد اللي كتبته وقت الدفع، ونرسل لك ملفات المنتج داخل التيكيت.</p></details>
    <details><summary>هل الدفع بالبطاقة آمن؟</summary><p>نعم، الدفع يتم في صفحة PayPal نفسها، وبيانات بطاقتك ما تمر على المتجر أبداً.</p></details>
    <details><summary>على أي فريمورك تشتغل السكربتات؟</summary><p>السكربتات مبنية لسيرفرات QBCore على FiveM.</p></details>
    <details><summary>أقدر أطلب تعديل أو مساعدة بالتركيب؟</summary><p>أكيد، افتح تيكيت واشرح طلبك ونرد عليك.</p></details>
  </div></section>
  ${a.ticketUrl?`<div class="cta-band"><div><h3>عندك سؤال قبل الشراء؟</h3><p>افتح تيكيت وفريق ${s(a.storeName)} يرد عليك.</p></div>${i.replace('class="ghost"','class="btn lg"')}</div>`:""}`}function E(){const a=l.products.find(o=>o.id===c);if(!a)return"";const t=a.type==="free",n=l,i=t?a.link?`<a class="btn lg" href="${s(a.link)}" target="_blank" rel="noopener">تحميل مجاني</a>`:'<span class="ghost" style="justify-content:center;cursor:default">اطلبه من تيكيت الديسكورد</span>':/^https:\/\//.test(a.payLink||"")?`<a class="btn lg" href="${s(a.payLink)}" target="_blank" rel="noopener">اشترِ الآن بالبطاقة</a>`:'<button class="ghost" disabled style="opacity:.5;cursor:not-allowed">غير متاح حالياً</button>';return`<div class="overlay" data-act="closeDetail"><div class="modal wide" role="dialog" aria-label="${s(a.name)}">
   <div class="modal-head"><div class="meta"><span>FIVEM</span><span>QBCORE</span>${$(a)?'<span style="color:var(--crimson);border-color:var(--crimson)">NEW</span>':""}</div><button class="ghost" data-act="closeDetail">إغلاق</button></div>
   <div class="pm-grid"><div class="pm-img">${a.image?`<img src="${a.image}" alt="${s(a.name)}">`:'<span class="ph" style="font-family:var(--display);letter-spacing:.2em;color:#3a3a44">AEVRON</span>'}</div>
   <div style="display:flex;flex-direction:column;gap:14px;min-width:0"><h2 style="margin:0;font-family:var(--display);font-size:28px">${s(a.name)}</h2>
   <div class="price" style="font-size:30px">${t?'<span class="free">مجاني</span>':k(a.price,a.currency)}</div>
   <p class="pm-desc">${s(a.desc)||"لا يوجد وصف."}</p>
   <div class="actions" style="display:flex;flex-direction:column;gap:8px">${i}</div>
   <p class="small">التسليم والدعم يتم عبر تيكيت الديسكورد بعد الدفع.</p>
   ${b?`<div class="bar" style="border-top:1px solid var(--line);padding-top:12px"><span class="small">إدارة:</span><button class="ghost" data-edit="${s(a.id)}">تعديل</button><button class="ghost danger" data-pdel="${s(a.id)}">${w===a.id?"اضغطي مرة ثانية للحذف":"حذف المنتج"}</button></div>`:""}</div></div>
  </div></div>`}function M(){const a=(location.hash||"").slice(1);if(!/^thanks/.test(a))return null;const t=a.slice(7)||"";let n=null;try{n=JSON.parse(localStorage.getItem("aev-order:"+a)||"null")}catch{}if(!n||Date.now()-n.t>6*36e5){n={no:String(Math.floor(1e6+Math.random()*9e6)),t:Date.now()};try{localStorage.setItem("aev-order:"+a,JSON.stringify(n))}catch{}}return{...n,product:l.products.find(i=>i.id===t)||null}}function O(a){const t=l,n=["#ED0B3A","#3FCF8E","#E9C46A","#5AA9F2","#FF6B9A"],i=Array.from({length:14},(g,r)=>{const m=r/14*Math.PI*2,f=70+r%3*14;return`<i class="conf" style="background:${n[r%5]};--x:${Math.round(Math.cos(m)*f)}px;--y:${Math.round(Math.sin(m)*f*.85)}px;--r:${r*47}deg;left:calc(50% - 4px);top:calc(50% - 4px);${r%3===0?"border-radius:50%":""}"></i>`}).join(""),o=new Date(a.t).toLocaleString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"});return`<div class="thanks-wrap"><div class="thanks" role="status">
    <div class="burst">${i}<div class="check"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></div></div>
    <h1>تم استلام الطلب <span class="mono">#${s(a.no)}</span></h1>
    <p class="lead">شكراً لطلبك 🤍 تم الدفع بنجاح${a.product?` لـ <b>${s(a.product.name)}</b>`:""}، وبيوصلك طلبك في أقرب وقت.</p>
    <div class="codebox" style="text-align:start;gap:8px"><span style="font-family:var(--display);font-size:15px;color:var(--fg)">فاتورة الطلب</span>
      <div class="row"><span>رقم الطلب</span><span class="mono">#${s(a.no)}</span></div>
      ${a.product?`<div class="row"><span>المنتج</span><span>${s(a.product.name)}</span></div><div class="row"><span>المبلغ</span><span class="mono">${s(a.product.price)} ${s(a.product.currency||l.currency)}</span></div>`:""}
      <div class="row"><span>طريقة الدفع</span><span>بطاقة عبر PayPal</span></div>
      <div class="row"><span>الحالة</span><span style="color:var(--ok)">مدفوع</span></div>
      <div class="row"><span>التاريخ</span><span class="mono">${o}</span></div></div>
    <div class="codebox"><span>رمز المعاملة</span><p style="margin:0;font-size:14px">موجود في إيصال PayPal اللي وصلك على الإيميل (Transaction ID).</p></div>
    <ol class="next">
      <li><div><b>افتح تيكيت</b> من روم التيكيت في سيرفر الديسكورد.</div></li>
      <li><div><b>أرسل رقم الطلب</b> ورمز المعاملة من إيصال PayPal.</div></li>
      <li><div><b>استلم طلبك</b> بعد التحقق من الدفع.</div></li>
    </ol>
    ${t.ticketUrl?`<a class="btn lg" href="${s(t.ticketUrl)}" target="_blank" rel="noopener">${s(t.ticketLabel||"افتح تيكيت")}</a>`:""}
    <button class="ghost" data-act="copyOrder">نسخ رقم الطلب</button>${p?`<span class="toast">${s(p)}</span>`:""}
    <a class="linkbtn" href="#" data-act="backHome">الرجوع للمتجر</a>
    <span class="small">${o}</span>
  </div></div>`}function d(){const a=l,t=s(a.storeName).replace(/^AEVRON/,"AEVR<b>O</b>N"),n=M();n&&(window.__order=n),y.innerHTML=`${a.announce?`<div class="announce">${s(a.announce)}</div>`:""}<header><div class="wrap nav"><a class="brand" href="#" data-act="backHome"><img src="${u}" alt=""><span class="logo">${t}</span></a>
   <nav class="navlinks" aria-label="الأقسام"><a href="#paid">المدفوعة</a><a href="#free">المجانية</a><a href="#how">طريقة الطلب</a><a href="#faq">الأسئلة</a></nav>
   <div class="bar"><a class="btn" href="#paid">المنتجات</a></div></div></header>
   <main class="wrap">${n?O(n):x()}</main>
   <div class="wrap"><div class="site-foot"><div><a class="brand" href="#" data-act="backHome" style="padding:0;margin-bottom:10px"><img src="${u}" alt=""><span class="logo">${t}</span></a><p style="margin:0;max-width:40ch">${s(a.tagline)}</p></div>
     <div><h4>المتجر</h4><a href="#paid">المنتجات المدفوعة</a><a href="#free">المنتجات المجانية</a><a href="#how">طريقة الطلب</a></div>
     <div><h4>الدعم</h4><a href="#faq">الأسئلة الشائعة</a><span style="display:block;padding-block:3px">افتح تيكيت في الديسكورد</span></div></div>
     <div class="copy"><span>© ${new Date().getFullYear()} ${s(a.storeName)}. جميع الحقوق محفوظة.</span><span class="mono">FIVEM · QBCORE</span></div></div>
   ${c?E():""}`}y.addEventListener("click",async a=>{const t=a.target.closest("[data-act],[data-detail]");if(!t)return;if(t.dataset.detail){c=t.dataset.detail,d();return}const n=t.dataset.act;if(!(t.classList.contains("overlay")&&a.target!==t)){if(n==="closeDetail")c=null,d();else if(n==="backHome")a.preventDefault(),location.hash&&history.replaceState(null,"",location.pathname+location.search),p="",c=null,d(),window.scrollTo(0,0);else if(n==="copyOrder"){const i=window.__order,o=`رقم الطلب: #${i.no}${i.product?`
المنتج: `+i.product.name:""}`;try{await navigator.clipboard.writeText(o),p="تم النسخ"}catch{p="انسخ الرقم يدوياً"}d()}}}),window.addEventListener("hashchange",()=>{/^#thanks/.test(location.hash)&&(p="",d(),window.scrollTo(0,0))}),document.addEventListener("keydown",a=>{a.key==="Escape"&&c&&(c=null,d()),a.key==="Enter"&&a.target.dataset&&a.target.dataset.detail&&(c=a.target.dataset.detail,d())}),d()})();
