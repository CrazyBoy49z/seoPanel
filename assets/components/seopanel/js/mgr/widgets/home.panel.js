seoPanel.panel.Home = function (config) {
	config = config || {};
	Ext.apply(config, {
		baseCls: 'modx-formpanel',
		layout: 'anchor',
		/*
		 stateful: true,
		 stateId: 'seopanel-panel-home',
		 stateEvents: ['tabchange'],
		 getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
		 */
		hideMode: 'offsets',
		items: [{
			html: '<h2>' + _('seopanel') + '</h2>',
			cls: '',
			style: {margin: '15px 0'}
		}, {
			xtype: 'modx-tabs',
			defaults: {border: false, autoHeight: true},
			border: true,
			hideMode: 'offsets',
			items: [{
				title: _('seopanel_items'),
				layout: 'anchor',
				items: [{
					html: _('seopanel_intro_msg'),
					cls: 'panel-desc',
				}, {
					xtype: 'seopanel-grid-items',
					cls: 'main-wrapper',
				}]
			}]
		}]
	});
	seoPanel.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(seoPanel.panel.Home, MODx.Panel);
Ext.reg('seopanel-panel-home', seoPanel.panel.Home);
