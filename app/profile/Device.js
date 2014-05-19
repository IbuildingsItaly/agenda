Ext.define('Agenda.profile.Device', {
    extend: 'Ext.app.Profile',

    DEVICE_SENDER_ID: 'GCM_PROJECT_NUMBER',

    isActive: function () {
        return Ext.os.is.Tablet || Ext.os.is.Phone;
    },

    onRegisterSuccess: function (token) {
        Ext.Msg.alert('TOKEN', token);
    },
    onRegisterFailure: function (error) {
        Ext.Msg.alert('ERROR', error);
    },
    onNotificationsReceived: function (notifications) {
        switch (notifications.event) {
            case 'registered':
                if(notifications.regid.length > 0) {
                    //Ext.Msg.alert('NOTIFICATION :: REGISTERED', notifications.regid);
                }
                break;
            case 'message':
                var store = Ext.getStore('contactList');

                store.add(notifications.payload.user);
                break;
            case 'error':
                Ext.Msg.alert('NOTIFICATION :: ERROR', notifications.msg);
                break;
            default:
                Ext.Msg.alert('NOTIFICATION', 'Undefined notification');
                break;
        }
    },

    launch: function () {
        var me = this;

        Ext.device.Push.register({
            type: Ext.device.Push.ALERT | Ext.device.Push.BADGE | Ext.device.Push.SOUND,
            senderID: me.DEVICE_SENDER_ID,
            success: me.onRegisterSuccess,
            failure: me.onRegisterFailure,
            received: me.onNotificationsReceived
        });
    }
});