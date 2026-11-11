/**
 * Portfolio Data Configuration - Faiq Fanani
 * Tema: Merah & Hitam (Red & Black Crimson Theme)
 */
const portfolioData = {
  profile: {
    brandName: "FF",
    fullName: "Faiq Fanani",
    badge: "Digital Creative Developer",
    subtitle: "Web • UI/UX • AI Content • Video • Social Media",
    avatar: "assets/profile.svg",
    stats: [
      { value: "3+", label: "Tahun Pengalaman" },
      { value: "20+", label: "Proyek Selesai" },
      { value: "100%", label: "Kreativitas" }
    ],
    aboutText1: "Saya adalah <strong class=\"text-white font-semibold\">Creative Technologist</strong> yang menggabungkan kemampuan teknis dalam pengembangan web dengan sensibilitas desain modern. Saat ini saya merupakan mahasiswa Program Studi Sistem Informasi, Universitas Sunan Gresik, dengan fokus pengembangan diri pada teknologi digital, UI/UX, dan sistem berbasis web.",
    aboutText2: "Dengan latar belakang yang kuat di bidang teknologi informasi dan media digital, saya menciptakan solusi digital yang tidak hanya bekerja secara optimal tetapi juga memberikan pengalaman estetis dan fungsional bagi pengguna."
  },

  focusAreas: [
    {
      id: "web-dev",
      icon: "code",
      title: "Web Development",
      description: "Membangun website responsif dan interaktif.",
      tags: ["React.js", "Tailwind CSS", "JavaScript", "HTML/CSS", "Next.js"]
    },
    {
      id: "ui-ux",
      icon: "palette",
      title: "UI/UX Design",
      description: "Merancang antarmuka yang intuitif.",
      tags: ["Figma", "Wireframing", "User Experience", "Prototyping", "Design System"]
    },
    {
      id: "ai-content",
      icon: "sparkles",
      title: "AI Content",
      description: "Memanfaatkan AI untuk produksi konten.",
      tags: ["Generative AI", "Midjourney", "Prompt Engineering", "Runway Gen-2", "Video Editing"]
    }
  ],

  experiences: [
    {
      period: "2025 - 2026",
      role: "STAF MEDIA KOMUNIKASI DAN INFORMASI HIMA SI UNIVERSITAS SUNAN GRESIK",
      company: "Organisasi • Media & Creative Team",
      points: [
        "Pengelolaan media sosial dan publikasi digital Program Studi Sistem Informasi.",
        "Perencanaan konten strategis dan pengelolaan kalender editorial kreatif.",
        "Produksi video dan grafis berbasis AI untuk promosi kegiatan kampus.",
        "Membangun visual branding interaktif yang meningkatkan engagement mahasiswa."
      ]
    },
    {
      period: "2024 - Sekarang",
      role: "MAGANG WEB DEVELOPER",
      company: "Self-Employed / Freelance",
      points: [
        "Mengembangkan website berbasis React.js dan Tailwind CSS dengan konsep desain modern dan performa tinggi.",
        "Membangun antarmuka interaktif responsif ramah pengguna (UI/UX) lintas platform.",
        "Menerapkan standarisasi kode bersih, SEO friendly, dan kecepatan akses maksimal."
      ]
    }
  ],

  projects: [
    {
      id: "project-1",
      categoryKey: "ai-content",
      categoryBadge: "AI CONTENT",
      title: "AI Creative Campaign System",
      detailTitle: "Future Brand AI Campaign",
      detailBadge: "AI CONTENT & VIDEO",
      shortDescription: "Produksi konten visual dan video berbasis AI untuk branding digital, promosi, dan storytelling kreatif berbasis teknologi generatif.",
      fullDescription: "Proyek kampanye digital inovatif yang memanfaatkan kekuatan Generative AI untuk menciptakan visual futuristik dan konten promosi modern.",
      image: "assets/project-ai.svg",
      tags: ["AI Video", "AI Image", "Digital Branding", "Generative Content"],
      objectives: "Meningkatkan brand awareness melalui visual yang unik dan viral di media sosial dengan pendekatan Generative AI terkini.",
      deliverables: [
        "AI Creative Production",
        "Cinematic Video Editing",
        "Smart Content Workflow",
        "Multi-Platform Content Delivery"
      ],
      info: {
        role: "AI Artist & Video Editor",
        category: "AI Content & Video",
        year: "2024 - 2025"
      },
      gallery: [
        { title: "Cyberpunk Red", image: "assets/gallery-1.svg" },
        { title: "3D Stylized Mascot", image: "assets/gallery-2.svg" },
        { title: "Crimson AI Visual", image: "assets/gallery-3.svg" },
        { title: "Futuristic Dunes", image: "assets/gallery-4.svg" }
      ]
    },
    {
      id: "project-2",
      categoryKey: "web-system",
      categoryBadge: "ACADEMIC WEB PROJECTS",
      title: "Final Project Digital System",
      detailTitle: "Academic Portal & Information System",
      detailBadge: "WEB SYSTEM & UI/UX",
      shortDescription: "Platform web berbasis proyek akademik dengan pendekatan profesional, modern UI/UX, dan sistem terstruktur yang siap diimplementasikan di dunia nyata.",
      fullDescription: "Sistem informasi berbasis web yang mengintegrasikan manajemen data akademik, analitik mahasiswa, dan antarmuka responsif yang memudahkan operasional kampus.",
      image: "assets/project-web.svg",
      tags: ["Web System", "UI/UX", "Frontend", "Digital Platform"],
      objectives: "Membangun platform akademik terpusat yang intuitif dan cepat digunakan baik melalui perangkat mobile maupun desktop.",
      deliverables: [
        "Modern Responsive Frontend",
        "Interactive Dashboard & Analytics",
        "Role-Based Access Management",
        "Real-time Data Visualization"
      ],
      info: {
        role: "Frontend Developer & UI Designer",
        category: "Web Application",
        year: "2024 - 2025"
      },
      gallery: [
        { title: "Admin Portal", image: "assets/project-web.svg" },
        { title: "Dashboard View", image: "assets/project-growth.svg" },
        { title: "Component Kit", image: "assets/gallery-2.svg" },
        { title: "Mobile Layout", image: "assets/gallery-1.svg" }
      ]
    },
    {
      id: "project-3",
      categoryKey: "digital-growth",
      categoryBadge: "DIGITAL GROWTH SYSTEM",
      title: "Smart Content Strategy",
      detailTitle: "Viral Growth & Engagement Campaign",
      detailBadge: "DIGITAL STRATEGY & VIDEO",
      shortDescription: "Manajemen konten cerdas mencakup perencanaan konten strategis, produksi visual & video digital, serta optimalisasi engagement berbasis data dan tren.",
      fullDescription: "Strategi pertumbuhan multi-channel TikTok & Instagram yang memanfaatkan konten video pendek berbasis storytelling emosional dan tren algoritma terkini.",
      image: "assets/project-growth.svg",
      tags: ["Content Planning", "Social Media", "Video", "AI Visual"],
      objectives: "Mencapai peningkatan reach organik, engagement rate tinggi, serta konsistensi brand persona di platform media sosial.",
      deliverables: [
        "Content Calendar & Trend Mapping",
        "High-Retention Short Form Video",
        "Audience Engagement Optimization",
        "Growth Analytics Reporting"
      ],
      info: {
        role: "Content Strategist & Creative Lead",
        category: "Social Media Growth",
        year: "2024 - 2025"
      },
      gallery: [
        { title: "Viral Analytics", image: "assets/project-growth.svg" },
        { title: "Reels & TikTok Kit", image: "assets/gallery-3.svg" },
        { title: "Brand Identity", image: "assets/gallery-4.svg" },
        { title: "Creative Storyboard", image: "assets/project-ai.svg" }
      ]
    }
  ],

  contact: {
    text: "Ini adalah ruang dokumentasi karya dan pengembangan diri saya. Untuk kolaborasi atau kebutuhan proyek, Anda dapat menghubungi saya melalui formulir atau media sosial di bawah ini.",
    email: "faiqfn27@gmail.com",
    whatsapp: "087733430941",
    whatsappFormatted: "+62 877 3343 0941",
    whatsappLink: "https://wa.me/6287733430941",
    linkedin: "linkedin.com/in/faiqfanani",
    linkedinLink: "https://linkedin.com/in/faiqfanani",
    github: "github.com/faiqfanani",
    githubLink: "https://github.com/faiqfanani"
  }
};
