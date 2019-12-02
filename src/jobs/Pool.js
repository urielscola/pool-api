export default {
  key: 'Pool',
  options: {},
  async handle({ data }) {
    const { name } = data;

    console.log(`from the job: ${name}`);
  }
};
