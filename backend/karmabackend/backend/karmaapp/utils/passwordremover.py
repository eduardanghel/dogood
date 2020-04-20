# mask any password fields
import json


def password_remover(req):
    try:
        if isinstance(req, bytes) or isinstance(req, bytearray):
            req = json.loads(req)
    except ValueError:
        pass
    if isinstance(req, dict):
        for k, v in req.items():
            if isinstance(v, dict):
                password_remover(v)
            if "password" in k.lower() or "password2" in k.lower():
                req[k] = "***"
    return req
