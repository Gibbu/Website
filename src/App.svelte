<script lang="ts">
  import './app.scss';

  import themes from './data/themes';
  import projects from './data/projects';
  import links from './data/links';
</script>

<template>
  <main>
    <h1>Creator of the <span>BEST</span> Discord themes.</h1>

    <!-- Themes -->
    <ul>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
        <h3>Discord Themes</h3>
      </li>
      {#each themes as theme}
        <li>
          <a href="https://github.com/DiscordStyles/{theme.name}" target="_blank" rel="noreferrer">
            <h4>
              {theme.name}
              {#if theme?.new}
                <span>NEW</span>
              {/if}
            </h4>
            <p>{theme.description}</p>
          </a>
        </li>
      {/each}
    </ul>

    <!-- Projects -->
    <ul>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
        <h3>Projects</h3>
      </li>
      {#each projects as project}
        <li>
          <a href={project.href} target="_blank" rel="noreferrer">
            <h4>
              {project.name}
              {#if project?.archived}
                <small>ARCHIVED</small>
              {/if}
            </h4>
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
        <h4>Links</h4>
      </li>
      {#each links as link}
        <li>
          <a href={link.href} target="_blank" rel="noreferrer">
            <h4>{link.title}</h4>
            <p>{link.text}</p>
          </a>
        </li>
      {/each}
    </ul>
  </main>
</template>

<style lang="scss">
  @use 'sass:math';

  @function rem($pixels) {
    @return math.div($pixels, 16) * 1rem;
  }

  main {
    max-width: rem(980);
    margin: rem(100) auto;
    width: 100%;
    padding: 0 rem(50);
  }

  h1 {
    font-size: rem(42);
    color: var(--text-primary);
    margin: 0 0 rem(100);
    font-weight: 500;
    span {
      color: hsl(var(--accent));
      text-shadow: 0 0 rem(15) hsl(var(--accent) / .5), 0 0 rem(5) hsl(var(--accent) / .2);
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    &:not(:last-child) {
      margin-bottom: rem(50);
    }
    li {
      display: flex;
      align-items: center;
      position: relative;
      &:first-child {
        border-bottom: rem(1) solid var(--border);
        padding-bottom: rem(12);
      }
      &:not(:first-child) {
        padding: rem(12) 0 rem(12) rem(46);
        &::before {
          content: "";
          position: absolute;
          left: rem(22);
          width: rem(1);
          height: 100%;
          background: var(--border);
          top: 0;
        }
        &::after {
          content: "";
          background: var(--border);
          position: absolute;
          left: rem(22);
          height: rem(1);
          width: rem(12);
          top: 50%;
          transform: translateY(-50%);
        }
      }
      &:last-child::before {
        height: 50%;
      }
    }
    a {
      display: block;
      width: 100%;
      &:hover {
        h4 {
          color: var(--text-primary);
        }
        p {
          color: var(--text-secondary);
        }
      }
    }
    svg {
      width: rem(24);
      height: rem(24);
      stroke: hsl(var(--accent));
      filter: drop-shadow(0 0 rem(10) hsl(var(--accent) / .2)) drop-shadow(0 0 rem(5) hsl(var(--accent) / .5));
      margin-right: rem(20);
    }
    h3 {
      font-weight: 700;
      flex: 1;
      color: var(--text-primary);
    }
    p {
      font-size: rem(14);
      color: var(--text-tertiary);
    }
    h4 {
      display: flex;
      align-items: center;
      gap: rem(12);
      span {
        font-size: rem(12);
        color: hsl(var(--accent));
        text-shadow: 0 0 rem(15) hsl(var(--accent) / .5), 0 0 rem(5) hsl(var(--accent) / .2);
      }
      small {
        font-size: rem(12);
        color: hsl(var(--yellow));
        text-shadow: 0 0 rem(15) hsl(var(--yellow) / .5), 0 0 rem(5) hsl(var(--yellow) / .2);
      }
    }
  }
</style>