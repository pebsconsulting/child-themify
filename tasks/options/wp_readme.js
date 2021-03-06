/* jshint node:true */
module.exports = (function () {
	var grunt = require('grunt'),
			PACKAGE = grunt.file.readJSON('package.json'),
			screenshots = grunt.file.readJSON('assets/img/screenshots/screenshots.json').screenshots;
	return {
		options: {
			defaultFaq: 'None yet.\n\n'
		},
		plugin : {
			displayName   : 'Child Themify',
			contributors  : ['JohnPBloch'],
			tags          : PACKAGE.keywords,
			minimumVersion: '3.4.2',
			testedUpTo    : '4.6.9',
			stableTag     : '<%=pkg.version%>',
			blurb         : 'Create child themes at the click of a button.',
			sections      : {
				description : '<%= pkg.description %>',
				installation: [
					'Upload the `child-themify` directory and its contents to the `/wp-content/plugins/` directory (or your custom location if you manually changed the location).',
					'Activate the plugin through the \'Plugins\' menu in WordPress',
					'You can now create a child theme of any non-child theme you have installed by going to the themes page and clicking "Create a child theme" from the actions links of the theme of your choice.'
				],
				faq         : [
					{
						question: 'Where can I get some help?',
						answer  : 'I\'d really prefer that you use [Github\'s issue tracker](https://github.com/johnpbloch/child-themify/issues/new). The [WordPress.org support forum for the plugin](https://wordpress.org/support/plugin/child-themify) will work too, it will just take longer.'
					}
				],
				screenshots : screenshots.map(function (item) {
					return item.caption;
				}),
				changelog   : [
					{
						version       : '1.2.0',
						releaseMessage: 'Plugin now creates a functions file',
						releaseDate   : '2016-10-13',
						changes       : ['The plugin now creates a functions.php file in the new theme']
					},
					{
						version       : '1.1.2',
						releaseMessage: 'i18n improvements',
						releaseDate   : '2015-10-13',
						changes       : [
							'Fixed basename location when loading the textdomain',
							'Added textdomain and domainpath headers to plugin file'
						]
					},
					{
						version       : '1.1.1',
						releaseMessage: 'Added French translation',
						releaseDate   : '2015-01-13',
						changes       : ['Added French translation from FR_lucien']
					},
					{
						version       : '1.1.0',
						releaseMessage: 'Minor release with tweaks and thumbnail support',
						releaseDate   : '2014-12-20',
						changes       : [
							'Thumbnail now gets copied when you create a child theme',
							'Various other tweaks and security hardening'
						]
					},
					{
						version       : '1.0.4',
						releaseMessage: 'This version fixes compatibility with WordPress 4.0',
						releaseDate   : '2014-09-15',
						changes       : ['Added support for WordPress 4.0']
					},
					{
						version       : '1.0.3',
						releaseMessage: 'This version cleans up 3.8+ compatibility and ensures 3.9 compatibility',
						releaseDate   : '2014-04-15',
						changes       : [
							'Standardized theme action links shim. See https://github.com/johnpbloch/child-themify/issues/2 for more information',
							'Maintenance, code cleanup, bug fixes'
						]
					},
					{
						version       : '1.0.2',
						releaseMessage: 'This version fixes the plugin in WordPress 3.8',
						releaseDate   : '2014-01-13',
						changes       : ['Added support for WP 3.8']
					},
					{
						version       : '1.0.1',
						releaseMessage: 'This version fixes a bug that will prevent some users\' css from taking effect in new child themes.',
						releaseDate   : '2013-01-18',
						changes       : ['Add a semicolon to the end of the @import line in the stylesheet. Props to Luis Alejandre (wpthemedetector.com) for finding and solving.']
					},
					{
						version    : '1.0',
						releaseDate: '2012-12-31',
						changes    : ['Initial Release']
					}
				],
				upgrade     : 'Creates a blank functions.php file'
			}
		}
	};
}());
