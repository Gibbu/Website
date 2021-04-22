<script>
  export let type: 'button' | 'submit' = 'button';
  export let variant: 'primary' | 'secondary' | 'text' = 'primary';
  export let colour: 'emerald' | 'green' | 'yellow' | 'red';

  export let element: 'button' | 'a' = 'button';
  export let href: string;

  export let disabled: any;

  let className: string;
  export {className as class}

  const disabledClasses = 'opacity-50 pointer-events-none';
  const defaults = `flex text-sm items-center font-semibold transition rounded justify-center py-3 px-4 cursor-pointer focus:outline-none ${className} ${disabled ? disabledClasses : ''}`;
  let classes: string;

  if (variant === 'primary') {
    const starter = 'dark:ring-offset-lvl-2 text-white focus:ring-opacity-40 focus:ring-4';
    if (colour === 'emerald') classes = `${starter} bg-emerald-500 hover:bg-emerald-400 focus:ring-emerald-500`;
    if (colour === 'green') classes = `${starter} bg-green-500 hover:bg-green-400 focus:ring-green-500`;
    if (colour === 'yellow') classes = `${starter} bg-yellow-500 hover:bg-yellow-400 focus:ring-yellow-500`;
    if (colour === 'red') classes = `${starter} bg-red-500 hover:bg-red-400 focus:ring-red-500`;
  } else if (variant === 'secondary') {
    classes = 'bg-gray-700 text-gray-300 hover:bg-gray-600 focus:outline-none focus:bg-gray-500 focus:text-white';
  } else if (variant === 'text') {
    const starter = 'hover:bg-opacity-5 focus:bg-opacity-10';
    if (colour === 'emerald') classes = `${starter} text-emerald-500 hover:bg-emerald-500 focus:bg-emerald-500`;
    if (colour === 'green') classes = `${starter} text-green-500 hover:bg-green-500 focus:bg-green-500`;
    if (colour === 'yellow') classes = `${starter} text-yellow-500 hover:bg-yellow-500 focus:bg-yellow-500`;
    if (colour === 'red') classes = `${starter} text-red-500 hover:bg-red-500 focus:bg-red-500`;
  }
</script>

{#if element === 'button'}
  <button {type} class="{classes} {defaults} {disabled ? disabledClasses : ''}" on:click>
    <slot />
  </button>
{:else if element === 'a'}
  <a {href} class="{classes} {defaults} {disabled ? disabledClasses : ''}">
    <slot />
  </a>
{/if}