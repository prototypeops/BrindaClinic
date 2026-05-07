/* ============================================
   BRINDA CLINIC — Main JavaScript
   ============================================ */

// ─── Lucide Icons Init ───
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();
});

// ─── Theme ───
const ThemeManager = (() => {
  const root = document.documentElement;
  const stored = localStorage.getItem('brinda-theme') || 'light';
  let current = stored;

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    current = theme;
    localStorage.setItem('brinda-theme', theme);
    document.querySelectorAll('.theme-checkbox').forEach(cb => {
      cb.checked = (theme === 'dark');
    });
  }

  function toggle() {
    apply(current === 'light' ? 'dark' : 'light');
  }

  apply(stored);
  return { toggle, apply, get: () => current };
})();

// ─── Navbar Scroll ───
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// ─── Drawer Menu ───
const menuOverlay = document.getElementById('menu-overlay');
const menuDrawer  = document.getElementById('menu-drawer');
const hamburger   = document.getElementById('hamburger-btn');
const drawerClose = document.getElementById('drawer-close');

function openMenu() {
  menuOverlay?.classList.add('open');
  menuDrawer?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  menuOverlay?.classList.remove('open');
  menuDrawer?.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger?.addEventListener('click', openMenu);
drawerClose?.addEventListener('click', closeMenu);
menuOverlay?.addEventListener('click', closeMenu);
menuDrawer?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

// ─── Theme Toggle ───
document.querySelectorAll('.theme-checkbox').forEach(cb => {
  cb.addEventListener('change', () => ThemeManager.toggle());
});

// ─── FAQ Accordion ───
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ─── Scroll Reveal ───
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ─── Counter Animation ───
function animateCounter(el, target, suffix = '') {
  let start = 0;
  const duration = 2000;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target + suffix;
  };
  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        animateCounter(el, target, suffix);
      });
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.hero-stats, .stats-section').forEach(el => counterObserver.observe(el));

// ─── AI Chat Widget ───
const chatBtn    = document.getElementById('chat-btn');
const chatWindow = document.getElementById('chat-window');
const chatClose  = document.getElementById('chat-close');
const chatInput  = document.getElementById('chat-input');
const chatSend   = document.getElementById('chat-send');
const chatMsgs   = document.getElementById('chat-messages');

// Clinic knowledge base for AI responses
const clinicKB = {
  greetings: ["Hello! I'm Brinda Clinic's virtual assistant. How can I help you today?", "Hi there! Welcome to Brinda Clinic. What can I assist you with?"],
  appointment: "You can book an appointment online through our booking page, or call us at +91 98765 43210. We're available Mon–Sat, 9AM to 7PM.",
  services: "We offer General Medicine, Paediatrics, Gynaecology, Cardiology Consultation, Diabetes Management, Preventive Health Check-ups, Minor Surgical Procedures, and Vaccination services.",
  hours: "Our clinic is open Monday to Saturday, 9:00 AM – 7:00 PM. We are closed on Sundays, but emergency contacts are available.",
  location: "We are located in Port Blair, Andaman and Nicobar Islands. You can find us on the map on our website or call for exact directions.",
  doctor: "Our lead physician brings over 15 years of clinical experience. You can learn more about our medical team in the 'About the Doctor' section.",
  emergency: "For medical emergencies, please call 102 or visit the nearest Government Hospital. You can also reach us at +91 98765 43210.",
  fees: "Consultation fees vary by service. General consultations start from ₹300. Please call or message us for specific service pricing.",
  insurance: "We accept most major health insurance plans. Please bring your insurance card and ID. Call us to verify your coverage beforehand.",
  default: ["I can help you with information about appointments, services, hours, location, and more. What would you like to know?",
            "I'm not sure about that, but you can reach our team directly at +91 98765 43210 or via WhatsApp for a more detailed answer."]
};

function getChatResponse(msg) {
  const m = msg.toLowerCase();
  if (/hello|hi|hey|good/.test(m)) return clinicKB.greetings[Math.floor(Math.random() * clinicKB.greetings.length)];
  if (/appoint|book|schedule|visit/.test(m)) return clinicKB.appointment;
  if (/service|treat|special|offer/.test(m)) return clinicKB.services;
  if (/hour|time|open|close|timing/.test(m)) return clinicKB.hours;
  if (/where|location|address|find|direction|map/.test(m)) return clinicKB.location;
  if (/doctor|physician|dr|specialist/.test(m)) return clinicKB.doctor;
  if (/emergency|urgent|critical/.test(m)) return clinicKB.emergency;
  if (/fee|cost|price|charge|rate/.test(m)) return clinicKB.fees;
  if (/insurance|cover|claim/.test(m)) return clinicKB.insurance;
  return clinicKB.default[Math.floor(Math.random() * clinicKB.default.length)];
}

function appendMsg(text, type) {
  const div = document.createElement('div');
  div.className = `chat-msg ${type}`;
  div.textContent = text;
  chatMsgs?.appendChild(div);
  chatMsgs?.scrollTo({ top: chatMsgs.scrollHeight, behavior: 'smooth' });
  return div;
}

function showTyping() {
  const div = document.createElement('div');
  div.className = 'chat-msg typing bot';
  div.innerHTML = '<span></span><span></span><span></span>';
  chatMsgs?.appendChild(div);
  chatMsgs?.scrollTo({ top: chatMsgs.scrollHeight, behavior: 'smooth' });
  return div;
}

async function sendChatMessage() {
  const msg = chatInput?.value.trim();
  if (!msg) return;
  chatInput.value = '';
  appendMsg(msg, 'user');
  const typing = showTyping();
  await new Promise(r => setTimeout(r, 900 + Math.random() * 700));
  typing.remove();
  appendMsg(getChatResponse(msg), 'bot');
}

chatBtn?.addEventListener('click', () => {
  const isOpen = chatWindow?.classList.contains('open');
  if (isOpen) { chatWindow.classList.remove('open'); }
  else { chatWindow?.classList.add('open'); }
});
chatClose?.addEventListener('click', () => chatWindow?.classList.remove('open'));
chatSend?.addEventListener('click', sendChatMessage);
chatInput?.addEventListener('keydown', e => { if (e.key === 'Enter') sendChatMessage(); });

// Quick reply buttons
document.querySelectorAll('.chat-quick-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (chatInput) chatInput.value = btn.textContent;
    sendChatMessage();
  });
});

// ─── Call Modal ───
const callBtn   = document.getElementById('call-btn');
const callModal = document.getElementById('call-modal');
const callClose = document.getElementById('call-modal-close');

callBtn?.addEventListener('click', () => callModal?.classList.add('open'));
callClose?.addEventListener('click', () => callModal?.classList.remove('open'));
callModal?.addEventListener('click', e => { if (e.target === callModal) callModal.classList.remove('open'); });

document.getElementById('call-direct')?.addEventListener('click', () => {
  window.location.href = 'tel:+919876543210';
  callModal?.classList.remove('open');
});
document.getElementById('call-whatsapp')?.addEventListener('click', () => {
  window.open('https://wa.me/919876543210?text=Hello%2C%20I%27d%20like%20to%20book%20a%20consultation.', '_blank');
  callModal?.classList.remove('open');
});
document.getElementById('call-callback')?.addEventListener('click', () => {
  window.open('appointment.html', '_blank');
  callModal?.classList.remove('open');
});

// ─── WhatsApp Button ───
document.getElementById('whatsapp-btn')?.addEventListener('click', () => {
  window.open('https://wa.me/919876543210?text=Hello%20Brinda%20Clinic%2C%20I%27d%20like%20to%20know%20more.', '_blank');
});

// ─── Appointment form quick-fill from CTA ───
document.querySelectorAll('[data-book]').forEach(btn => {
  btn.addEventListener('click', () => {
    window.location.href = 'appointment.html';
  });
});
