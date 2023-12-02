import { base } from "$app/paths";

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

export interface UserDataType {
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
];