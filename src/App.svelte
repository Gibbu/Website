<script lang="ts">
  import { onMount } from "svelte";
  import portal from './lib/portal';
  import "./app.scss";

  import themes from "./data/themes";
  import projects from "./data/projects";
  import links from "./data/links";

  // VERY IMPORTANT EASTER EGG, no snitching >:(
  let keys: string[] = [];
  let showEasterEgg: boolean = false;
  
  const easteregg = (e: KeyboardEvent): void => {
    keys = [...keys, e.key];
    if (keys.length >= 11 && keys.join("").replace(/Arrow/g, "") === "UpUpDownDownLeftRightLeftRightbaEnter") {
      showEasterEgg = true;
      window.scrollTo({
        top: 0
      })
    }
  }

  // Active theme
  let activeTheme: string = "";

  const setTheme = (e: HashChangeEvent & {currentTarget: EventTarget & Window}): void => {
    activeTheme = e.newURL.split("#").pop();
  }
  onMount(() => {
    if (window.location.hash) activeTheme = window.location.hash.replace("#", "");
  });
</script>

<svelte:window on:keyup={easteregg} on:hashchange={setTheme} />

<template>
  {#if showEasterEgg}
    <!-- No snitching >:( -->
    <iframe width="980" height="551" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  {/if}
  <div>
    <h1>Creator of the <span>BEST</span> Discord themes.</h1>

    <!-- Themes -->
    <ul>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h3a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
        <h2>Discord Themes</h2>
      </li>
      {#each themes as theme}
        <li>
          <a href="#{theme.name.replace(/ /g, "").toLowerCase()}">
            <h3>
              {theme.name}
              {#if theme?.new}
                <span>NEW</span>
              {/if}
            </h3>
            <p>{theme.description}</p>
          </a>
          {#if activeTheme === theme.name.replace(/ /g, "").toLowerCase()}
            <section use:portal={"#theme"}>
              <h1>
                {theme.name}
                {#if theme?.new}
                  <span>NEW</span>
                {/if}
              </h1>
              <p>{theme.description}</p>
              <div>
                <a href="https://github.com/DiscordStyles/{theme.name.replace(/ /g, "")}" target="_blank" rel="noreferrer">View source</a>
                <a href="https://betterdiscord.app/Download?id={theme.bd_download}" download>Download for BetterDiscord</a>
              </div>
              {#each theme.images as image}
                <img src={image} alt="Theme preview">
              {/each}
            </section>
          {/if}
        </li>
      {/each}
    </ul>

    <!-- Projects -->
    <ul>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
        <h2>Projects</h2>
      </li>
      {#each projects as project}
        <li>
          <a href={project.href} target="_blank" rel="noreferrer">
            <h3>
              {project.name}
              {#if project?.archived}
                <small>ARCHIVED</small>
              {/if}
            </h3>
            <p>{project.description}</p>
          </a>
        </li>
      {/each}
    </ul>

    <!-- Socials -->
    <ul>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
        <h2>Links</h2>
      </li>
      {#each links as link}
        <li>
          <a href={link.href} target="_blank" rel="noreferrer">
            <h3>{link.title}</h3>
            <p>{link.text}</p>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</template>