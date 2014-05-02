Ext.define('Agenda.store.ContactList', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.LocalStorage'],
    config: {
        storeId: 'contactList',
        model: 'Agenda.model.Contact',
        autoLoad: true,
        autoSync: true,
        proxy: {
            type: 'localstorage',
            id: 'agenda'
        }
    }
});