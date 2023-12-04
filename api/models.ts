export interface Transport {
    id: number, 
    title: string, 
    type: number, 
    latitude: string,
    longitude: string
    driverName: string,
    driverNumber: string,
    photo: string,
};

export interface Localization {
    cars: string,
    settings: string,
    lang: string,
    transportUnloaded: string,
    changeLang: string,
    developer: string,
    carsTypeShort: {
        cargo: string,
        passenger: string,
        specialized: string,
    },
    carsTypeLong: {
        cargo: string,
        passenger: string,
        specialized: string,
    },
    viewTypes: {
        map: string,
        list: string,
    },
    ymap: string,
    mapIsLoading: string,
    info: string,
    call: string,
    write: string,
    whatsappText: string,
    networkError: string,
}

export interface YandexMapProps {
    points: Transport[];
    zoom?: string;
  }