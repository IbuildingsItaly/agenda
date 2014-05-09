/**
 * Main page
 */
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
            id: 'agenda',
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
            title: 'Contact',
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
                xtype: 'contactform'
            }]
        }]
    }
});
