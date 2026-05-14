import { browser } from '$app/environment';

type Theme = 'dark' | 'light';

const THEME_KEY = 'portfolio-theme';
const MOTION_KEY = 'portfolio-reduced-motion';

function createPreferences() {
	let theme = $state<Theme>('dark');
	let reducedMotion = $state(false);

	const syncDom = () => {
		if (!browser) return;

		document.documentElement.dataset.theme = theme;
		document.documentElement.dataset.motion = reducedMotion ? 'reduced' : 'full';
		localStorage.setItem(THEME_KEY, theme);
		localStorage.setItem(MOTION_KEY, String(reducedMotion));
	};

	return {
		get theme() {
			return theme;
		},
		get reducedMotion() {
			return reducedMotion;
		},
		init() {
			if (!browser) return;

			const savedTheme = localStorage.getItem(THEME_KEY) as Theme | null;
			const savedMotion = localStorage.getItem(MOTION_KEY);
			const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
			const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

			theme = savedTheme ?? (prefersLight ? 'light' : 'dark');
			reducedMotion = savedMotion ? savedMotion === 'true' : prefersReducedMotion;
			syncDom();
		},
		toggleTheme() {
			theme = theme === 'dark' ? 'light' : 'dark';
			syncDom();
		},
		toggleMotion() {
			reducedMotion = !reducedMotion;
			syncDom();
		}
	};
}

export const preferences = createPreferences();
