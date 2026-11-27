const WA="212693929716",PRICE=49;
// notes: fill {top,heart,base} (ar/fr) only from Ayoub's posters. Never invent.
const P=[
["prada-paradoxe","Prada Paradoxe"],["scandalous","Scandalous"],["mon-guerlain","Mon Guerlain"],["scandal","Scandal"],
["si","Si"],["weekend","Weekend"],["nina","NiNa"],["baccarat-rouge-540","Baccarat Rouge 540"],
["kisa-tango","Kisa Tango"],["hypnotic-poison","Hypnotic Poison"],["giordani-gold","Giordani Gold"],["incandescence-her","Incandescence Her"],
["burberry","Burberry"],["coco-chanel","Coco Chanel"],["victorias-secret","Victoria's Secret"],["lv-contre-moi","LV Contre Moi"],
["kayali","Kayali"],["march-milo","March Milo"]
].map(([id,name])=>({id,name,img:null,notes:null}));
// 17 per catalogue image; confirm the list with Ayoub (18 names received)
const T={ar:{brand:"سحر بارفان",cart:"السلة",eyebrow:"عطور فاخرة",h1:"اختار سحرك",sub:"عطور في قارورة 50 مل أو 20 مل. الثمن 49 درهم فقط للحجمين. الطلب سهل عبر واتساب.",shop:"شوف العطور",catalog:"الكتالوج",more:"منتجات أخرى",oil:"زيت الجسم",oilnote:"قريبا. سولنا على واتساب للتفاصيل والثمن.",ask:"سول على واتساب",howT:"كيفاش تطلب",h1s:"زيد العطر للسلة",h2s:"دوز الطلب عبر واتساب",h3s:"كنتفاهمو معاك على التوصيل والأداء",empty:"السلة فارغة.",total:"المجموع",name:"الاسم",city:"المدينة (اختياري)",send:"طلب عبر واتساب",cod:"الأداء عند التوصيل، كنتفاهمو عليه فواتساب.",add:"زيد للسلة",size:"50 مل",mad:"درهم",ml:"مل",notes:"النوتات",top:"القمة",heart:"القلب",base:"القاعدة",soon:"النوتات قريبا",hi:"السلام، بغيت نطلب من سحر بارفان:",nm:"الاسم",ct:"المدينة",tt:"المجموع",qty:"الكمية"},
fr:{brand:"Sihr Parfum",cart:"Panier",eyebrow:"PARFUMS DE LUXE",h1:"Choisissez votre magie",sub:"Parfums en flacon de 50 ml ou 20 ml. Seulement 49 MAD pour les deux formats. Commande simple via WhatsApp.",shop:"Voir les parfums",catalog:"Catalogue",more:"Autres produits",oil:"Huile corporelle",oilnote:"Bientôt. Demandez les détails et le prix sur WhatsApp.",ask:"Demander sur WhatsApp",howT:"Comment commander",h1s:"Ajoutez le parfum au panier",h2s:"Envoyez la commande sur WhatsApp",h3s:"Nous confirmons livraison et paiement avec vous",empty:"Le panier est vide.",total:"Total",name:"Nom",city:"Ville (optionnel)",send:"Commander sur WhatsApp",cod:"Paiement à la livraison, à confirmer sur WhatsApp.",add:"Ajouter au panier",size:"50 ml",mad:"MAD",ml:"ml",notes:"Notes",top:"Tête",heart:"Cœur",base:"Fond",soon:"Notes bientôt",hi:"Bonjour, je voudrais commander chez Sihr Parfum :",nm:"Nom",ct:"Ville",tt:"Total",qty:"Qté"}};
let lang=localStorage.sl||"ar",cart=JSON.parse(localStorage.sc||"{}");
const $=s=>document.querySelector(s),t=k=>T[lang][k];
const wa=txt=>`https://wa.me/${WA}?text=${encodeURIComponent(txt)}`;
function art(p){return `<div class="art"><svg viewBox="0 0 200 260"><use href="#bottle"/></svg><div class="nm">${p.name}</div></div>`}
function render(){
 document.documentElement.lang=lang;document.documentElement.dir=lang=="ar"?"rtl":"ltr";
 $("#lang").textContent=lang=="ar"?"FR":"عربي";
 document.querySelectorAll("[data-i]").forEach(e=>{const k=e.dataset.i;if(T[lang][k])e.textContent=T[lang][k]});
 $("#grid").innerHTML=P.map(p=>`<article class="card"><div data-o="${p.id}">${p.img?`<div class="art"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>`:art(p)}</div><h3>${p.name}</h3><div class="price">${PRICE} ${t("mad")}</div><select class="sz" data-s="${p.id}"><option value="50">50 ${t("ml")}</option><option value="20">20 ${t("ml")}</option></select><button class="btn small" data-a="${p.id}">${t("add")}</button></article>`).join("");
 $("#oilAsk").href=wa(lang=="ar"?"السلام، بغيت نعرف على زيت الجسم من سحر بارفان":"Bonjour, je voudrais des infos sur l'huile corporelle Sihr Parfum");
 $("#waFoot").href=wa("");
 renderCart();
}
function renderCart(){
 const ids=Object.keys(cart).filter(i=>cart[i]>0);const pp=k=>P.find(x=>x.id==k.split("|")[0]),sz=k=>k.split("|")[1];
 const n=ids.reduce((a,i)=>a+cart[i],0);
 $("#cnt").textContent=n;$("#empty").hidden=ids.length>0;
 $("#items").innerHTML=ids.map(i=>{const p=pp(i);return `<div class="row"><span>${p.name} · ${sz(i)} ${t("ml")}</span><span class="qty"><button data-m="${i}">−</button><span>${cart[i]}</span><button data-a="${i}">+</button></span></div>`}).join("");
 $("#total").textContent=n*PRICE+" "+t("mad");
 const lines=ids.map(i=>`- ${pp(i).name} (${sz(i)} ml) x${cart[i]}`);
 const nm=$("#name").value.trim(),ct=$("#city").value.trim();
 const msg=[t("hi"),...lines,`${t("tt")}: ${n*PRICE} ${t("mad")}`,nm&&`${t("nm")}: ${nm}`,ct&&`${t("ct")}: ${ct}`].filter(Boolean).join("\n");
 const s=$("#send");s.href=n?wa(msg):"#";s.classList.toggle("off",!n);
 localStorage.sc=JSON.stringify(cart);
}
function open(id){
 const p=P.find(x=>x.id==id),n=p.notes;
 $("#detail").innerHTML=`<button class="x" data-c>✕</button><div class="dart">${p.img?`<img src="${p.img}" style="width:100%">`:art(p)}</div><h2 class="dn">${p.name}</h2><p class="price dn">${PRICE} ${t("mad")} · 50 / 20 ${t("ml")}</p><label><select class="sz" id="dsz"><option value="50">50 ${t("ml")}</option><option value="20">20 ${t("ml")}</option></select></label><div class="notes"><b>${t("notes")}</b>${n?["top","heart","base"].map(k=>`<div><b>${t(k)}</b><span>${n[k][lang]||n[k].ar}</span></div>`).join(""):`<p class="muted">${t("soon")}</p>`}</div><button class="btn" data-a="${p.id}" data-c data-d>${t("add")}</button>`;
 $("#modal").hidden=false;
}
document.addEventListener("click",e=>{
 const a=e.target.closest("[data-a]"),m=e.target.closest("[data-m]"),o=e.target.closest("[data-o]");
 if(a){let k=a.dataset.a;if(!k.includes("|")){const sel=a.hasAttribute("data-d")?$("#dsz"):a.parentElement.querySelector(".sz");k+="|"+(sel?sel.value:"50")}cart[k]=(cart[k]||0)+1;renderCart();if(a.closest("#grid"))a.textContent="✓ "+t("add");}
 else if(m){cart[m.dataset.m]=Math.max(0,cart[m.dataset.m]-1);renderCart()}
 else if(o)open(o.dataset.o);
 if(e.target.closest("[data-c]")||e.target.id=="modal")$("#modal").hidden=true;
 if(e.target.id=="drawer"||e.target.id=="closeCart")$("#drawer").hidden=true;
});
$("#cartBtn").onclick=()=>$("#drawer").hidden=false;
$("#lang").onclick=()=>{lang=lang=="ar"?"fr":"ar";localStorage.sl=lang;render()};
["#name","#city"].forEach(s=>$(s).oninput=renderCart);
render();
