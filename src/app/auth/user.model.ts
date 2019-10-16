export class User {
  // tslint:disable-next-line:variable-name
  constructor(public email: string,
              // tslint:disable-next-line:variable-name
              public id: string,
              // tslint:disable-next-line:variable-name
              private _token: string,
              // tslint:disable-next-line:variable-name
              private _tokenExpirationDate: Date) {
  }

  get tokenExpirationDate(): Date {
    return this._tokenExpirationDate;
  }

  get token() {
    if (!this.tokenExpirationDate || new Date() > this.tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}
