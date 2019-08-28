const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    //No {} se precisasse de algum filtro ficaria ali dentro
    //Minha página atual é a 1 e o limite é 10
    const products = await Product.paginate({}, { page, limit: 10 });

    return res.json(products);
  },

  async show(req, res) {
    const product = await Product.findById(req.params.id);
    return res.json(product);
  },

  async store(req, res) {
    //Criação de produtos
    const product = await Product.create(req.body);
    return res.json(product);
  },

  async update(req, res) {
    //Sem o New ele vai voltar o título antigo, caso atualize o nome por ex
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(product);
  },

  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);
    //Apenas uma resposta de sucesso sem nenhum conteúdo
    return res.send();
  }
};
