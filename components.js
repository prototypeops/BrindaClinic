/* ============================================
   BRINDA CLINIC — Shared Components
   Injects navbar & footer into every page
   ============================================ */

(function () {
  const PHONE = '+91 98765 43210';
  const PHONE_TEL = '+919876543210';
  const EMAIL = 'care@brindaclinic.in';
  const ADDRESS = 'Near Aberdeen Bazaar, Port Blair, Andaman & Nicobar Islands — 744101';
  const WA_LINK = `https://wa.me/${PHONE_TEL}?text=Hello%20Brinda%20Clinic%2C%20I%27d%20like%20to%20know%20more.`;
  const MAPS_LINK = 'https://maps.google.com/?q=Port+Blair+Andaman+Nicobar';

  // ─── NAVBAR HTML ───
  const navbarHTML = `
<nav id="navbar">
  <div class="nav-inner container--wide">
    <a href="index.html" class="nav-brand">
      <img src="logo.png" alt="Brinda Clinic Logo" class="nav-logo" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="nav-logo-fallback" style="display:none">B</div>
      <div class="nav-name-group">
        <span class="nav-name">Brinda Clinic</span>
        <span class="nav-subtitle">Healthcare & Wellness</span>
      </div>
    </a>
    <div class="nav-actions">
      <a href="appointment.html" class="nav-appt-btn">
        <i data-lucide="calendar-plus" style="width:15px;height:15px"></i>
        Book Appointment
      </a>
      <button class="hamburger" id="hamburger-btn" aria-label="Open menu">
        <i data-lucide="menu" style="width:20px;height:20px"></i>
      </button>
    </div>
  </div>
</nav>

<div id="menu-overlay"></div>
<aside id="menu-drawer" role="dialog" aria-label="Navigation menu">
  <div class="drawer-header">
    <div class="drawer-brand">
      <img src="logo.png" alt="" style="width:32px;height:32px;border-radius:50%;object-fit:cover" onerror="this.style.display='none'">
      <span style="font-family:var(--font-display);font-size:1.1rem;color:var(--text-primary)">Brinda Clinic</span>
    </div>
    <button class="drawer-close" id="drawer-close" aria-label="Close menu">
      <i data-lucide="x" style="width:18px;height:18px"></i>
    </button>
  </div>
  <nav class="drawer-nav">
    <div class="drawer-nav-section">
      <span class="drawer-nav-label">Navigate</span>
      <a href="index.html"><i data-lucide="home" style="width:17px;height:17px;color:var(--text-muted)"></i> Home</a>
      <a href="index.html#about"><i data-lucide="building-2" style="width:17px;height:17px;color:var(--text-muted)"></i> About Us</a>
      <a href="index.html#services"><i data-lucide="stethoscope" style="width:17px;height:17px;color:var(--text-muted)"></i> Services</a>
      <a href="index.html#doctor"><i data-lucide="user-round" style="width:17px;height:17px;color:var(--text-muted)"></i> Our Doctor</a>
      <a href="index.html#testimonials"><i data-lucide="message-square-quote" style="width:17px;height:17px;color:var(--text-muted)"></i> Testimonials</a>
      <a href="index.html#faq"><i data-lucide="help-circle" style="width:17px;height:17px;color:var(--text-muted)"></i> FAQ</a>
      <a href="index.html#map-section"><i data-lucide="map-pin" style="width:17px;height:17px;color:var(--text-muted)"></i> Find Us</a>
    </div>
    <div class="drawer-nav-section">
      <span class="drawer-nav-label">Quick Actions</span>
      <a href="appointment.html"><i data-lucide="calendar-plus" style="width:17px;height:17px;color:var(--text-muted)"></i> Book Appointment</a>
      <a href="tel:${PHONE_TEL}"><i data-lucide="phone" style="width:17px;height:17px;color:var(--text-muted)"></i> Call Us</a>
      <a href="${WA_LINK}" target="_blank" rel="noopener"><i data-lucide="message-circle" style="width:17px;height:17px;color:var(--text-muted)"></i> WhatsApp</a>
    </div>
    <div class="drawer-nav-section">
      <span class="drawer-nav-label">Legal</span>
      <a href="privacy-policy.html"><i data-lucide="shield" style="width:17px;height:17px;color:var(--text-muted)"></i> Privacy Policy</a>
      <a href="terms.html"><i data-lucide="file-text" style="width:17px;height:17px;color:var(--text-muted)"></i> Terms of Service</a>
    </div>
  </nav>
  <div class="drawer-footer">
    <div class="theme-toggle-row">
      <span class="theme-toggle-label">
        <i data-lucide="sun" style="width:16px;height:16px"></i>
        Light Mode
      </span>
      <label class="toggle-switch">
        <input type="checkbox" class="theme-checkbox" id="theme-toggle-dark">
        <span class="toggle-track"></span>
      </label>
    </div>
    <div class="drawer-social">
      <a href="#" class="social-btn" aria-label="Facebook" title="Facebook"><i data-lucide="facebook" style="width:16px;height:16px"></i></a>
      <a href="#" class="social-btn" aria-label="Instagram" title="Instagram"><i data-lucide="instagram" style="width:16px;height:16px"></i></a>
      <a href="#" class="social-btn" aria-label="Twitter/X" title="Twitter/X"><i data-lucide="twitter" style="width:16px;height:16px"></i></a>
      <a href="${WA_LINK}" target="_blank" class="social-btn" aria-label="WhatsApp" title="WhatsApp"><i data-lucide="message-circle" style="width:16px;height:16px"></i></a>
      <a href="mailto:${EMAIL}" class="social-btn" aria-label="Email" title="Email"><i data-lucide="mail" style="width:16px;height:16px"></i></a>
    </div>
  </div>
</aside>
`;

  // ─── FOOTER HTML ───
  const footerHTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo-wrap">
          <div class="footer-logo-mark">B</div>
          <div>
            <span class="footer-name">Brinda Clinic</span>
            <span class="footer-tag">Healthcare & Wellness</span>
          </div>
        </div>
        <p class="footer-brand-desc">Committed to providing compassionate, evidence-based medical care to every patient who walks through our doors. Your health is our highest priority.</p>
        <div class="footer-social">
          <a href="#" aria-label="Facebook"><i data-lucide="facebook" style="width:15px;height:15px"></i></a>
          <a href="#" aria-label="Instagram"><i data-lucide="instagram" style="width:15px;height:15px"></i></a>
          <a href="#" aria-label="Twitter"><i data-lucide="twitter" style="width:15px;height:15px"></i></a>
          <a href="${WA_LINK}" target="_blank" aria-label="WhatsApp"><i data-lucide="message-circle" style="width:15px;height:15px"></i></a>
          <a href="https://www.youtube.com/" target="_blank" aria-label="YouTube"><i data-lucide="youtube" style="width:15px;height:15px"></i></a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul class="footer-links">
          <li><a href="index.html"><i data-lucide="chevron-right" style="width:12px;height:12px"></i>Home</a></li>
          <li><a href="index.html#about"><i data-lucide="chevron-right" style="width:12px;height:12px"></i>About Us</a></li>
          <li><a href="index.html#services"><i data-lucide="chevron-right" style="width:12px;height:12px"></i>Services</a></li>
          <li><a href="index.html#doctor"><i data-lucide="chevron-right" style="width:12px;height:12px"></i>Our Doctor</a></li>
          <li><a href="appointment.html"><i data-lucide="chevron-right" style="width:12px;height:12px"></i>Book Appointment</a></li>
          <li><a href="index.html#faq"><i data-lucide="chevron-right" style="width:12px;height:12px"></i>FAQ</a></li>
          <li><a href="privacy-policy.html"><i data-lucide="chevron-right" style="width:12px;height:12px"></i>Privacy Policy</a></li>
          <li><a href="terms.html"><i data-lucide="chevron-right" style="width:12px;height:12px"></i>Terms of Service</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Contact</h4>
        <div class="footer-contact-item">
          <i data-lucide="map-pin" class="footer-contact-icon" style="width:15px;height:15px"></i>
          <span>${ADDRESS}</span>
        </div>
        <div class="footer-contact-item">
          <i data-lucide="phone" class="footer-contact-icon" style="width:15px;height:15px"></i>
          <a href="tel:${PHONE_TEL}">${PHONE}</a>
        </div>
        <div class="footer-contact-item">
          <i data-lucide="mail" class="footer-contact-icon" style="width:15px;height:15px"></i>
          <a href="mailto:${EMAIL}">${EMAIL}</a>
        </div>
        <div class="footer-contact-item">
          <i data-lucide="message-circle" class="footer-contact-icon" style="width:15px;height:15px"></i>
          <a href="${WA_LINK}" target="_blank" rel="noopener">Chat on WhatsApp</a>
        </div>
        
        <div style="margin-top: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem;">
          <button id="chat-btn" class="btn btn--outline" style="width: 100%; justify-content: center; color: rgba(255,255,255,0.8); border-color: rgba(255,255,255,0.2);">
            <i data-lucide="message-square" style="width:15px;height:15px"></i> AI Chat Support
          </button>
          <button id="call-btn" class="btn btn--outline" style="width: 100%; justify-content: center; color: rgba(255,255,255,0.8); border-color: rgba(255,255,255,0.2);">
            <i data-lucide="headphones" style="width:15px;height:15px"></i> Contact Options
          </button>
        </div>
      </div>

      <div class="footer-col">
        <h4>Clinic Hours</h4>
        <div class="footer-hours-item"><span class="day">Monday</span><span>9:00 AM – 7:00 PM</span></div>
        <div class="footer-hours-item"><span class="day">Tuesday</span><span>9:00 AM – 7:00 PM</span></div>
        <div class="footer-hours-item"><span class="day">Wednesday</span><span>9:00 AM – 7:00 PM</span></div>
        <div class="footer-hours-item"><span class="day">Thursday</span><span>9:00 AM – 7:00 PM</span></div>
        <div class="footer-hours-item"><span class="day">Friday</span><span>9:00 AM – 7:00 PM</span></div>
        <div class="footer-hours-item"><span class="day">Saturday</span><span>9:00 AM – 5:00 PM</span></div>
        <div class="footer-hours-item"><span class="day">Sunday</span><span style="color:rgba(255,255,255,0.3)">Closed</span></div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© ${new Date().getFullYear()} Brinda Clinic. All rights reserved. Designed with care.</p>
      <div class="footer-legal">
        <a href="privacy-policy.html">Privacy Policy</a>
        <a href="terms.html">Terms of Service</a>
        <a href="appointment.html">Book Appointment</a>
      </div>
    </div>
  </div>
</footer>

<div id="chat-window">
  <div class="chat-header">
    <div class="chat-avatar"><i data-lucide="bot" style="width:18px;height:18px"></i></div>
    <div>
      <div class="chat-header-title">Brinda AI Assistant</div>
      <div class="chat-header-status"><span class="status-dot"></span>Online — here to help</div>
    </div>
    <button class="chat-close" id="chat-close" aria-label="Close chat">
      <i data-lucide="x" style="width:14px;height:14px"></i>
    </button>
  </div>
  <div class="chat-messages" id="chat-messages">
    <div class="chat-msg bot">Hi! I'm Brinda Clinic's virtual assistant. I can help you with appointments, services, clinic hours, and more. How can I help?</div>
  </div>
  <div class="chat-quick-btns">
    <button class="chat-quick-btn">Book Appointment</button>
    <button class="chat-quick-btn">Our Services</button>
    <button class="chat-quick-btn">Clinic Hours</button>
    <button class="chat-quick-btn">Location</button>
  </div>
  <div class="chat-input-area">
    <input class="chat-input" id="chat-input" type="text" placeholder="Type your message…" autocomplete="off">
    <button class="chat-send" id="chat-send" aria-label="Send">
      <i data-lucide="send" style="width:16px;height:16px"></i>
    </button>
  </div>
</div>

<div id="call-modal" role="dialog" aria-label="Contact options">
  <div class="call-card">
    <div class="call-avatar">
      <i data-lucide="headphones" style="width:32px;height:32px;color:var(--text-secondary)"></i>
    </div>
    <h3>How would you like to connect?</h3>
    <p>Our team is available Mon–Sat, 9 AM to 7 PM</p>
    <div class="call-options">
      <button class="call-option" id="call-direct">
        <div class="call-option-icon"><i data-lucide="phone-call" style="width:20px;height:20px"></i></div>
        <div>
          <div class="call-opt-title">Direct Call</div>
          <div class="call-opt-desc">${PHONE}</div>
        </div>
        <i data-lucide="arrow-right" style="width:16px;height:16px;margin-left:auto;color:var(--text-muted)"></i>
      </button>
      <button class="call-option" id="call-whatsapp">
        <div class="call-option-icon"><i data-lucide="message-circle" style="width:20px;height:20px"></i></div>
        <div>
          <div class="call-opt-title">WhatsApp Message</div>
          <div class="call-opt-desc">Quick chat support</div>
        </div>
        <i data-lucide="arrow-right" style="width:16px;height:16px;margin-left:auto;color:var(--text-muted)"></i>
      </button>
      <button class="call-option" id="call-callback">
        <div class="call-option-icon"><i data-lucide="calendar-clock" style="width:20px;height:20px"></i></div>
        <div>
          <div class="call-opt-title">Book Appointment</div>
          <div class="call-opt-desc">Schedule a visit online</div>
        </div>
        <i data-lucide="arrow-right" style="width:16px;height:16px;margin-left:auto;color:var(--text-muted)"></i>
      </button>
    </div>
    <button class="call-cancel" id="call-modal-close">Not right now</button>
  </div>
</div>
`;

  // ─── Inject on DOM ready ───
  function inject() {
    // Navbar
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
      navPlaceholder.outerHTML = navbarHTML;
    } else {
      document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    }

    // Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
      footerPlaceholder.outerHTML = footerHTML;
    } else {
      document.body.insertAdjacentHTML('beforeend', footerHTML);
    }

    // Re-run lucide icons
    if (window.lucide) lucide.createIcons();

    // Load scripts
    loadScript();
  }

  function loadScript() {
    const page = window.location.pathname;
    if (page.includes('appointment')) {
      const s = document.createElement('script');
      s.src = 'appointment.js';
      document.body.appendChild(s);
    }
    const s2 = document.createElement('script');
    s2.src = 'script.js';
    document.body.appendChild(s2);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();