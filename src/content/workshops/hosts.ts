export interface WorkshopHost {
  name: string;
  title: string;
  bio: string;
  preferredName?: string;
  objectPosition?: string;
  announced?: boolean;
}

export interface WorkshopGroup {
  title: string;
  description: string;
  hosts: WorkshopHost[];
  subtitle: string;
  time?: string;
  hidden?: boolean;
  requirements?: string;
}

export const workshopGroups: WorkshopGroup[] = [
  {
    title: "What Should I Eat This Week? Meal Planning for Busy Students on a Budget",
    subtitle: "Néma McGlynn - MSc, Registered Dietitian",
    time: "Saturday, 10:30AM - 12:00PM | Pier 5",
    description:
      "Groceries keep getting pricier, and between classes, work, and everything else, cooking can feel like one more thing on the list. In this interactive session, I’ll share simple strategies I use with clients to eat well, spend less, and plan meals in minutes. You’ll swap ideas with other students and leave with a plan you’ll actually use.",
    hosts: [
      {
        name: "Néma McGlynn",
        title: "Registered Dietitian",
        bio: "Néma McGlynn, MSc, RD, is a Registered Dietitian and University of Toronto graduate who has spent most of her 15-year career in industry, from Loblaws to health startups to digital health. Her work spans counselling, food service management, product development, food safety, clinical trial management, and research. She believes eating well should fit real life, not the other way around.",
      },
    ],
  },
  {
    hidden: true,
    title: "Workshop to be announced",
    subtitle: "Hosts to be announced",
    description: "Workshop details and hosts will be announced soon.",
    hosts: [
      {
        name: "To be announced",
        title: "",
        bio: "",
        announced: false,
      },
      {
        name: "To be announced",
        title: "",
        bio: "",
        announced: false,
      },
    ],
  },
  {
    title: "From Data to Decisions: CCM Hockey’s Next Big Play",
    subtitle:
      "Kelly Chang, Nick Vukelic, Margaux Roncière, Karen Zhan, and Grace Lin - Data Science and Strategy Team @ Birch Hill Equity Partners",
    time: "Saturday, 10:30AM - 12:00PM | Pier 4",
    description:
      "Join Birch Hill Data Science & Strategy for a hands-on workshop where you’ll use data to tackle a real-world growth challenge for CCM Hockey, a former Birch Hill portfolio company. Working in teams, you’ll break down what drives the company’s revenue, choose which data to investigate, and uncover where its biggest growth opportunity lies. Learn how our team turns data into strategy using structured problem solving, market analysis, and key performance metrics. This workshop is perfect for students interested in data-driven decision making, business strategy, and real-world problem solving. No hockey knowledge required!",
    hosts: [
      {
        name: "Kelly Chang",
        title: "Data Science and Strategy Team @ Birch Hill Equity Partners",
        bio: "Kelly is an Analyst on the Data Science & Strategy Team at Birch Hill Equity Partners. Kelly received her Bachelor of Applied Science from the University of Toronto, with a major in Industrial Engineering and a minor in Artificial Intelligence. Prior to joining Birch Hill in 2025, Kelly was a co-op analyst in Birch Hill’s Data Science team.",
      },
      {
        name: "Nick Vukelic",
        title: "Data Science and Strategy Team @ Birch Hill Equity Partners",
        bio: "Prior to joining Birch Hill in 2020, Nick was a Consultant at Deloitte, where he worked on engagements in the financial services and airline industries. Nick spent 3 years at Yorkville University where he led the Analytics team and served as Chief of Staff to the CEO before returning in October 2026. Nick received his HBA (Ivey Scholar) from the Richard Ivey School of Business and his Bachelor of Engineering Science, Software Engineering (with distinction) from Western University.",
      },
      {
        name: "Margaux Roncière",
        title: "Data Science and Strategy Team @ Birch Hill Equity Partners",
        bio: "Prior to joining Birch Hill in 2025, Margaux was a co-op analyst with the firm’s Data Science Team. Margaux received her Bachelor of Applied Science in Industrial Engineering from the University of Toronto as a Loran Scholar.",
      },
      {
        name: "Karen Zhan",
        title: "Data Science and Strategy Team @ Birch Hill Equity Partners",
        bio: "Prior to joining Birch Hill in 2025, Karen was a Summer Analyst with the firm’s Data Science team and also worked as a Summer Analyst in the Strategy group at Scotiabank. Karen received her HBA from the Richard Ivey School of Business and a Bachelor of Science in Computer Science from Western University.",
      },
      {
        name: "Grace Lin",
        title: "PEY Co-op @ Birch Hill Equity Partners",
        bio: "Grace joined Birch Hill in May 2026 for her Professional Experience Year as part of the Co-op Program at the University of Toronto where she previously worked as a research intern in healthcare analytics. Grace looks forward to graduating in 2028 from the University of Toronto with a BASc in Industrial Engineering.",
      },
    ],
  },
  {
    hidden: true,
    title: "Motorsports",
    subtitle: "Hosts to be announced",
    description: "Workshop details and hosts will be announced soon.",
    hosts: [
      {
        name: "To be announced",
        title: "",
        bio: "",
        announced: false,
      },
      {
        name: "To be announced",
        title: "",
        bio: "",
        announced: false,
      },
    ],
  },
  {
    hidden: true,
    title: "Grad school",
    subtitle: "Hosts to be announced",
    description: "Workshop details and hosts will be announced soon.",
    hosts: [
      {
        name: "To be announced",
        title: "",
        bio: "",
        announced: false,
      },
      {
        name: "To be announced",
        title: "",
        bio: "",
        announced: false,
      },
    ],
  },
  {
    title: "Interdisciplinary Co-creation: How Do We Work Together? A Creative Workshop",
    subtitle: "Roberta Buiani - Assistant Professor, Coordinator of New One program (New College). Director @ ArtSci Salon at The Fields Institute for Research in Mathematical Science",
    time: "Saturday, 10:30AM - 12:00PM | Pier 4",
    description:
      `Whether in STEM or in the Arts and Humanities, research does not happen in a vacuum. It has potential to affect your field, your lab, the community or subjects you study. When you do research, you are never on your own: you depend on infrastructures and technologies, you draw on past work, you collaborate with others and establish new relationships all the time. Have you ever interrogated the ethics and sustainability of the research you have been conducting or that you are about to start? Have you ever asked who is going to be affected by your research? What are the long terms consequences of choosing one protocol over another?

This workshop will encourage you to ask these (and more) questions using a generative card game created by an interdisciplinary team of graduate students from York U and UofT. We will use the ensuing discussion to create a series of zines which you can bring home (or you can develop later on).`,
    hosts: [
      {
        name: "Roberta Buiani",
        title: "Assistant Professor @ New College, University of Toronto",
        objectPosition: "78% 42%",
        bio: "Roberta Buiani is a Toronto based interdisciplinary scholar, artist and curator at the intersection between Visual Culture and STS. She is assistant professor and coordinator of the NewONE program at New College (University of Toronto); artistic director of the ArtSci Salon at the Fields Institute for Research in Mathematical Sciences (Toronto); and co-director of SLOLab (with Jane Tingley) at York University.",
      },
    ],
  },
  {
    title: "Scrub In: Where Surgery Meets STEAM",
    subtitle: "Rukevwe Inikori, Puneet Sidhu, Amel Sassi - Co-founder, Co-lead, and Director of Community Engagement @ Women in Surgery Initiative ",
    time: "Sunday, 3:00PM - 4:30PM | Pier 4",
    description:
      "Explore where surgery and engineering meet in this hands-on workshop led by the Women in Surgery Initiative (FMWC). Learn basic suturing, test your coordination in a laparoscopic skills challenge, and discover how technology shapes surgical care. Meet women in medicine and surgery, hear about their career paths, and ask your questions. ",
    hosts: [
      {
        name: "Rukevwe Inikori",
        preferredName: "Rukkie",
        title: "Medical Student @ University of Toronto",
        bio: "Rukevwe (Rukkie) Inikori is a medical student at the University of Toronto’s Temerty Faculty of Medicine, with a Bachelor of Health Sciences from Queen’s University. Her research interests span global surgery, surgical education, and equity in medicine. As Co-Founder and Director of Student Affairs for the Women in Surgery Initiative, she is passionate about making medicine more accessible through mentorship and research that support underrepresented communities.",
      },
      {
        name: "Puneet Sidhu",
        title: "Medical Student @ University of Toronto",
        bio: "Puneet Sidhu is a medical student at the University of Toronto’s Temerty Faculty of Medicine, with a Bachelor of Health Sciences from McMaster University. Her research interests focus on improving surgical outcomes and advancing equity in healthcare. She serves as Co-Lead and Director of Mentorship for the Women in Surgery Initiative, where she is committed to expanding access to surgical education and mentorship. She is also passionate about student advocacy and amplifying the voices of students from diverse and underrepresented backgrounds.",
      },
      {
        name: "Amel Sassi",
        title: "Medical Student @ University of Toronto",
        bio: "Amel Sassi is a medical student at the University of Toronto’s Temerty Faculty of Medicine, with a MASc in Biomedical Engineering and a BMSc in Medical Sciences. Her research spans surgical AI and digital health. She is passionate about making surgery and STEM more accessible through her role as Director of Community Engagement for the Women in Surgery Initiative.",
      },
    ],
  },
  {
    title: "3D Printing and Advanced Manufacturing",
    subtitle: "Sampada Bodkhe, Anjali Sankar, Shrivani Pandiya - Team @ Women in 3D Printing",
    time: "Sunday, 3:00PM - 4:30PM | Pier 5",
    description:
      "Join Women in 3D Printing Canada's ambassadors for a hands-on workshop where you'll learn how to design for 3D printing, slicing CAD parts into formats readable by 3D printers and finally learn how to print your designs using a simple desktop fused filament fabrication 3D printer. We will guide you through the basics to the state of the art in 3D printing in various fields from metals, plastics to printed electronics; from micro to really large 3D printed structures. Working in teams, you'll learn to transform your digital designs into physical products. We will also present the career paths in 3D printing in industry and academia. This workshop is perfect for students interested in designing and building stuff, who like to get a feel of systems designed on a computer.",
    requirements:
      'If you are interested in attending this workshop, please install the software (<a href="https://curaslicer.com/" target="_blank" rel="noreferrer">https://curaslicer.com/</a>) beforehand! The link also includes the requirements for the systems for the installation. In addition, you can use software like <a href="https://www.tinkercad.com/" target="_blank" rel="noreferrer">TinkerCAD</a> (<a href="https://www.tinkercad.com/" target="_blank" rel="noreferrer">https://www.tinkercad.com/</a>), or <a href="https://www.onshape.com/en/" target="_blank" rel="noreferrer">Onshape</a> (<a href="https://www.onshape.com/en/" target="_blank" rel="noreferrer">https://www.onshape.com/en/</a>), if you do not have access to Engineering CAD software like AutoCAD, Solidedge, Catia etc. If you use the alternative software, export all the files to .stl format.',
    hosts: [
      {
        name: "Sampada Bodkhe",
        title: "Associate Professor, Mechanical Engineering @ Polytechnique Montreal",
        bio: "Sampada Bodkhe is an associate professor in the department of Mechanical Engineering at Polytechnique Montreal since 2021. Dr. Bodkhe holds a Canada Research Chair Tier 2 in Advanced Manufacturing of Multifunctional Adaptive Structures. She received her PhD from Polytechnique Montreal in 2017, where she developed piezoelectric inks and a technique to co-fabricate electrodes with piezoelectric sensors via co-extrusion-based direct-write 3D printing. The research on the development of these self-powered sensors towards aero-elastic and biomedical applications was chosen as the 10 Best Discoveries of the Year 2018 by Quebec Science Magazine. As a visiting PhD student at the Organic robotics laboratory, Cornell University, she worked on SLA based 3D printing of highly flexible actuators. After her PhD, she worked at Composite Materials and Adaptive Systems Laboratory at ETH Zurich, on establishing competencies in 3D printing of adaptive systems, multifunctional materials and structures. She has keen interests in building an additive manufacturing platform for the fabrication of intelligent composite structures.",
      },
      {
        name: "Anjali Sankar",
        title: "Research Scientist @ University of New Brunswick",
        bio: "Anjali Sankar is a Research Scientist at the Centre for Nuclear Energy Research (CNER), at the University of New Brunswick (UNB), with her current projects including degradation of advanced reactor cladding, corrosion testing of stainless steels, and using past data and predictive modelling to develop a maintenance schedule for steam generators. Anjali holds a BSc in Mechanical Engineering at the University of the West Indies (2017) and an MSc in Mechanical Engineering from UNB (2024). After gaining hands-on experience in Trinidad and Tobago’s petrochemical sector for 5 years as a maintenance and inspection engineer in ammonia and methanol process plants, she moved to Fredericton to pursue her master’s degree in mechanical engineering. During this time, she was a part of the Alloy Design Research Laboratory, where she gained an interest in additively manufactured (3D printed) materials as her research was focused on materials used in the aerospace industry. Anjali is the newly appointed lead for the New Brunswick chapter of the global group, Women in 3D Printing (Wi3DP) and is always ready to chat more on how to get into this industry and research area.",
      },
      {
        name: "Shrivani Pandiya",
        title: "Hardware Developer @ IBM Bromont",
        bio: "Shrivani Pandiya is a Hardware Developer at IBM Bromont, working on next-generation microelectronic packaging technologies. She holds a PhD from the University of Sherbrooke, focused on 3D-printed electrical interconnects for advanced packaging, and a Master's degree from Carnegie Mellon University in process optimization and defect analysis in 3D printed high-strength Al alloys. Her expertise spans macro- and microscale metal 3D printing, advanced packaging, and manufacturing process development.",
      },
    ],
  },
];
