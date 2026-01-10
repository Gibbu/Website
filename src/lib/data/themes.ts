interface Theme {
	name: string;
	description: string;
	bd_download: number;
	new?: boolean;
	image: string;
}

export const themes: Theme[] = [
	{
		name: 'SoftX',
		description: 'A soft and comfy feel for Discord.',
		bd_download: 515,
		image:
			'https://camo.githubusercontent.com/0ef495e50c973474c467f20ddec2787635054a37b85f074fd6ba68465c83ce39/68747470733a2f2f692e696d6775722e636f6d2f4535376746334c2e706e67'
	},
	{
		name: 'Frosted Glass',
		description: 'Display your picture of choice with adjustable blur and brightness.',
		bd_download: 40,
		image:
			'https://camo.githubusercontent.com/09cd3707cf1ed61ebce8985f7e55052a85eb5cc5adcfefc74aa3c1ca28d5096a/68747470733a2f2f692e696d6775722e636f6d2f73556c673866662e706e67'
	},
	{
		name: 'MinimalCord',
		description: 'Changes Discord enough to give it a fresh feel while also making it darker.',
		bd_download: 125,
		image:
			'https://camo.githubusercontent.com/48ab3ccff2e53d120169ad138f2034929ea9c828a709e21fabcb36479f578caa/68747470733a2f2f692e696d6775722e636f6d2f30564474777a662e706e67'
	},
	{
		name: 'RadialStatus',
		description: 'Changes the status icons to wrap around the avatar.',
		bd_download: 32,
		image:
			'https://camo.githubusercontent.com/f239fb8e8162f06a53d3573ee46168bae9400c894db9d01abdaadd4b9af09506/68747470733a2f2f692e696d6775722e636f6d2f347a5a553469772e6a7067'
	},
	{
		name: 'Horizontal Server List',
		description: 'Moves the server list from the left to the top of Discord.',
		bd_download: 124,
		image:
			'https://camo.githubusercontent.com/6c989ad7fefc2ea871a5266a2b99ba6e6cd6c6496d9e9d74748a7c8dbdb7f9e6/68747470733a2f2f692e696d6775722e636f6d2f795644747776462e706e67'
	}
];
