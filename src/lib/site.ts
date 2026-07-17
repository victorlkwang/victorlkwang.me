// ---------------------------------------------------------------------------
// EDIT ME: This is the single place to change your personal info.
// Everything on the site reads from here.
// ---------------------------------------------------------------------------

export const site = {
  name: "Victor Wang",
  // Short line under your name in the hero + used in the browser tab
  role: "Student at NYU",
  domain: "victorlkwang.me",
  email: "vhw2009@nyu.edu",
  location: "New York",

  // Your profile photo, shown on the home page.
  // Drop your image in the /public folder (e.g. public/profile.jpg) and
  // point this at it: "/profile.jpg". A placeholder is used until then.
  avatar: "/profile.svg",

  // A couple of sentences about you, shown on the home page.
  // Write like you'd talk. Swap these for the real thing.
  about: [
    "Hey, I'm Victor. I study at NYU, and most of my free time goes into building things for the web and taking apart how other things work.",
    "This site is where I keep the projects I've worked on and post the occasional thing I've been thinking about. It's a work in progress, same as me.",
  ],

  // A few things you're into. Shown as small chips on the home page.
  highlights: ["Web", "Machine learning", "Design", "Open source"],

  // Your social / professional links. Delete any you don't want.
  socials: [
    { label: "GitHub", href: "https://github.com/victorlkwang" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Email", href: "mailto:vhw2009@nyu.edu" },
  ],
};

// The "page legend" — your site navigation. Order here = order in the nav bar.
export const nav = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
