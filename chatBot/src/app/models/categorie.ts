import {Type} from './type';

export class Categorie {
  private _id: string;
  private _libelle: string;
  private _description: string;
  private _typeId: Type;

  constructor(id: string, libelle: string, description: string, typeId: Type) {
    this._id = id;
    this._libelle = libelle;
    this._description = description;
    this._typeId = typeId;
  }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get libelle(): string {
    return this._libelle;
  }

  set libelle(value: string) {
    this._libelle = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get typeId(): Type {
    return this._typeId;
  }

  set typeId(value: Type) {
    this._typeId = value;
  }
}
