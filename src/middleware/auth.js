

const TOKEN_ESPERADO = process.env.X_ACCESS_TOKEN || '1234';


export function verificarToken(req, res, next) {
    const token = req.header('x-access-token');

    if (!token) {
        return res.status(401).json({
            error: 'Falta header x-access-token'
        });
    }

    if (token !== TOKEN_ESPERADO) {
        return res.status(403).json({
            error: 'Token inválido'
        });
    }

    // OK → continúa al controlador
    next();
}