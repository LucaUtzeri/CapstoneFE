export interface SingleCard {
    id: number
    name: string
    type: string
    frameType: string
    desc: string
    pend_desc?: string
    monster_desc?: string
    atk?: number
    def?: number
    level?: number
    race: string
    attribute?: string
    archetype?: string
    scale?: number
    linkval?: number;
    linkmarkers?: string[];
    ygoprodeck_url: string;
    card_sets: CardSets[]
    card_images: CardImages[]
    card_prices: CardPrices[]
}
export interface SingleCardResponse {
    data: SingleCard[];
}
export interface AllCards {
    count: number;
    next: string;
    previous: null;
    data: CardNoDetail[];
}

export interface CardNoDetail {
    id: number;
    name: string;
    type: string;
    desc: string;
    pend_desc?: string
    monster_desc?: string
    card_images: CardImages[];
}

export interface CardSets {
    set_name: string
    set_code: string
    set_rarity: string
    set_rarity_code: string
    set_price: string
}

export interface CardImages {
    id: number;
    image_url: string;
    image_url_small: string;
    image_url_cropped: string;
}

export interface CardPrices {
    cardmarket_price: string
    tcgplayer_price: string
    ebay_price: string
    amazon_price: string
    coolstuffinc_price: string
}