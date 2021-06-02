import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

export enum TrackierEnvironment {
	Development = 'development',
	Production = 'production'
}

export class TrackierConfig {
	private appToken: string;
	private environment: TrackierEnvironment;
	constructor(appToken: string, environment: TrackierEnvironment) {
		this.appToken = appToken;
		this.environment = environment;
	}
}

export class TrackierEvent {

	private eventId: string;
	private orderId: string;
	private currency: string;
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
	public setCurrency(currency: string): void {
		this.currency = currency;
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
export class TrackierCordovaPlugin extends IonicNativePlugin {

	@Cordova()
	initializeSDK(config: TrackierConfig): Promise<any> {
		return;
	}

	@Cordova()
	trackEvent(event: TrackierEvent): Promise<any> {
		return;
	}

}
