seoPanel.window.CreateSites = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'seopanel-sites-window-create';
	}
	Ext.applyIf(config, {
		title: _('seopanel_sites_create'),
		width: 550,
		autoHeight: true,
		url: seoPanel.config.connector_url,
		action: 'mgr/sites/create',
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
            layout: 'column',
            border: false,
            anchor: '99%',
            items: [
                {
                    columnWidth: .5,
                    layout: 'form',
                    defaults: {msgTarget: 'under'},
                    border: false,
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: _('seopanel_sites_domain'),
                            name: 'domain',
                            id: config.id + '-domain',
                            anchor: '99%',
                            allowBlank: false,
                        }, {
                            xtype: 'textfield',
                            fieldLabel: _('seopanel_sites_tic'),
                            name: 'tic',
                            id: config.id + '-tic',
                            anchor: '99%',
                            allowBlank: true,
                        },
                        {
                            xtype: 'modx-combo-boolean',
                            fieldLabel: _('seopanel_sites_yaca'),
                            name: 'yaca',
                            hiddenName:'yaca',
                            id: config.id + '-yaca',
                            anchor: '99%',
                            allowBlank: true,
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: _('seopanel_sites_yaindex'),
                            name: 'yaindex',
                            hiddenName:'yaindex',
                            id: config.id + '-yaindex',
                            anchor: '99%',
                            allowBlank: true,
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: _('seopanel_sites_gooindex'),
                            name: 'gooindex',
                            hiddenName:'gooindex',
                            id: config.id + '-gooindex',
                            anchor: '99%',
                            allowBlank: true,
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: _('seopanel_sites_liveinternet'),
                            name: 'liveinternet',
                            hiddenName:'liveinternet',
                            id: config.id + '-liveinternet',
                            anchor: '99%',
                            allowBlank: true,
                        },
                        {
                            xtype: 'xcheckbox',
                            boxLabel: _('seopanel_sites_active'),
                            name: 'active',
                            id: config.id + '-active',
                            checked: true,
                        },
                    ]
                },
                {
                    columnWidth: .5,
                    layout: 'form',
                    defaults: {msgTarget: 'under'},
                    border: false,
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: _('seopanel_sites_domainend'),
                            name: 'domainend',
                            id: config.id + '-domainend',
                            anchor: '99%',
                            allowBlank: true,
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: _('seopanel_sites_pr'),
                            name: 'pr',
                            id: config.id + '-pr',
                            anchor: '99%',
                            allowBlank: true,
                        },
                        {
                            xtype: 'modx-combo-boolean',
                            fieldLabel: _('seopanel_sites_dmoz'),
                            name: 'dmoz',
                            hiddenName:'dmoz',
                            id: config.id + '-dmoz',
                            anchor: '99%',
                            allowBlank: true,
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: _('seopanel_sites_yaindex_up'),
                            name: 'yaindex_up',
                            hiddenName:'yaindex_up',
                            id: config.id + '-yaindex_up',
                            anchor: '99%',
                            allowBlank: true,
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: _('seopanel_sites_gooindex_up'),
                            name: 'gooindex_up',
                            hiddenName:'gooindex_up',
                            id: config.id + '-gooindex_up',
                            anchor: '99%',
                            allowBlank: true,
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: _('seopanel_sites_sorting_id'),
                            name: 'sorting_id',
                            hiddenName:'sorting_id',
                            id: config.id + '-sorting_id',
                            anchor: '99%',
                            allowBlank: true,
                        },
                    ]
                }
            ]
        }
            ];
	}

});
Ext.reg('seopanel-sites-window-create', seoPanel.window.CreateSites);


seoPanel.window.UpdateSites = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'seopanel-sites-window-update';
	}
	Ext.applyIf(config, {
		title: _('seopanel_sites_update'),
		width: 550,
		autoHeight: true,
		url: seoPanel.config.connector_url,
		action: 'mgr/sites/update',
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
            layout: 'column',
            border: false,
            anchor: '99%',
            items: [
                {
                    columnWidth: .5,
                    layout: 'form',
                    defaults: {msgTarget: 'under'},
                    border: false,
                    items: [
                        {
                            xtype: 'hidden',
                            name: 'id',
                            id: config.id + '-id',
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: _('seopanel_sites_domain'),
                            name: 'domain',
                            id: config.id + '-domain',
                            anchor: '99%',
                            allowBlank: false,
                        }, {
                            xtype: 'textfield',
                            fieldLabel: _('seopanel_sites_tic'),
                            name: 'tic',
                            id: config.id + '-tic',
                            anchor: '99%',
                            allowBlank: true,
                        },
                        {
                            xtype: 'modx-combo-boolean',
                            fieldLabel: _('seopanel_sites_yaca'),
                            name: 'yaca',
                            hiddenName:'yaca',
                            id: config.id + '-yaca',
                            anchor: '99%',
                            allowBlank: true,
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: _('seopanel_sites_yaindex'),
                            name: 'yaindex',
                            hiddenName:'yaindex',
                            id: config.id + '-yaindex',
                            anchor: '99%',
                            allowBlank: true,
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: _('seopanel_sites_gooindex'),
                            name: 'gooindex',
                            hiddenName:'gooindex',
                            id: config.id + '-gooindex',
                            anchor: '99%',
                            allowBlank: true,
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: _('seopanel_sites_liveinternet'),
                            name: 'liveinternet',
                            hiddenName:'liveinternet',
                            id: config.id + '-liveinternet',
                            anchor: '99%',
                            allowBlank: true,
                        },
                        {
                            xtype: 'xcheckbox',
                            boxLabel: _('seopanel_sites_active'),
                            name: 'active',
                            id: config.id + '-active',
                            checked: true,
                        },
                    ]
                },
                {
                    columnWidth: .5,
                    layout: 'form',
                    defaults: {msgTarget: 'under'},
                    border: false,
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: _('seopanel_sites_domainend'),
                            name: 'domainend',
                            id: config.id + '-domainend',
                            anchor: '99%',
                            allowBlank: true,
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: _('seopanel_sites_pr'),
                            name: 'pr',
                            id: config.id + '-pr',
                            anchor: '99%',
                            allowBlank: true,
                        },
                        {
                            xtype: 'modx-combo-boolean',
                            fieldLabel: _('seopanel_sites_dmoz'),
                            name: 'dmoz',
                            hiddenName:'dmoz',
                            id: config.id + '-dmoz',
                            anchor: '99%',
                            allowBlank: true,
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: _('seopanel_sites_yaindex_up'),
                            name: 'yaindex_up',
                            hiddenName:'yaindex_up',
                            id: config.id + '-yaindex_up',
                            anchor: '99%',
                            allowBlank: true,
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: _('seopanel_sites_gooindex_up'),
                            name: 'gooindex_up',
                            hiddenName:'gooindex_up',
                            id: config.id + '-gooindex_up',
                            anchor: '99%',
                            allowBlank: true,
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: _('seopanel_sites_sorting_id'),
                            name: 'sorting_id',
                            hiddenName:'sorting_id',
                            id: config.id + '-sorting_id',
                            anchor: '99%',
                            allowBlank: true,
                        },
                    ]
                }
            ]
        }
        ];
	}

});
Ext.reg('seopanel-sites-window-update', seoPanel.window.UpdateSites);