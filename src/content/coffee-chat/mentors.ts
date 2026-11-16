import { panelists } from "../speakers/panelists";

export interface CoffeeChatMentor {
  name: string;
  title?: string;
  bio?: string;
}

export const coffeeChatMentors: CoffeeChatMentor[] = [
  {
    name: "Anna Khimchenko",
    title: "Principal of Scientific Evidence @ MIMOSA Diagnostics",
    bio: `Anna Khimchenko, PhD, MBA, is the Principal of Scientific Evidence at MIMOSA Diagnostics and Co-Chair of the Tools Working Group at the Wound Care Collaborative Community. With over 12 years of experience across MedTech diagnostics and diagnostic imaging R&D, she specializes in building clinical evidence roadmaps, translating complex datasets into market-ready value propositions, and driving cross-functional scientific strategy.

Throughout her career—spanning roles at Harvard Medical School, Qvella, and MIMOSA—Anna has secured over $3M in non-dilutive funding, co-authored patents in AI-driven diagnostics, and spearheaded international scientific publication initiatives.

Anna is passionate about advancing evidence-based health technologies, empowering women in STEM through active mentorship, and fostering cross-sector collaborations. She welcomes conversations on building clinical evidence, navigating regulatory validation, and cultivating rewarding careers at the intersection of science, business, and medical technology.`,
  },
  {
    name: "Ania Harlick",
    title: "Associate Professor, Teaching @ University of Toronto",
    bio: "Ania Harlick considers herself to be an accidental physicist with a passion for education. She is currently an Associate Professor, Teaching at the University of Toronto having previously been a Teaching Stream Faculty Member at the University of Calgary. Originally from Poland, she earned her doctorate in Physics from Memorial University of Newfoundland and Labrador in 2010. As her primary responsibilities are teaching university courses, most of her research focuses on implementing modern pedagogy into the design of course and laboratory components. When she can, she chooses service activities related to student life and academic programs. As far as she is concerned, she has her dream job.",
  },
  {
    name: "Mimi Le",
    title: "Product Manager @ RBC Clear",
    bio: `Mimi Le is a Product Manager at RBC Clear, leading digital onboarding and identity infrastructure for institutional platforms handling over $23B in assets. Graduating from Engineering at the University of Toronto, she bridges technical systems and financial operations through data analytics and agentic AI automation to streamline complex workflows.

Mimi takes pride in demonstrating a route out of an engineering degree, leveraging her engineering training for first-principles logic and structured problem-solving in fintech. Her achievements include winning the Capital Markets Quarterly Performance Award, co-chairing Science Rendezvous, and founding the SRHacks youth STEAM initiative. Passionate about youth empowerment and digital equity, she offers mentorship in engineering, product management, career transitions, and AI workflow integration.`,
  },
  {
    name: "Weeda Tiraei",
    title: "Geology Intern @ Kinross Gold Corporation",
    bio: `I am currently a geology intern at Kinross Gold Corporation, working with the Resource Mine and Geology team, with previous experience at Agnico Eagle Mines, the Ontario Geological Survey, and Glencore.

During these experiences, I have learned detailed mapping, digitization and interpretation of 3D models, and aiding in continuous production on site. I had the opportunity to travel to Mauritania in West Africa, Chile, and Alaska, all to aid the understanding of ore bodies and further production. Leapfrog is the main platform that geologists use to model the data and send to the mine planning engineers and I have obtained a significant amount of exposure with the software at Kinross. In geology, no matter the scale, a sample can give you so much information about the environment you are understanding.

I can give advice to anyone who is interested in the mining industry in general, whether that be metallurgy, mine planning, and geology.`,
  },
  {
    name: "Kajal Panicker",
    title: "AI/ML Cloud Consultant @ Amazon Web Services",
    bio: "I'm Kajal Panicker, an AI/ML Cloud Consultant at Amazon Web Services in Toronto. I build generative AI systems for banks, insurers and healthcare companies by working alongside their engineering teams to get those systems running in production. I studied Computer Science and Psychology (Neuroscience-focused) at the University of Toronto, then took a non-linear route into tech. I managed 117 people at an Amazon Robotics Warehouse while studying for AWS cloud certifications on night shifts, and moved into a cloud architecture program from there. I'm passionate about where technology meets human experience: Neuroscience, UX, game development, and art. Ask me about CS and Psychology degrees, breaking into cloud and AI, and career-pivoting certifications/resumes.",
  },
  {
    name: "Rebecca Alcock",
    title: "Postdoctoral Fellow @ Centre for Global Engineering",
    bio: panelists["Rebecca Alcock"].bio,
  },
  { name: "Danielle Goldfarb" },
];
