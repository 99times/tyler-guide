module.exports = {
  dest:'./q',
  base: '/q/',
  title: 'tyler.guide',
  description: 'A guide made by the community of Tyler for the users.',
  head: [
		['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'title', content: 'Tyler.guide' }],
    ['meta', { name: 'description', content: 'A guide made by the community of Tyler for the users.' }],
		['meta', { name: 'theme-color', content: '#3e7baf' }],
		['meta', { name: 'twitter:card', content: 'summary' }],
		['meta', { name: 'og:title', content: 'Tyler Guide' }],
		['meta', { name: 'og:description', content: 'A guide made by the community of Tyler for the users.' }],
		['meta', { name: 'og:type', content: 'website' }],
		['meta', { name: 'og:url', content: 'https://tyler.guide/' }],
		['meta', { name: 'og:locale', content: 'en_US' }],
		['meta', { name: 'og:image', content: '/meta-image.png' }],
	],
  themeConfig: {
    nav: [
      { text: 'team', link: 'https://tyler.team', target: '_blank', rel:''},
      { text: 'twitter', link: 'https://twitter.com/TylerDeva', target: '_blank', rel:''},
      { text: 'discord', link: 'https://discord.gg/kJ4QXng', target: '_blank', rel:''},
    ],
    sidebar: [
      ['/', 'Home'],
      ['/begin/', 'Getting Started'],
      ['/instructions/', 'Instructions'],
    ],
  }
}