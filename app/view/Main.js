Ext.define("Med-Table.view.Main", {
    extend: 'Ext.tab.Panel',
    xtype:'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],

    config: {
        tabBarPosition: 'top',
        tabBar: {
            layout: {
                pack: 'center'
            }
        },

        items: [{
                xtype:'instructions'
            },
            {
                xtype:'home'
            },
            {
                xtype:'menu'
            },
            {
                xtype:'calendardisplay'
            },
            {
                xtype:'schedule'
            }
        ]
    }
});