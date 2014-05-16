/**
 * Contact list
 */
Ext.define('Agenda.view.ContactList', {
    extend: 'Ext.dataview.List',
    xtype: 'contactList',
    config: {
        flex: 1,
        emptyText: 'No contacts available',
        deferEmptyText: false,
        store: 'contactList',
        itemTpl: [
            '<div style="display: inline-block;">',
                '<img src="{avatar}" width="200" height="200" style="margin: 0 10px;"/>',
                '<div style="display: inline-block; vertical-align: top">',
                    '<p>{name} {surname}</p>',
                    '<p>Address: {address}</p>',
                    '<p>Email: {email}</p>',
                    '<p>Website: {website}</p>',
                '</div>',
            '</div>'
        ].join('')
    }
});