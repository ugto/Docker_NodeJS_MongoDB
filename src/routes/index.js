const { Router } = require('express');
const router = Router()

router.get('/', (req, res) => {
    res.send('Pagina de Inicio')
});

module.exports = router;