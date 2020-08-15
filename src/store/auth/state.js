import {LocalStorage} from 'quasar'

export default function () {
  return {
    user: {
      name: "Tun Cham Roeun",
      email: "chamroeuntun25@outlook.com",
      token: LocalStorage.getItem("userInfo") || '',
    },
  }
}
