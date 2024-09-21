import { FormControlItem, MenuItem, Option } from "./type";

export const menuItems: MenuItem[] = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "category",
    label: "Category",
    path: "/Category/application",
  },
  {
    id: "blogs",
    label: "Blogs",
    path: "/Blogs",
  },
  {
    id: "search",
    label: "Search",
    path: "/Search",
  },
];

export const categories: Option[] = [
  {
    value: "application",
    label: "Application",
  },
  {
    value: "data",
    label: "Data",
  },
  {
    value: "software",
    label: "Software",
  },
  {
    value: "tech",
    label: "Technology",
  },
  {
    value: "science",
    label: "Science",
  },
];

export const formControls: FormControlItem[] = [
  {
    id: "title",
    label: "Title",
    placeholder: "Enter Blog Title",
    type: "text",
    component: "input",
    options: [],
  },
  {
    id: "description",
    label: "Description",
    placeholder: "Enter Blog Description",
    type: "text",
    component: "textarea",
    options: [],
  },
  {
    id: "category",
    label: "Category",
    placeholder: "Choose Blog Category",
    type: "",
    component: "select",
    options: categories,
  },
];

export const firebaseConfig = {
  apiKey: "AIzaSyCawXZ1etqL3Xmrgp5bTreJHYIxqodelB4",
  authDomain: "blogtg-d3cd7.firebaseapp.com",
  projectId: "blogtg-d3cd7",
  storageBucket: "blogtg-d3cd7.appspot.com",
  messagingSenderId: "949638901588",
  appId: "1:949638901588:web:a8063ef28a72c826b6a2c1",
  measurementId: "G-18Q320HS8D"
};


export const initialBlogFormData = {
 title :  '',
 description : '',
 image : '',
 category : '' 
}