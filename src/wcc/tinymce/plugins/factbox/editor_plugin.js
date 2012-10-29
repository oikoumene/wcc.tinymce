/**
 * @author Matous Hora
 * @copyright Copyright � 2009, Fry-It, All rights reserved.
 */

//  -- example content generated by this plugin --
//  
//    <h3 class="facts">The fact title</h3>
//    <div class="facts">
//      <ul>
//          <li>Fact number one</li>
//          <li>Fact number two and a bit longer</li>
//          <li>Fact number three and a bit longer still</li>
//      </ul>
//    </div>

(function() {
    // Load plugin specific language pack
    // tinymce.PluginManager.requireLangPack('flags');

    tinymce.create('tinymce.plugins.FactBox', {

        _previousNode : null,

        /**
         * Initializes the plugin, this will be executed after the plugin has 
         * been created. This call is done before the editor instance has
         * finished it's initialization so use the onInit event
         * of the editor instance to intercept that event.
         *
         * @param {tinymce.Editor} ed Editor instance that the plugin is 
         * 		initialized in.
         * @param {string} url Absolute URL to where the plugin is located.
         */
        init : function(ed, url) 
        {
            var t = this;
            t.ed = ed
            t.url = url

            // Register commands
            ed.addCommand('mceInsertFactBox', function() 
            {
                t._execCommand();
            });

            // Register image caption button
            ed.addButton('factbox', 
            {
                title : 'Fact box',
                cmd : 'mceInsertFactBox',
                image : url + '/img/factbox.gif'
            });

            //ed.onNodeChange.add(this._nodeChange, this);
        },

        _execCommand : function() 
        {
            
            var t = this;
        	ed = t.ed;
        	url = t.url;
        	
            sel = ed.selection.getNode();
            
            
            b = ed.selection.getBookmark();
            h3Facts = ed.dom.create('h3',
            	{
            		'class':'facts'
            	},
            	'Fact title');
        	
            divFacts = ed.dom.create('div',
            	{
            		'class':'facts'
            	});
            	
            ulFacts = ed.dom.create('ul');
            
            liFact1 = ed.dom.create('li',{},'Fact 1');
            liFact2 = ed.dom.create('li',{},'Fact 2');
            
            ulFacts.appendChild(liFact1);
            ulFacts.appendChild(liFact2);
            divFacts.appendChild(ulFacts);
            
            sel.parentNode.insertBefore(h3Facts, sel);
            sel.parentNode.insertBefore(divFacts, sel);
            ed.selection.moveToBookmark(b);
            
        },

        _nodeChange : function(ed, cm, n) 
        {
            // Check if active editor
            if (tinyMCE.activeEditor.id != ed.id) 
              return;
            return true;
        },
        

    /**
         * Returns information about the plugin as a name/value array.
         * The current keys are longname, author, authorurl, infourl and version.
         *
         * @return {Object} Name/value array containing information about the plugin.
         */
        getInfo : function() {
            return {
                longname : 'ACT Alliance fact box plugin',
                author : 'Fry-It',
                authorurl : 'http://fry-it.com',
                infourl : 'http://plone.org/products/tinymce',
                version : "1.0"
            };
        }
    });

    // Register plugin
    tinymce.PluginManager.add('factbox', tinymce.plugins.FactBox);
})();