/**
 * Contact list controller
 */
Ext.define('Agenda.controller.ContactList', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            contactList: 'contactList',
            mainPanel: 'main',
            contactForm: 'contactform',
            buttonContainer: 'container[name=buttonContainer]',
            insertContactBtn: 'button[name=insertContact]',
            previewField: 'image[name=preview]'
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

    /**
     * Load a selected user from the contact list to the contact form
     * @param contactList The contact list
     * @param index The contact index in the contact list
     * @param el The Ext.Element
     * @param record The contact model instance
     */
    prepareUser: function (contactList, index, el, record) {
        var me = this;

        me.getContactForm().setRecord(record);
        me.getPreviewField().setSrc(record.get('avatar'));
        me.getButtonContainer().show();
        me.getInsertContactBtn().hide();
        me.getMainPanel().setActiveItem(1);
    },

    /**
     * Reset contact form
     */
    resetContactForm: function () {
        var me = this;

        if (me.getMainPanel().getActiveItem().getId() !== 'agenda') {
            me.getPreviewField().setSrc('./resources/images/pic.png');
            me.getContactForm().reset();
            me.getButtonContainer().hide();
            me.getInsertContactBtn().show();
        }
    }
});