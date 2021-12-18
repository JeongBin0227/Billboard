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

const vacationsSelector = selector({
  key: 'vacationsSelector',
  get: async () => {
    const response = await fetch(`${host}/apis/v1/company/vacations`);
    return await response.json();
  },
});

const healthSelector = selector({
  key: 'healthSelector',
  get: async () => {
    const response = await fetch(`${host}/apis/v1/health`);
    return await response.json();
  },
});

