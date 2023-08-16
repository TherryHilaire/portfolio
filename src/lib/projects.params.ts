import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'old-portfolio-svelte',
		color: '#5e95e3',
		description:
			'My old portfolio built with Svelte in my early stage of freelancing. I set it up to have job oppurtunities can\'t say it worked.',
		links: [{ to: 'https://therry-page.web.app/', label: 'Website' }, { to: 'https://github.com/TherryHilaire/portofolio-old', label: 'Github'}],
		logo: Assets.Unknown,
		name: 'Old Portfolio',
		period: {
			from: new Date()
		},
		skills: getSkills('svelte', 'js', 'html'),
		type: 'My old portfolio'
	}
];

export default MY_PROJECTS;
