// ---------------------------------------------------------------------------
// EDIT ME: This is the single place to change your personal info.
// Everything on the site reads from here.
// ---------------------------------------------------------------------------

export const site = {
  name: "Victor Wang",
  // Short line under your name in the hero + used in the browser tab
  role: "Computer Science student at NYU",
  domain: "victorlkwang.me",
  email: "victorlkwang@gmail.com", // personal — primary way to reach me
  schoolEmail: "vhw2009@nyu.edu",
  phone: "(646) 299-2124",
  location: "New York",

  // Your profile photo, shown on the home page.
  // Drop your image in the /public folder (e.g. public/profile.jpg) and
  // point this at it: "/profile.jpg". A placeholder is used until then.
  avatar: "/profile.svg",

  // Your résumé PDF, shown on the /resume page. Lives in /public.
  resume: "/Victor_Wang_Resume.pdf",

  // A couple of sentences about you, shown on the home page.
  about: [
    "I'm a computer science student at NYU interested in software engineering and opportunities across tech. I enjoy learning how systems work, building useful products, and turning ideas into something people can use.",
    "This site is where I keep the projects I've worked on and post the occasional thing I've been thinking about. It's a work in progress, same as me.",
  ],

  // A few things you're into. Shown as small chips on the home page.
  highlights: ["Web", "Machine learning", "Design", "Open source"],

  // Your social / professional links. Delete any you don't want.
  socials: [
    { label: "GitHub", href: "https://github.com/victorlkwang" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Email", href: "mailto:victorlkwang@gmail.com" },
  ],
};

// The "page legend" — your site navigation. Order here = order in the nav bar.
export const nav = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];
