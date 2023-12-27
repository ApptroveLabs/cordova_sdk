import Cordova
import trackier_ios_sdk

@objc(TrackierCordovaPlugin) 
class TrackierCordovaPlugin : CDVPlugin {
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
            let config = TrackierSDKConfig(appToken: appToken , env: environment)
            config.setSDKType(sdkType: "cordova_sdk")
            config.setSDKVersion(sdkVersion: "1.6.48")
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
