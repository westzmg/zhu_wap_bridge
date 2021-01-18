import "core-js/modules/es6.function.bind";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import "core-js/modules/es6.promise";
import "core-js/modules/es6.object.to-string";
import "regenerator-runtime/runtime";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import "core-js/modules/es6.array.index-of";
import invoke from 'react-native-webview-invoke/browser';
/*
* 检测是否app环境
* @name isNative
* @return true app环境,false 非app环境
*/

export var isNative = function isNative() {
  if (!window) return false;
  var userAgent = window.navigator.userAgent;
  if (userAgent.indexOf('QB/NATIVE') > -1) return true;
  if (userAgent.toLocaleLowerCase().indexOf('native')) return true;
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

export var takePhoto = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(opt) {
    return _regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(resolve) {
                return _regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        invoke.define('takePhoto', /*#__PURE__*/function () {
                          var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(data) {
                            return _regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    resolve(data);

                                  case 1:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee);
                          }));

                          return function (_x3) {
                            return _ref3.apply(this, arguments);
                          };
                        }());
                        invoke.define('takePhotoCompleted', /*#__PURE__*/function () {
                          var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(result) {
                            return _regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    resolve(result);

                                  case 1:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2);
                          }));

                          return function (_x4) {
                            return _ref4.apply(this, arguments);
                          };
                        }());
                        _context3.next = 4;
                        return invoke.bind("takePhoto")(opt);

                      case 4:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }()));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function takePhoto(_x) {
    return _ref.apply(this, arguments);
  };
}();
export var recordVideo = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee8(opt) {
    return _regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7(resolve) {
                return _regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        invoke.define('recordVideo', /*#__PURE__*/function () {
                          var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(data) {
                            return _regeneratorRuntime.wrap(function _callee5$(_context5) {
                              while (1) {
                                switch (_context5.prev = _context5.next) {
                                  case 0:
                                    resolve(data);

                                  case 1:
                                  case "end":
                                    return _context5.stop();
                                }
                              }
                            }, _callee5);
                          }));

                          return function (_x7) {
                            return _ref7.apply(this, arguments);
                          };
                        }());
                        invoke.define('recordVideoCompleted', /*#__PURE__*/function () {
                          var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6(result) {
                            return _regeneratorRuntime.wrap(function _callee6$(_context6) {
                              while (1) {
                                switch (_context6.prev = _context6.next) {
                                  case 0:
                                    resolve(result);

                                  case 1:
                                  case "end":
                                    return _context6.stop();
                                }
                              }
                            }, _callee6);
                          }));

                          return function (_x8) {
                            return _ref8.apply(this, arguments);
                          };
                        }());
                        _context7.next = 4;
                        return invoke.bind("recordVideo")(opt);

                      case 4:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7);
              }));

              return function (_x6) {
                return _ref6.apply(this, arguments);
              };
            }()));

          case 1:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function recordVideo(_x5) {
    return _ref5.apply(this, arguments);
  };
}();
/*
* 扫描二维码
* @name barCodeScan
* @return
*/

export var barCodeScan = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee12(opt) {
    return _regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            return _context12.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee11(resolve) {
                return _regeneratorRuntime.wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        invoke.define('barCodeScan', /*#__PURE__*/function () {
                          var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee9(data) {
                            return _regeneratorRuntime.wrap(function _callee9$(_context9) {
                              while (1) {
                                switch (_context9.prev = _context9.next) {
                                  case 0:
                                    resolve(data);

                                  case 1:
                                  case "end":
                                    return _context9.stop();
                                }
                              }
                            }, _callee9);
                          }));

                          return function (_x11) {
                            return _ref11.apply(this, arguments);
                          };
                        }());
                        invoke.define('barCodeScanCompleted', /*#__PURE__*/function () {
                          var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee10(result) {
                            return _regeneratorRuntime.wrap(function _callee10$(_context10) {
                              while (1) {
                                switch (_context10.prev = _context10.next) {
                                  case 0:
                                    resolve(result);

                                  case 1:
                                  case "end":
                                    return _context10.stop();
                                }
                              }
                            }, _callee10);
                          }));

                          return function (_x12) {
                            return _ref12.apply(this, arguments);
                          };
                        }());
                        _context11.next = 4;
                        return invoke.bind("barCodeScan")(opt);

                      case 4:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11);
              }));

              return function (_x10) {
                return _ref10.apply(this, arguments);
              };
            }()));

          case 1:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function barCodeScan(_x9) {
    return _ref9.apply(this, arguments);
  };
}();
/*
* 打开新的WebView
* @name openWindow
* @return
*/

export var openWindow = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee15(opt) {
    return _regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            return _context15.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee14(resolve) {
                return _regeneratorRuntime.wrap(function _callee14$(_context14) {
                  while (1) {
                    switch (_context14.prev = _context14.next) {
                      case 0:
                        invoke.define('openWindow', /*#__PURE__*/function () {
                          var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee13(data) {
                            return _regeneratorRuntime.wrap(function _callee13$(_context13) {
                              while (1) {
                                switch (_context13.prev = _context13.next) {
                                  case 0:
                                    resolve(data);

                                  case 1:
                                  case "end":
                                    return _context13.stop();
                                }
                              }
                            }, _callee13);
                          }));

                          return function (_x15) {
                            return _ref15.apply(this, arguments);
                          };
                        }());
                        _context14.next = 3;
                        return invoke.bind("openWindow")(opt);

                      case 3:
                      case "end":
                        return _context14.stop();
                    }
                  }
                }, _callee14);
              }));

              return function (_x14) {
                return _ref14.apply(this, arguments);
              };
            }()));

          case 1:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));

  return function openWindow(_x13) {
    return _ref13.apply(this, arguments);
  };
}();
/*
* 关闭当前的WebView
* @name closeWindow
* @return
*/

export var closeWindow = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee18(opt) {
    return _regeneratorRuntime.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            return _context18.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee17(resolve) {
                return _regeneratorRuntime.wrap(function _callee17$(_context17) {
                  while (1) {
                    switch (_context17.prev = _context17.next) {
                      case 0:
                        invoke.define('closeWindow', /*#__PURE__*/function () {
                          var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee16(data) {
                            return _regeneratorRuntime.wrap(function _callee16$(_context16) {
                              while (1) {
                                switch (_context16.prev = _context16.next) {
                                  case 0:
                                    resolve(data);

                                  case 1:
                                  case "end":
                                    return _context16.stop();
                                }
                              }
                            }, _callee16);
                          }));

                          return function (_x18) {
                            return _ref18.apply(this, arguments);
                          };
                        }());
                        _context17.next = 3;
                        return invoke.bind("closeWindow")(opt);

                      case 3:
                      case "end":
                        return _context17.stop();
                    }
                  }
                }, _callee17);
              }));

              return function (_x17) {
                return _ref17.apply(this, arguments);
              };
            }()));

          case 1:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18);
  }));

  return function closeWindow(_x16) {
    return _ref16.apply(this, arguments);
  };
}();
/*
* 获取坐标信息
* @name getPosition
* @return
*/

export var getPosition = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee22(opt) {
    return _regeneratorRuntime.wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            return _context22.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee21(resolve) {
                return _regeneratorRuntime.wrap(function _callee21$(_context21) {
                  while (1) {
                    switch (_context21.prev = _context21.next) {
                      case 0:
                        invoke.define('getPosition', /*#__PURE__*/function () {
                          var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee19(data) {
                            return _regeneratorRuntime.wrap(function _callee19$(_context19) {
                              while (1) {
                                switch (_context19.prev = _context19.next) {
                                  case 0:
                                    resolve(data);

                                  case 1:
                                  case "end":
                                    return _context19.stop();
                                }
                              }
                            }, _callee19);
                          }));

                          return function (_x21) {
                            return _ref21.apply(this, arguments);
                          };
                        }());
                        invoke.define('getPositionCompleted', /*#__PURE__*/function () {
                          var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee20(result) {
                            return _regeneratorRuntime.wrap(function _callee20$(_context20) {
                              while (1) {
                                switch (_context20.prev = _context20.next) {
                                  case 0:
                                    resolve(result);

                                  case 1:
                                  case "end":
                                    return _context20.stop();
                                }
                              }
                            }, _callee20);
                          }));

                          return function (_x22) {
                            return _ref22.apply(this, arguments);
                          };
                        }());
                        _context21.next = 4;
                        return invoke.bind("getPosition")(opt);

                      case 4:
                      case "end":
                        return _context21.stop();
                    }
                  }
                }, _callee21);
              }));

              return function (_x20) {
                return _ref20.apply(this, arguments);
              };
            }()));

          case 1:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22);
  }));

  return function getPosition(_x19) {
    return _ref19.apply(this, arguments);
  };
}();
/*
* 使用重庆电子签章
* @name launchCQDigitalSign
* @return
*/

export var launchCQDigitalSign = /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee26(opt) {
    return _regeneratorRuntime.wrap(function _callee26$(_context26) {
      while (1) {
        switch (_context26.prev = _context26.next) {
          case 0:
            return _context26.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee25(resolve) {
                return _regeneratorRuntime.wrap(function _callee25$(_context25) {
                  while (1) {
                    switch (_context25.prev = _context25.next) {
                      case 0:
                        invoke.define('launchCQDigitalSign', /*#__PURE__*/function () {
                          var _ref25 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee23(data) {
                            return _regeneratorRuntime.wrap(function _callee23$(_context23) {
                              while (1) {
                                switch (_context23.prev = _context23.next) {
                                  case 0:
                                    resolve(data);

                                  case 1:
                                  case "end":
                                    return _context23.stop();
                                }
                              }
                            }, _callee23);
                          }));

                          return function (_x25) {
                            return _ref25.apply(this, arguments);
                          };
                        }());
                        invoke.define('launchCQDigitalSignCompleted', /*#__PURE__*/function () {
                          var _ref26 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee24(result) {
                            return _regeneratorRuntime.wrap(function _callee24$(_context24) {
                              while (1) {
                                switch (_context24.prev = _context24.next) {
                                  case 0:
                                    resolve(result);

                                  case 1:
                                  case "end":
                                    return _context24.stop();
                                }
                              }
                            }, _callee24);
                          }));

                          return function (_x26) {
                            return _ref26.apply(this, arguments);
                          };
                        }());
                        _context25.next = 4;
                        return invoke.bind("launchCQDigitalSign")(opt);

                      case 4:
                      case "end":
                        return _context25.stop();
                    }
                  }
                }, _callee25);
              }));

              return function (_x24) {
                return _ref24.apply(this, arguments);
              };
            }()));

          case 1:
          case "end":
            return _context26.stop();
        }
      }
    }, _callee26);
  }));

  return function launchCQDigitalSign(_x23) {
    return _ref23.apply(this, arguments);
  };
}();
/*
* 使用手写板签名
* @name launchFingerSign
* @return
*/

export var launchFingerSign = /*#__PURE__*/function () {
  var _ref27 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee30(opt) {
    return _regeneratorRuntime.wrap(function _callee30$(_context30) {
      while (1) {
        switch (_context30.prev = _context30.next) {
          case 0:
            return _context30.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref28 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee29(resolve) {
                return _regeneratorRuntime.wrap(function _callee29$(_context29) {
                  while (1) {
                    switch (_context29.prev = _context29.next) {
                      case 0:
                        invoke.define('launchFingerSign', /*#__PURE__*/function () {
                          var _ref29 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee27(data) {
                            return _regeneratorRuntime.wrap(function _callee27$(_context27) {
                              while (1) {
                                switch (_context27.prev = _context27.next) {
                                  case 0:
                                    resolve(data);

                                  case 1:
                                  case "end":
                                    return _context27.stop();
                                }
                              }
                            }, _callee27);
                          }));

                          return function (_x29) {
                            return _ref29.apply(this, arguments);
                          };
                        }());
                        invoke.define('launchFingerSignCompleted', /*#__PURE__*/function () {
                          var _ref30 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee28(result) {
                            return _regeneratorRuntime.wrap(function _callee28$(_context28) {
                              while (1) {
                                switch (_context28.prev = _context28.next) {
                                  case 0:
                                    resolve(result);

                                  case 1:
                                  case "end":
                                    return _context28.stop();
                                }
                              }
                            }, _callee28);
                          }));

                          return function (_x30) {
                            return _ref30.apply(this, arguments);
                          };
                        }());
                        _context29.next = 4;
                        return invoke.bind("launchFingerSign")(opt);

                      case 4:
                      case "end":
                        return _context29.stop();
                    }
                  }
                }, _callee29);
              }));

              return function (_x28) {
                return _ref28.apply(this, arguments);
              };
            }()));

          case 1:
          case "end":
            return _context30.stop();
        }
      }
    }, _callee30);
  }));

  return function launchFingerSign(_x27) {
    return _ref27.apply(this, arguments);
  };
}();
/*
* 社交应用分享
* @name launchShare
* @return
*/

export var launchShare = /*#__PURE__*/function () {
  var _ref31 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee34(opt) {
    return _regeneratorRuntime.wrap(function _callee34$(_context34) {
      while (1) {
        switch (_context34.prev = _context34.next) {
          case 0:
            return _context34.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref32 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee33(resolve) {
                return _regeneratorRuntime.wrap(function _callee33$(_context33) {
                  while (1) {
                    switch (_context33.prev = _context33.next) {
                      case 0:
                        invoke.define('launchShare', /*#__PURE__*/function () {
                          var _ref33 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee31(data) {
                            return _regeneratorRuntime.wrap(function _callee31$(_context31) {
                              while (1) {
                                switch (_context31.prev = _context31.next) {
                                  case 0:
                                    resolve(data);

                                  case 1:
                                  case "end":
                                    return _context31.stop();
                                }
                              }
                            }, _callee31);
                          }));

                          return function (_x33) {
                            return _ref33.apply(this, arguments);
                          };
                        }());
                        invoke.define('launchShareCompleted', /*#__PURE__*/function () {
                          var _ref34 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee32(result) {
                            return _regeneratorRuntime.wrap(function _callee32$(_context32) {
                              while (1) {
                                switch (_context32.prev = _context32.next) {
                                  case 0:
                                    resolve(result);

                                  case 1:
                                  case "end":
                                    return _context32.stop();
                                }
                              }
                            }, _callee32);
                          }));

                          return function (_x34) {
                            return _ref34.apply(this, arguments);
                          };
                        }());
                        _context33.next = 4;
                        return invoke.bind("launchShare")(opt);

                      case 4:
                      case "end":
                        return _context33.stop();
                    }
                  }
                }, _callee33);
              }));

              return function (_x32) {
                return _ref32.apply(this, arguments);
              };
            }()));

          case 1:
          case "end":
            return _context34.stop();
        }
      }
    }, _callee34);
  }));

  return function launchShare(_x31) {
    return _ref31.apply(this, arguments);
  };
}();
/*
* 获取token
* @name getToken
* @return
*/

export var getToken = /*#__PURE__*/function () {
  var _ref35 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee38() {
    return _regeneratorRuntime.wrap(function _callee38$(_context38) {
      while (1) {
        switch (_context38.prev = _context38.next) {
          case 0:
            return _context38.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref36 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee37(resolve) {
                return _regeneratorRuntime.wrap(function _callee37$(_context37) {
                  while (1) {
                    switch (_context37.prev = _context37.next) {
                      case 0:
                        invoke.define('getToken', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee35() {
                          return _regeneratorRuntime.wrap(function _callee35$(_context35) {
                            while (1) {
                              switch (_context35.prev = _context35.next) {
                                case 0:
                                  resolve();

                                case 1:
                                case "end":
                                  return _context35.stop();
                              }
                            }
                          }, _callee35);
                        })));
                        invoke.define('getTokenCompleted', /*#__PURE__*/function () {
                          var _ref38 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee36(result) {
                            return _regeneratorRuntime.wrap(function _callee36$(_context36) {
                              while (1) {
                                switch (_context36.prev = _context36.next) {
                                  case 0:
                                    resolve(result);

                                  case 1:
                                  case "end":
                                    return _context36.stop();
                                }
                              }
                            }, _callee36);
                          }));

                          return function (_x36) {
                            return _ref38.apply(this, arguments);
                          };
                        }());
                        _context37.next = 4;
                        return invoke.bind("getToken")();

                      case 4:
                      case "end":
                        return _context37.stop();
                    }
                  }
                }, _callee37);
              }));

              return function (_x35) {
                return _ref36.apply(this, arguments);
              };
            }()));

          case 1:
          case "end":
            return _context38.stop();
        }
      }
    }, _callee38);
  }));

  return function getToken() {
    return _ref35.apply(this, arguments);
  };
}();
export var EVENTS_TYPE = {
  keyboardWillShow: 'keyboardWillShow',
  // 键盘即将出现
  keyboardDidShow: 'keyboardDidShow',
  // 键盘已经出现
  keyboardDidHide: 'keyboardDidHide',
  // 键盘已经隐藏
  keyboardWillHide: 'keyboardWillHide',
  // 键盘即将隐藏
  appStateChange: 'appStateChange',
  // app前后台切换
  aliPushMessage: 'aliPushMessage' // 阿里云推送监听

};
export default {
  isNative: isNative,
  takePhoto: takePhoto,
  recordVideo: recordVideo,
  barCodeScan: barCodeScan,
  openWindow: openWindow,
  closeWindow: closeWindow,
  getPosition: getPosition,
  launchCQDigitalSign: launchCQDigitalSign,
  launchFingerSign: launchFingerSign,
  launchShare: launchShare,
  getToken: getToken
};