export class Type {
  private _id: string;
  private _libelle: string;
  constructor(id: string, libelle: string) {
    this._id = id;
    this._libelle = libelle;
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
}
