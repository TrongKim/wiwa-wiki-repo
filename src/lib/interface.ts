export interface ICharacter {
    id: number;
    name: string;
    card: string;
    rank: number;
    release_date: string;
    element: string;
    weapon_type: string;
}

export interface ICharacterDetail extends ICharacter {
    description: string;
    tag: number[];
    icon: string;
    body: string;
    foot: string;
    birthday: string;
    sex: string;
    country: string;
    influence: string;
    forte_name: string;
    forte_bar: string;
    forte_desc: string[];
    cv_cn: string;
    cv_en: string;
    cv_jp: string;
    cv_ko: string;
    stats: IAllStat;
}

export const indexRangeZero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
export const indexRangeOne = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
export const indexRangeTwo = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
export const indexRangeThree = [51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
export const indexRangeFour = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70];
export const indexRangeFive = [71, 72, 73, 74, 75, 76, 77, 78, 79, 80];
export const indexRangeSix = [81, 82, 83, 84, 85, 86, 88, 88, 89, 90];

export interface IAllStat {
    0: IHashIndex<typeof indexRangeZero, IStatCharacter>;
    1: IHashIndex<typeof indexRangeOne, IStatCharacter>;
    2: IHashIndex<typeof indexRangeTwo, IStatCharacter>;
    3: IHashIndex<typeof indexRangeThree, IStatCharacter>;
    4: IHashIndex<typeof indexRangeFour, IStatCharacter>;
    5: IHashIndex<typeof indexRangeFive, IStatCharacter>;
    6: IHashIndex<typeof indexRangeSix, IStatCharacter>;
}

export type THashIndexStatList = 
    IHashIndex<typeof indexRangeZero, IStatCharacter> |
    IHashIndex<typeof indexRangeOne, IStatCharacter> |
    IHashIndex<typeof indexRangeTwo, IStatCharacter> |
    IHashIndex<typeof indexRangeThree, IStatCharacter> |
    IHashIndex<typeof indexRangeFour, IStatCharacter> |
    IHashIndex<typeof indexRangeFive, IStatCharacter> |
    IHashIndex<typeof indexRangeSix, IStatCharacter>;
export interface IStatCharacter {
    Life: number;
    Atk: number;
    Def: number;
}

export type IHashIndex<N extends number[], T extends Object> = {
    [K in N[number]]: T;
}