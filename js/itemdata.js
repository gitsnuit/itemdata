Ext.namespace('Zarafa.plugins.itemdata');

Zarafa.plugins.itemdata.ItemData = Ext.extend(Zarafa.core.Plugin, {


  initPlugin : function()
  {
    this.registerInsertionPoint('context.mail.contextmenu.options', this.itemdatabutton, this);

  },

  itemdatabutton: function (ip, menu) {
    return [{
      text : _('Email Details'),
      handler : this.onClickItemDataHandler,
      parentmenu: menu
    }];
  },

  onClickItemDataHandler: function (btn) {
    var popUp = window.open("", "",'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=1000,height=900');
    popUp.document.write("<pre style=word-wrap:break-word;white-space:pre-line;>"+JSON.stringify(btn.parentmenu.records[0].data, undefined, 2)+"</pre>");
  }

});


Zarafa.onUIReady(function() {
	container.registerPlugin(new Zarafa.core.PluginMetaData({
		name : 'itemdata',
		displayName : _('Item Data'),
		pluginConstructor : Zarafa.plugins.itemdata.ItemData
	}));
});
