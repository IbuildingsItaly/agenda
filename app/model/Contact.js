/**
 * Model of a single contact
 */
Ext.define('Agenda.model.Contact', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            name: 'avatar',
            type: 'string',
            defaultValue: './resources/images/pic.png'
        } , {
            name: 'name',
            type: 'string'
        } , {
            name: 'surname',
            type: 'string'
        } , {
            name: 'address',
            type: 'string'
        } , {
            name: 'email',
            type: 'string'
        } , {
            name: 'tel',
            type: 'string'
        } , {
            name: 'website',
            type: 'string'
        }]
    }
});