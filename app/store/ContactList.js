Ext.define('Agenda.store.ContactList', {
    extend: 'Ext.data.Store',
    config: {
        storeId: 'contactList',
        model: 'Agenda.model.Contact',
        autoLoad: true,
        autoSync: true
    }
});