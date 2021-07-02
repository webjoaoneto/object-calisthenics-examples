import * as userMock from './mock/user.json';

export type User = {
  [key: string]: any
}


export type UserInfo = {
  [key: string]: any
}

export class GetUserData {
  private _userData: User;

  constructor() {
    this._userData = userMock.users;
  }

  getUser(index: number)
  {
    return this._userData[index];
  }

  getInfo(index: number)
  {
    if (!this._userData[index].userData) {
      return;
    }

    const infoObject: UserInfo = {};

    this._userData[index].userData.map((data: UserInfo) => {
      for (let i in data) {
        infoObject[i] = data[i];
      }
    });

    return infoObject;
  }
}

