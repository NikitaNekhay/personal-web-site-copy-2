import { base } from "$app/paths";

export enum Language {
    English = 'en',
    Russian = 'ru',
  }

  export enum Errors {
    VerifyPass = "Error while verifying your current pass!",
    RepeatPass = "Your passwords don't match each other!",
    Authentication = "Error while Authenticating user! Please check your credentials, again.",
    Register = "",
    Logout = "",

    EditProfile = "error while updating profile",
    EditCredentialProfile = "",
    DeleteProfile="",
    
    AddComment ="",
    EditComment = "",
    DeleteComment = "",

    CreatePost = "",
    EditPost="",
    DeletePost = "",

    AddToCart = "",
    DeleteAtCart = "",
    GetCheckAtCart ="",
    PurchasePost = "",

    FetchUser = "no user",
    FetchUsers = "",
    FetchProfile ="",
    FetchPost = "",
    FetchPosts = "",
    FetchComments = "",
    FetchCart = "",

  }

export enum SortMethod{
    Default = 0,
    NameAlpha = 1,
    EmailAlpha = 2,
    CartLow = 3,
    CartHigh = 4,
}

export interface PostType {
    author: string,
    authorEmail:string,
    date:Date,
    description:string,
    id:string,
    images:string[],
    price:string,
    title:string,

} 

    export interface MessageType {
        cid:string,
        id:string,
        comment:string,
        post:string,
    }

export interface UserDataType {
    id:string,
    name: string ,
    email: string ,
    phone: string ,
    country: string ,
    description: string,
    messages: MessageType[],
    cart:PostType[],
} 

export interface AuthStoreType {
    name: string ,
    email: string ,
    phone: string ,
    country: string ,
    description: string,
    messages: [],
    cart:PostType[],
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