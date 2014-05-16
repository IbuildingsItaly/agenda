/**
 * Controller of the Contact form
 */
Ext.define('Agenda.controller.Contact', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainPanel: 'main',
            contactForm: 'contactform',
            insertContactBtn: 'button[name=insertContact]',
            deleteContactBtn: 'button[name=deleteContact]',
            updateContactBtn: 'button[name=updateContact]',
            buttonContainer: 'container[name=buttonContainer]',
            takePicBtn: 'button[name=takePic]',
            imagePic: 'image[name=pic]',
            avatarField: 'hiddenfield[name=avatar]',
            previewField: 'image[name=preview]'
        },
        control: {
            insertContactBtn: {
                tap: 'addContact'
            },
            deleteContactBtn: {
                tap: 'deleteContact'
            },
            updateContactBtn: {
                tap: 'updateContact'
            },
            takePicBtn: {
                tap: 'takePicture'
            }
        }
    },

    /**
     * Take a picture from device camera
     */
    takePicture: function () {
        var me = this;

        Ext.device.Camera.capture({
            success: function (image) {
                me.getPreviewField().setSrc(image);
                me.getAvatarField().setValue(image);
            },
            failure: function (error) {
                Ext.Msg.alert('Error', error);
            },
            quality: 100,
            width: 200,
            height: 200,
            destination: 'file'
        });
    },

    /**
     * Add a new contact to the contact list
     */
    addContact: function () {
        var me = this,
            form = me.getContactForm(),
            store = Ext.getStore('contactList');

        store.add(form.getValues());

        me._resetContactForm();
    },

    /**
     * Remove an existing contact form the list
     */
    deleteContact: function () {
        var me = this;

        Ext.Msg.confirm('Confirm', 'Are you sure to delete this contact?', function (buttonId) {
                if (buttonId === 'yes') {
                    var form = me.getContactForm();

                    Ext.getStore('contactList').remove(form.getRecord());
                    me._resetContactForm();
                }
            }
        );
    },

    /**
     * Update an existing contact
     */
    updateContact: function () {
        var me = this,
            form = me.getContactForm(),
            values = form.getValues(),
            store = Ext.getStore('contactList'),
            record = store.getById(form.getRecord().getId());

        record.set(values);

        me._resetContactForm();
    },

    /**
     * Reset the form to the default state
     * @private
     */
    _resetContactForm: function () {
        var me = this;

        me.getMainPanel().setActiveItem(0);
        me.getContactForm().reset();
        me.getPreviewField().setSrc('./resources/images/pic.png');
        me.getButtonContainer().hide();
        me.getInsertContactBtn().show();
    }
});