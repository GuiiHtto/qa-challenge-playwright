import { test } from '@playwright/test';
import axios from 'axios';
import { expect } from 'chai';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface ApiResponse {
  data: User[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

test.describe('ReqRes API Tests', () => {
  test('should fetch users and validate the response', async () => {
    const response = await axios.get<ApiResponse>('https://reqres.in/api/users?page=2');
    const responseData = response.data;

    // Validate the response data
    expect(response.status).to.equal(200);
    expect(responseData.page).to.equal(2);
    expect(responseData.data).to.be.an('array');

    responseData.data.forEach(user => {
      expect(user).to.have.property('id');
      expect(user).to.have.property('email');
      expect(user).to.have.property('first_name');
      expect(user).to.have.property('last_name');
      expect(user).to.have.property('avatar');
    });
  });
});