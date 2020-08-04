import ServerSideRender from '@wordpress/server-side-render';
import { __ } from '@wordpress/i18n';
import { SelectControl, 
    Toolbar,
    Button,
    Tooltip,
    PanelBody,
    PanelRow,
    FormToggle,
    ToggleControl,
    ToolbarGroup,
    Disabled, 
    RadioControl,
    RangeControl,
    TextControl, 
    FontSizePicker } from '@wordpress/components';

    import {
        RichText,
        AlignmentToolbar,
        BlockControls,
        BlockAlignmentToolbar,
        InspectorControls,
        InnerBlocks,
        withColors,
        PanelColorSettings,
        getColorClassName
    } from '@wordpress/editor'
    ;
import { withSelect, widthDispatch } from '@wordpress/data';
import { withState } from '@wordpress/compose';


const orderbyOptions = [
    { label: 'Title', value: 'title' },
    { label: 'Date', value: 'date' },
    { label: 'Menu Order', value: 'menu_order' },
    { label: 'Random', value: 'rand' },
 ];

const orderOptions = [
    { label: 'Ascending', value: 'asc' },
    { label: 'Descending', value: 'desc' },
];

var fetchUrlAction = wpAjax.wpurl+'/wp-admin/admin-ajax.php?action=wpcd_get_taxonomies_action';

const taxonomyList = [
    //{ label: 'Select category form the list', value: null },
    { label: 'Categories', value: 'categories' }
];

wp.apiFetch({url: fetchUrlAction}).then(response => {
    jQuery.each( response, function( key, val ) {
        taxonomyList.push({label: val.label, value: val.name});
    });
});

/*wp.apiFetch({path: "/wp/v2/taxonomies?per_page=100"}).then(posts => {
    jQuery.each( posts, function( key, val ) {
        taxonomyList.push({label: val.name, value: val.rest_base});
    });
}).catch( 

)*/
const taxonomyTerms = [
    { label: 'Select one or more terms', value: null }
];

wp.apiFetch({path: "/wp/v2/categories?per_page=100"}).then(posts => {
    jQuery.each( posts, function( key, val ) {
        taxonomyTerms.push({label: val.name, value: val.slug});
    });
}).catch( 

)

const setTerms = (taxonomy) => {
    if(taxonomy == "category"){
        taxonomy = "categories";
    }else if(taxonomy == "post_tag"){
        taxonomy = "tags";
    }
    wp.apiFetch({path: "/wp/v2/" + taxonomy + "?per_page=100"}).then(posts => {
        taxonomyTerms.length = 0;
        jQuery.each( posts, function( key, val ) {
            taxonomyTerms.push({label: val.name, value: val.id});
        });
        console.log(taxonomyTerms);
    }).catch( 
    
    )
    return taxonomyTerms;
};

const edit = props => {
    const { attributes: {orderby, order, showcount, hierarchical, hide_empty, exclude, include, default_option_text, default_option_sub, category}, className, setAttributes } = props;

    const setTaxonomy = category => {
        props.setAttributes({category});
        setTerms(category);
        //console.log("Selected Category: " + category);
    };

    const excludeCategories = exclude => {
        props.setAttributes( { exclude} );
    };

    const includeCategories = include => {
        props.setAttributes( { include} );
    };

    const inspectorControls = (
        <InspectorControls key="inspector">
            <PanelBody title={ __( 'Category Dropdown Options' )}>
                <PanelRow>
                    <SelectControl
                        label="Order By"
                        value={orderby}
                        options= { orderbyOptions }
                        onChange={ ( nextValue ) =>
                            setAttributes( {orderby:  nextValue } )
                        }
                    />
                </PanelRow>
                <PanelRow>
                    <SelectControl
                        label="Order"
                        value={order}
                        options= { orderOptions }
                        onChange={ ( nextValue ) =>
                            setAttributes( {order:  nextValue } )
                        }
                    />
                </PanelRow>
                <PanelRow>
                    <ToggleControl
						label={ __( 'Show the number of posts in each Category' ) }
						checked={ showcount }
                        onChange={ ( nextValue ) =>
                            setAttributes( { showcount:nextValue } )
                        }
					/>
                </PanelRow>
                <PanelRow>
                    <ToggleControl
						label={ __( 'Show the categories in a hierarchy' ) }
						checked={ hierarchical }
                        onChange={ ( nextValue ) =>
                            setAttributes( { hierarchical:nextValue } )
                        }
					/>
                </PanelRow>
                <PanelRow>
                    <ToggleControl
						label={ __( 'Show/hide the emtpy categories' ) }
						checked={ hide_empty }
                        onChange={ ( nextValue ) =>
                            setAttributes( { hide_empty:nextValue } )
                        }
					/>
                </PanelRow>
                <PanelRow>
                    <SelectControl
                        label="Category"
                        value={ category }
                        options={taxonomyList}
                        onChange={setTaxonomy}
                    />
                </PanelRow>
                <PanelRow>
                    <SelectControl
                        multiple
                        label="Exclude Categories"
                        value={ exclude }
                        options={setTerms(category)}
                        onChange={ excludeCategories }
                    />
                </PanelRow>
                <PanelRow>
                    <SelectControl 
                        multiple
                        label = "Include Categories"
                        value = {include}
                        options = {setTerms(category)}
                        onChange = {includeCategories}
                    />
                </PanelRow>
                <PanelRow>
                    <TextControl
                        label="Parent Category Text"
                        value={ default_option_text }
                        onChange={ ( nextValue ) =>
                            setAttributes( { default_option_text: nextValue } )
                        }
                    />
                </PanelRow>
                <PanelRow>
                    <TextControl
                        label="Child Category Text"
                        value={ default_option_sub }
                        onChange={ ( nextValue ) =>
                            setAttributes( { default_option_sub: nextValue } )
                        }
                    />
                </PanelRow>
            </PanelBody>
        </InspectorControls>
    );

    return [
        <div className={ props.className }>
            { inspectorControls }
            <div id="child_cat_dropdown">
                The category dropdown should show here.
            </div>
        </div>
    ];
};

export default edit;