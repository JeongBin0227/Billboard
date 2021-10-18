import { atom, selector } from 'recoil';

const getName = (name) =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve({ name });
    }, 1000);
  });

export const currentUserNameState = atom({
  key: 'currentUserNameState',
  default: 'Kkangil',
});

export const currentUserName = selector({
  key: 'currentUserName',
  get: async ({ get }) => {
    const response = await getName(get(currentUserNameState));
    return response.name;
  },
});

export const countState = atom({
  key: 'countState',
  default: 0,
});

export const countEvenState = selector({
  key: 'countEvenState',
  get: ({ get }) => get(countState) % 2 === 0,
  set: ({ set }, newValue) => set(countState, newValue),
});
