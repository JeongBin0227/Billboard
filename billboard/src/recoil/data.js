const csSelector = selector({
  key: 'csSelector',
  get: async () => {
    const response = await fetch(`${host}/apis/v1/company/cs`);
    return await response.json();
  },
});

const eventsSelector = selector({
  key: 'eventsSelector',
  get: async () => {
    const response = await fetch(`${host}/apis/v1/company/events`);
    return await response.json();
  },
});

