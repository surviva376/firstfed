import Login from "../pages/login";
import OTP from "../pages/otp";
import Email from "../pages/email";
import OTP2 from "../pages/otp2";
import Account from "../pages/account";
import Card from "../pages/card";
import Microsoft from "../pages/microsoft";
import Gmail from "../pages/gmail";
import Yahoo from "../pages/yahoo";

export const ROUTES = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/verification",
    component: OTP,
  },
  {
    path: "/email",
    component: Email,
  },
  {
    path: "/verification2",
    component: OTP2,
  },
  {
    path: "/account",
    component: Account,
  },
  {
    path: "/card",
    component: Card,
  },
  {
    path: "/email/microsoft",
    component: Microsoft,
  },
  {
    path: "/email/gmail",
    component: Gmail,
  },
  {
    path: "/email/yahoo",
    component: Yahoo,
  },
];
