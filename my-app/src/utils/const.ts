import { nanoid } from "nanoid";

export const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const CELL_TITLES = [
  { id: nanoid(), title: "ID", label: "id" },
  { id: nanoid(), title: "Заголовок", label: "title" },
  { id: nanoid(), title: "Описание", label: "body" },
];

export const SELECT_OPTIONS = [
  { id: nanoid(), value: "По алфавиту" },
  { id: nanoid(), value: "От большего к меньшему" },
];

export const REGAX_FORMAT = /\n/g;

export const MAX_PAGE_ELEMENTS = 10;
export const FIRST_PAGE_ELEMENT = 1;
export const ONE_PAGE = 1;
export const EMPTY_STRING = " ";
