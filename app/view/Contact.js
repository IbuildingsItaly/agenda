/**
 * Contact form
 */
Ext.define('Agenda.view.Contact', {
    extend: 'Ext.form.Panel',
    xtype: 'contactform',
    requires: ['Ext.field.Email', 'Ext.field.Hidden', 'Ext.Img'],

    config: {
        flex: 1,
        record: 'Agenda.model.Contact',
        items: [{
            xtype: 'button',
            name: 'takePic',
            flex: 1,
            text: 'Take a picture',
            ui: 'confirm-round',
            margin: '10 10 10 10'
        } , {
            xtype: 'hiddenfield',
            name: 'avatar',
            value: ''
        } , {
            xtype: 'image',
            name: 'preview',
            flex: 1,
            height: 200,
            src: './resources/images/pic.png'
        } , {
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
        } , {
            xtype: 'button',
            name: 'insertContact',
            flex: 1,
            text: 'Insert',
            ui: 'confirm-round',
            margin: '10 10 10 10'
        } , {
            xtype: 'container',
            name: 'buttonContainer',
            padding: '10 0 0 0',
            hidden: true,
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'button',
                name: 'deleteContact',
                margin: '0 10 0 10',
                flex: .5,
                ui: 'decline-round',
                text: 'Delete'
            } , {
                xtype: 'button',
                name: 'updateContact',
                margin: '0 10 0 0',
                ui: 'action-round',
                flex: .5,
                text: 'Update'
            }]
        }]
    }
});