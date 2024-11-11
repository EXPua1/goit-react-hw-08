import { createSelector } from "@reduxjs/toolkit";
import { selectContactsList } from "../contacts/selectors";
// selectors.js

export const selectNameFilter = (state) => state.filter.name;

export const selectFilteredContacts = createSelector(
  [selectContactsList, selectNameFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    const isNumericFilter = /^(\+?\d+)$/.test(normalizedFilter); // Проверка на числа с опциональным плюсом в начале

    return Array.isArray(contacts)
      ? contacts.filter(
          (contact) =>
            isNumericFilter
              ? contact.number.includes(normalizedFilter) // Фильтрация по номеру телефона
              : contact.name.toLowerCase().includes(normalizedFilter) // Фильтрация по имени
        )
      : [];
  }
);
