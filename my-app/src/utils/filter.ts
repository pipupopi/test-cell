interface sortAlphabetically {
  body: string;
  id: number;
  title: string;
  userId: number;
  [key: string]: string | number;
}

export function sortAlphabetically(
  array: sortAlphabetically[],
  key: string
) {
  return array.sort((a, b) => {
    return String(a[key]).localeCompare(String(b[key]));
  });
}
