export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type AccessTokenPayload = User;

export type AuthJwtPayload = {
  sub: string;
  email: string;
  name: string;
};
