export type Project = {
	slug: string;
	title: string;
	tagline: string;
	description: string;
	category: 'web-app' | 'immersive' | 'tooling';
	technologies: string[];
	metrics: string[];
	image: string;
	imageAlt: string;
	liveUrl: string;
	repoUrl: string;
	year: string;
	challenge: string;
	impact: string;
};

export const profile = {
	name: 'Abdulahad Sheid',
	title: 'Frontend Engineer',
	subtitle: 'I build cinematic interfaces with SvelteKit, motion systems, and product-grade polish.',
	introduction:
		'I turn product ideas into fast, tactile experiences that feel engineered instead of assembled. This portfolio is designed as a living proof of interaction design, accessibility, and performance discipline.',
	location: 'Remote / Nigeria',
	email: 'sheidabdulahad0@gmail.com',
	resumeUrl: '/abdulahad-sheid-resume.txt',
	socials: [
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
		'HTML',
		'CSS',
		'JavaScript',
		'ReactJS',
		'SvelteKit',
		'Svelte 5',
		'TypeScript',
		'Motion Design',
		'Accessibility',
		'Performance Optimization',
		'Design Systems',
		'Responsive Engineering'
	],
	highlights: [
		'Built for SvelteKit with reusable components and modular data.',
		'Includes keyboard-friendly command palette and reduced motion support.',
		'Optimized for Lighthouse, routing clarity, and deploy-ready hosting.'
	]
};

export const projectCategories = [
	{ id: 'all', label: 'All work' },
	{ id: 'immersive', label: 'Immersive' },
	{ id: 'web-app', label: 'Web apps' },
	{ id: 'tooling', label: 'Developer tools' }
] as const;

export const projects: Project[] = [
	{
		slug: 'whisper-box',
		title: 'WhisperBox End-2-End Encrypted Platform',
		tagline: 'A live analytics workspace for product teams.',
		description:
			'WhisperBox is a Vite + React end-to-end encrypted messaging frontend. It depends on a separate backend for auth, user search, message storage, websocket signaling, and media/call infrastructure.',
		category: 'web-app',
		technologies: ['WhisperBox API', 'ReactJS', 'WebSockets', 'Tailwind CSS variables'],
		metrics: ['Keyboard-first UX', 'Private Key Generation', 'Realtime Websocket Listener'],
		image: '/projects/whisper.png',
		imageAlt: 'Whisper-box img.',
		liveUrl: 'https://whisperbox-chat.vercel.app',
		repoUrl: 'https://github.com/codespacecadet-intern/whisperbox-chat',
		year: '2026',
		challenge: 'The product needed to feel real-time and data-dense without overwhelming users across tablet and desktop.',
		impact: 'I built a responsive messaging platform where the websocket server is required for fast realtime messaging.'
	},
	{
		slug: 'mui-admin-dashboard',
		title: 'Admin Dashboard | Material UI',
		tagline: 'A dashboard platform with material user interface.',
		description:
			'A responsive admin dashboard built with Material-UI and Nivo charts, using mock data to showcase data tables, charts, theming, and modern UI design with React.',
		category: 'immersive',
		technologies: ['React', 'Material UI', 'Nivo Charts', 'Tailwind Css', 'Mock Data (JSON)'],
		metrics: ['Users Activity', 'Progressive Growth Chart', 'Regional Sales Data', 'Interactive Controls'],
		image: '/projects/dashboard.png',
		imageAlt: 'Product showcase screenshot for Atlas Commerce project.',
		liveUrl: 'https://backendfrontflip.github.io/admindashboard/',
		repoUrl: 'https://github.com/backendfrontflip/admindashboard',
		year: '2025',
		challenge:
			'To build a modern dashboard with material user interface using the mui tools and Nivo Charts',
		impact:
			'Built a responsive dashboard with charts and data tables using mock data.'
	},
	{
		slug: 'skyswift-booking-system',
		title: 'SkySwift Booking System',
		tagline: 'A booking system for flights, hotels, and travel packages.',
		description:
			'SkySwift is a booking system for flights, hotels, and travel packages. It uses a modern user interface and a responsive design to provide a seamless booking experience. A responsive flight booking platform where users can search, compare, and book flights seamlessly. Developed with React, it offers a smooth, traveler-friendly experience with a modern UI and fast navigation.',
		category: 'web-app',
		technologies: ['ReactJS', 'TailwindCss', 'React-date-range', 'Firebase', 'React Router', 'Framer Motion', 'EmailJS', 'Date-fns', 'React Hot Toast', 'Lucide React'],
		metrics: ['Zero console noise', 'Shared component architecture', 'Fast keyboard navigation'],
		image: '/projects/resumbuild.png',
		imageAlt: 'Developer tooling interface screenshot for Terminal Flow project.',
		liveUrl: 'https://ahadtechprojects.github.io/skywift/#/',
		repoUrl: 'https://github.com/ahadtechprojects/skywift',
		year: '2025',
		challenge:
			'The interface had to feel powerful for expert users while remaining readable and approachable for everyone else. It needed to be simple enough for a beginner to use but powerful enough for an expert to be productive.',
		impact:
			'I used semantic structure, shortcut hints, and layered interaction density to make the experience feel advanced but learnable.'
	},
	{
		slug: 'nova-saas',
		title: 'Nova SaaS',
		tagline: 'A modern SaaS dashboard for startups with analytics, user management, and intuitive navigation.',
		description:
			'A sleek and scalable SaaS platform dashboard built for startups and growing businesses. It includes user management, analytics visualization, and a clean interface designed to make navigation simple and efficient.',
		category: 'web-app',
		technologies: ['React', 'TailwindCSS', 'Framer Motion', 'Chart.js'],
		metrics: ['Built responsive dashboard layouts for desktop and mobile screens',
			'Integrated animated UI interactions for a more polished user experience',
			'Visualized business data through interactive charts and analytics components'],
		image: '/projects/novasaaas.png',
		imageAlt: 'Nova SaaS dashboard interface with analytics charts and user management panels',
		liveUrl: 'https://ahadtechprojects.github.io/novasaas/',
		year: '2025',
		repoUrl: 'https://github.com/ahadtechprojects/novasaas',
		challenge:
			'Designing a dashboard that feels modern and polished while keeping navigation clear, layouts scalable, and data visualization easy to understand.',
		impact:
			'Delivered a professional SaaS dashboard concept that helps startups present data clearly, manage users efficiently, and offer a smoother overall product experience.'
	},
	{
		slug: 'resume-builder-portfolio-website',
		title: 'Resume Builder - Portfolio Website',
		tagline: 'A customizable resume builder that helps users create ATS-friendly resumes with live preview and export options.',
		description:
			'A professional resume builder and portfolio-style web application designed to help users create polished, ATS-friendly resumes. It includes customizable templates, real-time preview functionality, and export options for a smooth and user-friendly resume creation experience.',
		category: 'web-app',
		technologies: ['React', 'Tailwind', 'Firebase', 'React Router', 'Framer Motion'],
		metrics: [
			'Built real-time resume preview for instant content and layout feedback',
			'Created customizable templates to support different resume styles and user needs',
			'Designed an ATS-friendly resume workflow to improve readability and structure'
		],
		image: '/projects/skyswift.png',
		imageAlt: 'Resume builder web app with editable resume sections, live preview, and template selection',
		liveUrl: 'https://ahadtechprojects.github.io/resumebuilder/',
		repoUrl: 'https://github.com/ahadtechprojects/resumebuilder',
		year: '2025',
		challenge:
			'Building a resume tool that balances customization and simplicity while keeping the final output professional, readable, and compatible with ATS requirements.',
		impact:
			'Made it easier for users to create polished resumes quickly through a guided, user-friendly experience with live preview, flexible templates, and export functionality.'
	},
	{
		slug: 'pagemind-ai-page-summarizer',
		title: 'PageMind',
		tagline: 'An AI-powered Chrome extension tool that instantly summarizes webpages into key points, insights, and reading-time estimates.',
		description:
			'PageMind is a Chrome extension that uses OpenAI GPT-4o-mini to summarize webpages without disrupting the browsing experience. It delivers structured bullet-point summaries, key insights, estimated reading time, in-page phrase highlighting, and local caching to help users scan long-form content faster and more efficiently.',
		category: 'tooling',
		technologies: ['JavaScript', 'Chrome Extensions API', 'OpenAI API', 'HTML', 'CSS', 'chrome.storage.local'],
		metrics: [
			'Generated structured AI summaries with bullet points, 3 key insights, and reading-time estimates',
			'Implemented one-click webpage analysis with in-page highlighting for faster content scanning',
			'Reduced redundant API usage through per-URL local caching of generated summaries'
		],
		image: '/projects/pagemind.png',
		imageAlt: 'PageMind Chrome extension popup showing an AI-generated webpage summary with highlighted key phrases',
		liveUrl: 'https://github.com/codespacecadet-intern/pagemind-extension',
		repoUrl: 'https://github.com/codespacecadet-intern/pagemind-extension',
		year: '2026',
		challenge:
			'Building a browser extension that could extract meaningful page content, generate fast and accurate AI summaries, and present results cleanly inside Chrome while handling messaging, caching, accessibility, and secure API-key usage.',
		impact:
			'Made long articles, blog posts, and news pages easier to digest by giving users instant AI-powered summaries, visual highlights, and key takeaways directly in their browser, improving reading efficiency without forcing them to leave the current tab.'
	}
];
