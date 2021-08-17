<script>
	import Icon, {ColorSwatch, Code, Download, ExternalLink} from 'svelte-hero-icons';
	import tooltip from '$lib/tooltip';

	import {Button} from '$components/Button';

	const themes = [
		{
			name: 'iPadOS',
			type: 'theme',
			description: 'Discord redesigned to be simplified. Design by jacktompsett on Behance.',
			tags: ['Light', 'Dark'],
			thumbnail: 'https://camo.githubusercontent.com/ed76090d896dd4507ce21285351f36b4f2df7ff3b17ed8fab77b46ddc68ec2e0/68747470733a2f2f692e696d6775722e636f6d2f53566f31534e342e706e67',
			download: 'https://betterdiscord.app/Download?id=402',
			isNew: true
		},
		{
			name: 'Slate',
			type: 'theme',
			description: `An optimized, consistent, and functional theme for Discord based on GitHub's design language.`,
			tags: ['Light', 'Dark', 'Customizable', 'Flat', 'Layout'],
			thumbnail: 'https://camo.githubusercontent.com/5bd64882621cd4ae9b20f6fa27519d0cee127e88b32f59997f6d7087bd699321/68747470733a2f2f692e696d6775722e636f6d2f474563515a684e2e706e67',
			download: 'https://betterdiscord.app/Download?id=1'
		},
		{
			name: 'Frosted Glass',
			type: 'theme',
			description: 'Display your picture of choice with adjustable blur and brightness.',
			tags: ['Customizable', 'Nature'],
			thumbnail: 'https://camo.githubusercontent.com/1147af61520b0f333fbb7e2de84bc24853a651033a50a8c314a34b8c6c58e8b4/68747470733a2f2f692e696d6775722e636f6d2f4772384a4a41762e6a7067',
			download: 'https://betterdiscord.app/Download?id=40'
		},
		{
			name: 'MinimalCord',
			type: 'theme',
			description: 'Changes Discord enough to give it a fresh feel while also making it darker.',
			tags: ['Light', 'Dark', 'Customizable'],
			thumbnail: 'https://camo.githubusercontent.com/6c3186c54f23a976f79baa16237b9f844a78f17f88aaee79e5468af307415936/68747470733a2f2f692e696d6775722e636f6d2f576447666144622e706e67',
			download: 'https://betterdiscord.app/Download?id=40'
		},
		{
			name: 'SimplyDark',
			type: 'theme',
			description: 'A sharp and simple theme for Discord.',
			tags: ['Dark', 'Flat', 'Customizable'],
			thumbnail: 'https://camo.githubusercontent.com/aa95a005d789b884b497f709f7b0c4abf78eeecf8319db4c6fe7860412c85a26/68747470733a2f2f692e696d6775722e636f6d2f544154784a39732e706e67',
			download: 'https://betterdiscord.app/Download?id=394'
		},
		{
			name: 'RadialStatus',
			type: 'addon',
			description: 'Changes the status icons to wrap around the avatar.',
			tags: ['Addon'],
			thumbnail: 'https://camo.githubusercontent.com/cd5295a515e0a3a3d41e67c96ba884639c8d0c0a275f10340d8c681eac9ddee5/68747470733a2f2f692e696d6775722e636f6d2f347a5a553469772e6a7067',
			download: 'https://betterdiscord.app/Download?id=394'
		},
		{
			name: 'Horizontal Server List',
			type: 'addon',
			description: 'Moves the server list from the left to the top of Discord.',
			tags: ['Addon'],
			thumbnail: 'https://camo.githubusercontent.com/8c43bb8a411b3c856cf35120c7f3e31590aa292bc6764b07f9e52b31cb4449f7/68747470733a2f2f692e696d6775722e636f6d2f795644747776462e706e67',
			download: 'https://betterdiscord.app/Download?id=124'
		}
	]

	const projects = [
		{
			name: 'BetterDiscord Theme Editor',
			description: 'Customize BetterDiscord Themes with an easy to use interface.',
			tags: ['JavaScript', 'Svelte', 'SvelteKit'],
			link: {
				href: 'https://bdeditor.dev',
				newTab: true
			},
			source: 'https://github.com/Gibbu/BDThemeEditor'
		},
		{
			name: 'BetterDiscordLibrary',
			description: 'A website to view all available themes and plugins for BetterDiscord.',
			tags: ['PHP', 'Laravel', 'InertiaJS', 'Svelte', 'JavaScript', 'MySQL'],
			source: 'https://github.com/Gibbu/BetterDiscordLibrary',
			archived: true
		}
	]
</script>

<svelte:head>
	<title>Gibbu - Home</title>
</svelte:head>

<nav class="nav">
	<div class="wrapper nav-wrapper">
		<div class="nav-left">
			<a href="/">
				<img src="/images/logo.png" alt="Logo" class="nav-logo">
			</a>
		</div>
		<div class="nav-right">
			<ul class="socials">
				<li class="socials-item">
					<a href="https://twitter.com/Gibbu_" target="_blank" rel="noreferrer" class="socials-link" use:tooltip={{content: '@Gibbu_', offset: [0, 20]}}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
						</svg>
					</a>
				</li>
				<li class="socials-item">
					<a href="https://www.youtube.com/channel/UCtaIPbqgwFCFPaAm9fRdh5g" target="_blank" rel="noreferrer" class="socials-link" use:tooltip={{content: 'All my poggers videos', offset: [0, 20]}}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
						</svg>
					</a>
				</li>
				<li class="socials-item">
					<a href="https://twitch.tv/Gibbu" target="_blank" rel="noreferrer" class="socials-link" use:tooltip={{content: 'Watch me never', offset: [0, 20]}}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z" fill-rule="evenodd" clip-rule="evenodd"/>
						</svg>
					</a>
				</li>
				<li class="socials-item">
					<a href="https://github.com/Gibbu" target="_blank" rel="noreferrer" class="socials-link" use:tooltip={{content: 'All my L337 codes', offset: [0, 20]}}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
						</svg>
					</a>
				</li>
				<li class="socials-item">
					<a href="https://paypal.me/IanRGibson" target="_blank" rel="noreferrer" class="socials-link" use:tooltip={{content: 'Donate to the Gibbu fundraiser', offset: [0, 20]}}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path d="M22 9.761c0 .536-.065 1.084-.169 1.627-.847 4.419-3.746 5.946-7.449 5.946h-.572c-.453 0-.838.334-.908.789l-.803 5.09c-.071.453-.456.787-.908.787h-2.736c-.39 0-.688-.348-.628-.732l1.386-8.88.062-.056h2.155c5.235 0 8.509-2.618 9.473-7.568.812.814 1.097 1.876 1.097 2.997zm-14.216 4.252c.116-.826.459-1.177 1.385-1.179l2.26-.002c4.574 0 7.198-2.09 8.023-6.39.8-4.134-2.102-6.442-6.031-6.442h-7.344c-.517 0-.958.382-1.038.901-2.304 14.835-2.97 18.607-3.038 19.758-.021.362.269.672.635.672h3.989l1.159-7.318z"/>
						</svg>
					</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

<div class="wrapper">

	<section class="banner">
		<h1 class="banner-title">Creator of the <span>BEST</span> Discord themes.</h1>
		<p class="banner-text">I make other things? maybe.</p>
	</section>

	<section class="section">
		<header class="section-header">
			<div class="section-icon">
				<Icon src={ColorSwatch} />
			</div>
			<h4 class="section-title">Discord Themes</h4>
			<h1 class="section-tagline">The <span>BEST</span> themes, as said above.</h1>
		</header>
		<div class="themes">
			{#each themes as theme}
				<div class="theme">
					<div class="theme-left">
						<div class="theme-info">
							<h2 class="theme-name">
								{theme.name}
								{#if theme.isNew}
									<span class="theme-new">New</span>
								{/if}
							</h2>
							<p class="theme-description">{theme.description}</p>
						</div>
						<footer class="theme-footer">
							<div class="theme-btns">
								<Button type="secondary" href={theme.download}>
									<svelte:fragment slot="iconL">
										<Icon src={Download} />
									</svelte:fragment>
									Download for BetterDiscord
								</Button>
								<Button type="text" href="https://github.com/DiscordStyles/{theme.name.replace(/ /g, '')}" newTab>
									<svg slot="iconL" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: currentColor">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
									</svg>
									Source files
								</Button>
							</div>
							{#if theme.tags}
								<div class="theme-tags">
									{#each theme.tags as tag}
										<div class="theme-tag">{tag}</div>
									{/each}
								</div>
							{/if}
						</footer>
					</div>
					<div class="r16-9 theme-right">
						<img src={theme.thumbnail} alt="Theme thumbnail" class="r16-9-item">
					</div>
				</div>
			{/each}
		</div>
	</section>

	<section class="section">
		<header class="section-header">
			<div class="section-icon">
				<Icon src={Code} />
			</div>
			<h4 class="section-title">Projects</h4>
			<h1 class="section-tagline">Other things that I have made.</h1>
		</header>

		<div class="projects">
			{#each projects as project}
				<div class="project">
					<h3 class="project-name">
						{project.name}
						{#if project.archived}
							<div class="project-archived">Archived</div>
						{/if}
					</h3>
					<p class="project-description">{project.description}</p>
					<div class="project-tags">
						{#each project.tags as tag}
							<div class="project-tag">{tag}</div>
						{/each}
					</div>
					<div class="project-btns">
						{#if !project.archived}
							<Button type="secondary" href={project.link.href} newTab={project.link.newTab}>
								<svelte:fragment slot="iconL">
									<Icon src={ExternalLink} />
								</svelte:fragment>
								View site
							</Button>
						{/if}
						<Button type="text" href={project.source} newTab>
							<svg slot="iconL" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: currentColor">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
							</svg>
							Source files
						</Button>
					</div>
				</div>
			{/each}
		</div>

	</section>

</div>




<style lang="scss">
	.nav {
		height: rem(82);
		display: flex;
		align-items: center;
		&-wrapper {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		&-logo {
			width: rem(42);
		}
	}
	.socials {
		padding: 0;
		margin: 0;
		display: flex;
		list-style: none;
		&-item {
			margin-left: rem(12);
		}
		&-link {
			width: rem(42);
			height: rem(42);
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: rem(4);
			svg {
				fill: currentColor;
				width: rem(18);
			}
			&:hover {
				background: var(--c4);
				color: var(--text-primary);
			}
		}
	}

	.banner {
		position: relative;
		padding: rem(150) 0;

		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: -20%;
			width: 100%;
			height: 100%;
			mask: url('/images/pattern.png');
			background: radial-gradient(ellipse at center, var(--text-primary) -100%, transparent 80%);
			z-index: -1;
			opacity: .05;
		}

		&-title {
			font-size: rem(64);
			color: var(--text-primary);
			width: 70%;
			span {
				color: hsl(var(--accent));
			}
		}
		&-text {
			margin-top: rem(16);
			font-size: rem(20);
		}
	}


	.section {
		padding: rem(50) 0;
		&-header {
			margin-bottom: rem(30);
		}
		&-icon {
			width: rem(42);
			height: rem(42);
			border-radius: rem(4);
			background: hsl(var(--accent));
			padding: rem(8);
			color: #000;
		}
		&-title {
			margin: rem(16) 0 rem(8);
			font-weight: 500;
		}
		&-tagline {
			color: var(--text-primary);
			span {
				color: hsl(var(--accent));
			}
		}
	}

	.theme {
		display: grid;
		grid-template-columns: 1fr rem(350);
		overflow: hidden;
		background: var(--c3);
		border: rem(1) solid var(--border);
		border-radius: rem(4);
		&:not(:last-child) {
			margin-bottom: rem(16);
		}

		&-left {
			padding: rem(16);
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;
		}
		&-info {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		&-name {
			color: var(--text-primary);
			display: flex;
			align-items: center;
		}
		&-new {
			margin-left: rem(8);
			font-size: rem(12);
			border-radius: rem(50);
			padding: rem(4) rem(12);
			background: hsl(var(--accent) / .1);
			color: hsl(var(--accent));
			font-weight: 500;
		}
		&-description {
			margin: rem(8) 0 rem(32);
		}

		&-right {
			pointer-events: none;
		}

		&-footer {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
		}
		&-btns {
			display: flex;
			gap: rem(8);
		}
		&-tags {
			display: flex;
			gap: rem(8);
		}
		&-tag {
			font-size: rem(12);
			background: var(--c1);
			padding: rem(4) rem(8);
			color: var(--text-tertiary);
			border-radius: rem(4);
			user-select: none;
			font-weight: 500;
		}
	}

	.projects {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(#{rem(350)}, 1fr));
		gap: rem(16);
	}
	.project {
		background: var(--c3);
		border-radius: rem(3);
		border: rem(1) solid var(--border);
		padding: rem(16);
		&-name {
			color: var(--text-primary);
			margin-bottom: rem(8);
			display: flex;
			align-items: center;
		}
		&-archived {
			margin-left: rem(8);
			font-size: rem(12);
			border-radius: rem(50);
			padding: rem(4) rem(12);
			background: hsl(var(--yellow) / .1);
			color: hsl(var(--yellow));
			font-weight: 500;
		}
		&-tags {
			display: flex;
			gap: rem(8);
			margin: rem(16) 0;
		}
		&-tag {
			font-size: rem(12);
			background: var(--c1);
			padding: rem(4) rem(8);
			color: var(--text-tertiary);
			border-radius: rem(4);
			user-select: none;
			font-weight: 500;
		}
		&-btns {
			display: flex;
			gap: rem(8);
		}
	}
</style>