/**
 * FAIQ FANANI - PORTFOLIO INTERACTIVE JAVASCRIPT
 * Features: Loading Screen, Dark/Light Mode, Scrollspy, Typewriter,
 *           Filterable Projects, Project Modal, CV Preview,
 *           Contact Form Toast, and Smart Interactive AI Assistant.
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. LOADING SCREEN ANIMATION
  // =========================================================================
  const loadingScreen = document.getElementById('loading-screen');
  setTimeout(() => {
    if (loadingScreen) {
      loadingScreen.classList.add('fade-out');
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 600);
    }
  }, 1200);

  // =========================================================================
  // 1B. PROFILE PHOTO LOADER & INTERACTIVE CHANGER
  // =========================================================================
  const photoFileInput = document.getElementById('photo-file-input');
  const avatarPhotoImg = document.getElementById('avatar-photo-img');
  const aboutAvatarImg = document.getElementById('about-avatar-img');

  // Load saved photo from localStorage if user chose one previously
  const savedPhoto = localStorage.getItem('faiq_profile_photo');
  if (savedPhoto) {
    if (avatarPhotoImg) avatarPhotoImg.src = savedPhoto;
    if (aboutAvatarImg) aboutAvatarImg.src = savedPhoto;
  }

  if (photoFileInput) {
    photoFileInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const photoData = event.target.result;
          if (avatarPhotoImg) avatarPhotoImg.src = photoData;
          if (aboutAvatarImg) aboutAvatarImg.src = photoData;
          try {
            localStorage.setItem('faiq_profile_photo', photoData);
          } catch (err) {
            console.warn('Ukuran foto terlalu besar untuk LocalStorage, foto tetap ditampilkan untuk sesi ini.');
          }
          showToast('Foto profil berhasil diperbarui! 📸');
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // =========================================================================
  // 2. THEME SWITCHER (DARK / LIGHT MODE)
  // =========================================================================
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('faiq_theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  htmlElement.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('faiq_theme', newTheme);
      showToast(`Tema diganti ke mode ${newTheme === 'dark' ? 'Gelap 🌙' : 'Terang ☀️'}`);
    });
  }

  // =========================================================================
  // 3. MOBILE MENU TOGGLE
  // =========================================================================
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
      });
    });
  }

  // =========================================================================
  // 4. NAVBAR SCROLLSPY & ACTIVE STATE
  // =========================================================================
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links .nav-item');

  function updateActiveNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 140;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItems.forEach(item => {
          item.classList.remove('active');
          const anchor = item.querySelector('a');
          if (anchor && anchor.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  // =========================================================================
  // 5. TYPEWRITER EFFECT IN HERO SECTION
  // =========================================================================
  const typewriterElement = document.getElementById('typewriter');
  const phrases = [
    'Mahasiswa Sistem Informasi',
    'Universitas Sunan Gresik',
    'Fullstack Web Developer',
    'UI/UX & System Analyst',
    'Tech & Digital Enthusiast'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function typeWriter() {
    if (!typewriterElement) return;

    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 45;
    } else {
      typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 95;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typeSpeed = 1800; // Pause at end of phrase
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 400; // Pause before new phrase
    }

    setTimeout(typeWriter, typeSpeed);
  }

  setTimeout(typeWriter, 1400);

  // =========================================================================
  // 6. FILTERABLE PROJECTS
  // =========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // =========================================================================
  // 7. CV MODAL TRIGGER
  // =========================================================================
  const openCvBtn = document.getElementById('open-cv-btn');
  const cvModal = document.getElementById('cv-modal');

  if (openCvBtn && cvModal) {
    openCvBtn.addEventListener('click', () => {
      cvModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === cvModal) {
      closeCvModal();
    }
    const projectModal = document.getElementById('project-modal');
    if (e.target === projectModal) {
      closeProjectModal();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCvModal();
      closeProjectModal();
    }
  });

  // =========================================================================
  // 8. CONTACT FORM SUBMIT HANDLER
  // =========================================================================
  window.handleContactSubmit = function(event) {
    event.preventDefault();
    const submitBtn = document.getElementById('submit-btn');
    const form = document.getElementById('contact-form');
    const name = document.getElementById('name').value;

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Mengirim Pesan...</span>`;
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <span class="btn-text">SEND MESSAGE</span>
          <svg class="send-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        `;
      }
      form.reset();
      showToast(`Pesan terkirim! Terima kasih ${name}, Faiq akan segera membalas.`);
    }, 900);
  };

  // =========================================================================
  // 9. AI ASSISTANT WIDGET (REFERENCE FEATURE AS SEEN IN VIDEO)
  // =========================================================================
  const aiToggleBtn = document.getElementById('ai-toggle-btn');
  const aiChatBox = document.getElementById('ai-chat-box');
  const aiCloseBtn = document.getElementById('ai-close-btn');
  const aiMessages = document.getElementById('ai-messages');
  const aiInput = document.getElementById('ai-input');
  const greetingTime = document.getElementById('greeting-time');

  if (greetingTime) {
    const now = new Date();
    greetingTime.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  if (aiToggleBtn && aiChatBox) {
    aiToggleBtn.addEventListener('click', () => {
      aiChatBox.classList.toggle('open');
      if (aiChatBox.classList.contains('open')) {
        setTimeout(() => aiInput && aiInput.focus(), 200);
      }
    });
  }

  if (aiCloseBtn && aiChatBox) {
    aiCloseBtn.addEventListener('click', () => {
      aiChatBox.classList.remove('open');
    });
  }

  // Predefined AI knowledge base about Faiq Fanani
  const aiKnowledge = [
    {
      keywords: ['kamu siapa', 'siapa kamu', 'siapa anda', 'asisten', 'bot', 'what are you', 'who are you'],
      answer: 'Saya adalah <strong>Faiq Assistant</strong>, asisten AI pribadi yang dirancang khusus untuk merepresentasikan <strong>Faiq Fanani</strong>. Saya siap membantu Anda mengetahui lebih dalam tentang latar belakang pendidikan, keahlian teknis, dan portofolio proyek Faiq.'
    },
    {
      keywords: ['kuliah', 'kampus', 'universitas', 'sunan gresik', 'jurusan', 'prodi', 'sistem informasi', 'angkatan', 'mahasiswa', 'pendidikan', 'school', 'study'],
      answer: 'Faiq Fanani adalah <strong>Mahasiswa aktif program studi S1 Sistem Informasi di Universitas Sunan Gresik</strong>. Di kampusnya, Faiq berfokus pada rekayasa perangkat lunak web, pemodelan sistem bisnis, manajemen basis data, dan implementasi teknologi informasi modern.'
    },
    {
      keywords: ['keahlian', 'skill', 'kemampuan', 'bisa apa', 'stack', 'tech', 'bahasa', 'pemrograman', 'frontend', 'backend', 'database'],
      answer: 'Keahlian utama Faiq mencakup:<br>• <strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), Tailwind CSS, Bootstrap, React.js dasar.<br>• <strong>Backend & DB:</strong> PHP, Node.js dasar, MySQL, REST API.<br>• <strong>System Analysis:</strong> Pemodelan UML, BPMN, DFD, Normalisasi Database.<br>• <strong>Tools:</strong> Figma (UI/UX), Git & GitHub, VS Code.'
    },
    {
      keywords: ['proyek', 'project', 'portofolio', 'portfolio', 'karya', 'siakad', 'gresikmart', 'aplikasi', 'buat apa'],
      answer: 'Faiq telah mengembangkan beberapa proyek unggulan:<br>1. <strong>SIAKAD Sunan Gresik Portal:</strong> Sistem portal akademik dengan dashboard nilai, jadwal perkuliahan, dan modul KRS.<br>2. <strong>GresikMart:</strong> Platform e-commerce & katalog digital untuk mendukung UMKM daerah Gresik.<br>3. <strong>Smart Portfolio Web:</strong> Website portofolio interaktif ini yang dilengkapi dengan bot AI asisten pribadi!'
    },
    {
      keywords: ['kontak', 'hubungi', 'contact', 'email', 'wa', 'whatsapp', 'hire', 'kerja', 'kolaborasi', 'telepon', 'dm'],
      answer: 'Anda dapat menghubungi Faiq Fanani secara langsung melalui:<br>• <strong>Email:</strong> faiqfanani@example.com<br>• <strong>Lokasi:</strong> Gresik, Jawa Timur, Indonesia<br>• Anda juga bisa mengisi formulir langsung di bagian <em>Contact Me</em> di website ini.'
    },
    {
      keywords: ['lokasi', 'asal', 'tinggal', 'gresik', 'kota', 'domisili', 'where'],
      answer: 'Faiq berdomisili di <strong>Gresik, Jawa Timur, Indonesia</strong> dan saat ini menempuh perkuliahan di Universitas Sunan Gresik.'
    },
    {
      keywords: ['halo', 'hai', 'hello', 'hi', 'pagi', 'siang', 'sore', 'malam', 'assalamualaikum'],
      answer: 'Halo! Selamat datang di portofolio Faiq Fanani. Ada yang ingin Anda ketahui tentang Faiq, jurusannya di Universitas Sunan Gresik, atau proyek yang sedang ia kerjakan?'
    }
  ];

  function getAiResponse(userText) {
    const cleanText = userText.toLowerCase().trim();

    for (const item of aiKnowledge) {
      const match = item.keywords.some(keyword => cleanText.includes(keyword));
      if (match) {
        return item.answer;
      }
    }

    return `Pertanyaan yang menarik! Faiq Fanani adalah mahasiswa <strong>Sistem Informasi Universitas Sunan Gresik</strong> yang antusias dalam web development dan analisis sistem. Anda dapat bertanya seputar <em>"Keahlian Faiq"</em>, <em>"Kampus & Pendidikan"</em>, <em>"Proyek yang pernah dibuat"</em>, atau <em>"Cara menghubungi Faiq"</em>.`;
  }

  window.handleAiChat = function(event) {
    event.preventDefault();
    if (!aiInput) return;
    const text = aiInput.value.trim();
    if (!text) return;

    appendMessage('user', text);
    aiInput.value = '';

    // Show typing indicator
    const typingIndicator = showTypingIndicator();

    setTimeout(() => {
      typingIndicator.remove();
      const reply = getAiResponse(text);
      appendMessage('bot', reply);
    }, 600);
  };

  window.sendQuickPrompt = function(promptText) {
    if (!aiChatBox.classList.contains('open')) {
      aiChatBox.classList.add('open');
    }
    if (aiInput) aiInput.value = promptText;
    const form = document.getElementById('ai-chat-form');
    if (form) {
      form.dispatchEvent(new Event('submit', { cancelable: true }));
    }
  };

  function appendMessage(sender, text) {
    if (!aiMessages) return;
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const msgDiv = document.createElement('div');
    msgDiv.className = `ai-msg ${sender}`;
    msgDiv.innerHTML = `
      <div class="ai-msg-content">
        <p>${text}</p>
        <span class="msg-time">${timeStr}</span>
      </div>
    `;

    aiMessages.appendChild(msgDiv);
    aiMessages.scrollTop = aiMessages.scrollHeight;
  }

  function showTypingIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'ai-msg bot typing-ind';
    indicator.innerHTML = `
      <div class="ai-msg-content">
        <div class="typing-dots">
          <span></span><span></span><span></span>
        </div>
      </div>
    `;
    aiMessages.appendChild(indicator);
    aiMessages.scrollTop = aiMessages.scrollHeight;
    return indicator;
  }

});

// =========================================================================
// 10. PROJECT DETAIL MODAL DATA & FUNCTIONS
// =========================================================================
const projectsData = {
  siakad: {
    title: 'SIAKAD Sunan Gresik Portal',
    category: 'Sistem Informasi Kampus',
    description: 'SIAKAD Portal adalah prototipe sistem informasi akademik terpadu yang dirancang untuk mempermudah civitas akademika Universitas Sunan Gresik dalam mengelola perkuliahan, kartu rencana studi (KRS), transkrip nilai, jadwal perkuliahan, dan rekapitulasi presensi.',
    features: [
      'Dashboard Mahasiswa & Dosen dengan visualisasi progres akademik',
      'Manajemen Pengisian dan Persetujuan Kartu Rencana Studi (KRS)',
      'Sistem Input Nilai Dosen & Kalkulasi Indeks Prestasi (IPK/IPS) otomatis',
      'Database relasional teroptimasi dengan perlindungan otentikasi sesi'
    ],
    techStack: ['PHP Modern', 'MySQL Database', 'Bootstrap 5', 'JavaScript', 'HTML5/CSS3'],
    links: { demo: '#', github: 'https://github.com' }
  },
  gresikmart: {
    title: 'GresikMart E-Commerce & UMKM Platform',
    category: 'Web Application & E-Commerce',
    description: 'Platform katalog digital dan marketplace berbasis web untuk memberdayakan UMKM di daerah Kabupaten Gresik. Memungkinkan pedagang memajang produk lokal khas Gresik, menerima pemesanan, dan mengelola stok dengan antarmuka yang ramah pengguna.',
    features: [
      'Katalog produk interaktif dengan pencarian cepat dan filter kategori',
      'Keranjang belanja (cart) berbasis LocalStorage dan sinkronisasi server',
      'Integrasi checkout WhatsApp otomatis untuk mempermudah pembeli UMKM',
      'Desain responsif ultra-cepat menggunakan Tailwind CSS'
    ],
    techStack: ['JavaScript (ES6+)', 'Tailwind CSS', 'REST API', 'JSON Store'],
    links: { demo: '#', github: 'https://github.com' }
  },
  portfolio: {
    title: 'Personal Portfolio with AI Assistant',
    category: 'Interactive Web & AI Engine',
    description: 'Website portofolio generasi terbaru yang menggabungkan estetika minimalis, dark/light mode otomatis, micro-interactions, serta bot AI asisten interaktif yang dapat menjawab pertanyaan pengunjung seputar profil Faiq Fanani secara instan.',
    features: [
      'Dark & Light Mode Switcher dengan penyimpanan preferensi di LocalStorage',
      'Asisten Virtual AI (Faiq Assistant) dengan pemrosesan bahasa alami (NLP sederhana)',
      'Timeline pengalaman vertikal interaktif dengan animasi scroll',
      '100% Responsif, performa ringan tanpa ketergantungan library berat'
    ],
    techStack: ['HTML5 Semantic', 'CSS3 Variables & Animations', 'Vanilla JavaScript', 'Lucide Icons'],
    links: { demo: '#', github: 'https://github.com' }
  }
};

window.openProjectModal = function(projectId) {
  const modal = document.getElementById('project-modal');
  const contentContainer = document.getElementById('modal-project-content');
  const project = projectsData[projectId];

  if (!project || !contentContainer || !modal) return;

  const featuresHtml = project.features.map(f => `<li>${f}</li>`).join('');
  const tagsHtml = project.techStack.map(t => `<span class="project-tag-pill">${t}</span>`).join('');

  contentContainer.innerHTML = `
    <div class="modal-project-header">
      <span class="modal-category">${project.category}</span>
      <h2 class="modal-title">${project.title}</h2>
    </div>

    <div class="modal-project-body">
      <p class="modal-desc">${project.description}</p>
      
      <div class="modal-section-group">
        <h4>Fitur Utama:</h4>
        <ul class="modal-features-list">
          ${featuresHtml}
        </ul>
      </div>

      <div class="modal-section-group">
        <h4>Teknologi Digunakan:</h4>
        <div class="modal-tech-tags">
          ${tagsHtml}
        </div>
      </div>
    </div>

    <div class="modal-project-footer">
      <a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
        <span>Buka Repositori GitHub</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="btn-icon">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </a>
      <button class="btn btn-outline" onclick="closeProjectModal()">Tutup</button>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeProjectModal = function() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
};

window.closeCvModal = function() {
  const cvModal = document.getElementById('cv-modal');
  if (cvModal) {
    cvModal.classList.remove('open');
    document.body.style.overflow = '';
  }
};

// =========================================================================
// 11. TOAST NOTIFICATION HELPER
// =========================================================================
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
