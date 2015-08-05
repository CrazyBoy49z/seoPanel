seoPanel.grid.seoPanelSites = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'seopanel-grid-sites';
    }
    Ext.applyIf(config, {
        url: seoPanel.config.connector_url,
        fields: this.getFields(config),
        columns: this.getColumns(config),
        tbar: this.getTopBar(config),
        sm: new Ext.grid.CheckboxSelectionModel(),
        save_action: 'mgr/sites/update',
        autosave: true,
        baseParams: {
            action: 'mgr/sites/getlist'
        },
        listeners: {
//			rowDblClick: function (grid, rowIndex, e) {
//				var row = grid.store.getAt(rowIndex);
//				this.updateHost(grid, e, row);
//			}
        },
        viewConfig: {
            forceFit: true,
            enableRowBody: true,
            autoFill: true,
            showPreview: true,
            scrollOffset: 0,
            getRowClass: function (rec, ri, p) {
                return !rec.data.active
                    ? 'seopanel-sites-row-disabled'
                    : '';
            }
        },
        paging: true,
        remoteSort: true,
        autoHeight: true
    });
    seoPanel.grid.seoPanelSites.superclass.constructor.call(this, config);

    // Clear selection on grid refresh
    this.store.on('load', function () {
        if (this._getSelectedIds().length) {
            this.getSelectionModel().clearSelections();
        }
    }, this);
};
Ext.extend(seoPanel.grid.seoPanelSites, MODx.grid.Grid, {
    windows: {},

    getMenu: function (grid, rowIndex) {
        var ids = this._getSelectedIds();

        var row = grid.getStore().getAt(rowIndex);
        var menu = seoPanel.utils.getMenu(row.data['actions'], this, ids);

        this.addContextMenuItem(menu);
    },

    createSites: function (btn, e) {
        var w = MODx.load({
            xtype: 'seopanel-sites-window-create',
            id: Ext.id(),
            listeners: {
                success: {
                    fn: function () {
                        this.refresh();
                    }, scope: this
                }
            }
        });
        w.reset();
        w.setValues({active: true});
        w.show(e.target);
    },

    updateSites: function (btn, e, row) {
        if (typeof(row) != 'undefined') {
            this.menu.record = row.data;
        }
        else if (!this.menu.record) {
            return false;
        }
        var id = this.menu.record.id;

        MODx.Ajax.request({
            url: this.config.url,
            params: {
                action: 'mgr/sites/get',
                id: id
            },
            listeners: {
                success: {
                    fn: function (r) {
                        var w = MODx.load({
                            xtype: 'seopanel-sites-window-update',
                            id: Ext.id(),
                            record: r,
                            listeners: {
                                success: {
                                    fn: function () {
                                        this.refresh();
                                    }, scope: this
                                }
                            }
                        });
                        w.reset();
                        w.setValues(r.object);
                        w.show(e.target);
                    }, scope: this
                }
            }
        });
    },

    removeSites: function (act, btn, e) {
        var ids = this._getSelectedIds();
        if (!ids.length) {
            return false;
        }
        MODx.msg.confirm({
            title: ids.length > 1
                ? _('seopanel_sites_remove')
                : _('seopanel_site_remove'),
            text: ids.length > 1
                ? _('seopanel_sites_remove_confirm')
                : _('seopanel_site_remove_confirm'),
            url: this.config.url,
            params: {
                action: 'mgr/sites/remove',
                ids: Ext.util.JSON.encode(ids),
            },
            listeners: {
                success: {
                    fn: function (r) {
                        this.refresh();
                    }, scope: this
                }
            }
        });
        return true;
    },

    disableSites: function (act, btn, e) {
        var ids = this._getSelectedIds();
        if (!ids.length) {
            return false;
        }
        MODx.Ajax.request({
            url: this.config.url,
            params: {
                action: 'mgr/sites/disable',
                ids: Ext.util.JSON.encode(ids)
            },
            listeners: {
                success: {
                    fn: function () {
                        this.refresh();
                    }, scope: this
                }
            }
        })
    },

    enableSites: function (act, btn, e) {
        var ids = this._getSelectedIds();
        if (!ids.length) {
            return false;
        }
        MODx.Ajax.request({
            url: this.config.url,
            params: {
                action: 'mgr/sites/enable',
                ids: Ext.util.JSON.encode(ids),
            },
            listeners: {
                success: {
                    fn: function () {
                        this.refresh();
                    }, scope: this
                }
            }
        })
    },

    getFields: function (config) {
        return ['id', 'domain', 'tic', 'pr', 'yaca', 'dmoz', 'yaindex', 'yaindex_up', 'gooindex', 'gooindex_up', 'liveinternet', 'domainend', 'update', 'sorting_id', 'active', 'actions'];
    },

    getColumns: function (config) {
        return [{
            header: _('seopanel_sites_id'),
            dataIndex: 'id',
            sortable: true,
            width: 50
        }, {
            header: _('seopanel_sites_domain'),
            dataIndex: 'domain',
            sortable: true,
            width: 200,
        }, {
            header: _('seopanel_sites_tic'),
            dataIndex: 'tic',
            sortable: true,
            width: 70,
        }, {
            header: _('seopanel_sites_pr'),
            dataIndex: 'pr',
            sortable: true,
            width: 70,
        }, {
            header: _('seopanel_sites_yaca'),
            dataIndex: 'yaca',
            sortable: true,
            width: 70,
            renderer: this.renderBoolean
        }, {
            header: _('seopanel_sites_dmoz'),
            dataIndex: 'dmoz',
            sortable: true,
            width: 70,
            renderer: this.renderBoolean
        }, {
            header: _('seopanel_sites_yaindex'),
            dataIndex: 'yaindex',
            sortable: true,
            width: 70,
        }, {
            header: _('seopanel_sites_yaindex_up'),
            dataIndex: 'yaindex_up',
            sortable: true,
            width: 70,
        }, {
            header: _('seopanel_sites_gooindex'),
            dataIndex: 'gooindex',
            sortable: true,
            width: 70,
        }, {
            header: _('seopanel_sites_gooindex_up'),
            dataIndex: 'gooindex_up',
            sortable: true,
            width: 70,
        }, {
            header: _('seopanel_sites_liveinternet'),
            dataIndex: 'liveinternet',
            sortable: true,
            width: 70,
        }, {
            header: _('seopanel_sites_domainend'),
            dataIndex: 'domainend',
            sortable: true,
            width: 70,
        }, {
            header: _('seopanel_sites_update'),
            dataIndex: 'update',
            sortable: true,
            width: 70,
        }, {
            header: _('seopanel_sites_sorting_id'),
            dataIndex: 'sorting_id',
            sortable: true,
            width: 70,
        }, {
            header: _('seopanel_sites_active'),
            dataIndex: 'active',
            renderer: seoPanel.utils.renderBoolean,
            sortable: true,
            width: 100,
        }, {
            header: _('seopanel_grid_actions'),
            dataIndex: 'actions',
            renderer: seoPanel.utils.renderActions,
            sortable: false,
            width: 100,
            id: 'actions'
        }];
    },

    getTopBar: function (config) {
        return [{
            text: '<i class="icon icon-plus">&nbsp;' + _('seopanel_site_create'),
            handler: this.createSites,
            scope: this
        }, '->', {
            xtype: 'textfield',
            name: 'query',
            width: 200,
            id: config.id + '-search-field',
            emptyText: _('seopanel_grid_search'),
            listeners: {
                render: {
                    fn: function (tf) {
                        tf.getEl().addKeyListener(Ext.EventObject.ENTER, function () {
                            this._doSearch(tf);
                        }, this);
                    }, scope: this
                }
            }
        }, {
            xtype: 'button',
            id: config.id + '-search-clear',
            text: '<i class="icon icon-times"></i>',
            listeners: {
                click: {fn: this._clearSearch, scope: this}
            }
        }];
    },

    onClick: function (e) {
        var elem = e.getTarget();
        if (elem.nodeName == 'BUTTON') {
            var row = this.getSelectionModel().getSelected();
            if (typeof(row) != 'undefined') {
                var action = elem.getAttribute('action');
                if (action == 'showMenu') {
                    var ri = this.getStore().find('id', row.id);
                    return this._showMenu(this, ri, e);
                }
                else if (typeof this[action] === 'function') {
                    this.menu.record = row.data;
                    return this[action](this, e);
                }
            }
        }
        return this.processEvent('click', e);
    },

    _getSelectedIds: function () {
        var ids = [];
        var selected = this.getSelectionModel().getSelections();

        for (var i in selected) {
            if (!selected.hasOwnProperty(i)) {
                continue;
            }
            ids.push(selected[i]['id']);
        }

        return ids;
    },

    _doSearch: function (tf, nv, ov) {
        this.getStore().baseParams.query = tf.getValue();
        this.getBottomToolbar().changePage(1);
        this.refresh();
    },

    _clearSearch: function (btn, e) {
        this.getStore().baseParams.query = '';
        Ext.getCmp(this.config.id + '-search-field').setValue('');
        this.getBottomToolbar().changePage(1);
        this.refresh();
    }
    ,renderBoolean: function(val,cell,row) {
        return val == '' || val == 0
            ? '<span style="color:red">' + _('no') + '<span>'
            : '<span style="color:green">' + _('yes') + '<span>';
    }
});
Ext.reg('seopanel-grid-sites', seoPanel.grid.seoPanelSites);