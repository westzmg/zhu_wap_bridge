export default {
    context: {
        title: 'Unnamed Page',
    },

    history: 'hash',
    disableCSSModules: true,
    plugins: [
        [
            'umi-plugin-react',
            {
                dva:  {
                    immer: true,
                },
                hd:false,
            },
            'dva-logger',
        ]
    ],
    publicPath: './',
    routes: [
        { path: '/', component: '../pages', },
        { path: '/takePicture', component: '../pages/takePicture' },
        { path: '/recordVideo', component: '../pages/recordVideo' },
        { path: '/barcode', component: '../pages/barcode' },
        { path: '/openWindow', component: '../pages/openWindow' },
        { path: '/getPosition', component: '../pages/getPosition' },
        { path: '/launchCQDigitalSign', component: '../pages/launchCQDigitalSign' },
        { path: '/launchFingerSign', component: '../pages/launchFingerSign' },
        { path: '/launchShare', component: '../pages/launchShare' },
        { path: '/getToken', component: '../pages/getToken' },
    ]
}
