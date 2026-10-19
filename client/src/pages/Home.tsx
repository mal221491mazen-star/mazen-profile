import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  Download,
  ExternalLink,
  Github,
  Globe2,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  X,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

type Language = "en" | "ar";

const copy = {
  en: {
    skip: "Skip to content",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navJourney: "Journey",
    navCredentials: "Credentials",
    navContact: "Contact",
    language: "العربية",
    kicker: "IT student · practical learner",
    heroTitleA: "Mazen",
    heroTitleB: "Al-Hajouri",
    heroSubtitle: "IT student building useful technology and practical skills.",
    heroDescription:
      "I explore software, web development, networks and cybersecurity through hands-on projects, careful documentation and steady learning.",
    explore: "Explore my work",
    download: "Download CV",
    available: "Learning by building",
    scroll: "Scroll to explore",
    aboutEyebrow: "01 / A little about me",
    aboutTitle: "Curious by nature. Practical by choice.",
    aboutLead:
      "Third-year Information Technology student at Al-Hikma University, interested in building useful technology and developing strong practical skills.",
    aboutBody:
      "My learning combines software and web development with networking, systems administration and cybersecurity fundamentals. I enjoy project-based learning, documentation, teamwork and turning ideas into working prototypes.",
    based: "Based in",
    study: "Studying",
    sectionSkills: "02 / Skills & tools",
    skillsTitle: "What I work with",
    practice: "Hands-on practice",
    learning: "Currently learning / strengthening",
    practiceNote: "Built through projects and lab work.",
    learningNote: "Areas I am actively strengthening through study and practical exercises.",
    sectionProjects: "03 / Selected work",
    projectsTitle: "Projects with purpose.",
    projectsIntro: "A selection of practical projects, concepts and academic work.",
    viewProject: "Open project",
    noLink: "Project details",
    sectionJourney: "04 / Experience & education",
    journeyTitle: "Learning in motion.",
    experience: "Experience & volunteering",
    education: "Education",
    sectionCredentials: "05 / Credentials & growth",
    credentialsTitle: "Learning, documented.",
    credentialsIntro: "Completed credentials and training, clearly distinguished.",
    credentialView: "View credential",
    credentialImage: "Download image",
    inProgress: "In progress",
    completed: "Completed",
    alwaysLearning: "Always learning.",
    alwaysLearningBody: "New skills, projects and certificates can be added over time.",
    sectionContact: "06 / Let’s connect",
    contactTitle: "Have an opportunity or a project?",
    contactBody: "Open to internships, collaboration, learning opportunities and entry-level IT roles.",
    email: "Email me",
    call: "Call",
    linkedin: "LinkedIn",
    github: "GitHub",
    footerLine: "Built to grow with my career.",
    backTop: "Back to top",
    projectCount: "projects",
    focus: "Focus",
  },
  ar: {
    skip: "انتقل إلى المحتوى",
    navAbout: "نبذة عني",
    navSkills: "المهارات",
    navProjects: "المشاريع",
    navJourney: "المسيرة",
    navCredentials: "الشهادات",
    navContact: "تواصل",
    language: "English",
    kicker: "طالب تقنية معلومات · تعلّم عملي",
    heroTitleA: "مازن",
    heroTitleB: "الحاجوري",
    heroSubtitle: "طالب تقنية معلومات يبني حلولاً مفيدة ومهارات عملية.",
    heroDescription:
      "أستكشف البرمجيات وتطوير الويب والشبكات والأمن السيبراني من خلال المشاريع العملية والتوثيق الدقيق والتعلّم المستمر.",
    explore: "استكشف أعمالي",
    download: "تحميل السيرة الذاتية",
    available: "أتعلّم من خلال البناء",
    scroll: "مرّر لاستكشاف الموقع",
    aboutEyebrow: "01 / نبذة عني",
    aboutTitle: "فضولي بطبيعتي. عمليّ باختياري.",
    aboutLead:
      "طالب تقنية معلومات في السنة الثالثة بجامعة الحكمة، مهتم ببناء تقنيات مفيدة وتطوير مهارات عملية قوية.",
    aboutBody:
      "يجمع تعلّمي بين تطوير البرمجيات والويب والشبكات وإدارة الأنظمة وأساسيات الأمن السيبراني. أستمتع بالتعلّم عبر المشاريع والتوثيق والعمل الجماعي وتحويل الأفكار إلى نماذج عملية.",
    based: "الموقع",
    study: "الدراسة",
    sectionSkills: "02 / المهارات والأدوات",
    skillsTitle: "مجالات أعمل عليها",
    practice: "تطبيق عملي",
    learning: "مهارات أعمل على تطويرها",
    practiceNote: "اكتسبتها عبر المشاريع والعمل المخبري.",
    learningNote: "مجالات أعمل على تعزيزها بالدراسة والتمارين العملية.",
    sectionProjects: "03 / أعمال مختارة",
    projectsTitle: "مشاريع بهدف واضح.",
    projectsIntro: "مجموعة من المشاريع العملية والأفكار والأعمال الأكاديمية.",
    viewProject: "عرض المشروع",
    noLink: "تفاصيل المشروع",
    sectionJourney: "04 / الخبرة والتعليم",
    journeyTitle: "تعلّم مستمر وتقدّم عملي.",
    experience: "الخبرة والتطوع",
    education: "التعليم",
    sectionCredentials: "05 / الشهادات والتطوير",
    credentialsTitle: "تعلّم موثّق.",
    credentialsIntro: "شهادات مكتملة وتدريب، مع توضيح الفرق بينهما.",
    credentialView: "عرض بيانات الشهادة",
    credentialImage: "تحميل الصورة",
    inProgress: "قيد التعلّم",
    completed: "مكتمل",
    alwaysLearning: "التعلّم مستمر.",
    alwaysLearningBody: "يمكن إضافة مهارات ومشاريع وشهادات جديدة مع الوقت.",
    sectionContact: "06 / تواصل معي",
    contactTitle: "هل لديك فرصة أو مشروع؟",
    contactBody: "أرحب بفرص التدريب والتعاون والتعلّم والوظائف المبتدئة في تقنية المعلومات.",
    email: "راسلني",
    call: "اتصل",
    linkedin: "لينكدإن",
    github: "جيت هاب",
    footerLine: "مساحة تنمو مع مسيرتي المهنية.",
    backTop: "العودة إلى الأعلى",
    projectCount: "مشاريع",
    focus: "المجال",
  },
} as const;

const skillArabic: Record<string, { title: string; description: string; tags: string[] }> = {
  "Web Development": {
    title: "تطوير الويب",
    description: "خبرة عملية في بناء صفحات الويب وتنظيمها وإنشاء متجر يعتمد على PHP.",
    tags: ["PHP", "HTML5", "CSS", "أساسيات JavaScript"],
  },
  "Desktop Applications": {
    title: "تطبيقات سطح المكتب",
    description: "إنشاء تطبيق لإدارة الشؤون المالية الشخصية بواجهة Windows Forms واتصال بقاعدة بيانات.",
    tags: ["C#", "Windows Forms", "LINQ to SQL"],
  },
  Databases: {
    title: "قواعد البيانات",
    description: "استخدام عملي لقواعد البيانات العلائقية في مشاريع التطبيقات.",
    tags: ["SQL Server", "MySQL", "البيانات العلائقية"],
  },
  "Development Tools": {
    title: "أدوات التطوير",
    description: "استخدام التحكم بالإصدارات وأدوات التطوير لإدارة الشيفرة والمشاريع.",
    tags: ["Git", "GitHub", "Visual Studio"],
  },
  "Networking & Systems Labs": {
    title: "مختبرات الشبكات والأنظمة",
    description: "تدريب عملي مخبري على طوبولوجيا الشبكات وبيئات Windows للعميل والخادم.",
    tags: ["GNS3", "IPv4 وتقسيم الشبكات", "مفاهيم OSPF", "مفاهيم VLAN / STP", "VMware"],
  },
  "Currently Developing": {
    title: "مهارات قيد التطوير",
    description: "مجالات أعمل على تعزيزها بالدراسة والتمارين العملية، وليست شهادات مكتملة أو ادعاءً بالخبرة المتقدمة.",
    tags: ["دراسة CCNA", "خدمات Windows Server", "أساسيات الأمن السيبراني", "البرمجة الكائنية وتصميم البرمجيات", "واجهات ويب متجاوبة"],
  },
};

const projectArabic: Record<string, { type: string; title: string; description: string; tags: string[] }> = {
  "01": {
    type: "نظام معلومات تعاوني",
    title: "بنك المستندات",
    description: "مشروع نظام معلومات تعاوني لحفظ المستندات الرسمية وتصنيفها والبحث عنها وعرضها ومشاركتها. شملت المساهمات تحليل المتطلبات وسير العمل ومخططات DFD/UML وقاموس البيانات وWBS وتخطيط مهام Jira. لا يوجد حالياً رابط لمستودع عام مخصص للمشروع.",
    tags: ["تحليل المتطلبات", "DFD / UML", "التوثيق", "Jira", "إدارة المشاريع", "WBS", "تطوير البرمجيات"],
  },
  "02": {
    type: "فكرة تطبيق ويب",
    title: "الجدبي — تأجير كوشات الأعراس",
    description: "فكرة يمنية لتأجير كوشات الأعراس، تشمل التصفح ومعرفة الأسعار واختيار التاريخ وطلبات الحجز والمحادثة بين العميل والمالك وإيصالات الطلب. يتوفر نموذج أولي عبر الإنترنت.",
    tags: ["مستودع TypeScript", "فكرة منتج", "تجربة تطبيقات الجوال"],
  },
  "03": {
    type: "تطوير ويب",
    title: "موقع تجارة إلكترونية",
    description: "مشروع متجر إلكتروني مبني على PHP، يتيح تصفح المنتجات وتسجيل الدخول وإنشاء الحساب وإدارة السلة، مع منطقة لإدارة المنتجات. يتوفر عرض مباشر أيضاً.",
    tags: ["PHP", "HTML / CSS / JavaScript", "MySQL"],
  },
  "04": {
    type: "تطبيق سطح مكتب",
    title: "مدير المصروفات الشخصية",
    description: "تطبيق لإدارة الشؤون المالية الشخصية باستخدام C# وWindows Forms وSQL Server وLINQ to SQL.",
    tags: ["C#", "Windows Forms", "SQL Server", "LINQ to SQL", ".NET Framework"],
  },
  "05": {
    type: "بحث أكاديمي واختبار اختراق",
    title: "الهندسة العكسية لتطبيقات الجوال وتحليل البنية الدفاعية",
    description: "مشروع متقدم في أمن تطبيقات الجوال يركّز على الهندسة العكسية لحزمة تطبيق Android (APK)، ودمج حمولة خبيثة، واستراتيجيات دفاع المنصة الحديثة.",
    tags: ["أمن الجوال", "الهندسة العكسية", "اختبار الاختراق", "أمن Android", "Metasploit Framework"],
  },
  "06": {
    type: "تدريب على الواجهات الأمامية",
    title: "موقع Our-School",
    description: "مشروع موقع بطابع مدرسي للتدرب على بنية الصفحات والتنقل وأساسيات تطوير الواجهات الأمامية.",
    tags: ["HTML", "CSS", "أدوات JavaScript"],
  },
};

const certificateArabic: Record<string, { title: string; issuer: string; description: string; label: string }> = {
  "TESOL Certification": {
    title: "شهادة TESOL",
    issuer: "معهد E-One",
    description: "تعليم اللغة الإنجليزية للناطقين بلغات أخرى. أضف صورة الشهادة أو رابط التحقق الرسمي لإتاحة التحقق المستقل من هذا الاعتماد.",
    label: "عرض تفاصيل الشهادة على LinkedIn",
  },
  "CCNA-focused Networking Training": {
    title: "تدريب شبكات يركّز على CCNA",
    issuer: "G.T.I — تدريب / دراسة",
    description: "تدريب ودراسة عملية في مجال الشبكات. هذا التدريب قيد التقدم وليس شهادة CCNA مكتملة.",
    label: "عرض تفاصيل التدريب على LinkedIn",
  },
  "Business Communication": {
    title: "التواصل في الأعمال",
    issuer: "HP LIFE",
    description: "يركّز على مبادئ التواصل المهني الفعّال، وصياغة رسائل أعمال مؤثرة، واختيار قنوات التواصل المناسبة للجمهور المستهدف.",
    label: "الرقم التسلسلي للشهادة:",
  },
  "Network Addressing and Basic Troubleshooting": {
    title: "عنونة الشبكات واستكشاف الأخطاء الأساسية",
    issuer: "أكاديمية Cisco للشبكات",
    description: "يركّز على تصميم مخططات عنونة IPv4 وIPv6 وحسابها وتطبيقها، إلى جانب التحقق الأولي من الشبكة وخطوات استكشاف الأخطاء الأساسية.",
    label: "بيانات الاعتماد",
  },
  "Modern Project Management & AI Application": {
    title: "إدارة المشاريع الحديثة وتطبيقات الذكاء الاصطناعي",
    issuer: "أكاديمية Lrnrs",
    description: "ندوة عبر الإنترنت مدتها ثلاث ساعات تستكشف مناهج إدارة المشاريع المعاصرة ودمجها مع أدوات الذكاء الاصطناعي لتحسين سير العمل التشغيلي.",
    label: "مشاركة",
  },
  "Introduction to Cybersecurity": {
    title: "مقدمة في الأمن السيبراني",
    issuer: "أكاديمية Cisco للشبكات",
    description: "تستعرض اتجاهات الأمن السيبراني والتهديدات والثغرات والأثر العالمي للجرائم الإلكترونية، إلى جانب أساسيات حماية البيانات الشخصية والمؤسسية.",
    label: "بيانات الاعتماد",
  },
  "Computer Networking": {
    title: "شبكات الحاسوب",
    issuer: "Cursa",
    description: "تغطي المفاهيم الأساسية لشبكات الحاسوب وأنظمة نقل البيانات وأطر الطوبولوجيا وبروتوكولات الشبكات.",
    label: "بيانات الاعتماد",
  },
  "PHP with MySQL tutorial by The Net Ninja": {
    title: "دورة PHP مع MySQL من The Net Ninja",
    issuer: "Cursa",
    description: "دورة تعليمية تغطي أساسيات تطوير الخادم باستخدام لغة PHP وقواعد بيانات MySQL لتطوير الويب.",
    label: "شهادة إتمام دورة عبر الإنترنت",
  },
};

const experienceArabic = {
  title: "متطوع — معرض بروج التقني / SMART-EX",
  place: "معرض تقني، صنعاء، اليمن",
  description:
    "مشاركة تطوعية في معرض تقني ركّز على الحوسبة والاتصالات والتحول الرقمي. تُضاف المهام الدقيقة وصورة الشهادة بعد توفر توثيق الفعالية.",
};
const educationArabic: Record<string, { title: string; place: string; description: string }> = {
  "Bachelor’s Degree in Information Technology": {
    title: "درجة البكالوريوس في تقنية المعلومات",
    place: "جامعة الحكمة — السنة الثالثة",
    description: "دراسة في تقنية المعلومات وتطوير البرمجيات وقواعد البيانات والشبكات والأنظمة.",
  },
  "High-Level Diploma": {
    title: "دبلوم عالٍ",
    place: "معهد الألسن الدولي",
    description: "إتمام دراسة الدبلوم.",
  },
};

const assetUrl = (path: string) =>
  `/${path.split("/").map((part) => encodeURIComponent(part)).join("/")}`;
const contact = portfolioData.contact;
const navItems = [
  ["#about", "navAbout"],
  ["#skills", "navSkills"],
  ["#projects", "navProjects"],
  ["#journey", "navJourney"],
  ["#credentials", "navCredentials"],
  ["#contact", "navContact"],
] as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const isArabic = language === "ar";
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.title = isArabic
      ? "مازن الحاجوري — ملف أعمال تقنية المعلومات"
      : "Mazen Al-Hajouri — IT Portfolio";
  }, [isArabic, language]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const skillText = (title: string) =>
    isArabic ? skillArabic[title] : undefined;

  return (
    <div className={`site-shell${isArabic ? " is-arabic" : ""}`} dir={isArabic ? "rtl" : "ltr"}>
      <a className="skip-link" href="#main">{t.skip}</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#home" aria-label="Mazen Al-Hajouri home">
            <span className="brand-mark" aria-hidden="true"><span>M</span><i>A</i></span>
            <span className="brand-copy"><strong>Mazen Al-Hajouri</strong><small>IT · SOFTWARE · NETWORKS</small></span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
          <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
            {navItems.map(([href, key]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{t[key]}</a>
            ))}
            <button className="language-toggle" type="button" onClick={() => setLanguage(isArabic ? "en" : "ar")}>
              <Globe2 size={15} aria-hidden="true" /> <span>{t.language}</span>
            </button>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero-section" id="home" aria-labelledby="hero-title">
          <div className="hero-backdrop" aria-hidden="true"><span>MA</span></div>
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="eyebrow hero-kicker"><span className="status-dot" />{t.kicker}</div>
              <h1 id="hero-title"><span>{t.heroTitleA}</span><em>{t.heroTitleB}</em></h1>
              <p className="hero-subtitle">{t.heroSubtitle}</p>
              <p className="hero-description">{t.heroDescription}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">{t.explore}<ArrowDownRight size={18} /></a>
                <a className="button button-ghost" href={assetUrl("assets/Mazen_Al_Hajouri_CV.pdf")} download>
                  <Download size={17} />{t.download}
                </a>
              </div>
              <div className="hero-socials">
                <a href={contact.linkedin} target="_blank" rel="noreferrer"><span>in</span> LinkedIn <ArrowUpRight size={13} /></a>
                <a href={contact.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub <ArrowUpRight size={13} /></a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="portrait-frame">
                <div className="portrait-number">01 <span>— 06</span></div>
                <img
                  src={assetUrl("assets/profile-photo.png")}
                  alt={isArabic ? "صورة مازن الحاجوري" : "Mazen Al-Hajouri"}
                  onError={(event) => { event.currentTarget.src = assetUrl("assets/profile-placeholder.svg"); }}
                />
                <div className="portrait-caption"><span>IT STUDENT</span><span>YEMEN</span></div>
              </div>
              <div className="orbit-note"><Code2 size={16} /><span>{t.available}</span></div>
              <div className="hero-coordinate">{isArabic ? "صنعاء / اليمن" : "SANA’A / YEMEN"}</div>
              <div className="hero-visual-caption"><span className="caption-line" />{t.scroll}<ArrowDown size={15} /></div>
            </div>
          </div>
          <div className="hero-bottomline"><span>SOFTWARE</span><i /><span>NETWORKS</span><i /><span>SYSTEMS</span><i /><span>CYBERSECURITY</span></div>
        </section>

        <section className="content-section about-section" id="about">
          <div className="section-rail"><span>{t.aboutEyebrow}</span><span className="rail-mark">✳</span></div>
          <div className="section-content about-content">
            <h2>{t.aboutTitle}</h2>
            <div className="about-grid">
              <p className="about-lead">{t.aboutLead}</p>
              <div className="about-detail">
                <p>{t.aboutBody}</p>
                <div className="about-facts">
                  <div><MapPin size={16} /><span><small>{t.based}</small><strong>{contact.location}</strong></span></div>
                  <div><GraduationCap size={17} /><span><small>{t.study}</small><strong>{isArabic ? "تقنية المعلومات" : "Information Technology"}</strong></span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-wrap">
            <div className="section-heading-row">
              <div><div className="eyebrow section-eyebrow">{t.sectionSkills}</div><h2>{t.skillsTitle}</h2></div>
              <p>{t.practiceNote}</p>
            </div>
            <div className="skills-layout">
              <div className="skill-group">
                <div className="skill-group-heading"><span className="skill-index">A</span><div><h3>{t.practice}</h3><p>{t.practiceNote}</p></div></div>
                <div className="skill-list">
                  {portfolioData.skills.filter((skill) => skill.status === "practice").map((skill, index) => {
                    const translated = skillText(skill.title);
                    return <article className="skill-row" key={skill.title}>
                      <span className="skill-count">0{index + 1}</span>
                      <div className="skill-main"><h4>{translated?.title ?? skill.title}</h4><p>{translated?.description ?? skill.description}</p><div className="tag-list">{(translated?.tags ?? skill.tags).map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div>
                      <ArrowUpRight size={17} className="skill-arrow" aria-hidden="true" />
                    </article>;
                  })}
                </div>
              </div>
              <div className="skill-group learning-group">
                <div className="skill-group-heading"><span className="skill-index learning-index">B</span><div><h3>{t.learning}</h3><p>{t.learningNote}</p></div></div>
                <div className="learning-card">
                  <span className="learning-icon"><Network size={22} /></span>
                  {portfolioData.skills.filter((skill) => skill.status === "learning").map((skill) => {
                    const translated = skillText(skill.title);
                    return <div key={skill.title}><h4>{translated?.title ?? skill.title}</h4><p>{translated?.description ?? skill.description}</p><div className="tag-list">{(translated?.tags ?? skill.tags).map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div>;
                  })}
                  <span className="learning-note"><span className="pulse-dot" />{t.inProgress}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-wrap">
            <div className="projects-heading">
              <div><div className="eyebrow section-eyebrow">{t.sectionProjects}</div><h2>{t.projectsTitle}</h2><p>{t.projectsIntro}</p></div>
              <div className="project-count"><strong>06</strong><span>{t.projectCount}</span><ArrowDownRight size={19} /></div>
            </div>
            <div className="project-grid">
              {portfolioData.projects.map((project) => {
                const translated = isArabic ? projectArabic[project.number] : undefined;
                return <article className={`project-card project-${project.number}`} key={project.number}>
                  <div className="project-image-wrap">
                    <img src={assetUrl(project.image)} alt={translated?.title ?? project.title} loading="lazy" />
                    <span className="project-image-number">{project.number} / 06</span>
                    <span className="project-image-arrow"><ArrowUpRight size={20} /></span>
                  </div>
                  <div className="project-meta"><span>{translated?.type ?? project.type}</span><span>{project.number}</span></div>
                  <h3>{translated?.title ?? project.title}</h3>
                  <p>{translated?.description ?? project.description}</p>
                  <div className="tag-list project-tags">{(translated?.tags ?? project.tags).map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                  <div className="project-links">
                    {project.links.length ? project.links.map((link) => <a href={link.url} key={link.url} target="_blank" rel="noreferrer">{link.label}<ExternalLink size={14} /></a>) : <span className="no-project-link"><BookOpen size={14} />{t.noLink}</span>}
                  </div>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section className="journey-section" id="journey">
          <div className="section-wrap">
            <div className="section-heading-row journey-heading">
              <div><div className="eyebrow section-eyebrow">{t.sectionJourney}</div><h2>{t.journeyTitle}</h2></div>
              <BriefcaseBusiness size={29} strokeWidth={1.25} />
            </div>
            <div className="journey-columns">
              <div className="journey-column">
                <h3><span className="journey-symbol"><BriefcaseBusiness size={17} /></span>{t.experience}</h3>
                {portfolioData.experience.map((item) => {
                  const translated = isArabic ? experienceArabic : undefined;
                  return <article className="timeline-entry" key={item.title}>
                    <div className="timeline-date">{item.date}</div><span className="timeline-dot" />
                    <div><h4>{translated?.title ?? item.title}</h4><div className="timeline-place">{translated?.place ?? item.place}</div><p>{translated?.description ?? item.description}</p></div>
                  </article>;
                })}
              </div>
              <div className="journey-column education-column">
                <h3><span className="journey-symbol"><GraduationCap size={18} /></span>{t.education}</h3>
                {portfolioData.education.map((item) => {
                  const translated = isArabic ? educationArabic[item.title] : undefined;
                  return <article className="timeline-entry" key={item.title}>
                    <div className="timeline-date">{isArabic ? (item.date === "CURRENT" ? "حالي" : "مكتمل") : item.date}</div><span className="timeline-dot" />
                    <div><h4>{translated?.title ?? item.title}</h4><div className="timeline-place">{translated?.place ?? item.place}</div><p>{translated?.description ?? item.description}</p></div>
                  </article>;
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="credentials-section" id="credentials">
          <div className="section-wrap">
            <div className="credentials-heading">
              <div><div className="eyebrow section-eyebrow">{t.sectionCredentials}</div><h2>{t.credentialsTitle}</h2><p>{t.credentialsIntro}</p></div>
              <span className="credential-stamp"><Award size={22} /><span>LEARN<br />· APPLY ·</span></span>
            </div>
            <div className="credential-grid">
              {portfolioData.certificates.map((certificate, index) => {
                const translated = isArabic ? certificateArabic[certificate.title] : undefined;
                const training = certificate.title.includes("Training");
                return <article className="credential-card" key={certificate.title}>
                  <div className="credential-image">
                    <img src={assetUrl(certificate.image)} alt={translated?.title ?? certificate.title} loading="lazy" />
                    <span className="credential-number">0{index + 1}</span>
                    <span className={`credential-status${training ? " status-learning" : ""}`}><span />{training ? t.inProgress : t.completed}</span>
                  </div>
                  <div className="credential-copy">
                    <div className="credential-issuer">{translated?.issuer ?? certificate.issuer}</div>
                    <h3>{translated?.title ?? certificate.title}</h3>
                    <p>{translated?.description ?? certificate.description}</p>
                    <div className="credential-actions">
                      <a href={certificate.url} target="_blank" rel="noreferrer">{translated?.label ?? certificate.label}<ArrowUpRight size={14} /></a>
                      <a className="credential-download" href={assetUrl(certificate.image)} download aria-label={t.credentialImage}><Download size={15} /></a>
                    </div>
                  </div>
                </article>;
              })}
            </div>
            <div className="always-learning"><span className="always-icon"><Check size={18} /></span><div><h3>{t.alwaysLearning}</h3><p>{t.alwaysLearningBody}</p></div><span className="always-arrow">↗</span></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-orbit" aria-hidden="true">MA</div>
          <div className="section-wrap contact-wrap">
            <div className="eyebrow contact-eyebrow">{t.sectionContact}</div>
            <div className="contact-layout">
              <div><h2>{t.contactTitle}</h2><p>{t.contactBody}</p></div>
              <div className="contact-actions">
                <a className="contact-primary" href={`mailto:${contact.email}`}><Mail size={18} />{t.email}<ArrowUpRight size={16} /></a>
                <a href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}><Phone size={16} />{t.call}<ArrowUpRight size={15} /></a>
                <a href={contact.linkedin} target="_blank" rel="noreferrer"><span className="contact-in">in</span>{t.linkedin}<ArrowUpRight size={15} /></a>
                <a href={contact.github} target="_blank" rel="noreferrer"><Github size={16} />{t.github}<ArrowUpRight size={15} /></a>
              </div>
            </div>
            <div className="contact-location"><MapPin size={15} />{contact.location}<span>·</span><a href={assetUrl("assets/Mazen_Al_Hajouri_CV.pdf")} download><Download size={14} />{t.download}</a></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#home"><span className="brand-mark small-mark"><span>M</span><i>A</i></span><strong>Mazen Al-Hajouri</strong></a>
        <span>© {new Date().getFullYear()} Mazen Al-Hajouri</span>
        <span className="footer-line">{t.footerLine}</span>
        <a className="back-top" href="#home">{t.backTop}<ChevronDown size={15} /></a>
      </footer>
    </div>
  );
}
