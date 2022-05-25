(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    var i = function () {
        var r = this['get']('data');
        r['updateText'](r['translateObjs'][f]);
    };
    var j = function (s) {
        var t = s['data']['nextSelectedIndex'];
        if (t >= 0x0) {
            var u = s['source']['get']('items')[t];
            var v = function () {
                u['unbind']('start', v, this);
                i['call'](this);
            };
            u['bind']('start', v, this);
        } else
            i['call'](this);
    };
    var k = function (w) {
        return function (x) {
            if (w in x) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var l = function (y, z) {
        return function (A, B) {
            if (y == A && z in B) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var m = function (C, D, E) {
        for (var F = 0x0; F < C['length']; ++F) {
            var G = C[F];
            var H = G['get']('selectedIndex');
            if (H >= 0x0) {
                var I = D['split']('.');
                var J = G['get']('items')[H];
                if (E !== undefined && !E['call'](this, J))
                    continue;
                for (var K = 0x0; K < I['length']; ++K) {
                    if (J == undefined)
                        return '';
                    J = 'get' in J ? J['get'](I[K]) : J[I[K]];
                }
                return J;
            }
        }
        return '';
    };
    var n = function (L) {
        var M = L['get']('player');
        return M !== undefined && M['get']('viewerArea') == this['getMainViewer']();
    };
    switch (g) {
    case 'title':
    case 'subtitle':
        var p = function () {
            switch (g) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (p) {
            return function () {
                var N = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!h) {
                    for (var O = 0x0; O < N['length']; ++O) {
                        N[O]['bind']('changing', j, this);
                    }
                    h = !![];
                }
                return m['call'](this, N, p, n);
            };
        }
        break;
    default:
        if (g['startsWith']('quiz.') && 'Quiz' in TDV) {
            var q = undefined;
            var p = function () {
                switch (g) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var P = /quiz\.([\w_]+)\.(.+)/['exec'](g);
                    if (P) {
                        q = P[0x1];
                        switch ('quiz.' + P[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (p) {
                return function () {
                    var Q = this['get']('data')['quiz'];
                    if (Q) {
                        if (!h) {
                            if (q != undefined)
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, U[W]['id'], p), this);
                                    }
                                } else {
                                    Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, q, p), this);
                                }
                            else
                                Q['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], k['call'](this, p), this);
                            h = !![];
                        }
                        try {
                            var Z = 0x0;
                            if (q != undefined) {
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Z += Q['getObjective'](U[W]['id'], p);
                                    }
                                } else {
                                    Z = Q['getObjective'](q, p);
                                }
                            } else {
                                Z = Q['get'](p);
                                if (p == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    Z += 0x1;
                            }
                            return Z;
                        } catch (a0) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a1) {
    var a2 = {};
    a2['player'] = player;
    a2['playList'] = a1;
    function a3(a6) {
        for (var a7 = 0x0; a7 < a6['length']; ++a7) {
            var a8 = a6[a7];
            if ('id' in a8)
                player[a8['id']] = a8;
        }
    }
    if (a2['questions']) {
        a3(a2['questions']);
        for (var a4 = 0x0; a4 < a2['questions']['length']; ++a4) {
            var a5 = a2['questions'][a4];
            a3(a5['options']);
        }
    }
    if (a2['objectives']) {
        a3(a2['objectives']);
    }
    if (a2['califications']) {
        a3(a2['califications']);
    }
    if (a2['score']) {
        player[a2['score']['id']] = a2['score'];
    }
    if (a2['question']) {
        player[a2['question']['id']] = a2['question'];
    }
    if (a2['timeout']) {
        player[a2['timeout']['id']] = a2['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return a2;
}
var script = {"start":"this.init()","paddingRight":0,"scrollBarWidth":10,"minWidth":0,"toolTipHorizontalAlign":"center","height":"100%","scripts":{"keepCompVisible":TDV.Tour.Script.keepCompVisible,"quizFinish":TDV.Tour.Script.quizFinish,"isPanorama":TDV.Tour.Script.isPanorama,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"initQuiz":TDV.Tour.Script.initQuiz,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"existsKey":TDV.Tour.Script.existsKey,"initAnalytics":TDV.Tour.Script.initAnalytics,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"registerKey":TDV.Tour.Script.registerKey,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"unregisterKey":TDV.Tour.Script.unregisterKey,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setValue":TDV.Tour.Script.setValue,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"openLink":TDV.Tour.Script.openLink,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"init":TDV.Tour.Script.init,"getMainViewer":TDV.Tour.Script.getMainViewer,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"historyGoBack":TDV.Tour.Script.historyGoBack,"executeJS":TDV.Tour.Script.executeJS,"historyGoForward":TDV.Tour.Script.historyGoForward,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"textToSpeech":TDV.Tour.Script.textToSpeech,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"resumePlayers":TDV.Tour.Script.resumePlayers,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"downloadFile":TDV.Tour.Script.downloadFile,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setMapLocation":TDV.Tour.Script.setMapLocation,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"showWindow":TDV.Tour.Script.showWindow,"cloneCamera":TDV.Tour.Script.cloneCamera,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"cloneBindings":TDV.Tour.Script.cloneBindings,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getComponentByName":TDV.Tour.Script.getComponentByName,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getOverlays":TDV.Tour.Script.getOverlays,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"showPopupImage":TDV.Tour.Script.showPopupImage,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"quizShowScore":TDV.Tour.Script.quizShowScore,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getPixels":TDV.Tour.Script.getPixels,"shareSocial":TDV.Tour.Script.shareSocial,"playAudioList":TDV.Tour.Script.playAudioList,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setLocale":TDV.Tour.Script.setLocale,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getKey":TDV.Tour.Script.getKey,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"quizStart":TDV.Tour.Script.quizStart,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"mixObject":TDV.Tour.Script.mixObject,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getMediaByName":TDV.Tour.Script.getMediaByName,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"clone":TDV.Tour.Script.clone,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"translate":TDV.Tour.Script.translate,"_initItemWithComps":TDV.Tour.Script._initItemWithComps},"definitions": [{"paddingRight":0,"minWidth":100,"playbackBarHeadShadow":true,"toolTipHorizontalAlign":"center","height":"100%","vrPointerSelectionColor":"#FF6600","progressBorderRadius":0,"paddingLeft":0,"progressBackgroundOpacity":1,"playbackBarHeadOpacity":1,"vrPointerSelectionTime":2000,"toolTipBorderRadius":3,"class":"ViewerArea","toolTipFontSize":"1.11vmin","subtitlesFontWeight":"normal","progressLeft":0,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarOpacity":1,"toolTipDisplayTime":600,"surfaceReticleSelectionOpacity":1,"toolTipOpacity":1,"playbackBarBottom":5,"subtitlesPaddingLeft":5,"displayTooltipInTouchScreens":true,"subtitlesEnabled":true,"transitionMode":"blending","toolTipShadowColor":"#333138","subtitlesPaddingRight":5,"doubleClickAction":"toggle_fullscreen","toolTipTextShadowColor":"#000000","subtitlesBottom":50,"playbackBarProgressBackgroundColorDirection":"vertical","playbackBarHeadShadowVerticalLength":0,"toolTipFontFamily":"Arial","playbackBarBackgroundColor":["#FFFFFF"],"propagateClick":false,"toolTipFontWeight":"normal","toolTipPaddingLeft":6,"toolTipShadowSpread":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeight":10,"subtitlesTextShadowColor":"#000000","subtitlesFontSize":"3vmin","toolTipBorderSize":1,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipPaddingTop":4,"subtitlesTop":0,"toolTipShadowHorizontalLength":0,"playbackBarHeadWidth":6,"subtitlesPaddingBottom":5,"toolTipShadowOpacity":1,"playbackBarProgressBorderSize":0,"subtitlesTextShadowVerticalLength":1,"borderSize":0,"playbackBarBackgroundColorDirection":"vertical","borderRadius":0,"playbackBarRight":0,"toolTipBorderColor":"#767676","subtitlesBackgroundOpacity":0.2,"playbackBarBackgroundOpacity":1,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBackgroundColorRatios":[0],"playbackBarProgressBorderRadius":0,"subtitlesTextDecoration":"none","firstTransitionDuration":0,"progressRight":0,"subtitlesTextShadowBlurRadius":0,"playbackBarHeadShadowOpacity":0.7,"progressBarBackgroundColorDirection":"vertical","subtitlesBorderColor":"#FFFFFF","progressOpacity":1,"toolTipFontStyle":"normal","paddingTop":0,"playbackBarProgressBackgroundColorRatios":[0],"progressBarBackgroundColorRatios":[0],"toolTipPaddingBottom":4,"toolTipPaddingRight":6,"paddingBottom":0,"translationTransitionDuration":1000,"playbackBarBorderColor":"#FFFFFF","subtitlesFontFamily":"Arial","progressBarBorderColor":"#000000","progressBackgroundColorDirection":"vertical","playbackBarBorderRadius":0,"subtitlesShadow":false,"playbackBarProgressBorderColor":"#000000","progressBorderColor":"#000000","subtitlesPaddingTop":5,"toolTipTextShadowOpacity":0,"progressBarBackgroundColor":["#3399FF"],"subtitlesOpacity":1,"toolTipTextShadowBlurRadius":3,"toolTipShadowVerticalLength":0,"playbackBarHeadBorderRadius":0,"progressBackgroundColor":["#FFFFFF"],"width":"100%","playbackBarProgressOpacity":1,"progressBarOpacity":1,"subtitlesGap":0,"playbackBarHeadBorderColor":"#000000","progressBottom":0,"displayTooltipInSurfaceSelection":true,"toolTipFontColor":"#606060","playbackBarHeadShadowBlurRadius":3,"subtitlesBackgroundColor":"#000000","transitionDuration":500,"id":"MainViewer","subtitlesHorizontalAlign":"center","progressBorderSize":0,"playbackBarBorderSize":0,"progressHeight":10,"subtitlesTextShadowOpacity":1,"progressBarBorderRadius":0,"playbackBarHeadShadowHorizontalLength":0,"playbackBarLeft":0,"subtitlesBorderSize":0,"progressBarBorderSize":0,"subtitlesVerticalAlign":"bottom","minHeight":50,"surfaceReticleColor":"#FFFFFF","playbackBarHeadHeight":15,"shadow":false,"vrPointerColor":"#FFFFFF","surfaceReticleOpacity":0.6,"toolTipShadowBlurRadius":3,"data":{"name":"Main Viewer"},"playbackBarHeadBorderSize":0,"subtitlesFontColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","subtitlesTextShadowHorizontalLength":1},{"viewerArea":"this.MainViewer","displayPlayOverlay":true,"displayPlaybackBar":true,"clickAction":"play_pause","id":"MainViewerVideoPlayer","class":"VideoPlayer"},{"id":"playList_EF327E71_FB44_E229_41E7_5392C4135AA8","items":[{"media":"this.panorama_F13119C2_FB3C_6E6B_41E8_4401F245B1BC","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_F13119C2_FB3C_6E6B_41E8_4401F245B1BC_camera","class":"PanoramaPlayListItem"}],"class":"PlayList"},{"initialPosition":{"yaw":-35.67,"class":"PanoramaCameraPosition","pitch":5.48},"hoverFactor":0,"automaticZoomSpeed":10,"automaticRotationSpeed":0,"id":"panorama_F13119C2_FB3C_6E6B_41E8_4401F245B1BC_camera","class":"PanoramaCamera"},{"id":"mainPlayList","items":[{"media":"this.panorama_F1837573_FB3C_A629_41D8_726775BF1AA4","camera":"this.panorama_F1837573_FB3C_A629_41D8_726775BF1AA4_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem"},{"media":"this.video_F62F1206_FB45_9DEB_41E7_26D89E1B4AAB","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 0)","player":"this.MainViewerVideoPlayer","class":"VideoPlayListItem","end":"this.trigger('tourEnded')","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 1)"}],"class":"PlayList"},{"aaEnabled":true,"mouseControlMode":"drag_rotation","displayPlaybackBar":true,"id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","gyroscopeVerticalDraggingEnabled":true,"zoomEnabled":true,"gyroscopeEnabled":true,"surfaceSelectionEnabled":false,"class":"PanoramaPlayer","arrowKeysAction":"translate","touchControlMode":"drag_rotation"},{"frames":[{"thumbnailUrl":"media/panorama_F13119C2_FB3C_6E6B_41E8_4401F245B1BC_t.jpg","cube":{"class":"ImageResource","levels":[{"width":12288,"height":2048,"tags":"ondemand","rowCount":4,"class":"TiledImageResourceLevel","colCount":24,"url":"media/panorama_F13119C2_FB3C_6E6B_41E8_4401F245B1BC_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"height":1024,"tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel","colCount":12,"url":"media/panorama_F13119C2_FB3C_6E6B_41E8_4401F245B1BC_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"height":512,"tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel","colCount":6,"url":"media/panorama_F13119C2_FB3C_6E6B_41E8_4401F245B1BC_0/{face}/2/{row}_{column}.jpg"},{"width":12288,"height":2048,"tags":"mobilevr2gen","rowCount":1,"class":"TiledImageResourceLevel","colCount":6,"url":"media/panorama_F13119C2_FB3C_6E6B_41E8_4401F245B1BC_0/{face}/vr2gen/0.jpg"}]},"class":"CubicPanoramaFrame"}],"hfovMax":130,"hfov":360,"partial":false,"pitch":0,"id":"panorama_F13119C2_FB3C_6E6B_41E8_4401F245B1BC","vfov":180,"thumbnailUrl":"media/panorama_F13119C2_FB3C_6E6B_41E8_4401F245B1BC_t.jpg","label":trans('panorama_F13119C2_FB3C_6E6B_41E8_4401F245B1BC.label'),"overlays":["this.overlay_F51997D3_FB44_6269_41E5_F02D63A7E7A2","this.overlay_F45CE9E9_FB45_AE39_41E8_BCAFDE046312","this.overlay_F5C5C83B_FB45_AE19_41EF_20FAB18CECAE","this.FramePanoramaOverlay_EB926793_FB5D_A2E9_41B4_467458488C83"],"adjacentPanoramas":[{"panorama":"this.panorama_F1837573_FB3C_A629_41D8_726775BF1AA4","distance":26.56,"yaw":-140.3,"select":"this.overlay_F5C5C83B_FB45_AE19_41EF_20FAB18CECAE.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_F5C5C83B_FB45_AE19_41EF_20FAB18CECAE"},"backwardYaw":-6.48,"class":"AdjacentPanorama"}],"data":{"label":"IMG_20220430_151849_00_029"},"class":"Panorama"},{"loop":false,"scaleMode":"fit_inside","id":"video_F62F1206_FB45_9DEB_41E7_26D89E1B4AAB","label":trans('video_F62F1206_FB45_9DEB_41E7_26D89E1B4AAB.label'),"thumbnailUrl":"media/video_F62F1206_FB45_9DEB_41E7_26D89E1B4AAB_t.jpg","height":1080,"video":"this.videores_E921DB00_FB5C_63E7_41E9_E922484DAE28","class":"Video","data":{"label":"young_rebels_final_v1"},"width":1920},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"initialSequence":"this.sequence_F1201ED4_FB3C_A26F_41D4_7D90D7638A41","automaticZoomSpeed":10,"id":"panorama_F1837573_FB3C_A629_41D8_726775BF1AA4_camera","class":"PanoramaCamera","hoverFactor":0},{"hfovMin":"135%","frames":[{"thumbnailUrl":"media/panorama_F1837573_FB3C_A629_41D8_726775BF1AA4_t.jpg","cube":{"class":"ImageResource","levels":[{"width":12288,"height":2048,"tags":"ondemand","rowCount":4,"class":"TiledImageResourceLevel","colCount":24,"url":"media/panorama_F1837573_FB3C_A629_41D8_726775BF1AA4_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"height":1024,"tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel","colCount":12,"url":"media/panorama_F1837573_FB3C_A629_41D8_726775BF1AA4_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"height":512,"tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel","colCount":6,"url":"media/panorama_F1837573_FB3C_A629_41D8_726775BF1AA4_0/{face}/2/{row}_{column}.jpg"},{"width":12288,"height":2048,"tags":"mobilevr2gen","rowCount":1,"class":"TiledImageResourceLevel","colCount":6,"url":"media/panorama_F1837573_FB3C_A629_41D8_726775BF1AA4_0/{face}/vr2gen/0.jpg"}]},"class":"CubicPanoramaFrame"}],"data":{"label":"IMG_20220430_151725_00_028"},"hfov":360,"partial":false,"pitch":0,"id":"panorama_F1837573_FB3C_A629_41D8_726775BF1AA4","vfov":180,"thumbnailUrl":"media/panorama_F1837573_FB3C_A629_41D8_726775BF1AA4_t.jpg","label":trans('panorama_F1837573_FB3C_A629_41D8_726775BF1AA4.label'),"overlays":["this.overlay_F5D8D83C_FB45_AE1F_41D6_2E3CC3A705A6"],"adjacentPanoramas":[{"panorama":"this.panorama_F13119C2_FB3C_6E6B_41E8_4401F245B1BC","distance":5.64,"yaw":-6.48,"select":"this.overlay_F5D8D83C_FB45_AE1F_41D6_2E3CC3A705A6.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_F5D8D83C_FB45_AE1F_41D6_2E3CC3A705A6"},"backwardYaw":-140.3,"class":"AdjacentPanorama"}],"class":"Panorama","hfovMax":130},{"paddingRight":0,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"class":"Window","toolTipHorizontalAlign":"center","closeButtonPressedBackgroundColor":[],"paddingLeft":0,"scrollBarColor":"#000000","backgroundColorRatios":[],"closeButtonPressedIconLineWidth":3,"titlePaddingLeft":5,"layout":"vertical","shadowSpread":1,"shadowColor":"#000000","bodyBackgroundOpacity":0,"data":{"name":"Window7267"},"shadowOpacity":0.5,"backgroundColorDirection":"vertical","headerBackgroundColorRatios":[0,0.1,1],"closeButtonPressedIconColor":"#FFFFFF","headerBorderColor":"#000000","hideEffect":{"duration":500,"class":"FadeOutEffect","easing":"cubic_in_out"},"headerPaddingBottom":5,"headerBorderSize":0,"showEffect":{"duration":500,"class":"FadeInEffect","easing":"cubic_in_out"},"modal":true,"headerPaddingTop":10,"closeButtonIconLineWidth":2,"titleTextDecoration":"none","headerVerticalAlign":"middle","closeButtonPressedBorderSize":0,"closeButtonBackgroundColorRatios":[],"closeButtonRollOverBackgroundOpacity":0,"closeButtonBackgroundOpacity":0,"closeButtonPressedBorderColor":"#000000","titleFontColor":"#000000","footerHeight":5,"closeButtonRollOverBackgroundColorRatios":[],"propagateClick":false,"shadowVerticalLength":0,"veilColorRatios":[0,1],"backgroundColor":[],"children":["this.WebFrame_EF36AF17_FB44_E3E9_41AC_2487ED825A70"],"headerPaddingLeft":10,"closeButtonIconHeight":20,"titleFontWeight":"normal","closeButtonBorderColor":"#000000","height":"90%","titleFontStyle":"normal","bodyBorderSize":0,"closeButtonPressedBackgroundOpacity":0,"shadowHorizontalLength":3,"borderSize":0,"titlePaddingRight":5,"veilColor":["#000000","#000000"],"bodyBorderColor":"#000000","bodyPaddingRight":0,"borderRadius":5,"backgroundOpacity":1,"scrollBarWidth":10,"footerBackgroundOpacity":0,"footerBackgroundColorRatios":[0,0.9,1],"footerBorderSize":0,"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"closeButtonBorderRadius":11,"titleHorizontalAlign":"left","closeButtonPaddingBottom":0,"headerPaddingRight":0,"scrollBarMargin":2,"closeButtonRollOverIconLineWidth":2,"titleFontFamily":"Arial","scrollBarOpacity":0.5,"veilHideEffect":{"duration":500,"class":"FadeOutEffect","easing":"cubic_in_out"},"veilOpacity":0.4,"footerBackgroundColorDirection":"vertical","closeButtonPaddingRight":0,"paddingTop":0,"closeButtonIconColor":"#B2B2B2","closeButtonBorderSize":0,"horizontalAlign":"center","paddingBottom":0,"closeButtonRollOverBorderSize":0,"veilShowEffect":{"duration":500,"class":"FadeInEffect","easing":"cubic_in_out"},"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"titleFontSize":"1.29vmin","veilColorDirection":"horizontal","contentOpaque":false,"gap":10,"verticalAlign":"middle","closeButtonPaddingLeft":0,"bodyPaddingLeft":0,"overflow":"scroll","closeButtonBackgroundColor":[],"shadowBlurRadius":6,"width":"90%","titlePaddingTop":5,"closeButtonRollOverIconColor":"#FFFFFF","bodyBackgroundColorDirection":"vertical","closeButtonPaddingTop":0,"id":"window_E938CDC0_FB43_A667_41EB_30280F5082ED","scrollBarVisible":"rollOver","closeButtonIconWidth":20,"headerBackgroundColorDirection":"vertical","bodyPaddingBottom":0,"bodyPaddingTop":0,"titlePaddingBottom":5,"minHeight":0,"shadow":true,"minWidth":0,"bodyBackgroundColorRatios":[0,0.5,1],"headerBackgroundOpacity":0,"closeButtonRollOverBorderColor":"#000000","closeButtonPressedBackgroundColorRatios":[],"closeButtonRollOverBackgroundColor":[],"footerBorderColor":"#000000"},{"areas":["this.HotspotPanoramaOverlayArea_F51A77D4_FB44_626F_41DB_F9159E254446"],"maps":[],"data":{"label":"Text"},"useHandCursor":true,"id":"overlay_F51997D3_FB44_6269_41E5_F02D63A7E7A2","items":["this.HotspotPanoramaOverlayTextImage_F519A7D2_FB44_626B_41DF_10112FD7022E"],"class":"HotspotPanoramaOverlay"},{"distance":50,"videoVisibleOnStop":false,"image":"this.res_EA947BBC_FB5C_A21F_41E7_75D18229955F","click":"if(this.overlay_F45CE9E9_FB45_AE39_41E8_BCAFDE046312.get('state') != 'playing'){ this.overlay_F45CE9E9_FB45_AE39_41E8_BCAFDE046312.play(); } else { this.overlay_F45CE9E9_FB45_AE39_41E8_BCAFDE046312.pause(); }","useHandCursor":true,"loop":false,"autoplay":false,"vertices":[{"yaw":-73.8,"class":"PanoramaPoint","pitch":27.69},{"yaw":-43.84,"class":"PanoramaPoint","pitch":29.69},{"yaw":-44.92,"class":"PanoramaPoint","pitch":13.23},{"yaw":-72.89,"class":"PanoramaPoint","pitch":13.33}],"enabledInCardboard":true,"cues":[],"data":{"label":"Video"},"id":"overlay_F45CE9E9_FB45_AE39_41E8_BCAFDE046312","video":"this.videores_E921DB00_FB5C_63E7_41E9_E922484DAE28","class":"QuadVideoPanoramaOverlay","stateChange":"if(this.overlay_F45CE9E9_FB45_AE39_41E8_BCAFDE046312.get('state') == 'playing'){ this.pauseGlobalAudios([this.overlay_F45CE9E9_FB45_AE39_41E8_BCAFDE046312], true); } else { this.resumeGlobalAudios(); }"},{"areas":["this.HotspotPanoramaOverlayArea_F5AF0853_FB45_AE69_41CC_7BD13A7BBBF9"],"maps":[],"data":{"hasPanoramaAction":true,"label":"GoToImg_20220430_151725_00_028"},"useHandCursor":true,"id":"overlay_F5C5C83B_FB45_AE19_41EF_20FAB18CECAE","items":[{"distance":50,"yaw":-140.3,"image":"this.AnimatedImageResource_EF325E51_FB44_E269_41C4_6019F5127711","vfov":4.69,"hfov":8.71,"horizontalAlign":"center","data":{"label":"GoToImg_20220430_151725_00_028"},"scaleMode":"fit_inside","verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","pitch":-3.65}],"class":"HotspotPanoramaOverlay","enabledInCardboard":true},{"contentInteractive":true,"yaw":54.51,"vfov":29.66,"useHandCursor":false,"hfov":33.8,"url":trans('FramePanoramaOverlay_EB926793_FB5D_A2E9_41B4_467458488C83.url'),"height":720,"id":"FramePanoramaOverlay_EB926793_FB5D_A2E9_41B4_467458488C83","class":"FramePanoramaOverlay","pitch":22.49,"data":{"label":"Web"},"width":1280},{"id":"videores_E921DB00_FB5C_63E7_41E9_E922484DAE28","levels":["this.videolevel_EF021DE2_FB44_E62B_41E9_0B7B74F4D5E4"],"class":"VideoResource","height":1080,"width":1920},{"movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"linear","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5}],"id":"sequence_F1201ED4_FB3C_A26F_41D4_7D90D7638A41","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence"},{"areas":["this.HotspotPanoramaOverlayArea_E90A89E5_FB44_EE29_41D9_A3AAD2FA6886"],"maps":[],"data":{"hasPanoramaAction":true,"label":"GoToImg_20220430_151849_00_029"},"useHandCursor":true,"id":"overlay_F5D8D83C_FB45_AE1F_41D6_2E3CC3A705A6","items":[{"distance":50,"yaw":-6.48,"image":"this.AnimatedImageResource_EF33BE50_FB44_E267_41E8_D24CD2FD2037","vfov":4.69,"hfov":8.71,"horizontalAlign":"center","data":{"label":"GoToImg_20220430_151849_00_029"},"scaleMode":"fit_inside","verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","pitch":-16.76}],"class":"HotspotPanoramaOverlay","enabledInCardboard":true},{"paddingRight":0,"toolTipHorizontalAlign":"center","height":"100%","scrollEnabled":true,"backgroundColorRatios":[],"insetBorder":false,"paddingTop":0,"backgroundColorDirection":"vertical","paddingBottom":0,"width":"100%","propagateClick":false,"url":trans('WebFrame_EF36AF17_FB44_E3E9_41AC_2487ED825A70.url'),"backgroundColor":[],"id":"WebFrame_EF36AF17_FB44_E3E9_41AC_2487ED825A70","borderSize":0,"minHeight":0,"shadow":false,"minWidth":0,"data":{"name":"WebFrame9596"},"backgroundOpacity":1,"paddingLeft":0,"class":"WebFrame","borderRadius":0},{"id":"HotspotPanoramaOverlayArea_F51A77D4_FB44_626F_41DB_F9159E254446","click":"this.openEmbeddedPDF(this.WebFrame_EF36AF17_FB44_E3E9_41AC_2487ED825A70, this.translate('PopupPDFBehaviour_E939BDC0_FB43_A667_41E4_C4792346A6A3.url')); this.showWindow(this.window_E938CDC0_FB43_A667_41EB_30280F5082ED, null, false)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"image":{"levels":["this.imlevel_EAA96D7A_FB5C_A61B_41E3_724E190AF50B"],"class":"ImageResource"},"hfov":26.94,"id":"HotspotPanoramaOverlayTextImage_F519A7D2_FB44_626B_41DF_10112FD7022E","pitch":21.43,"distance":50,"yaw":138.44,"vfov":8.71,"horizontalAlign":"left","data":{"label":"Text"},"verticalAlign":"top","class":"HotspotPanoramaOverlayImage"},{"id":"res_EA947BBC_FB5C_A21F_41E7_75D18229955F","levels":[{"url":"media/res_EA947BBC_FB5C_A21F_41E7_75D18229955F_0.jpg","class":"ImageResourceLevel","height":1080,"width":1920}],"class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_F5AF0853_FB45_AE69_41CC_7BD13A7BBBF9","click":"this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"levels":[{"url":"media/res_EA95DBBB_FB5C_A219_41EC_C681A87DD829_0.png","class":"ImageResourceLevel","height":70,"width":3120}],"frameCount":24,"frameDuration":41,"id":"AnimatedImageResource_EF325E51_FB44_E269_41C4_6019F5127711","rowCount":1,"class":"AnimatedImageResource","colCount":24},{"framerate":25,"type":"video/mp4","height":1080,"width":1920,"posterURL":trans('videolevel_EF021DE2_FB44_E62B_41E9_0B7B74F4D5E4.posterURL'),"id":"videolevel_EF021DE2_FB44_E62B_41E9_0B7B74F4D5E4","bitrate":3888,"class":"VideoResourceLevel","url":trans('videolevel_EF021DE2_FB44_E62B_41E9_0B7B74F4D5E4.url')},{"id":"HotspotPanoramaOverlayArea_E90A89E5_FB44_EE29_41D9_A3AAD2FA6886","click":"this.setMediaBehaviour(this.playList_EF327E71_FB44_E229_41E7_5392C4135AA8, 0, this.panorama_F1837573_FB3C_A629_41D8_726775BF1AA4, true)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"levels":[{"url":"media/res_EA95DBBB_FB5C_A219_41EC_C681A87DD829_0.png","class":"ImageResourceLevel","height":70,"width":3120}],"frameCount":24,"frameDuration":41,"id":"AnimatedImageResource_EF33BE50_FB44_E267_41E8_D24CD2FD2037","rowCount":1,"class":"AnimatedImageResource","colCount":24},{"width":919.74,"id":"imlevel_EAA96D7A_FB5C_A61B_41E3_724E190AF50B","class":"ImageResourceLevel","height":292.51,"url":trans('imlevel_EAA96D7A_FB5C_A61B_41E3_724E190AF50B.url')}],"scrollBarColor":"#000000","backgroundColorRatios":[0],"scrollBarMargin":2,"defaultMenu":["fullscreen","mute","rotation"],"paddingTop":0,"scrollBarOpacity":0.5,"backgroundColorDirection":"vertical","downloadEnabled":false,"paddingBottom":0,"horizontalAlign":"left","desktopMipmappingEnabled":false,"contentOpaque":false,"gap":10,"verticalAlign":"top","width":"100%","mouseWheelEnabled":true,"backgroundPreloadEnabled":true,"mediaActivationMode":"window","overflow":"hidden","propagateClick":false,"mobileMipmappingEnabled":false,"backgroundColor":["#FFFFFF"],"layout":"absolute","id":"rootPlayer","scrollBarVisible":"rollOver","defaultVRPointer":"laser","children":["this.MainViewer"],"borderSize":0,"minHeight":0,"shadow":false,"paddingLeft":0,"data":{"locales":{"de":"locale/de.txt"},"name":"Player433","textToSpeechConfig":{"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"volume":1,"speechOnTooltip":false,"pitch":1,"speechOnInfoWindow":false,"rate":1},"defaultLocale":"de"},"vrPolyfillScale":0.75,"backgroundOpacity":1,"class":"Player","borderRadius":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.3.js.map
})();
//Generated with v2022.1.3, Wed May 25 2022