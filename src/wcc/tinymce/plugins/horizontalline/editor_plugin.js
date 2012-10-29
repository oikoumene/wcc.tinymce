/**
 * @author Artur Konstanczak
 * @copyright Copyright © 2009, Fry-It, All rights reserved.
 */

(function() {
    // Load plugin specific language pack
    //tinymce.PluginManager.requireLangPack('flags');

    tinymce.create('tinymce.plugins.HorizontalLine', {

    /**
         * Initializes the plugin, this will be executed after the plugin has been created.
         * This call is done before the editor instance has finished it's initialization so use the onInit event
         * of the editor instance to intercept that event.
         *
         * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
         * @param {string} url Absolute URL to where the plugin is located.
         */
        init : function(ed, url) 
        {
            var t = this;

            // Register commands
            ed.addCommand('mceInsertHorizontalLine', function(ui, v) 
            {
                var n = ed.selection.getNode();
                if (n && n.tagName.toLowerCase()!="body")
                {
                  var div = ed.dom.create('div',{'class':'hr'});
                  var hr = ed.dom.create('hr');
                  div.appendChild(hr);
                  ed.dom.insertAfter(div, n);
                }
            });

            // Register image horizontal line button
            ed.addButton('horizontalline', 
            {
                title : 'Horizontal line',
                cmd : 'mceInsertHorizontalLine',
                image : url + '/img/horizontalline.gif'
            });

        },

    /**
         * Returns information about the plugin as a name/value array.
         * The current keys are longname, author, authorurl, infourl and version.
         *
         * @return {Object} Name/value array containing information about the plugin.
         */
        getInfo : function() 
        {
            return {
                longname : 'ACT Alliance horizontal line plugin',
                author : 'Fry-It',
                authorurl : 'http://fry-it.com',
                infourl : 'http://plone.org/products/tinymce',
                version : "1.0"
            };
        }
    });

    // Register plugin
    tinymce.PluginManager.add('horizontalline', tinymce.plugins.HorizontalLine);
})();