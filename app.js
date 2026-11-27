const WA="212693929716",PRICE=49;
// notes: fill {top,heart,base} (ar/fr) only from Ayoub's posters. Never invent.
const IMG={"baccarat-rouge-540":"2-baccarat-rouge-540.jpg","si":"3-si.jpg","scandal":"4-scandal.jpg","prada-paradoxe":"5-prada-paradoxe.jpg","scandalous":"6-scandalous.jpg","kisa-tango":"7-kisa-tango.jpg","mon-guerlain":"9-mon-guerlain.jpg","nina":"10-nina.jpg","hypnotic-poison":"4-hypnotic-poison.jpg","giordani-gold":"3-giordani-gold.jpg","incandescence-her":"5-incandescence-her.jpg","burberry":"1-burberry.jpg","coco-chanel":"2-coco-chanel.jpg","victorias-secret":"11-victorias-secret.jpg","lv-contre-moi":"7-lv-contre-moi.jpg","kayali":"6-kayali.jpg","march-milo":"8-march-milo.jpg","weekend":"12-weekend.jpg"};
// Notes read from Ayoub's posters (Arabic). FR is a translation. Never invent.
const N={
"baccarat-rouge-540":{top:{ar:"الزعفران، الياسمين",fr:"Safran, jasmin"},heart:{ar:"العنبر، الأخشاب الشفافة",fr:"Ambre, bois translucides"},base:{ar:"خشب الأرز، راتنجات التنوب (الراتنجات العطرية)",fr:"Bois de cèdre, résines de sapin (résines aromatiques)"}},
"si":{top:{ar:"الكشمش الأسود",fr:"Cassis"},heart:{ar:"الورد، الفريزيا",fr:"Rose, freesia"},base:{ar:"الفانيليا، الباتشولي، الأخشاب",fr:"Vanille, patchouli, bois"}},
"scandal":{top:{ar:"البرتقال الأحمر واليوسفي",fr:"Orange sanguine et mandarine"},heart:{ar:"العسل والغاردينيا وزهر البرتقال",fr:"Miel, gardénia et fleur d'oranger"},base:{ar:"الباتشولي والكراميل وشمع العسل",fr:"Patchouli, caramel et cire d'abeille"}},
"prada-paradoxe":{top:{ar:"البرتقال الإيطالي، الكمثري، البرغموت",fr:"Orange d'Italie, poire, bergamote"},heart:{ar:"زهرة البرتقال، الياسمين، النيرولي",fr:"Fleur d'oranger, jasmin, néroli"},base:{ar:"الفانيليا، المسك الأبيض، العنبر",fr:"Vanille, musc blanc, ambre"}},
"scandalous":{top:{ar:"التوت الأحمر، البرغموت",fr:"Baies rouges, bergamote"},heart:{ar:"الياسمين، زهر البرتقال، الورد",fr:"Jasmin, fleur d'oranger, rose"},base:{ar:"الفانيليا، الباتشولي، المسك",fr:"Vanille, patchouli, musc"}},
"kisa-tango":{top:{ar:"حمضيات منعشة",fr:"Agrumes frais"},heart:{ar:"زهور ناعمة",fr:"Fleurs douces"},base:{ar:"عنبر وخشب فاخر",fr:"Ambre et bois précieux"}}
};
const P=[
["prada-paradoxe","Prada Paradoxe"],["scandalous","Scandalous"],["mon-guerlain","Mon Guerlain"],["scandal","Scandal"],
["si","Si"],["weekend","Weekend"],["nina","NiNa"],["baccarat-rouge-540","Baccarat Rouge 540"],
["kisa-tango","Kisa Tango"],["hypnotic-poison","Hypnotic Poison"],["giordani-gold","Giordani Gold"],["incandescence-her","Incandescence Her"],
["burberry","Burberry"],["coco-chanel","Coco Chanel"],["victorias-secret","Victoria's Secret"],["lv-contre-moi","LV Contre Moi"],
["kayali","Kayali"],["march-milo","March Milo"]
].map(([id,name])=>({id,name,img:IMG[id]?"img/"+IMG[id]:null,notes:N[id]||null}));
const T={ar:{feat:"الأكثر طلبا",view:"التفاصيل",toast:"تزاد للسلة",viewcart:"شوف السلة",tag:"عطور بحال العلامات الكبرى. جودة، ثبات وثمن في المتناول.",brand:"سحر بارفان",cart:"السلة",eyebrow:"عطور فاخرة",h1:"اختار سحرك",sub:"عطور في قارورة 50 مل. الثمن 49 درهم فقط. الطلب سهل عبر واتساب.",shop:"شوف العطور",catalog:"الكتالوج",more:"منتجات أخرى",oil:"زيت الجسم",oilnote:"قريبا. سولنا على واتساب للتفاصيل والثمن.",ask:"سول على واتساب",howT:"كيفاش تطلب",h1s:"زيد العطر للسلة",h2s:"دوز الطلب عبر واتساب",h3s:"كنتفاهمو معاك على التوصيل والأداء",empty:"السلة فارغة.",total:"المجموع",name:"الاسم",city:"المدينة (اختياري)",send:"طلب عبر واتساب",cod:"الأداء عند التوصيل، كنتفاهمو عليه فواتساب.",add:"زيد للسلة",size:"50 مل",mad:"درهم",ml:"مل",notes:"النوتات",top:"القمة",heart:"القلب",base:"القاعدة",soon:"النوتات قريبا",hi:"السلام، بغيت نطلب من سحر بارفان:",nm:"الاسم",ct:"المدينة",tt:"المجموع",qty:"الكمية"},
fr:{feat:"À la une",view:"Détails",toast:"Ajouté au panier",viewcart:"Voir le panier",tag:"",brand:"Sihr Parfum",cart:"Panier",eyebrow:"PARFUMS DE LUXE",h1:"Choisissez votre magie",sub:"Parfums en flacon de 50 ml. Seulement 49 MAD. Commande simple via WhatsApp.",shop:"Voir les parfums",catalog:"Catalogue",more:"Autres produits",oil:"Huile corporelle",oilnote:"Bientôt. Demandez les détails et le prix sur WhatsApp.",ask:"Demander sur WhatsApp",howT:"Comment commander",h1s:"Ajoutez le parfum au panier",h2s:"Envoyez la commande sur WhatsApp",h3s:"Nous confirmons livraison et paiement avec vous",empty:"Le panier est vide.",total:"Total",name:"Nom",city:"Ville (optionnel)",send:"Commander sur WhatsApp",cod:"Paiement à la livraison, à confirmer sur WhatsApp.",add:"Ajouter au panier",size:"50 ml",mad:"MAD",ml:"ml",notes:"Notes",top:"Tête",heart:"Cœur",base:"Fond",soon:"Notes bientôt",hi:"Bonjour, je voudrais commander chez Sihr Parfum :",nm:"Nom",ct:"Ville",tt:"Total",qty:"Qté"}};
let lang=localStorage.sl||"ar",cart=(()=>{try{const o=JSON.parse(localStorage.sc||"{}"),r={};for(const k in o){const id=k.split("|")[0];r[id+"|50"]=(r[id+"|50"]||0)+o[k]}return r}catch(e){return{}}})(),sel={};
const $=s=>document.querySelector(s),t=k=>T[lang][k];
const wa=txt=>`https://wa.me/${WA}?text=${encodeURIComponent(txt)}`;
const pp=k=>P.find(x=>x.id==k.split("|")[0]),sz=k=>k.split("|")[1];
const art=p=>`<div class="art"><svg viewBox="0 0 200 260"><use href="#bottle"/></svg><div class="nm">${p.name}</div></div>`;
const pic=(p,big)=>p.img?`<img src="${p.img}" alt="${p.name}" ${big?"":'loading="lazy"'} width="640" height="700">`:art(p);
const pills=id=>`<div class="pills"><span class="pill on">50 ${t("ml")}</span></div>`;
function render(){
 document.documentElement.lang=lang;document.documentElement.dir=lang=="ar"?"rtl":"ltr";
 $("#lang").textContent=lang=="ar"?"FR":"عربي";
 document.querySelectorAll("[data-i]").forEach(e=>{const k=e.dataset.i;if(T[lang][k]!==undefined)e.textContent=T[lang][k]});
 const F=P.filter(p=>p.img);
 $("#hero").innerHTML=F.map(p=>`<div class="slide" data-o="${p.id}">${pic(p,1)}</div>`).join("");
 $("#dots").innerHTML=F.map((p,i)=>`<i data-d="${i}"></i>`).join("");
 $("#grid").innerHTML=P.map(p=>`<article class="card"><div class="media" data-o="${p.id}">${pic(p)}<span class="badge">${PRICE} ${t("mad")}</span></div><h3>${p.name}</h3>${pills(p.id)}<button class="btn small" data-a="${p.id}">${t("add")}</button></article>`).join("");
 $("#oilAsk").href=wa(lang=="ar"?"السلام، بغيت نعرف على زيت الجسم من سحر بارفان":"Bonjour, je voudrais des infos sur l'huile corporelle Sihr Parfum");
 $("#waFoot").href=wa("");
 renderCart();
}
function renderCart(){
 const ids=Object.keys(cart).filter(i=>cart[i]>0);
 const n=ids.reduce((a,i)=>a+cart[i],0);
 $("#cnt").textContent=n;$("#empty").hidden=ids.length>0;
 $("#items").innerHTML=ids.map(i=>`<div class="row"><span><bdi>${pp(i).name}</bdi> · <bdi>${sz(i)} ${t("ml")}</bdi></span><span class="qty"><button data-m="${i}">−</button><span>${cart[i]}</span><button data-a="${i}">+</button></span></div>`).join("");
 $("#total").textContent=n*PRICE+" "+t("mad");
 const lines=ids.map(i=>`- ${pp(i).name} (${sz(i)} ml) x${cart[i]}`);
 const nm=$("#name").value.trim(),ct=$("#city").value.trim();
 const msg=[t("hi"),...lines,`${t("tt")}: ${n*PRICE} ${t("mad")}`,nm&&`${t("nm")}: ${nm}`,ct&&`${t("ct")}: ${ct}`].filter(Boolean).join("\n");
 const s=$("#send");s.href=n?wa(msg):"#";s.classList.toggle("off",!n);
 const bar=$("#bar");bar.hidden=!n;$("#barTxt").textContent=`${t("viewcart")} · ${n} · ${n*PRICE} ${t("mad")}`;
 localStorage.sc=JSON.stringify(cart);
}
function open(id){
 const p=P.find(x=>x.id==id),n=p.notes;
 $("#detail").innerHTML=`<button class="x" data-c aria-label="close">✕</button><div class="dart">${pic(p,1)}</div><h2 class="dn">${p.name}</h2><p class="price dn">${PRICE} ${t("mad")} · 50 ${t("ml")}</p>${pills(id)}<div class="notes"><b class="nt">${t("notes")}</b>${n?["top","heart","base"].map(k=>`<div><b>${t(k)}</b><span>${n[k][lang]||n[k].ar}</span></div>`).join(""):`<p class="muted">${t("soon")}</p>`}</div><button class="btn full" data-a="${id}" data-c>${t("add")}</button>`;
 $("#modal").hidden=false;
}
let tt;function toast(){const e=$("#toast");e.textContent="✓ "+t("toast");e.classList.add("show");clearTimeout(tt);tt=setTimeout(()=>e.classList.remove("show"),1400)}
document.addEventListener("click",e=>{
 const a=e.target.closest("[data-a]"),m=e.target.closest("[data-m]"),o=e.target.closest("[data-o]"),d=e.target.closest("[data-d]");
 if(d){const h=$("#hero");h.scrollTo({left:Math.abs(h.clientWidth*d.dataset.d)*(lang=="ar"?-1:1),behavior:"smooth"});return}
 if(a){let k=a.dataset.a;if(!k.includes("|"))k+="|50";cart[k]=(cart[k]||0)+1;renderCart();if(!a.classList.contains("qtyb")&&!a.closest("#items"))toast()}
 else if(m){cart[m.dataset.m]=Math.max(0,cart[m.dataset.m]-1);renderCart()}
 else if(o)open(o.dataset.o);
 if(e.target.closest("[data-c]")||e.target.id=="modal")$("#modal").hidden=true;
 if(e.target.id=="drawer"||e.target.id=="closeCart")$("#drawer").hidden=true;
});
const showCart=()=>$("#drawer").hidden=false;
$("#cartBtn").onclick=showCart;$("#bar").onclick=showCart;
$("#lang").onclick=()=>{lang=lang=="ar"?"fr":"ar";localStorage.sl=lang;render()};
["#name","#city"].forEach(s=>$(s).oninput=renderCart);
// hero: dots + autoplay
const hero=$("#hero");
function cur(){return Math.round(Math.abs(hero.scrollLeft)/hero.clientWidth)}
hero.addEventListener("scroll",()=>{const c=cur();document.querySelectorAll("#dots i").forEach((x,i)=>x.classList.toggle("on",i==c))},{passive:true});
let hold=false;["touchstart","mouseenter"].forEach(ev=>hero.addEventListener(ev,()=>hold=true,{passive:true}));["touchend","mouseleave"].forEach(ev=>hero.addEventListener(ev,()=>setTimeout(()=>hold=false,4000),{passive:true}));
setInterval(()=>{if(hold||document.hidden)return;const n=hero.children.length,c=(cur()+1)%n;hero.scrollTo({left:hero.clientWidth*c*(lang=="ar"?-1:1),behavior:"smooth"})},4500);
render();
document.querySelector("#dots i")&&document.querySelector("#dots i").classList.add("on");
