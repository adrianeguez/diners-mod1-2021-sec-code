/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  hola: (req, res) => {
    res.send('Hola');
  },
  adios: (req, res) => {
    res.send('Adios');
  },
  noImplementado: (req, res) => { 
    res.status(501).send('No implementado');
  }
};

