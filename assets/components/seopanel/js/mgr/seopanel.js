var seoPanel = function (config) {
	config = config || {};
	seoPanel.superclass.constructor.call(this, config);
};
Ext.extend(seoPanel, Ext.Component, {
	page: {}, window: {}, grid: {}, tree: {}, panel: {}, combo: {}, config: {}, view: {}, utils: {}
});
Ext.reg('seopanel', seoPanel);

seoPanel = new seoPanel();