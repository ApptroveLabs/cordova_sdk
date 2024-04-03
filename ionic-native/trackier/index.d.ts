import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
export declare enum TrackierEnvironment {
    Development = "development",
    Production = "production",
    Testing = "testing"
}
export declare class TrackierConfig {
    private appToken;
    private environment;
    private secretId;
    private secretKey;
    private manualMode;
    private disableOrganic;
    boolean: boolean;
    constructor(appToken: string, environment: TrackierEnvironment);
    setAppSecret(key: string, value: string): void;
    setManualMode(value: boolean): void;
    disableOrganicTracking(value: boolean): void;
}
export declare class TrackierEvent {
    private eventId;
    private orderId;
    private currency;
    private couponCode;
    private discount;
    private param1;
    private param2;
    private param3;
    private param4;
    private param5;
    private param6;
    private param7;
    private param8;
    private param9;
    private param10;
    private revenue;
    constructor(eventId: string);
    setOrderId(orderId: string): void;
    setCurrency(currency: string): void;
    setCouponCode(couponCode: string): void;
    setDiscount(discount: number): void;
    setParam1(param1: string): void;
    setParam2(param2: string): void;
    setParam3(param3: string): void;
    setParam4(param4: string): void;
    setParam5(param5: string): void;
    setParam6(param6: string): void;
    setParam7(param7: string): void;
    setParam8(param8: string): void;
    setParam9(param9: string): void;
    setParam10(param10: string): void;
    setRevenue(revenue: number): void;
    setEventValue: (key: string, value: string) => void;
}
export declare class TrackierCordovaPluginOriginal extends AwesomeCordovaNativePlugin {
    initializeSDK(config: TrackierConfig): Promise<any>;
    trackEvent(event: TrackierEvent): Promise<any>;
    setUserId(userId: string): Promise<string>;
    setUserEmail(userEmail: any): Promise<string>;
    setUserName(userName: any): Promise<string>;
    setUserPhone(userPhone: any): Promise<string>;
    setDOB(dob: any): Promise<string>;
    setGender(gender: any): Promise<string>;
    parseDeepLink(uri: any): Promise<string>;
    fireInstall(): Promise<string>;
    getTrackierId(): Promise<string>;
    getAd(): Promise<string>;
    getAdID(): Promise<string>;
    getCampaign(): Promise<string>;
    getCampaignID(): Promise<string>;
    getAdSet(): Promise<string>;
    getAdSetID(): Promise<string>;
    getChannel(): Promise<string>;
    getP1(): Promise<string>;
    getP2(): Promise<string>;
    getP3(): Promise<string>;
    getP4(): Promise<string>;
    getP5(): Promise<string>;
    getClickId(): Promise<string>;
    getDlv(): Promise<string>;
    getPid(): Promise<string>;
    getIsRetargeting(): Promise<string>;
}

export declare const TrackierCordovaPlugin: TrackierCordovaPluginOriginal;