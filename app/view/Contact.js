Ext.define('Agenda.view.Contact', {
    extend: 'Ext.form.Panel',
    xtype: 'contact',
    requires: ['Ext.field.Email'],

    config: {
        flex: 1,
        items: [{
            xtype: 'textfield',
            name: 'name',
            label: 'Name'
        } , {
            xtype: 'textfield',
            name: 'surname',
            label: 'Surname'
        } , {
            xtype: 'textfield',
            name: 'address',
            label: 'Address'
        } , {
            xtype: 'emailfield',
            name: 'email',
            label: 'Email'
        } , {
            xtype: 'textfield',
            name: 'website',
            label: 'WebSite'
        }]
    }
});