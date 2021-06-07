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

    @objc(trackEvent:)
    func trackEvent(command: CDVInvokedUrlCommand) {
        var pluginResult = CDVPluginResult(
            status: CDVCommandStatus_ERROR
        )
        let msg = command.arguments[0] as? String ?? ""
        if (msg.count > 0) {
            let dict = convertStringToDictionary(text: msg)
            let currency: String = dict?["currency"] as? String ?? ""
            let revenue: String = dict?["revenue"] as? String ?? ""
            let eventId: String = dict?["eventId"] as! String
            let orderId: String = dict?["orderId"] as? String ?? ""
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
            event.setRevenue(revenue: Float64((revenue as NSString).floatValue), currency: currency)
            event.orderId = orderId
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
