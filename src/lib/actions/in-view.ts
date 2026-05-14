type Params = {
	delay?: number;
	threshold?: number;
};

export function inView(node: HTMLElement, params: Params = {}) {
	const threshold = params.threshold ?? 0.18;
	const delay = params.delay ?? 0;

	node.style.setProperty('--reveal-delay', `${delay}ms`);

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.dataset.visible = 'true';
					observer.disconnect();
				}
			}
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
