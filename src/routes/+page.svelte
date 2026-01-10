<script lang="ts">
	import { themes } from '$lib/data/themes';
	import { projects } from '$lib/data/projects';
	import { GithubIcon, SunIcon, MoonIcon, MailIcon, MapPinHouseIcon } from '@lucide/svelte';
	import { browser } from '$app/environment';
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';
	import Meta from '$lib/Meta.svelte';

	let id = 0;
	let theme = $state(browser ? localStorage.getItem('theme') : 'light') as 'light' | 'dark';
	let toasts = $state<{ id: number; message: string }[]>([]);

	const toggleTheme = () => {
		theme = theme === 'light' ? 'dark' : 'light';
		localStorage.setItem('theme', theme);
		document.documentElement.setAttribute('data-theme', theme);
	};

	const addToast = (message: string) => {
		id++;
		toasts.push({ id, message });
		return id;
	};

	const copyContact = async () => {
		await navigator.clipboard.writeText('contact@gibbu.dev');

		const idx = addToast('Contact information copied to clipboard');
		setTimeout(() => {
			toasts = toasts.filter((el) => el.id !== idx);
		}, 3000);
	};
</script>

<Meta title="Gibbu's website" description="Nothing to see here..." />

<div class="toasts">
	{#each toasts as toast (toast.id)}
		<div
			animate:flip={{ delay: 50, duration: 150 }}
			class="toast"
			in:fly={{ y: -5, duration: 150 }}
			out:fly={{ y: 5, duration: 150 }}
		>
			<p>{toast.message}</p>
		</div>
	{/each}
</div>

<main>
	<div class="grid">
		<section id="intro" class="block">
			<div>
				<h2>Howdy!</h2>
				<h3>I'm <span>Ian</span></h3>
				<p>A hobbyist web dev.</p>
			</div>
		</section>

		<a
			id="github"
			class="block btn"
			href="https://github.com/Gibbu"
			target="_blank"
			rel="noopener noreferrer"
		>
			<GithubIcon />
			<span>GitHub</span>
		</a>

		<section id="logo" class="block">
			<img src="/logo.png" alt="Logo" class="light-invert" />
		</section>

		<button id="toggleTheme" class="block btn" onclick={toggleTheme}>
			{#if theme === 'light'}
				<MoonIcon />
			{:else}
				<SunIcon />
			{/if}
			<span>Toggle Theme</span>
		</button>

		<section id="location" class="block btn static">
			<MapPinHouseIcon />
			<span>Victoria, Australia</span>
		</section>

		<section id="themes" class="block">
			<h3>Discord Themes</h3>
			<div class="list">
				{#each themes as theme}
					<a
						href="https://github.com/DiscordStyles/{theme.name.replace(/ /g, '')}"
						class="item"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span>{theme.name}</span>
						<small>{theme.description}</small>
					</a>
				{/each}
			</div>
		</section>

		<button id="contact" class="block btn" onclick={copyContact}>
			<MailIcon />
			<span>contact@gibbu.dev</span>
		</button>

		<section id="projects" class="block">
			<h3>Projects</h3>
			<div class="list">
				{#each projects as project}
					<a href={project.href} target="_blank" rel="noopener noreferrer" class="item">
						<span>
							{project.name}
							{#if project.archived}
								<span>Archived</span>
							{/if}
						</span>
						<small>{project.description}</small>
					</a>
				{/each}
			</div>
		</section>
	</div>
</main>

<style>
	main {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(10, 1fr);
		grid-template-rows: repeat(10, 1fr);
		max-width: 980px;
		max-height: 980px;
		width: 100%;
		height: 100%;
		gap: 16px;
	}

	.block {
		background: var(--background);
		border-radius: 6px;
		padding: 24px;
		display: flex;
		flex-direction: column;

		& > h3 {
			font-family: var(--font-manrope);
			font-weight: 700;
			font-size: 28px;
			margin-bottom: 12px;
		}

		&#intro {
			grid-column: 1 / 7;
			grid-row: 1 / 5;
			justify-content: center;
			align-items: center;
		}
		&#github {
			grid-column: 7 / 9;
			grid-row: 1 / 3;
		}
		&#toggleTheme {
			grid-column: 9 / 11;
			grid-row: 1 / 3;
		}
		&#logo {
			grid-column: 5 / 7;
			grid-row: 5 / 7;
		}
		&#themes {
			grid-column: 1 / 5;
			grid-row: 5 / 11;
		}
		&#contact {
			grid-column: 5 / 7;
			grid-row: 7 / 9;
		}
		&#location {
			grid-column: 5 / 7;
			grid-row: 9 / 11;
		}
		&#projects {
			grid-column: 7 / 11;
			grid-row: 3 / 11;
		}
	}
	.btn {
		align-items: center;
		justify-content: center;
		position: relative;

		& :global(svg) {
			width: 42px;
			height: 42px;
			transition: 0.15s ease-in-out;
		}

		& span {
			position: absolute;
			bottom: 24px;
		}
		&:not(.static) span {
			opacity: 0;
			translate: 0 10px;
			transition: 0.15s ease-in-out;
		}

		&:not(.static) {
			cursor: pointer;
			&:hover {
				background: var(--background-lighter);

				& :global(svg) {
					scale: 1.15;
					translate: 0 -10px;
				}

				& span {
					opacity: 1;
					translate: 0;
				}
			}
		}
	}

	#intro {
		& h2 {
			font-family: var(--font-manrope);
			font-weight: 800;
			font-size: 64px;
		}
		& h3 {
			font-size: 32px;
			& span {
				font-family: var(--font-manrope);
				font-weight: 800;
			}
		}
		& p {
			font-size: 24px;
		}
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: 6px;
		margin: 0 -16px;
	}
	.item {
		display: flex;
		flex-direction: column;
		border-radius: 6px;
		padding: 12px 16px;

		& span {
			font-weight: bold;
			font-family: var(--font-manrope);
			& span {
				color: var(--colour-peppermint);
				border: 1px solid var(--colour-peppermint);
				font-size: 12px;
				border-radius: 100px;
				padding: 4px 6px;
				margin-left: 6px;
			}
		}
		& small {
			color: var(--text-darker);
		}

		&:hover {
			background: var(--background-lighter);
		}
	}

	.toasts {
		position: absolute;
		top: 24px;
		pointer-events: none;
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 12px;
		z-index: 10;
	}
	.toast {
		background: var(--background-lighter);
		border-radius: 6px;
		padding: 12px;
	}
</style>
