// __tests__/health.test.js
import { getHealthStatus } from '../src/js/health.js';

test('should return "healthy" when health is above 50', () => {
  const result = getHealthStatus({ name: 'Маг', health: 90 });
  expect(result).toBe('healthy');
});

test('should return "wounded" when health is exactly 50', () => {
  const result = getHealthStatus({ name: 'Маг', health: 50 });
  expect(result).toBe('wounded');
});

test('should return "wounded" when health is exactly 15', () => {
  const result = getHealthStatus({ name: 'Маг', health: 15 });
  expect(result).toBe('wounded');
});

test('should return "critical" when health is below 15', () => {
  const result = getHealthStatus({ name: 'Маг', health: 10 });
  expect(result).toBe('critical');
});