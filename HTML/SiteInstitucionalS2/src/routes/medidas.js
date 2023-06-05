var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas_umidade", function (req, res) {
    medidaController.buscarUltimasMedidas_umidade(req, res);
});

router.get("/ultimas_temperatura", function (req, res) {
    medidaController.buscarUltimasMedidas_temperatura(req, res);
});

router.get("/ultimas_chave", function (req, res) {
    medidaController.buscarUltimasMedidas_chave(req, res);
});

router.get("/ultimas_movimento", function (req, res) {
    medidaController.buscarUltimasMedidas_movimento(req, res);
});

router.get("/tempo-real_umidade", function (req, res) {
    medidaController.buscarMedidasEmTempoReal_umidade(req, res);
});

router.get("/tempo-real_temperatura", function (req, res) {
    medidaController.buscarMedidasEmTempoReal_temperatura(req, res);
});

router.get("/tempo-real_chave", function (req, res) {
    medidaController.buscarMedidasEmTempoReal_chave(req, res);
});

router.get("/tempo-real_movimento", function (req, res) {
    medidaController.buscarMedidasEmTempoReal_movimento(req, res);
});

router.get("/alerta_temperatura_consolacao", function (req, res) {
    medidaController.buscarMedidasAlerta_Temperatura_Consolacao(req, res);
});

router.get("/alerta_temperatura_bela_vista", function (req, res) {
    medidaController.buscarMedidasAlerta_Temperatura_Bela_Vista(req, res);
});

router.get("/alerta_temperatura_paraiso", function (req, res) {
    medidaController.buscarMedidasAlerta_Temperatura_Paraiso(req, res);
});

router.get("/alerta_temperatura_cerqueira_cesar", function (req, res) {
    medidaController.buscarMedidasAlerta_Temperatura_Cerqueira_Cesar(req, res);
});

router.get("/alerta_temperatura_jardim_paulista", function (req, res) {
    medidaController.buscarMedidasAlerta_Temperatura_Jardim_Paulista(req, res);
});

module.exports = router;