type Environment = 'development' | 'production'

export class TrackierConfig{
    constructor(appToken: string, environment: Environment)
}

export class TrackierSDK {
    initialize: (trackierConfig: TrackierConfig) => void
    trackEvent: (trackierEvent:TrackierEvent) => void
}

export class TrackierEvent{
    constructor(eventId:string)
    setEventValue: (key:string,value:string) => void
}