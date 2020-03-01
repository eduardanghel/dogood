from http import HTTPStatus

from oauthlib.oauth2 import Server


class Server(Server):
    def create_token_response(self, *args, **kwargs):
        headers, body, status_ = super().create_token_response(*args, **kwargs)
        if status_ == HTTPStatus.BAD_REQUEST:
            status_ = HTTPStatus.UNAUTHORIZED
        return headers, body, status_
