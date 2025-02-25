import "./firebase.js";
import "firebase/auth";
import "firebase/firestore";
import { w as writable } from "./index2.js";
var Language = /* @__PURE__ */ ((Language2) => {
  Language2["English"] = "en";
  Language2["Russian"] = "ru";
  return Language2;
})(Language || {});
const authStore = writable({
  user: null,
  loading: true,
  data: {
    name: "template",
    email: "",
    phone: "",
    country: "",
    description: "",
    messages: []
  }
});
const blogPost = writable({
  id: "",
  title: "",
  images: [],
  author: "John Berkley",
  authorEmail: "john.example@gmail.com",
  description: "Lorem ipsum",
  price: 1,
  date: /* @__PURE__ */ new Date()
});
const isAdmin = writable({
  value: false
});
export {
  Language as L,
  authStore as a,
  blogPost as b,
  isAdmin as i
};
