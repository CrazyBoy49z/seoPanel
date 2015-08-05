seoPanel.window.CreateSites = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'seopanel-item-window-create';
	}
	Ext.applyIf(config, {
		title: _('seopanel_item_create'),
		width: 550,
		autoHeight: true,
		url: seoPanel.config.connector_url,
		action: 'mgr/item/create',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	seoPanel.window.CreateSites.superclass.constructor.call(this, config);
};
Ext.extend(seoPanel.window.CreateSites, MODx.Window, {

	getFields: function (config) {
		return [{
			xtype: 'textfield',
			fieldLabel: _('seopanel_item_name'),
			name: 'name',
			id: config.id + '-name',
			anchor: '99%',
			allowBlank: false,
		}, {
			xtype: 'textarea',
			fieldLabel: _('seopanel_item_description'),
			name: 'description',
			id: config.id + '-description',
			height: 150,
			anchor: '99%'
		}, {
			xtype: 'xcheckbox',
			boxLabel: _('seopanel_item_active'),
			name: 'active',
			id: config.id + '-active',
			checked: true,
		}];
	}

});
Ext.reg('seopanel-item-window-create', seoPanel.window.CreateSites);


seoPanel.window.UpdateSites = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'seopanel-item-window-update';
	}
	Ext.applyIf(config, {
		title: _('seopanel_item_update'),
		width: 550,
		autoHeight: true,
		url: seoPanel.config.connector_url,
		action: 'mgr/item/update',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	seoPanel.window.UpdateSites.superclass.constructor.call(this, config);
};
Ext.extend(seoPanel.window.UpdateSites, MODx.Window, {

	getFields: function (config) {
		return [{
			xtype: 'hidden',
			name: 'id',
			id: config.id + '-id',
		}, {
			xtype: 'textfield',
			fieldLabel: _('seopanel_item_name'),
			name: 'name',
			id: config.id + '-name',
			anchor: '99%',
			allowBlank: false,
		}, {
			xtype: 'textarea',
			fieldLabel: _('seopanel_item_description'),
			name: 'description',
			id: config.id + '-description',
			anchor: '99%',
			height: 150,
		}, {
			xtype: 'xcheckbox',
			boxLabel: _('seopanel_item_active'),
			name: 'active',
			id: config.id + '-active',
		}];
	}

});
Ext.reg('seopanel-item-window-update', seoPanel.window.UpdateSites);