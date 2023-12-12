import FormsFetcher from "./db-forms/forms-fetcher";

export function getForm(form) {
  return FormsFetcher[form];
}

export function getColumns(table) {
  return table?.map((col) => col.name);
}

export function getAllColumns(table) {
  let columns = [];
  for (const key in table) {
    columns.push(...table[key]?.map((col) => col?.name));
  }
  return columns;
}

export const IGNORED_Fields = ['number', 'guid']