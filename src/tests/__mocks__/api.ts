// __mocks__/api.ts

const mockResponse = {
  items: [
    {
      user_id: 1,
      display_name: 'User1',
      profile_image: 'https://example.com/profile_image.jpg',
      reputation: 1000,
    },
    {
      user_id: 2,
      display_name: 'User2',
      profile_image: 'https://example.com/profile_image.jpg',
      reputation: 2000,
    },
  ],
};

const mockFetch = jest.fn().mockImplementation((input, init) => {
  if (init && init.method === 'POST') {
    return Promise.reject(new Error('Method not allowed'));
  }

  if (input === '/api/users') {
    return Promise.resolve(mockResponse);
  }

  return Promise.reject(new Error('Mocked fetch not used'));
});

jest.mock('jest-fetch-mock');

export const fetch = mockFetch;

