import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'Therry Léonhard Hilaire | Freelancer';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Therry Léonhard',
	lastName: 'Hilaire',
	description:
		"I have spent for the better part of 3 years learning software development, playing and making mistakes. And only last year, I've started developing apps. While being a developer is hard and decision fatigue is very common, I've fallen in love with the process. And it's now an important part of my life.",
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/TherryHilaire' },
		{
			platform: Platform.Twitter,
			link: 'https://twitter.com/leo_hilaire'
		},
		{
			platform: Platform.StackOverflow,
			link: 'https://stackoverflow.com/users/18946784/therry-l%c3%a9onhard-hilaire'
		},
		{
			platform: Platform.Email,
			link: 'therryleseul@gmail.com'
		}
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	item: ''
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};
