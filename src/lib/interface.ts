import type { ECharacterWeaponType } from "./enum";

export interface IEcho {
  id: string;
  name: string;
  intensity: string;
  icon: string;
}
export interface IWeapon {
  id: string;
  name: string;
  icon: string;
  rarity: number;
  type: ECharacterWeaponType;
}

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
  ascensions: IHashIndex<RangeNumberArray<0, 7>, IKeyValue[]>;
}

export interface IResonatorSkillAttribute {
  attributeId: string;
  attributeName: string;
  values: string[];
  Description: string;
}

export interface ISkillConsume {
  Key: number;
  Value: number;
  Icon: string;
  QualityId: number;
}
export interface IResonatorSkillConsume {
  SkillId: number;
  Consume: ISkillConsume[];
}

export interface IResonatorSkill {
  id: string;
  resonator_id: string;
  type: string;
  name: string;
  description: string;
  icon: string;
  attributes: IResonatorSkillAttribute[];
  consumes: IResonatorSkillConsume[];
}

export interface IKeyValue {
  Key: number;
  Value: number;
}

export interface IAllStat {
  0: IHashIndex<RangeNumberArray<0, 21>, IStatCharacter>;
  1: IHashIndex<RangeNumberArray<21, 41>, IStatCharacter>;
  2: IHashIndex<RangeNumberArray<41, 51>, IStatCharacter>;
  3: IHashIndex<RangeNumberArray<51, 61>, IStatCharacter>;
  4: IHashIndex<RangeNumberArray<61, 71>, IStatCharacter>;
  5: IHashIndex<RangeNumberArray<71, 81>, IStatCharacter>;
  6: IHashIndex<RangeNumberArray<81, 91>, IStatCharacter>;
}

export type THashIndexStatList =
  IHashIndex<RangeNumberArray<0, 21>, IStatCharacter> |
  IHashIndex<RangeNumberArray<21, 41>, IStatCharacter> |
  IHashIndex<RangeNumberArray<41, 51>, IStatCharacter> |
  IHashIndex<RangeNumberArray<51, 61>, IStatCharacter> |
  IHashIndex<RangeNumberArray<61, 71>, IStatCharacter> |
  IHashIndex<RangeNumberArray<71, 81>, IStatCharacter> |
  IHashIndex<RangeNumberArray<81, 91>, IStatCharacter>;
export interface IStatCharacter {
  Life: number;
  Atk: number;
  Def: number;
}

export type IHashIndex<N extends number[], T extends Object> = {
  [K in N[number]]: T;
}

export interface IItem {
  id: number;
  icon: string;
  rank: number;
  name: string;
  tag: string;
  description: string | null;
  background: string | null;
}

export type TAscensionEntry = {
  Key: number;
  Value: number;
};

export type TDisplayAscension = {
  level: number;
  items: {
    id: number;
    quantity: number;
    name?: string;
    icon?: string;
    tag?: string;
    rank?: number;
  }[];
};



export type TypeGetObjectKeyOfType<Obj extends Object, Type> = {
  [Key in keyof Obj as Obj[Key] extends Type ? Key : never]: Obj[Key];
};

export type ChildObjectFromParentObject<ParentObject extends Object, ChildObject extends ParentObject> = {
  [Key in keyof ChildObject as Key extends keyof ParentObject ? Key : never]: ChildObject[Key];
};

type TypeEnumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : TypeEnumerate<N, [...Acc, Acc['length']]>;

type RangeNumber<Start extends number, End extends number> = Exclude<TypeEnumerate<End>, TypeEnumerate<Start>>;
type RangeNumberArray<Start extends number, End extends number> = Array<RangeNumber<Start, End>>;

export type TypeDesignSize<Types extends string[], Start extends number, End extends number> = `${RangeNumber<
  Start,
  End
>}${Types[number]}`;

export type Typeof<T extends Object, Key extends keyof T> = T[Key];

export type KeyValueObject<Obj extends Object> = {
  key: keyof Obj;
  value: Obj[keyof Obj];
};

export type CreateObjectWithKeyValue<Key extends string, Value> = {
  [k in Key]: Value;
};

export type Test<Obj extends Object, arr extends Array<keyof Obj>> = {
  [Key in arr[number]]: Obj[Key];
}