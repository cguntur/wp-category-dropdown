/**
 * Block dependencies
 */

import edit from './edit';

import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { dateI18n, format, __experimentalGetSettings } from '@wordpress/date';
import { setState } from '@wordpress/compose';
 
registerBlockType( 'gcs/wp-category-dropdown', {
    title: 'WP Category Dropdown',
    icon: 'sort',
    category: 'widgets',
    description: 'This block displays the child categories based on the selected parent category.',
    example: {
    },
    supports: {
        // Declare support for specific alignment options.
        align: true
    },
    attributes: {
        align: {
            type: 'string',
            default: ''
        },
        orderby:{
            type: 'string',
            default: 'name',
        },
        order:{
            type: 'string',
            default: 'asc',
        },
        showcount:{
            type: 'boolean',
            default: true,
        },
        hierarchical:{
            type: 'boolean',
            default: true,
        },
        hide_empty:{
            type: 'boolean',
            default: true,
        },
        category:{
            type: 'string',
            default: 'category',
        },
        exclude:{
            type: 'array',
            default: [],
        },
        include:{
            type: 'array',
            default: [],
        },
        default_option_text:{
            type: 'string',
            default: __('Parent Category', 'wpcd'),
        },
        default_option_sub:{
            type: 'string',
            default: __('Child Category', 'wpcd'),
        },
    },
    edit: edit,
    save() {
        // Rendering in PHP
        return null;
    },
} );