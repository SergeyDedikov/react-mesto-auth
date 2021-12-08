//* API config */

const apiConfig = {
  authUrl: "https://auth.nomoreparties.co",
  dataUrl: "https://mesto.nomoreparties.co",
  cohortId: "cohort-29",
  tokenId: "aac8a826-6020-4164-947b-69b028e1e5c6",
};

class Api {
  constructor(config) {
    this._authUrl = config.authUrl;
    this._dataUrl = config.dataUrl;
    this._cohortId = config.cohortId;
    this._tokenId = config.tokenId;
    this._headers = {
      authorization: this._tokenId,
      "Content-Type": "application/json",
    };
    this._headersAuth = {
      "Content-Type": "application/json",
    };
  }

  _checkResult = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`${res.status}`);
    }
  };

  register({ password, email }) {
    return fetch(`${this._authUrl}/signup`, {
      method: "POST",
      headers: this._headersAuth,
      body: JSON.stringify({
        password,
        email,
      }),
    }).then(this._checkResult);
  }

  login({ password, email }) {
    return fetch(`${this._authUrl}/signin`, {
      method: "POST",
      headers: this._headersAuth,
      body: JSON.stringify({
        password,
        email,
      }),
    }).then(this._checkResult);
  }

  checkToken(token) {
    return fetch(`${this._authUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkResult);
  }

  getCardList() {
    return fetch(`${this._dataUrl}/v1/${this._cohortId}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResult);
  }

  getUserInfo() {
    return fetch(`${this._dataUrl}/v1/${this._cohortId}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResult);
  }

  setUserAvatar({ avatar }) {
    return fetch(`${this._dataUrl}/v1/${this._cohortId}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar,
      }),
    }).then(this._checkResult);
  }

  setUserInfo({ name, about }) {
    return fetch(`${this._dataUrl}/v1/${this._cohortId}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then(this._checkResult);
  }

  addNewCard({ name, link }) {
    return fetch(`${this._dataUrl}/v1/${this._cohortId}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then(this._checkResult);
  }

  deleteCard(card) {
    return fetch(`${this._dataUrl}/v1/${this._cohortId}/cards/${card._id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResult);
  }

  changeLikeCardStatus(card, isLiked) {
    return fetch(
      `${this._dataUrl}/v1/${this._cohortId}/cards/likes/${card._id}`,
      {
        method: isLiked ? "PUT" : "DELETE",
        headers: this._headers,
      }
    ).then(this._checkResult);
  }
}

const api = new Api(apiConfig);

export default api;
