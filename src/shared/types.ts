import { base } from "$app/paths";
import type { User } from "firebase/auth";

export enum Language {
    English = 'en',
    Russian = 'ru',
  }

  export type Slide = {
    img: string;
  };

  export enum Errors {
    VerifyPass = "Error while verifying your current pass!",
    RepeatPass = "Your passwords don't match each other!",
    SmallPass = "Your passwords must contain out of 6 symbols!",
    EmptyInput = "Your input is empty, fill it the right way!",
    Authentication = "Error while Authenticating user! Please check your credentials, again.",
    Register = "",
    Logout = "",

    EditProfile = "Error while editing profile!",
    EditCredentialProfile = "",
    DeleteProfile="Error while deleting the user!",
    DeleteProfileAuth = "Error while deleting user's credential!",
    DeleteProfileStore = "Error while deleting user in db!",


    AddComment ="Error while adding a comment!",
    SaveComment = "Error while saving comments!",
    EditComment = "Error while editing comments!",
    DeleteComment = "Error while deleting comments!",

    CreatePost = "",
    EditPost="",
    DeletePost = "",

    NoUserToAddToCart = "Error while adding item to cart, because there is no user",
    AddToCart = "Error while adding item to cart!",
    DeleteAtCart = "",
    GetCheckAtCart ="",
    PurchasePost = "",

    FetchUser = "Error while fetching user's info!",
    FetchUsers = "Error while fetching info about users!",
    FetchProfile ="Error while fetching user's profile!",
    FetchPost = "Error while fetching the post's info!",
    FetchPosts = "Error while fetching posts!",
    FetchComments = "Error while fetching comments!",
    FetchCart = "",

    InternalError = "This is internal error, please, contact admin to fix the error",
    BadPass ="Error while creating svelte component (passing values)",
  }

export enum SortMethod{
    Default = 0,
    NameAlpha = 1,
    EmailAlpha = 2,
    CartLow = 3,
    CartHigh = 4,
}

export interface ProductType {
    id:string,
    images:string[],
    price:string,
    title:string,
    description: Map<string,string|string[]>,
    isArchive:boolean,
    section:string,

} 



export interface MessageType {
    cid:string,
    id:string,
    comment:string,
    post:string,
}

export interface AuthStoreType {
    user:User | null,
    loading:boolean,
    data:UserDataType,
} 

export interface UserDataType {
    id:string,
    name: string ,
    email: string ,
    phone: string ,
    country: string ,
    description: string,
    messages: MessageType[],
    cart:ProductType[],
} 



export const nonAuthRoutes = [
    `${base}/`,
    `${base}/about`,
    `${base}/contact`,
    `${base}/login`,
    `${base}/shop`,
    `${base}/works`,
    `${base}/posts`,
];

export const AdminRoutes = [
    `${base}/dashboard`,
    `${base}/stat`,
    `${base}/create`,
    `${base}/posts`,
];