module.exports = {
	title: 'Marvin',
	description: 'Live and Study.',
	head: [
		['link', { rel: 'icon', href: '/images/photo.png' }],
		['meta', { name: 'theme-color', content: '#0084ff' }],
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
		['meta', { name: 'msapplication-TileImage', content: '/images/photo' }],
		['meta', { name: 'msapplication-TileColor', content: '#000000' }]
	],
	base: '/',
	markdown: {
		lineNumbers: false
	},
	themeConfig: {
		lastUpdated: true,
		nav:[
			{text: '组件', link: '/component/'},
			/*{text: '前端', link: '/web/'},
			{text: '后端', link: '/after/'},
			{text: '进阶', link: '/other/'},
			{text: '设计', link: '/design/'},
			{text: 'Blog', link: 'http://blog.canyuegongzi.xyz'},
			{text: '全栈项目', link: 'https://github.com/canyuegongzi'},
			{text: 'Github', link: 'https://github.com/canyuegongzi'}*/
		],
		sidebar: {
			'/component/': [
				{
					title: 'Basic',
					sidebarDepth: 2,
					children: [
						'/component/Basic/Button',
						'/component/Basic/Radio',
					]
				}
			],
		}
	},
	plugins: [
		require('vuepress-plugin-demo-container'),
	],
};
