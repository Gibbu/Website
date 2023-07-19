<script lang="ts">
	import { themes, type Theme } from '$lib/data/themes';
	import {projects} from '$lib/data/projects';
	import {Icon} from '@steeze-ui/svelte-icon';
	import {Swatch, ArrowTopRightOnSquare, CodeBracket, GlobeAlt} from '@steeze-ui/heroicons';
</script>

<div class="w-screen h-screen overflow-x-hidden overflow-y-auto md:flex">
	<aside class="h-[50vh] md:h-auto border-r border-zinc-900 flex items-center justify-center flex-col md:flex-[.75] md:sticky md:top-0">
		<div class="text-center md:text-left">
			<span class="text-sm text-zinc-500 block -mb-1">Hi there! I'm</span>
			<h1 class="text-7xl text-zinc-50 font-display font-bold">Gibbu</h1>
			<p class="text-xl text-zinc-200 mt-4">A hobbyist web dev</p>
			<p class="text-xs text-zinc-900 select-none pointer-events-none">And the creator of the best Discord themes</p>
		</div>
	</aside>
	<main class="border-t border-zinc-900 md:border-none md:flex-1">
		<section>
			<h3 class="font-display text-xl font-bold p-8 border-b text-zinc-100 border-zinc-900 flex items-center gap-8 sticky top-0 bg-zinc-950 z-10">
				<Icon src={Swatch} class="w-8 h-8" />
				Discord Themes
			</h3>
			<ul>
				{#each themes as theme}
				<li class="border-b border-zinc-900">
					<a href="https://github.com/DiscordStyles/{theme.name.replace(/ /g, '')}" target="_blank" rel="noopener noreferrer" class="text-left p-8 w-full flex relative overflow-hidden items-center group">
						<img src="{theme.images[0]}" alt="Theme preview" class="absolute top-1/2 bottom-0 left-0 w-[75%] -translate-y-1/2 opacity-20 transition-transform group-hover:scale-105" style="mask: linear-gradient(90deg, black,transparent)">
						<div class="relative flex-1">
							<h4 class="font-display text-zinc-100 font-bold text-2xl mb-2">{theme.name}</h4>
							<p>{theme.description}</p>
						</div>
						<Icon src={ArrowTopRightOnSquare} class="w-8 h-8 opacity-50 transition-opacity group-hover:opacity-100" />
					</a>
				</li>
				{/each}
			</ul>
		</section>
		<section>
			<h3 class="font-display text-xl font-bold p-8 border-b text-zinc-100 border-zinc-900 flex items-center gap-8 sticky top-0 bg-zinc-950 z-10">
				<Icon src={CodeBracket} class="w-8 h-8" />
				Projects
			</h3>
			<ul>
				{#each projects as project}
				<li class="border-b border-zinc-900">
					<a href={project.href} target="_blank" rel="noopener noreferrer" class="text-left p-8 w-full flex relative overflow-hidden items-center group">
						<div class="relative flex-1">
							<h4 class="font-display text-zinc-100 font-bold text-2xl mb-2 flex items-start gap-2">
								{project.name}
								{#if project.archived}
									<span class="text-orange-400 px-2 py-1 border border-orange-400 rounded-full text-[10px] leading-none font-normal">Archived</span>
								{/if}
							</h4>
							<p>{project.description}</p>
						</div>
						<Icon src={ArrowTopRightOnSquare} class="w-8 h-8 opacity-50 transition-opacity group-hover:opacity-100" />
					</a>
				</li>
				{/each}
			</ul>
		</section>
	</main>
</div>