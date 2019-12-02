import PoolService from '../services/pool';

const Pool = {
  index: async (req, res) => {
    try {
      const pools = await PoolService.index();
      return res.status(200).json(pools);
    } catch (err) {
      console.log(err);
      res.status(500).send('Errou');
    }
  },

  find: async (req, res) => {
    try {
      const pool = await PoolService.find({ id: req.query.id });
      return res.status(200).json(pool);
    } catch (err) {
      console.log(err);
      res.status(500).send('Errou');
    }
  },

  store: async (req, res) => {
    try {
      const pool = await PoolService.store(req.body);
      return res.status(201).json(pool);
    } catch (err) {
      console.log(err);
      res.status(500).send('Errou');
    }
  },

  delete: async (req, res) => {
    try {
      const success = await PoolService.delete();
      return res.status(200).json(success);
    } catch (err) {
      console.log(err);
      res.status(500).send('Errou');
    }
  }
};

export default Pool;
