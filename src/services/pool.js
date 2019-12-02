import Repositories from '../repository';
import Queue from '../lib/Queue';

const PoolService = {
  index: async () => {
    const pools = await Repositories.Pool.find({});
    return pools;
  },

  find: async params => {
    const pool = await Repositories.Pool.findOne({ id: params.id });
    return pool;
  },

  store: async params => {
    const diff = Math.abs(
      new Date(params.expires).getTime() - new Date().getTime()
    );

    const pool = await Repositories.Pool.create(params);
    await Queue.add('Pool', { ...params, delay: diff });
    return pool;
  },

  delete: async () => {
    await Repositories.Pool.deleteMany({});
    return true;
  }
};

export default PoolService;
