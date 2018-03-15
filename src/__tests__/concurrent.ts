
describe('My tests', () => {

  describe('first group', () => {
    it.concurrent('first', async () => {
      await wait(getRandomInt(100, 1000));
      const result = {data: 'first'};
      expect(result).toMatchSnapshot('first')
    });

    it.concurrent('second', async () => {
      await wait(getRandomInt(100, 1000));
      const result = {data: 'second'};
      expect(result).toMatchSnapshot('second')
    });

    it.concurrent('third', async () => {
      await wait(getRandomInt(100, 1000));
      const result = {data: 'third'};
      expect(result).toMatchSnapshot('third')
    });

    it.concurrent('fourth', async () => {
      await wait(getRandomInt(100, 1000));
      const result = {data: 'fourth'};
      expect(result).toMatchSnapshot('fourth')
    });

    it.concurrent('fifth', async () => {
      await wait(getRandomInt(100, 1000));
      const result = {data: 'fifth'};
      expect(result).toMatchSnapshot('fifth')
    });
  });

  describe('second group', () => {
    it.concurrent('first', async () => {
      await wait(getRandomInt(100, 1000));
      const result = {data: 'first', group:2};
      expect(result).toMatchSnapshot('2_first')
    });

    it.concurrent('second', async () => {
      await wait(getRandomInt(100, 1000));
      const result = {data: 'second', group:2};
      expect(result).toMatchSnapshot('2_second')
    });

    it.concurrent('third', async () => {
      await wait(getRandomInt(100, 1000));
      const result = {data: 'third', group:2};
      expect(result).toMatchSnapshot('2_third')
    });

    it.concurrent('fourth', async () => {
      await wait(getRandomInt(100, 1000));
      const result = {data: 'fourth', group:2};
      expect(result).toMatchSnapshot('2_fourth')
    });

    it.concurrent('fifth', async () => {
      await wait(getRandomInt(100, 1000));
      const result = {data: 'fifth', group:2};
      expect(result).toMatchSnapshot('2_fifth')
    });
  });

});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => { // simulate a server delay
      resolve();
    }, time);
  });
}