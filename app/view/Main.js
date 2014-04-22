Ext.define('Agenda.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Agenda.view.ContactList',
        'Agenda.view.Contact'
    ],

    config: {
        tabBarPosition: 'bottom',

        items: [{
            title: 'Agenda',
            iconCls: 'home',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },

            items: [{
                xtype: 'titlebar',
                docked: 'top',
                title: 'Contact List'
            } , {
                xtype: 'contactList'
            }]
        } , {
            title: 'Add Contact',
            iconCls: 'action',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },

            items: [{
                docked: 'top',
                xtype: 'titlebar',
                title: 'Contact'
            } , {
                xtype: 'contact'
            } , {
                xtype: 'button',
                text: 'Add Contact'
            }]
        }]
    }
});
