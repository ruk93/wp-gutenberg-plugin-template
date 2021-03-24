import Edit from './Edit';
import Save from './Save';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const PLUGIN_IDENTIFIER = 'vendor/plugin-name';

//initial state and attributes
const attributes = {
	variable1 : {default : 'initial value'}
}

registerBlockType( PLUGIN_IDENTIFIER, {
	title: __( 'Plugin Title' ),
	icon: 'lock', //Image or Component as icon
	category: 'common',
	supports: {
		html: false,
	},
	attributes,
	edit: Edit, //Editor Preview and Settings Panel
	save: Save, // Frontend Preview
} );