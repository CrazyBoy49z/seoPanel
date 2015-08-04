seoPanel.page.Home = function (config) {
	config = config || {};
	Ext.applyIf(config, {
		components: [{
			xtype: 'seopanel-panel-home', renderTo: 'seopanel-panel-home-div'
		}]
	});
	seoPanel.page.Home.superclass.constructor.call(this, config);
};
Ext.extend(seoPanel.page.Home, MODx.Component);
Ext.reg('seopanel-page-home', seoPanel.page.Home);