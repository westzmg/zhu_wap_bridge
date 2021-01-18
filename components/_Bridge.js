import invoke from 'react-native-webview-invoke/browser'

/*
* 检测是否app环境
* @name isNative
* @return true app环境,false 非app环境
*/
export const isNative = () => {
	if(!window) return false;
	const userAgent = window.navigator.userAgent;
	if(userAgent.indexOf('QB/NATIVE')>-1) return true;
	if(userAgent.toLocaleLowerCase().indexOf('native')) return true;
	return false;
};

/*
* 拍摄照片
* @name takePicture
* @详情参考 https://github.com/react-native-image-picker/react-native-image-picker
* @params opt{
* 	mediaType: 'photo' or 'video'
* 	maxWidth: To resize the image
* 	maxHeight: To resize the image
* 	videoQuality: 'low', 'medium', or 'high' on iOS, 'low' or 'high' on Android
* 	durationLimit: Video max duration in seconds
* 	quality: 0 to 1, photos
* 	includeBase64: If true, creates base64 string of the image (Avoid using on large image files due to performance)
* 	saveToPhotos: (Boolean) Only for launchCamera, saves the image/video file captured to public photo
* }
* @return {
* 	didCancel: true if the user cancelled the process
* 	errorCode: camera_unavailable/permission/others
* 	errorMessage: Description of the error, use it for debug purpose only
* 	base64: The base64 string of the image (photos only)
* 	uri: The uri to the local file on the device (uri might change for same file for different session so don't save it)
* 	width: Image dimensions (photos only)
* 	height: Image dimensions (photos only)
* 	fileSize: The file size (photos only)
* 	type: The file type (photos only)
* 	fileName: The file name
* }
*/
export const takePhoto = async (opt) => {
	return new Promise(async (resolve) => {
		invoke.define('takePhoto', async (data) => {resolve(data)});
		invoke.define('takePhotoCompleted', async (result) => {resolve(result)});
		await invoke.bind("takePhoto")(opt)
	})
};

export const recordVideo = async (opt) => {
	return new Promise(async (resolve) => {
		invoke.define('recordVideo', async (data) => {resolve(data)});
		invoke.define('recordVideoCompleted', async (result) => {resolve(result)});
		await invoke.bind("recordVideo")(opt)
	})
};

/*
* 扫描二维码
* @name barCodeScan
* @return
*/
export const barCodeScan = async (opt) => {
	return new Promise(async (resolve) => {
		invoke.define('barCodeScan', async (data) => {resolve(data)});
		invoke.define('barCodeScanCompleted', async (result) => {resolve(result)});
		await invoke.bind("barCodeScan")(opt)
	})
};

/*
* 打开新的WebView
* @name openWindow
* @return
*/
export const openWindow = async (opt) => {
	return new Promise(async (resolve) => {
		invoke.define('openWindow', async (data) => {resolve(data)});
		await invoke.bind("openWindow")(opt)
	})
};

/*
* 关闭当前的WebView
* @name closeWindow
* @return
*/
export const closeWindow = async (opt) => {
	return new Promise(async (resolve) => {
		invoke.define('closeWindow', async (data) => {resolve(data)});
		await invoke.bind("closeWindow")(opt)
	})
};

/*
* 获取坐标信息
* @name getPosition
* @return
*/
export const getPosition = async (opt) => {
	return new Promise(async (resolve) => {
		invoke.define('getPosition', async (data) => {resolve(data)});
		invoke.define('getPositionCompleted', async (result) => {resolve(result)});
		await invoke.bind("getPosition")(opt)
	})
};

/*
* 使用重庆电子签章
* @name launchCQDigitalSign
* @return
*/
export const launchCQDigitalSign = async (opt) => {
	return new Promise(async (resolve) => {
		invoke.define('launchCQDigitalSign', async (data) => {resolve(data)});
		invoke.define('launchCQDigitalSignCompleted', async (result) => {resolve(result)});
		await invoke.bind("launchCQDigitalSign")(opt)
	})
};

/*
* 使用手写板签名
* @name launchFingerSign
* @return
*/
export const launchFingerSign = async (opt) => {
	return new Promise(async (resolve) => {
		invoke.define('launchFingerSign', async (data) => {resolve(data)});
		invoke.define('launchFingerSignCompleted', async (result) => {resolve(result)});
		await invoke.bind("launchFingerSign")(opt)
	})
};

/*
* 社交应用分享
* @name launchShare
* @return
*/
export const launchShare = async (opt) => {
	return new Promise(async (resolve) => {
		invoke.define('launchShare', async (data) => {resolve(data)});
		invoke.define('launchShareCompleted', async (result) => {resolve(result)});
		await invoke.bind("launchShare")(opt)
	})
};

/*
* 获取token
* @name getToken
* @return
*/
export const getToken = async () => {
	return new Promise(async (resolve) => {
		invoke.define('getToken', async () => {resolve()});
		invoke.define('getTokenCompleted', async (result) => {resolve(result)});
		await invoke.bind("getToken")()
	})
};

export const EVENTS_TYPE = {
	keyboardWillShow: 'keyboardWillShow', // 键盘即将出现
	keyboardDidShow: 'keyboardDidShow', // 键盘已经出现
	keyboardDidHide: 'keyboardDidHide', // 键盘已经隐藏
	keyboardWillHide: 'keyboardWillHide', // 键盘即将隐藏
	appStateChange: 'appStateChange', // app前后台切换
	aliPushMessage: 'aliPushMessage', // 阿里云推送监听
};

export default {
	isNative,
	takePhoto,
	recordVideo,
	barCodeScan,
	openWindow,
	closeWindow,
	getPosition,
	launchCQDigitalSign,
	launchFingerSign,
	launchShare,
	getToken,
}


