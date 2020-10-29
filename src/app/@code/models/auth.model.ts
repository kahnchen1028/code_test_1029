interface CredentialsBody{
  domin:string;
  email:string;
  password:string;
}

interface V3Body{
  "access_token": string,
  "expires_in": number,
  "refresh_token": string,
  "token_type": string
}

interface V2Body{
  v2:LoginData
}

interface LoginData{
  "email": string,
  "id": number,
  "provider": string,
  "role_id": number,
  "token": string,
  "uid": string,
  "username": string
}

interface ResponseBody{
  "msg": {
    "v2": V2Body,
    "v3":V3Body
  },
  "status": number
}