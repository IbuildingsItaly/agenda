Ext.define('Agenda.controller.ContactList', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            contactList: 'contactList',
            mainPanel: 'main',
            contactForm: 'contactform',
            buttonContainer: 'container[name=buttonContainer]',
            insertContactBtn: 'button[name=insertContact]'
        },
        control: {
            contactList: {
                itemtap: 'prepareUser'
            },
            mainPanel: {
                activeitemchange: 'resetContactForm'
            }
        }
    },

    prepareUser: function (contactList, index, el, record) {
        var me = this;

        me.getContactForm().setRecord(record);
        me.getButtonContainer().show();
        me.getInsertContactBtn().hide();
        me.getMainPanel().setActiveItem(1);
    },

    resetContactForm: function () {
        var me = this;

        if (me.getMainPanel().getActiveItem().getId() !== 'agenda') {
            me.getContactForm().reset();
            me.getButtonContainer().hide();
            me.getInsertContactBtn().show();
        }
    }
});