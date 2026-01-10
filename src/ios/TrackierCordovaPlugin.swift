import Cordova
import Cordova
import trackier_ios_sdk

@objc(TrackierCordovaPlugin) 
class TrackierCordovaPlugin : CDVPlugin, DeepLinkListener {

    var deeplinkCallbackId: String?

    @objc(initializeSDK:)
    func initializeSDK(command: CDVInvokedUrlCommand) {
        var pluginResult = CDVPluginResult(
            status: CDVCommandStatus_ERROR
        )
        let msg = command.arguments[0] as? String ?? ""
        if (msg.count > 0){
            let dict = convertStringToDictionary(text: msg)
            let appToken = dict?["appToken"] as! String;
            let environment = dict?["environment"] as! String;
            let secretId = dict?["secretId"] as! String;
            let secretKey = dict?["secretKey"] as! String;
            let deeplinking = dict?["trackier_deferredDeeplink"] as! Bool?
            let config = TrackierSDKConfig(appToken: appToken , env: environment)
            config.setAppSecret(secretId: secretId, secretKey: secretKey)
            config.setSDKType(sdkType: "cordova_sdk")
            config.setSDKVersion(sdkVersion: "1.6.78")
            config.setDeeplinkListerner(listener: self)

            if let regionStr = dict?["region"] as? String {
                if regionStr.uppercased() == "IN" {
                    config.setRegion(.IN)
                } else if regionStr.uppercased() == "GLOBAL" {
                    config.setRegion(.GLOBAL)
                } else {
                    config.setRegion(.NONE)
                }
            }

            TrackierSDK.initialize(config: config)

            pluginResult = CDVPluginResult(
                status: CDVCommandStatus_OK,
                messageAs: msg
            )
        }
        self.commandDelegate!.send(
            pluginResult, 
            callbackId: command.callbackId
        )
    }

    @objc(trackier_deferredDeeplink:)
    func trackier_deferredDeeplink(command: CDVInvokedUrlCommand) {
        self.deeplinkCallbackId = command.callbackId
        // return NO_RESULT so Cordova keeps callback alive
        let pluginResult = CDVPluginResult(status: CDVCommandStatus_NO_RESULT)
        pluginResult?.setKeepCallbackAs(true)
        self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
    }
        
        // DeepLinkListener callback
    func onDeepLinking(result: DeepLink) {
        if let callbackId = self.deeplinkCallbackId {
            let deepLinkUrl = result.getUrl()
            
            let pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: deepLinkUrl)
            pluginResult?.setKeepCallbackAs(true) // keep it alive for future deeplinks
            self.commandDelegate!.send(pluginResult, callbackId: callbackId)
        }
    }

    @objc(setUserId:)
    func setUserId(command: CDVInvokedUrlCommand){
        let msg = command.arguments[0] as? String ?? ""
        TrackierSDK.setUserID(userId: msg)
    }

    @objc(setUserEmail:)
    func setUserEmail(command: CDVInvokedUrlCommand){
        let msg = command.arguments[0] as? String ?? ""
        TrackierSDK.setUserEmail(userEmail: msg)
    }

    @objc(setUserName:)
    func setUserName(command: CDVInvokedUrlCommand){
        let msg = command.arguments[0] as? String ?? ""
        TrackierSDK.setUserName(userName: msg)
    }

    @objc(setUserPhone:)
    func setUserPhone(command: CDVInvokedUrlCommand){
        let msg = command.arguments[0] as? String ?? ""
        TrackierSDK.setUserPhone(userPhone: msg)
    }

    @objc(setDOB:)
    func setDOB(command: CDVInvokedUrlCommand){
        let msg = command.arguments[0] as? String ?? ""
        TrackierSDK.setDOB(dob: msg)
    }
    
    @objc(setGender:)
    func setGender(command: CDVInvokedUrlCommand){
        let msg = command.arguments[0] as? String ?? ""
        switch msg {
            case "Male": TrackierSDK.setGender(gender: .MALE)
            case "Female": TrackierSDK.setGender(gender: .FEMALE)
            case "Others": TrackierSDK.setGender(gender: .OTHERS)
            default: print("No Gender found")
        }
    }

    @objc(getTrackierId:)
    func getTrackierId(command: CDVInvokedUrlCommand){
        var pluginResult: CDVPluginResult?
        pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: TrackierSDK.getTrackierId())
        self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
    }

    @objc(subscribeAttributionlink:)
    func subscribeAttributionlink(command: CDVInvokedUrlCommand){
        if #available(iOS 13.0, *) {
            TrackierSDK.subscribeAttributionlink()
        }
    }

    @objc(updatePostbackConversion:)
    func updatePostbackConversion(command: CDVInvokedUrlCommand){
        let conversionValue = command.arguments[0] as? Int ?? 0
        TrackierSDK.updatePostbackConversion(conversionValue: conversionValue)
        print("trackiersdk postback", conversionValue)
    }

    @objc(waitForATTUserAuthorization:)
    func waitForATTUserAuthorization(command: CDVInvokedUrlCommand){
        let timeoutInterval = command.arguments[0] as? Int ?? 0
        TrackierSDK.waitForATTUserAuthorization(timeoutInterval: timeoutInterval)
        print("trackiersdk time", timeoutInterval)

    }
    
    @objc(getAd:)
    func getAd(command: CDVInvokedUrlCommand){
        var pluginResult: CDVPluginResult?
        pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: TrackierSDK.getAd())
        self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
    }
    
    @objc(getAdID:)
    func getAdID(command: CDVInvokedUrlCommand){
        var pluginResult: CDVPluginResult?
        pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: TrackierSDK.getAdID())
        self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
    }
    
    @objc(getCampaign:)
    func getCampaign(command: CDVInvokedUrlCommand){
        var pluginResult: CDVPluginResult?
        pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: TrackierSDK.getCampaign())
        self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
    }
    
    @objc(getCampaignID:)
    func getCampaignID(command: CDVInvokedUrlCommand){
        var pluginResult: CDVPluginResult?
        pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: TrackierSDK.getCampaignID())
        self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
    }
    
    @objc(getAdSetID:)
    func getAdSetID(command: CDVInvokedUrlCommand){
        var pluginResult: CDVPluginResult?
        pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: TrackierSDK.getAdSetID())
        self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
    }
    
    @objc(getChannel:)
    func getChannel(command: CDVInvokedUrlCommand){
        var pluginResult: CDVPluginResult?
        pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: TrackierSDK.getChannel())
        self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
    }
    
    @objc(getP1:)
    func getP1(command: CDVInvokedUrlCommand){
        var pluginResult: CDVPluginResult?
        pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: TrackierSDK.getP1())
        self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
    }
    
    @objc(getP2:)
    func getP2(command: CDVInvokedUrlCommand){
        var pluginResult: CDVPluginResult?
        pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: TrackierSDK.getP2())
        self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
    }
    
    @objc(getP3:)
    func getP3(command: CDVInvokedUrlCommand){
        var pluginResult: CDVPluginResult?
        pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: TrackierSDK.getP3())
        self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
    }
    
    @objc(getP4:)
    func getP4(command: CDVInvokedUrlCommand){
        var pluginResult: CDVPluginResult?
        pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: TrackierSDK.getP4())
        self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
    }
    
    @objc(getP5:)
    func getP5(command: CDVInvokedUrlCommand){
        var pluginResult: CDVPluginResult?
        pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: TrackierSDK.getP5())
        self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
    }
    
    @objc(getClickId:)
    func getClickId(command: CDVInvokedUrlCommand){
        var pluginResult: CDVPluginResult?
        pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: TrackierSDK.getClickId())
        self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
    }
    
    @objc(getDlv:)
    func getDlv(command: CDVInvokedUrlCommand){
        var pluginResult: CDVPluginResult?
        pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: TrackierSDK.getDlv())
        self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
    }
    
    @objc(getPid:)
    func getPid(command: CDVInvokedUrlCommand){
        var pluginResult: CDVPluginResult?
        pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: TrackierSDK.getPid())
        self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
    }
    
    @objc(getIsRetargeting:)
    func getIsRetargeting(command: CDVInvokedUrlCommand){
        var pluginResult: CDVPluginResult?
        pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: TrackierSDK.getIsRetargeting())
        self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
    }

    @objc(updateAppleAdsToken:)
    func updateAppleAdsToken(command: CDVInvokedUrlCommand){
        let msg = command.arguments[0] as? String ?? ""
        TrackierSDK.updateAppleAdsToken(token: msg)
    }

    @objc(parseDeepLink:)
    func parseDeepLink(command: CDVInvokedUrlCommand){
        let msg = command.arguments[0] as? String ?? ""
        TrackierSDK.parseDeepLink(uri: msg)
    }

    @objc(sendAPNToken:)
    func sendAPNToken(command: CDVInvokedUrlCommand){
        let token = command.arguments[0] as? String ?? ""
        print("Sending APN token: \(token)")
        TrackierSDK.sendAPNToken(token: token)
        let pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: "APN Token sent successfully")
        self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
    }

    // Dynamic Link Creation
    @objc(createDynamicLink:)
    func createDynamicLink(command: CDVInvokedUrlCommand){
        let msg = command.arguments[0] as? String ?? ""
        if let data = msg.data(using: .utf8) {
            do {
                if let dynamicLinkData = try JSONSerialization.jsonObject(with: data, options: []) as? [String: Any] {

                    // Create DynamicLink using Builder pattern (as in native SDK)
                    let builder = DynamicLink.Builder()

                    // Set basic properties
                    if let templateId = dynamicLinkData["templateId"] as? String {
                        builder.setTemplateId(templateId)
                    }
                    if let link = dynamicLinkData["link"] as? String {
                        builder.setLink(link)
                    }
                    if let domainUriPrefix = dynamicLinkData["domainUriPrefix"] as? String {
                        builder.setDomainUriPrefix(domainUriPrefix)
                    }
                    if let deepLinkValue = dynamicLinkData["deepLinkValue"] as? String {
                        builder.setDeepLinkValue(deepLinkValue)
                    }

                    // Set Android parameters
                    if let androidParams = dynamicLinkData["androidParameters"] as? [String: Any],
                       let redirectLink = androidParams["redirectLink"] as? String {
                        let androidParameters = AndroidParameters.Builder()
                            .setRedirectLink(redirectLink)
                            .build()
                        builder.setAndroidParameters(androidParameters)
                    }

                    // Set iOS parameters
                    if let iosParams = dynamicLinkData["iosParameters"] as? [String: Any],
                       let redirectLink = iosParams["redirectLink"] as? String {
                        let iosParameters = IosParameters.Builder()
                            .setRedirectLink(redirectLink)
                            .build()
                        builder.setIosParameters(iosParameters)
                    }

                    // Set Desktop parameters
                    if let desktopParams = dynamicLinkData["desktopParameters"] as? [String: Any],
                       let redirectLink = desktopParams["redirectLink"] as? String {
                        let desktopParameters = DesktopParameters.Builder()
                            .setRedirectLink(redirectLink)
                            .build()
                        builder.setDesktopParameters(desktopParameters)
                    }

                    // Set SDK parameters
                    if let sdkParams = dynamicLinkData["sdkParameters"] as? [String: String] {
                        builder.setSDKParameters(sdkParams)
                    }

                    // Set Social Meta Tag parameters
                    if let socialParams = dynamicLinkData["socialMetaTagParameters"] as? [String: Any],
                       let title = socialParams["title"] as? String,
                       let description = socialParams["description"] as? String,
                       let imageLink = socialParams["imageLink"] as? String {
                        let socialMetaTagParameters = SocialMetaTagParameters.Builder()
                            .setTitle(title)
                            .setDescription(description)
                            .setImageLink(imageLink)
                            .build()
                        builder.setSocialMetaTagParameters(socialMetaTagParameters)
                    }

                    // Set Attribution parameters
                    if let attrParams = dynamicLinkData["attributionParameters"] as? [String: Any] {
                        let channel = attrParams["channel"] as? String ?? ""
                        let campaign = attrParams["campaign"] as? String ?? ""
                        let mediaSource = attrParams["mediaSource"] as? String ?? ""
                        let p1 = attrParams["p1"] as? String ?? ""
                        let p2 = attrParams["p2"] as? String ?? ""
                        let p3 = attrParams["p3"] as? String ?? ""
                        let p4 = attrParams["p4"] as? String ?? ""
                        let p5 = attrParams["p5"] as? String ?? ""

                        builder.setAttributionParameters(
                            channel: channel,
                            campaign: campaign,
                            mediaSource: mediaSource,
                            p1: p1,
                            p2: p2,
                            p3: p3,
                            p4: p4,
                            p5: p5
                        )
                    }

                    // Build the DynamicLink
                    let dynamicLink = builder.build()

                    if #available(iOS 13.0, *) {
                        TrackierSDK.createDynamicLink(
                            dynamicLink: dynamicLink,
                            onSuccess: { (result) in
                                var pluginResult: CDVPluginResult?
                                pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: result)
                                self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
                            },
                            onFailure: { (error) in
                                var pluginResult: CDVPluginResult?
                                pluginResult = CDVPluginResult(status: CDVCommandStatus_ERROR, messageAs: error)
                                self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
                            }
                        )
                    } else {
                        var pluginResult: CDVPluginResult?
                        pluginResult = CDVPluginResult(status: CDVCommandStatus_ERROR, messageAs: "Dynamic links require iOS 13.0+")
                        self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
                    }
                }
            } catch {
                var pluginResult: CDVPluginResult?
                pluginResult = CDVPluginResult(status: CDVCommandStatus_ERROR, messageAs: "Error parsing dynamic link data: \(error)")
                self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
            }
        }
    }

    // Deeplink URL Resolution
    @objc(resolveDeeplinkUrl:)
    func resolveDeeplinkUrl(command: CDVInvokedUrlCommand){
        let url = command.arguments[0] as? String ?? ""
        if #available(iOS 13.0, *) {
            TrackierSDK.resolveDeeplinkUrl(
                inputUrl: url,
                completion: { (result) in
                    switch result {
                    case .success(let dlData):
                        var pluginResult: CDVPluginResult?
                        let resultDict: [String: Any] = [
                            "url": dlData.url ?? "",
                            "dlv": dlData.dlv ?? "",
                            "sdkParams": dlData.sdkParams ?? [:]
                        ]
                        pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: resultDict)
                        self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
                    case .failure(let error):
                        var pluginResult: CDVPluginResult?
                        pluginResult = CDVPluginResult(status: CDVCommandStatus_ERROR, messageAs: error.localizedDescription)
                        self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
                    }
                }
            )
        } else {
            var pluginResult: CDVPluginResult?
            pluginResult = CDVPluginResult(status: CDVCommandStatus_ERROR, messageAs: "Deeplink resolution requires iOS 13.0+")
            self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
        }
    }

    @objc(trackEvent:)
    func trackEvent(command: CDVInvokedUrlCommand) {
        var pluginResult = CDVPluginResult(
            status: CDVCommandStatus_ERROR
        )
        let msg = command.arguments[0] as? String ?? ""
        if (msg.count > 0) {
            let dict = convertStringToDictionary(text: msg)
            let orderId: String = dict?["orderId"] as? String ?? ""
            let currency: String = dict?["currency"] as? String ?? ""
            let revenue: Float64 = dict?["revenue"] as? Float64 ?? 0.0
            let discount: Float64 = dict?["discount"] as? Float64 ?? 0.0
            let couponCode: String = dict?["couponCode"] as? String ?? ""
            let eventId: String = dict?["eventId"] as! String
            let param1: String = dict?["param1"] as? String ?? ""
            let param2: String = dict?["param2"] as? String ?? ""
            let param3: String = dict?["param3"] as? String ?? ""
            let param4: String = dict?["param4"] as? String ?? ""
            let param5: String = dict?["param5"] as? String ?? ""
            let param6: String = dict?["param6"] as? String ?? ""
            let param7: String = dict?["param7"] as? String ?? ""
            let param8: String = dict?["param8"] as? String ?? ""
            let param9: String = dict?["param9"] as? String ?? ""
            let param10: String = dict?["param10"] as? String ?? ""
            var ev:Dictionary<String,Any> = dict?["ev"] as? Dictionary<String,Any> ?? [:]
            for (key, value) in ev {
                ev[key] = value
            }
            let event = TrackierEvent(id: eventId)
            event.setRevenue(revenue: revenue, currency: currency)
            event.orderId = orderId
            event.setCouponCode(couponCode: couponCode)
            event.setDiscount(discount: discount)
            event.param1  = param1
            event.param2  = param2
            event.param3  = param3
            event.param4  = param4
            event.param5  = param5
            event.param6  = param6
            event.param7  = param7
            event.param8  = param8
            event.param9  = param9
            event.param10 = param10
            for (key, value) in ev {
                event.addEventValue(prop: key, val: value)
            }
            TrackierSDK.trackEvent(event: event)

            pluginResult = CDVPluginResult(
                status: CDVCommandStatus_OK,
                messageAs: msg
            )
        }
        self.commandDelegate!.send(
            pluginResult, 
            callbackId: command.callbackId
        )

    }

    func convertStringToDictionary(text: String) -> [String:AnyObject]? {
        if let data = text.data(using: .utf8) {
            do {
                let json = try JSONSerialization.jsonObject(with: data, options: .mutableContainers) as? [String:AnyObject]
                return json
            } catch {}
        }
        return nil
    }
}
