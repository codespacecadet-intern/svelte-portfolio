export type ProjectCategory = 'web-app' | 'systems' | 'tooling';

export type Project = {
	slug: string;
	title: string;
	tagline: string;
	description: string;
	category: ProjectCategory;
	technologies: string[];
	metrics: string[];
	image: string;
	imageAlt: string;
	liveUrl: string;
	repoUrl: string;
	year: string;
	challenge: string;
	impact: string;
	role: string;
	focus: string[];
};

export const profile = {
	name: 'Abdulahad Sheid',
	title: 'Frontend Engineer',
	subtitle: 'I build secure-feeling, product-grade frontend systems for teams that care about speed, clarity, and trust.',
	introduction:
		'I design and ship responsive interfaces that feel like real software: fast command surfaces, clear state, accessible flows, and careful interaction details. This portfolio is being shaped as a frontend engineering console for hiring teams.',
	location: 'Remote / Nigeria',
	availability: 'Open to frontend engineering roles',
	email: 'sheidabdulahad0@gmail.com',
	resumeUrl: '/abdulahad-sheid-resume.txt',
	heroSocials: [
		{
			label: 'GitHub',
			url: 'https://github.com/codespacecadet-intern'
		},
		{
			label: 'LinkedIn',
			url: 'https://www.linkedin.com/in/abdulahad-sheid-795740409/'
		},
		{
			label: 'Email',
			url: 'mailto:sheidabdulahad0@gmail.com'
		}
	],
	footerSocials: [
		{
			label: 'Facebook',
			url: 'https://www.facebook.com/share/14d12TuL9n8/?mibextid=wwXIfr'
		},
		{
			label: 'WhatsApp',
			url: 'https://wa.me/2348104989187'
		},
		{
			label: 'Instagram',
			url: 'https://www.instagram.com/codespacecadet?igsh=MXE0ZWlybjQ5amxm&utm_source=qr'
		},
		{
			label: 'YouTube',
			url: 'https://youtube.com/@codespacecadet?si=SS5Mcf4oJ0y0PY_Q'
		}
	],
	skills: [
		'SvelteKit',
		'Svelte 5',
		'TypeScript',
		'React',
		'JavaScript',
		'Responsive UI',
		'Accessibility',
		'Performance',
		'Design Systems',
		'Motion Design',
		'Firebase',
		'WebSockets'
	],
	highlights: [
		'Builds modular frontend architecture with data-driven sections and routed case studies.',
		'Designs keyboard-aware interfaces with command palette flows, reduced motion support, and visible focus states.',
		'Translates product requirements into polished dashboards, tools, extensions, and user-facing workflows.'
	]
};

export const platformStats = [
	{ label: 'Frontend stack', value: 'SvelteKit + React', detail: 'TypeScript-ready product UI' },
	{ label: 'Interaction layer', value: 'Command first', detail: 'Keyboard, theme, motion, route actions' },
	{ label: 'Delivery focus', value: 'Accessible + fast', detail: 'Semantic HTML and lean dependencies' }
];

export const capabilityGroups = [
	{
		title: 'Interface Systems',
		copy: 'Responsive layouts, reusable components, state-aware UI, data-rich dashboards, and polished product flows.',
		items: ['SvelteKit', 'React', 'TypeScript', 'Design Systems']
	},
	{
		title: 'Trust and Access',
		copy: 'Frontend choices that make apps feel safer: clear states, validation, reduced motion, keyboard paths, and secure API handling patterns.',
		items: ['Accessibility', 'Validation', 'Auth UI', 'Secure UX']
	},
	{
		title: 'Performance Craft',
		copy: 'Lean bundles, lazy media, CSS-driven motion, responsive images, and UI details that stay smooth under real use.',
		items: ['Vite', 'Motion', 'Responsive CSS', 'Lighthouse']
	}
];

export const systemSignals = [
	{ label: 'Availability', value: 'Hiring-ready', status: 'online' },
	{ label: 'Primary role', value: 'Frontend Engineer', status: 'stable' },
	{ label: 'Location', value: profile.location, status: 'remote' },
	{ label: 'Portfolio mode', value: 'Security console', status: 'active' }
];

export const projectCategories = [
	{ id: 'all', label: 'All work' },
	{ id: 'systems', label: 'Systems UI' },
	{ id: 'web-app', label: 'Web apps' },
	{ id: 'tooling', label: 'Developer tools' }
] as const;

export const projects: Project[] = [
	{
		slug: 'whisper-box',
		title: 'WhisperBox Encrypted Messaging',
		tagline: 'Secure-feeling realtime messaging with encrypted-key UX and websocket flows.',
		description:
			'WhisperBox is a Vite + React encrypted messaging frontend. It handles auth-facing screens, user search, realtime message states, private-key generation, and websocket-driven conversation updates.',
		category: 'systems',
		technologies: ['React', 'WebSockets', 'Tailwind CSS', 'Encryption UX', 'REST API'],
		metrics: ['Private-key generation flow', 'Realtime websocket listener', 'Keyboard-aware messaging UI'],
		image: '/projects/whisper.png',
		imageAlt: 'WhisperBox messaging interface screenshot.',
		liveUrl: 'https://whisperbox-chat.vercel.app',
		repoUrl: 'https://github.com/codespacecadet-intern/whisperbox-chat',
		year: '2026',
		role: 'Frontend architecture and interface implementation',
		focus: ['Secure UX', 'Realtime state', 'Messaging workflow'],
		challenge:
			'The product needed to communicate privacy, realtime activity, and account state without making the interface feel heavy or confusing.',
		impact:
			'Built a responsive messaging experience with encrypted-key onboarding patterns, websocket updates, and clear message-state feedback.'
	},
	{
		slug: 'mui-admin-dashboard',
		title: 'Material Admin Operations Dashboard',
		tagline: 'A dense analytics console for users, activity, sales, and operational reporting.',
		description:
			'A responsive admin dashboard built with Material UI and Nivo charts to showcase tables, charts, theming, analytics cards, and executive reporting patterns.',
		category: 'systems',
		technologies: ['React', 'Material UI', 'Nivo Charts', 'Data Tables', 'Theme UI'],
		metrics: ['Activity analytics', 'Regional sales views', 'Interactive data panels'],
		image: '/projects/dashboard.png',
		imageAlt: 'Admin dashboard interface with charts and data panels.',
		liveUrl: 'https://backendfrontflip.github.io/admindashboard/',
		repoUrl: 'https://github.com/backendfrontflip/admindashboard',
		year: '2025',
		role: 'Dashboard UI implementation',
		focus: ['Analytics UI', 'Data density', 'Admin workflows'],
		challenge:
			'The interface needed to present many data points while keeping navigation, hierarchy, and scanning behavior clear.',
		impact:
			'Delivered a polished dashboard concept with charting, table views, theme support, and responsive admin layouts.'
	},
	{
		slug: 'skyswift-booking-system',
		title: 'SkySwift Booking System',
		tagline: 'A travel booking interface for flights, hotels, packages, dates, and customer inquiries.',
		description:
			'SkySwift is a responsive flight and travel booking platform where users can search, compare, and explore booking options through a modern React interface.',
		category: 'web-app',
		technologies: ['React', 'Tailwind CSS', 'Firebase', 'React Router', 'Framer Motion', 'EmailJS'],
		metrics: ['Responsive booking flow', 'Animated route transitions', 'Reusable travel UI patterns'],
		image: '/projects/resumbuild.png',
		imageAlt: 'SkySwift travel booking interface screenshot.',
		liveUrl: 'https://ahadtechprojects.github.io/skywift/#/',
		repoUrl: 'https://github.com/ahadtechprojects/skywift',
		year: '2025',
		role: 'Frontend product build',
		focus: ['Booking UX', 'Responsive UI', 'Motion'],
		challenge:
			'The experience had to feel friendly for travelers while still handling search, date, route, and contact interactions cleanly.',
		impact:
			'Built a traveler-friendly interface with responsive layouts, animation polish, and reusable components for booking content.'
	},
	{
		slug: 'nova-saas',
		title: 'Nova SaaS Dashboard',
		tagline: 'A startup SaaS dashboard concept with analytics, user management, and clean navigation.',
		description:
			'Nova SaaS is a scalable dashboard concept for startups and growing teams. It presents business metrics, management views, and navigation patterns in a clean product shell.',
		category: 'web-app',
		technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Chart.js'],
		metrics: ['Responsive dashboard layouts', 'Animated UI interactions', 'Business analytics visualization'],
		image: '/projects/novasaaas.png',
		imageAlt: 'Nova SaaS dashboard interface with analytics charts and user management panels.',
		liveUrl: 'https://ahadtechprojects.github.io/novasaas/',
		repoUrl: 'https://github.com/ahadtechprojects/novasaas',
		year: '2025',
		role: 'Dashboard interface design and implementation',
		focus: ['SaaS UI', 'Charts', 'Navigation'],
		challenge:
			'The dashboard needed to feel modern and polished while keeping navigation clear, layouts scalable, and data visualization readable.',
		impact:
			'Delivered a professional SaaS dashboard concept for presenting business data, managing users, and improving product navigation.'
	},
	{
		slug: 'resume-builder-portfolio-website',
		title: 'ATS Resume Builder',
		tagline: 'A guided resume builder with editable sections, live preview, and structured output.',
		description:
			'A resume builder and portfolio-style web app that helps users create polished, ATS-friendly resumes with live preview, templates, and export-oriented structure.',
		category: 'web-app',
		technologies: ['React', 'Tailwind CSS', 'Firebase', 'React Router', 'Framer Motion'],
		metrics: ['Live resume preview', 'Customizable templates', 'ATS-friendly structure'],
		image: '/projects/skyswift.png',
		imageAlt: 'Resume builder web app with editable resume sections and live preview.',
		liveUrl: 'https://ahadtechprojects.github.io/resumebuilder/',
		repoUrl: 'https://github.com/ahadtechprojects/resumebuilder',
		year: '2025',
		role: 'Frontend application build',
		focus: ['Form UX', 'Preview UI', 'Career tooling'],
		challenge:
			'The app needed to balance customization and simplicity while keeping the final resume readable, structured, and professional.',
		impact:
			'Created a guided resume workflow with live content feedback, flexible templates, and a smoother path to polished resume output.'
	},
	{
		slug: 'pagemind-ai-page-summarizer',
		title: 'PageMind AI Summarizer',
		tagline: 'A Chrome extension that turns long webpages into summaries, insights, and reading signals.',
		description:
			'PageMind uses AI to summarize webpages without disrupting browsing. It provides bullet summaries, key insights, reading-time estimates, in-page phrase highlighting, and local caching.',
		category: 'tooling',
		technologies: ['JavaScript', 'Chrome Extensions API', 'OpenAI API', 'HTML', 'CSS', 'chrome.storage.local'],
		metrics: ['Structured AI summaries', 'One-click page analysis', 'Per-URL local caching'],
		image: '/projects/pagemind.png',
		imageAlt: 'PageMind Chrome extension popup showing an AI-generated webpage summary.',
		liveUrl: 'https://github.com/codespacecadet-intern/pagemind-extension',
		repoUrl: 'https://github.com/codespacecadet-intern/pagemind-extension',
		year: '2026',
		role: 'Extension interface and AI workflow implementation',
		focus: ['Browser tooling', 'AI UX', 'Caching'],
		challenge:
			'The extension needed to extract meaningful page content, generate useful summaries, handle caching, and present results cleanly inside Chrome.',
		impact:
			'Made long-form content easier to scan through instant AI summaries, key takeaways, reading estimates, and contextual highlighting.'
	}
];
