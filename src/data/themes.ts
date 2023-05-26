interface Theme {
	name: string,
	description: string,
	bd_download: number
	new?: boolean,
	images: string[]
}

const themes: Theme[] = [
	{
		name: "Fluent",
		description: "Brings the look of Windows 11 to Discord.",
		bd_download: 662,
		images: [
			"https://camo.githubusercontent.com/1acc36365992ad4119ed09f3db87660622866bbcafafe58be7a46c5933e3cb84/68747470733a2f2f692e696d6775722e636f6d2f576173676546792e706e67",
			"https://camo.githubusercontent.com/4fd8fb24c67f884b6c510d2090029ab0ce44a626c249329abb2fd27e08c9b84b/68747470733a2f2f692e696d6775722e636f6d2f33754c3879326d2e706e67"
		]
	},
	{
		name: "SoftX",
		description: "A soft and comfy feel for Discord.",
		bd_download: 515,
		images: [
			"https://camo.githubusercontent.com/6806907a0313ec99a80fe2ead0d275570332a3d8b36287f9b97b6529543877ab/68747470733a2f2f692e696d6775722e636f6d2f4535376746334c2e706e67",
			"https://camo.githubusercontent.com/76a2651b08a5e567104e567d38a4117aaa4884fb30675d98070f67d1efe6ddd4/68747470733a2f2f692e696d6775722e636f6d2f30314e6c6350632e706e67",
			"https://camo.githubusercontent.com/bdfaa72c72bf09cfa1d04d8d2b2fb6c3d396ad15f8aa5118d1a9401fffcd47e0/68747470733a2f2f692e696d6775722e636f6d2f6e71676d6654302e706e67",
			"https://camo.githubusercontent.com/71cde7152cebeb84a4e362c4f4cc89126611954fb86b3c4b550f4354f0ddc47b/68747470733a2f2f692e696d6775722e636f6d2f4b4543313631472e706e67",
		]
	},
	{
		name: "Slate",
		description: `An optimized, consistent, and functional theme for Discord based on GitHub"s design language.`,
		bd_download: 1,
		images: [
			"https://camo.githubusercontent.com/5bd64882621cd4ae9b20f6fa27519d0cee127e88b32f59997f6d7087bd699321/68747470733a2f2f692e696d6775722e636f6d2f474563515a684e2e706e67"
		]
	},
	{
		name: "Frosted Glass",
		description: "Display your picture of choice with adjustable blur and brightness.",
		bd_download: 40,
		images: [
			"https://camo.githubusercontent.com/12064bdceaf1efc4714e0cbbad54b7bfb4d3ea93f6d86af8e46a2dbcabf00530/68747470733a2f2f692e696d6775722e636f6d2f73556c673866662e706e67"
		]
	},
	{
		name: "MinimalCord",
		description: "Changes Discord enough to give it a fresh feel while also making it darker.",
		bd_download: 125,
		images: [
			"https://camo.githubusercontent.com/6c3186c54f23a976f79baa16237b9f844a78f17f88aaee79e5468af307415936/68747470733a2f2f692e696d6775722e636f6d2f576447666144622e706e67",
			"https://camo.githubusercontent.com/d5fa71536c893abbe03fb75b578b8b8611e056cf3078f49d51b6853b95709432/68747470733a2f2f692e696d6775722e636f6d2f6a4277364952672e706e67"
		]
	},
	{
		name: "SimplyDark",
		description: "A sharp and simple theme for Discord.",
		bd_download: 394,
		images: [
			"https://camo.githubusercontent.com/aa95a005d789b884b497f709f7b0c4abf78eeecf8319db4c6fe7860412c85a26/68747470733a2f2f692e696d6775722e636f6d2f544154784a39732e706e67"
		]
	},
	{
		name: "RadialStatus",
		description: "Changes the status icons to wrap around the avatar.",
		bd_download: 32,
		images: [
			"https://camo.githubusercontent.com/cd5295a515e0a3a3d41e67c96ba884639c8d0c0a275f10340d8c681eac9ddee5/68747470733a2f2f692e696d6775722e636f6d2f347a5a553469772e6a7067"
		]
	},
	{
		name: "Horizontal Server List",
		description: "Moves the server list from the left to the top of Discord.",
		bd_download: 124,
		images: [
			"https://camo.githubusercontent.com/8c43bb8a411b3c856cf35120c7f3e31590aa292bc6764b07f9e52b31cb4449f7/68747470733a2f2f692e696d6775722e636f6d2f795644747776462e706e67"
		]
	},
]

export default themes;