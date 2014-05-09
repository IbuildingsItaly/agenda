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
            '<div>',
                '<p>{name} {surname}</p>',
                '<p>Address: {address}</p>',
                '<p>Email: {email}</p>',
                '<p>Website: {website}</p>',
            '</div>'
        ].join('')
    }
});