/* eslint-disable no-unused-vars */
import { type ViteSSGContext } from "vite-ssg";

export type UserModule = (ctx: ViteSSGContext) => void;

export type LoginInformation = {
  email: string;
  password: string;
};
