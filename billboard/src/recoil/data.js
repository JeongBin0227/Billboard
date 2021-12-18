const csSelector = selector({
  key: 'csSelector',
  get: async () => {
    const response = await fetch(`${host}/apis/v1/company/cs`);
    return await response.json();
  },
});
