const $ = (s) => document.querySelector(s),
  D = document.documentElement,
  P = [
    "#ff9800",
    "#e91e63",
    "#9c27b0",
    "#2196f3",
    "#4caf50",
    "#ffab00",
    "#f44336",
    "#00bcd4",
  ];
const T = {
  en: {
    title: "Diwali Wishes",
    enter: "Enter your name",
    name: "Your name",
    start: "Start",
    bad: "Please enter a valid name.",
    hello: "Hello",
    compose: "Send a Wish",
    to: "To (optional)",
    send: "Send Wish",
    share: "Share on WhatsApp",
    sent: "Wish sent!",
    crackers: "Crackers",
    tap: "Choose a cracker, then tap the sky to burst it!",
    auto: "Auto Show",
    wall: "Wishes Wall",
    from: "From",
    toL: "To",
    none: "No wishes yet. Be the first!",
    song: "🎵 Songs",
    logout: "Logout",
    r: "🚀 Rocket",
    f: "🌸 Flower Pot",
    s: "✨ Sparkler",
    c: "🌀 Chakkar",
    b: "💣 Bomb",
  },
  ta: {
    title: "தீபாவளி வாழ்த்துகள்",
    enter: "உங்கள் பெயரை உள்ளிடவும்",
    name: "உங்கள் பெயர்",
    start: "தொடங்கு",
    bad: "சரியான பெயரை உள்ளிடவும்.",
    hello: "வணக்கம்",
    compose: "வாழ்த்து அனுப்புங்கள்",
    to: "யாருக்கு (விருப்பம்)",
    send: "வாழ்த்து அனுப்பு",
    share: "வாட்ஸ்அப்பில் பகிர்",
    sent: "வாழ்த்து அனுப்பப்பட்டது!",
    crackers: "பட்டாசுகள்",
    tap: "பட்டாசைத் தேர்ந்தெடுத்து வானத்தில் தொடுங்கள்!",
    auto: "தானியங்கி வெடி",
    wall: "வாழ்த்துச் சுவர்",
    from: "அனுப்பியவர்",
    toL: "பெறுபவர்",
    none: "இன்னும் வாழ்த்துகள் இல்லை. முதலில் அனுப்புங்கள்!",
    song: "🎵 Mandaadi Mandaadi",
    logout: "வெளியேறு",
    r: "🚀 ராக்கெட்",
    f: "🌸 புஸ்வாணம்",
    s: "✨ மத்தாப்பு",
    c: "🌀 சக்கரம்",
    b: "💣 வெடிகுண்டு",
  },
};
const W = {
  ta: [
    `தீபங்கள் ஏற்றும் இந்தத் திருநாளில்,
உங்கள் வாழ்வில் மகிழ்ச்சி மலரட்டும்!
இருள் நீங்கி ஒளி பிறக்கட்டும்,
துன்பம் மறைந்து இன்பம் நிறையட்டும்!
அன்பும் அமைதியும் இல்லத்தில் தங்கட்டும்,
செல்வமும் செழிப்பும் என்றும் பெருகட்டும்!
இனிய தீபாவளி நல்வாழ்த்துகள்! 🪔💥`,
    `பட்டாசின் சத்தத்தை விட,
உங்கள் சிரிப்பு இனிமையாகட்டும்!
தீபத்தின் ஒளியை விட,
உங்கள் வாழ்க்கை பிரகாசமாகட்டும்!
உறவுகள் என்றும் தொடரட்டும்,
உள்ளத்தில் அன்பு நிறைந்திருக்கட்டும்!
இனிய தீபாவளி நல்வாழ்த்துகள்! 💖🪔`,
    `ஆயிரம் தீபங்கள் ஏற்றுவோம்,
ஆனந்தமாய் வாழ்வை மாற்றுவோம்!
இனிய தீபாவளி நல்வாழ்த்துகள்! 🪔`,
    `தீபாவளி தீபங்கள் ஒளிரட்டும்,
தித்திக்கும் இனிமைகள் பெருகட்டும்!
புது நம்பிக்கை மனதில் பிறக்கட்டும்,
புன்னகை என்றும் முகத்தில் நிலைக்கட்டும்!
வெற்றிகள் உங்கள் வாசல் தேடி வரட்டும்,
வாழ்வெல்லாம் வசந்தமாக மாறட்டும்!

உங்களுக்கும் உங்கள் குடும்பத்தினருக்கும் இனிய தீபாவளி நல்வாழ்த்துகள்! 🪔🎉`,
  ],
  en: [
    `Let every lamp light up your way,
And fill your heart with joy each day.
Let every dream rise up and shine,
With love and happiness divine.
May peace and prosperity always stay,
Wishing you a bright and beautiful Diwali day!
Happy Diwali to you and your family! 🪔❤️`,
    `May your life sparkle bright,
Filled with joy, love and light!
Happy Diwali! ✨`,
    `Let us light a thousand lamps,
And turn our lives to joy!
Happy Diwali! 🪔`,
    `May the lights of Diwali glow,
May sweet joys overflow,
May new hope fill your heart,
May smiles never depart!
Happy Diwali to you and your family! 🪔🎉`,
  ],
};
let lang = localStorage.lang || "ta",
  sel = 0,
  snd = true,
  ck = "r";
const tr = () => {
  document
    .querySelectorAll("[data-t]")
    .forEach((e) => (e.textContent = T[lang][e.dataset.t]));
  document
    .querySelectorAll("[data-p]")
    .forEach((e) => (e.placeholder = T[lang][e.dataset.p]));
  const wallSection = $("#wall-section");
  if (wallSection) wallSection.hidden = lang === "ta";
  D.lang = lang === "ta" ? "ta" : "en";
};
const th = () =>
  ($("#theme").textContent = D.dataset.theme === "dark" ? "☀️" : "🌙");
$("#theme").onclick = () => {
  D.dataset.theme = D.dataset.theme === "dark" ? "light" : "dark";
  localStorage.theme = D.dataset.theme;
  th();
};
th();
$("#snd").onclick = () => {
  snd = !snd;
  $("#snd").textContent = snd ? "🔊" : "🔇";
  if (!snd) stopSong();
};
// floating emojis
for (let i = 0; i < 14; i++) {
  const s = document.createElement("span");
  s.textContent = ["🪔", "✨", "🎇", "🎆", "🪔", "⭐"][i % 6];
  s.style.cssText = `left:${Math.random() * 100}%;font-size:${16 + Math.random() * 22}px;animation-duration:${10 + Math.random() * 14}s;animation-delay:-${Math.random() * 20}s`;
  $("#float").appendChild(s);
}
// ===== audio =====
let AC;
const ac = () =>
  AC || (AC = new (window.AudioContext || window.webkitAudioContext)());
function noise(dur, f, vol, type = "lowpass") {
  if (!snd) return;
  const a = ac(),
    n = a.sampleRate * dur,
    b = a.createBuffer(1, n, a.sampleRate),
    d = b.getChannelData(0);
  for (let i = 0; i < n; i++)
    d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 2);
  const s = a.createBufferSource(),
    fl = a.createBiquadFilter(),
    g = a.createGain();
  s.buffer = b;
  fl.type = type;
  fl.frequency.value = f;
  g.gain.value = vol;
  s.connect(fl);
  fl.connect(g);
  g.connect(a.destination);
  s.start();
}
const boom = (v) => noise(1.3, 350, v || 1.3),
  crack = () => noise(0.07, 3500, 0.5, "highpass");
function tone(f, d, ty, v, sweep) {
  if (!snd) return;
  const a = ac(),
    o = a.createOscillator(),
    g = a.createGain(),
    t = a.currentTime;
  o.type = ty;
  o.frequency.setValueAtTime(f, t);
  if (sweep) o.frequency.exponentialRampToValueAtTime(sweep, t + d);
  g.gain.setValueAtTime(v, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + d);
  o.connect(g);
  g.connect(a.destination);
  o.start();
  o.stop(t + d);
}
const whistle = () => tone(400, 0.9, "sine", 0.08, 1700);
// ===== song =====
let song = null,
  syn = null;
function synth() {
  if (syn) return;
  const n = [
      392, 440, 494, 523, 587, 659, 587, 523, 494, 440, 392, 330, 392, 440, 494,
      392,
    ],
    b = [196, 196, 247, 196];
  let i = 0;
  syn = setInterval(() => {
    tone(n[i % 16], 0.3, "triangle", 0.12);
    if (i % 4 == 0) tone(b[((i / 4) | 0) % 4], 1, "sine", 0.1);
    if (i % 2 == 0) noise(0.07, 220, 0.4);
    i++;
  }, 260);
  song = "syn";
}
function stopSong() {
  if (song && song !== "syn") song.pause();
  clearInterval(syn);
  syn = null;
  song = null;
  const b = $("#song");
  if (b) b.style.boxShadow = "";
}
const sb = $("#song");
if (sb)
  sb.onclick = () => {
    if (song) {
      stopSong();
      return;
    }
    if (!snd) {
      snd = true;
      $("#snd").textContent = "🔊";
    }
    const a = new Audio("Songs.mp3");
    a.loop = true;
    song = a;
    a.play().catch((error) => {
      song = null;
      sb.style.boxShadow = "";
      console.error("Unable to play the Diwali song:", error);
    });
    sb.style.boxShadow = "0 0 16px #ff9100";
  };
// ===== fireworks =====
const cv = $("#fx"),
  cx = cv.getContext("2d");
let ps = [],
  rk = [],
  em = [],
  fl = 0;
const rs = () => {
  cv.width = innerWidth;
  cv.height = innerHeight;
};
rs();
addEventListener("resize", rs);
const hue = () => Math.random() * 360;
function burst(x, y, n = 100, sp = 6) {
  for (let i = 0; i < n; i++) {
    const a = (Math.PI * 2 * i) / n,
      s = sp * (0.3 + Math.random() * 0.7);
    ps.push({
      x,
      y,
      vx: Math.cos(a) * s,
      vy: Math.sin(a) * s,
      l: 1,
      d: 0.011 + Math.random() * 0.01,
      c: hue(),
      r: 2 + Math.random() * 1.5,
    });
  }
}
function spark(x, y, vx, vy, c, d = 0.03) {
  ps.push({ x, y, vx, vy, l: 1, d, c: c ?? hue(), r: 1.8 });
}
const C = {
  r(x, y) {
    whistle();
    rk.push({
      x,
      y: innerHeight,
      vx: (Math.random() - 0.5) * 1.5,
      vy: -13,
      ty: y,
    });
  },
  f(x, y) {
    let t = 0;
    em.push({
      n: 100,
      f() {
        if (t++ % 5 == 0) crack();
        for (let i = 0; i < 5; i++)
          spark(
            x,
            y,
            (Math.random() - 0.5) * 3.5,
            -(4 + Math.random() * 6),
            null,
            0.018,
          );
      },
    });
  },
  s(x, y) {
    em.push({
      n: 130,
      f() {
        if (Math.random() < 0.4) crack();
        for (let i = 0; i < 6; i++) {
          const a = Math.random() * 7;
          spark(
            x,
            y,
            Math.cos(a) * 3,
            Math.sin(a) * 3,
            45 + Math.random() * 20,
            0.05,
          );
        }
      },
    });
  },
  c(x, y) {
    let a = 0,
      t = 0;
    em.push({
      n: 150,
      f() {
        a += 0.35;
        if (t++ % 4 == 0) crack();
        for (let k = 0; k < 3; k++) {
          const b = a + k * 2.1;
          spark(x, y, Math.cos(b) * 5, Math.sin(b) * 5, t * 6);
        }
      },
    });
  },
  b(x, y) {
    boom(2);
    fl = 0.8;
    burst(x, y, 240, 11);
    burst(x, y, 80, 4);
    document.body.classList.add("shake");
    setTimeout(() => document.body.classList.remove("shake"), 400);
  },
};
function loop() {
  cx.globalCompositeOperation = "destination-out";
  cx.fillStyle = "rgba(0,0,0,.22)";
  cx.fillRect(0, 0, cv.width, cv.height);
  cx.globalCompositeOperation = "lighter";
  rk = rk.filter((r) => {
    r.x += r.vx;
    r.y += r.vy;
    spark(r.x, r.y, 0, 1, 40, 0.08);
    if (r.y <= r.ty) {
      burst(r.x, r.y, 110, 7);
      boom();
      return false;
    }
    return true;
  });
  em = em.filter((e) => {
    e.f();
    return --e.n > 0;
  });
  ps = ps.filter((p) => {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.06;
    p.vx *= 0.985;
    p.vy *= 0.985;
    p.l -= p.d;
    if (p.l <= 0) return false;
    cx.fillStyle = `hsla(${p.c},100%,60%,${p.l})`;
    cx.beginPath();
    cx.arc(p.x, p.y, p.r * p.l + 0.4, 0, 7);
    cx.fill();
    return true;
  });
  if (fl > 0.02) {
    cx.fillStyle = `rgba(255,255,255,${fl})`;
    cx.fillRect(0, 0, cv.width, cv.height);
    fl *= 0.85;
  }
  requestAnimationFrame(loop);
}
loop();
const rnd = () => [
  Math.random() * innerWidth * 0.8 + innerWidth * 0.1,
  Math.random() * innerHeight * 0.45 + innerHeight * 0.08,
];
const celebrate = () => {
  for (let i = 0; i < 4; i++) setTimeout(() => C.r(...rnd()), i * 350);
};
// ===== app =====
if (USER) {
  const sky = $("#sky"),
    chips = $("#chips"),
    msg = $("#msg"),
    prev = $("#prev");
  const names = { r: "r", f: "f", s: "s", c: "c", b: "b" };
  const ckb = () => {
    $("#ck").innerHTML = "";
    for (const k in names) {
      const b = document.createElement("button");
      b.className = "chip" + (k === ck ? " on" : "");
      b.style.setProperty("--c", P[Object.keys(names).indexOf(k)]);
      b.textContent = T[lang][k];
      b.onclick = () => {
        ck = k;
        ckb();
        const r = sky.getBoundingClientRect();
        C[k](
          r.left + r.width * (0.25 + Math.random() * 0.5),
          r.top + r.height * (k === "r" ? 0.35 : 0.8),
        );
      };
      $("#ck").appendChild(b);
    }
  };
  sky.onclick = (e) => C[ck](e.clientX, e.clientY);
  let at = null;
  $("#auto").onclick = () => {
    if (at) {
      clearInterval(at);
      at = null;
      return;
    }
    at = setInterval(() => C["rfscb"[(Math.random() * 5) | 0]](...rnd()), 900);
  };
  function showPrev(txt, anim) {
    prev.innerHTML = "";
    txt.split("\n").forEach((l, i) => {
      const s = document.createElement("span");
      s.textContent = l || "\u00a0";
      if (anim) s.style.animationDelay = i * 0.25 + "s";
      else {
        s.style.opacity = 1;
        s.style.animation = "none";
      }
      prev.appendChild(s);
    });
    const s = document.createElement("span");
    s.textContent = "— " + USER;
    s.style.fontWeight = "800";
    s.style.opacity = anim ? "" : 1;
    if (anim) s.style.animationDelay = txt.split("\n").length * 0.25 + "s";
    prev.appendChild(s);
    wa();
  }
  function wa() {
    $("#wa").href =
      "https://wa.me/?text=" + encodeURIComponent(msg.value + "\n— " + USER);
  }
  function pick(i, anim = true) {
    sel = i;
    msg.value = W[lang][i];
    [...chips.children].forEach((c, j) => c.classList.toggle("on", j === i));
    showPrev(msg.value, anim);
  }
  function mkChips() {
    chips.innerHTML = "";
    W[lang].forEach((_, i) => {
      const b = document.createElement("button");
      b.className = "chip";
      b.style.setProperty("--c", P[i % P.length]);
      b.textContent = "🪔 " + (i + 1);
      b.onclick = () => pick(i);
      chips.appendChild(b);
    });
  }
  msg.oninput = () => showPrev(msg.value, false);
  $("#send").onclick = async () => {
    const fd = new FormData();
    fd.append("a", "send");
    fd.append("t", TOK);
    fd.append("message", msg.value);
    fd.append("receiver", $("#to").value);
    const r = await fetch("api.php", { method: "POST", body: fd });
    const o = $("#ok");
    if (r.ok) {
      o.textContent = T[lang].sent;
      celebrate();
      boom(0.8);
      load();
      setTimeout(() => (o.textContent = ""), 4000);
    } else {
      o.textContent = "⚠️";
      setTimeout(() => (o.textContent = ""), 3000);
    }
  };
  async function load() {
    const r = await fetch("api.php?a=list"),
      d = await r.json(),
      w = $("#wall");
    w.innerHTML = "";
    if (!d.length) {
      w.innerHTML = '<p class="mut">' + T[lang].none + "</p>";
      return;
    }
    d.forEach((x, i) => {
      const c = document.createElement("div");
      c.className = "wc";
      c.style.setProperty("--c", P[x.id % P.length]);
      c.style.animationDelay = Math.min(i, 10) * 0.06 + "s";
      const f = document.createElement("div");
      f.className = "from";
      f.textContent =
        "🪔 " +
        T[lang].from +
        ": " +
        x.sender +
        (x.receiver ? "  →  " + T[lang].toL + ": " + x.receiver : "");
      const p = document.createElement("p");
      p.textContent = x.message;
      const s = document.createElement("small");
      s.textContent = x.created_at;
      c.append(f, p, s);
      w.appendChild(c);
    });
  }
  window.setLang = () => {
    mkChips();
    ckb();
    pick(Math.min(sel, W[lang].length - 1), false);
    load();
  };
  setInterval(load, 15000);
}
$("#lang").onclick = () => {
  lang = lang === "ta" ? "en" : "ta";
  localStorage.lang = lang;
  tr();
  if (USER) setLang();
};
tr();
if (USER) {
  setLang();
  pick(0);
}
document.body.addEventListener("click", () => {}, { once: true });
