Ext.define('Agenda.model.Contact', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
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
        }],
        proxy: {
            type: 'localstorage',
            id: 'agenda'
        }
    }
});