import { createSelector } from 'reselect';

const getClients = state => state.clients;

const getAverageAge = createSelector(
  getClients,
  clientList => {
    const totalAge = clientList.reduce((acc, client) => acc + Number(client.age), 0);
    const averageAge = clientList.length > 0 ? totalAge / clientList.length : 0;
    return averageAge;
  }
);

const getStandardDeviation = createSelector(
  getClients,
  getAverageAge,
  (clientList, averageAge) => {
    const squaredDifferences = clientList.reduce((acc, client) => acc + Math.pow(client.age - averageAge, 2), 0);
    const variance = clientList.length > 0 ? squaredDifferences / clientList.length : 0;
    const standardDeviation = Math.sqrt(variance);
    return standardDeviation;
  }
);

const getLifeExpectancyByAge = createSelector(
  getClients,
  (_, age) => age,
  (clientList, age) => {
    const lifeExpectancy = (84 - age) / 2;
    return lifeExpectancy;
  }
);

export {
	getAverageAge,
	getStandardDeviation,
	getLifeExpectancyByAge,
}