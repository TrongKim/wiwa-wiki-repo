import type { ECharacterElementType, ECharacterRare, ECharacterWeaponType, EEchoCost, EWeaponRare } from "./enum";

export interface IEchoSet {
  id: number;
  name: string;
  icon: string;
}

export interface IEchoSetDetail extends IEchoSet {
  color: string;
  set_2_desc: string;
  set_5_desc: string;
}

export interface IEcho {
  id: number;
  name: string;
  intensity: EEchoCost;
  icon: string;
  set_ids: number[];
}

export interface IEchoDetail extends IEcho {
  skill_desc: string;
  skill_simple_desc: string;
  skill_icon: string;
}

export interface IWeapon {
  id: number;
  name: string;
  icon: string;
  rarity: number;
  type: ECharacterWeaponType;
}

export interface IWeaponDetail extends IWeapon {
  description: string;
  effect_name: string;
  effect: string;
  ascensions: IHashIndex<RangeNumberArray<0, 5>, IKeyValue[]>;
  stats: IAllStat<IHashIndex<[0, 1], IStatWeapon>>;
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
  stats: IAllStat<IStatCharacter>;
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

export interface IResonatorChain {
  id: number;
  resonator_id: number;
  index: number;
  name: string;
  description: string;
  icon: string;
}

export interface IResonatorSkill {
  id: number;
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

export type IAllStat<T extends Object> = {
  0: IHashIndex<RangeNumberArray<0, 21>, T>;
  1: IHashIndex<RangeNumberArray<21, 41>, T>;
  2: IHashIndex<RangeNumberArray<41, 51>, T>;
  3: IHashIndex<RangeNumberArray<51, 61>, T>;
  4: IHashIndex<RangeNumberArray<61, 71>, T>;
  5: IHashIndex<RangeNumberArray<71, 81>, T>;
  6: IHashIndex<RangeNumberArray<81, 91>, T>;
}

export type THashIndexStatList<T extends Object> =
  IHashIndex<RangeNumberArray<0, 21>, T> |
  IHashIndex<RangeNumberArray<21, 41>, T> |
  IHashIndex<RangeNumberArray<41, 51>, T> |
  IHashIndex<RangeNumberArray<51, 61>, T> |
  IHashIndex<RangeNumberArray<61, 71>, T> |
  IHashIndex<RangeNumberArray<71, 81>, T> |
  IHashIndex<RangeNumberArray<81, 91>, T>;

export interface IStatCharacter {
  Life: number;
  Atk: number;
  Def: number;
}

export interface IStatWeapon {
  IsPercent: boolean;
  isRatio: boolean;
  Name: string;
  Value: number;
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

export interface IItemsUpgradeResonator {
  id: number;
  quantity: number;
  name?: string;
  icon?: string;
  tag?: string;
  rank?: number;
}

export type TDisplayAscension = {
  level: number;
  items: IItemsUpgradeResonator[];
};

export interface IFilter {
  rarity: string;
  type: string;
  element: string;
  specialStat: string;
  region: string;
  bodyType: string;
}

export interface TFilter<T> {
  code: T | 0,
  name: string;
}

export interface IFilterWeapon {

}

export interface IFilterT {
  element: TFilter<ECharacterElementType>[];
  bodyType: TFilter<2 | 3 | 4>[];
  rarity: TFilter<ECharacterRare>[];
  rarity_weapon: TFilter<EWeaponRare>[];
  type: TFilter<ECharacterWeaponType>[];
  echo: TFilter<EEchoCost>[];
  set: TFilter<number>[];
}

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