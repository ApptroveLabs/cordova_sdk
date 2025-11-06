import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { fromEvent } from 'rxjs';

export enum TrackierEnvironment {
	Development = 'development',
	Production = 'production',
	Testing = 'testing',
}

export enum TrackierRegion {
	IN = 'IN',
	GLOBAL = 'GLOBAL',
	NONE = 'NONE'
}

export enum TrackierEncryptionType {
	AES_GCM = 'AES_GCM'
}

export class TrackierConfig {
	private appToken: string;
	private environment: TrackierEnvironment;
	private secretId: string = '';
	private secretKey: string = '';
	private manualMode: boolean = false;
	private disableOrganic: boolean = false;
	private facebookAppId: string = '';
	private androidId: string = '';
	private attributionParams: { [key: string]: string } = {};
	private region: string = '';
	
	constructor(appToken: string, environment: TrackierEnvironment) {
		this.appToken = appToken;
		this.environment = environment;
		this.secretId = this.secretId;
		this.secretKey = this.secretKey;
		this.manualMode = this.manualMode;
		this.disableOrganic = this.disableOrganic;
		this.androidId = this.androidId;
		this.facebookAppId = this.facebookAppId;
	}

	public setAppSecret(key: string, value: string): void {
		this.secretId = key;
		this.secretKey = value;
	}

	public setManualMode(value: boolean): void {
		this.manualMode = value
	}

	public disableOrganicTracking(value: boolean): void {
		this.disableOrganic = value
	}

	public setAttributionParams(params: { [key: string]: string }): void {
		this.attributionParams = { ...this.attributionParams, ...params };
	} 

	public setFacebookAppId(value: string): void {
		this.facebookAppId = value;
	}

	public setAndroidId(value: string): void {
		this.androidId = value;
	}

	public setRegion(region: TrackierRegion): void {
		this.region = region;
	}

	public setAppID(value: string): void {
		this.appId = value;
	}

	public setEncryptionKey(value: string): void {
		this.encryptionKey = value;
	}

	public setEncryptionType(value: TrackierEncryptionType | string): void {
		this.encryptionType = value;
	}

}

export class TrackierEvent {

	private eventId: string;
	private orderId: string;
	private productId: string;
	private currency: string;
	private couponCode: string;
	private discount: number
	private param1: string;
	private param2: string;
	private param3: string;
	private param4: string;
	private param5: string;
	private param6: string;
	private param7: string;
	private param8: string;
	private param9: string;
	private param10: string;
	private revenue: number;

	constructor(eventId: string) {
		this.eventId = eventId;
	}

	public setOrderId(orderId: string): void {
		this.orderId = orderId;
	}
	public setProductId(productId: string): void {
		this.productId = productId;
	}
	public setCurrency(currency: string): void {
		this.currency = currency;
	}
	public setCouponCode(couponCode: string): void {
		this.couponCode = couponCode;
	}
	public setDiscount(discount: number): void {
		this.discount = discount;
	}
	public setParam1(param1: string): void {
		this.param1 = param1;
	}
	public setParam2(param2: string): void {
		this.param2 = param2;
	}
	public setParam3(param3: string): void {
		this.param3 = param3;
	}
	public setParam4(param4: string): void {
		this.param4 = param4;
	}
	public setParam5(param5: string): void {
		this.param5 = param5;
	}
	public setParam6(param6: string): void {
		this.param6 = param6;
	}
	public setParam7(param7: string): void {
		this.param7 = param7;
	}
	public setParam8(param8: string): void {
		this.param8 = param8;
	}
	public setParam9(param9: string): void {
		this.param9 = param9;
	}
	public setParam10(param10: string): void {
		this.param10 = param10;
	}
	public setRevenue(revenue: number): void {
		this.revenue = revenue;
	}

	setEventValue: (key: string, value: string) => void
}


@Plugin({
	pluginName: 'TrackierCordovaPlugin',
	plugin: 'com.trackier.cordova_sdk', // npm package name, example: cordova-plugin-camera
	pluginRef: 'cordova.plugins.TrackierCordovaPlugin', // the variable reference to call the plugin, example: navigator.geolocation
	repo: 'https://github.com/trackier/cordova_sdk', // the github repository URL for the plugin
	//install: '', // OPTIONAL install command, in case the plugin requires variables
	//installVariables: [], // OPTIONAL the plugin requires variables
	platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class TrackierCordovaPlugin extends AwesomeCordovaNativePlugin {

	@Cordova()
	initializeSDK(config: TrackierConfig): Promise<void> {
		return;
	}
 
	 
	@Cordova()
	trackEvent(event: TrackierEvent): Promise<any> {
		return;
	}

	@Cordova()
	setUserId(userId: string): Promise<string> {
		return;
	}

	@Cordova()
	setUserEmail(userEmail: any): Promise<string> {
		return;
	}

	@Cordova()
	setUserName(userName: any): Promise<string> {
		return;
	}

	@Cordova()
	setUserPhone(userPhone: any): Promise<string> {
		return;
	}

	@Cordova()
	setDOB(dob: any): Promise<string> {
		return;
	}

	@Cordova()
	setGender(gender: any): Promise<string> {
		return;
	}

	@Cordova()
	parseDeepLink(uri: any): Promise<string> {
		return;
	}

	@Cordova()
	fireInstall(): Promise<string> {
		return;
	}

	@Cordova()
	getTrackierId(): Promise<string> {
		return;
	}

	@Cordova()
	getAd(): Promise<string> {
		return;
	}

	@Cordova()
	getAdID(): Promise<string> {
		return;
	}

	@Cordova()
	getCampaign(): Promise<string> {
		return;
	}

	@Cordova()
	getCampaignID(): Promise<string> {
		return;
	}

	@Cordova()
	getAdSet(): Promise<string> {
		return;
	}

	@Cordova()
	getAdSetID(): Promise<string> {
		return;
	}

	@Cordova()
	getChannel(): Promise<string> {
		return;
	}

	@Cordova()
	getP1(): Promise<string> {
		return;
	}

	@Cordova()
	getP2(): Promise<string> {
		return;
	}

	@Cordova()
	getP3(): Promise<string> {
		return;
	}

	@Cordova()
	getP4(): Promise<string> {
		return;
	}

	@Cordova()
	getP5(): Promise<string> {
		return;
	}

	@Cordova()
	getClickId(): Promise<string> {
		return;
	}

	@Cordova()
	getDlv(): Promise<string> {
		return;
	}

	@Cordova()
	getPid(): Promise<string> {
		return;
	}

	@Cordova()
	getIsRetargeting(): Promise<string> {
		return;
	}

	@Cordova()
	updateAppleAdsToken(token: any): Promise<string> {
		return;
	}

	@Cordova()
	createDynamicLink(value: any): Promise<string> {
		return;
	}

	@Cordova()
	setMacAddress(value: any): Promise<string> {
		return;
	}

	@Cordova()
	setIMEI(value: any): Promise<string> {
		return;
	}

	@Cordova()
	resolveDeeplinkUrl(url: string): Promise<{
		url: string;
		dlv: string;
		sdkParams: { [key: string]: any };
	}> {
		return;
	}

	@Cordova()
	sendFcmToken(token: string): Promise<string> {
		return;
	}

	@Cordova()
	subscribeAttributionlink(): Promise<string> {
		return;
	}

	@Cordova()
	updatePostbackConversion(conversionValue: number): Promise<string> {
		return;
	}

	@Cordova()
	waitForATTUserAuthorization(timeoutInterval: number): Promise<string> {
		return;
	}

	@Cordova({
		observable: true // This allows callback-based events
	  })
	  setDeferredDeeplinkCallbackListener(): Observable<string> {
		return new Observable((observer) => {
		  cordova.exec(
			(deepLinkUrl: string) => {
			observer.next(deepLinkUrl);
			observer.complete();
			},
			(error: any) => {
			observer.error(error);
			},
			"TrackierCordovaPlugin",
			"trackier_deferredDeeplink",
			[]
		  );
		});
	}

	@Cordova()
	storeRetargetting(dob: any): Promise<string> {
		return;
	}
}