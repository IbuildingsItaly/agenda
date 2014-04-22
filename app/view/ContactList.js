Ext.define('Agenda.view.ContactList', {
    extend: 'Ext.dataview.List',
    xtype: 'contactList',
    config: {
        flex: 1,
        data: [{name: 'Asder', surname: 'Loller', address: 'Via tal dei tali', email: 'asd@lol.com', website: 'www.loller.com'}]
    },

    itemTpl: [
        '<div>',
            '<p>{name} {surname}</p>',
            '<p>Address: {address}</p>',
            '<p>Email: {email}</p>',
            '<p>Website: {website}</p>',
        '</div>'
    ].join('')
});