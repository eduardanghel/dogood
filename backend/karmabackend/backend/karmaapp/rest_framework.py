import logging

from rest_framework.exceptions import ParseError
from rest_framework.views import APIView, exception_handler as base_exception_handler

from dc.utils.passwordremover import password_remover

logger = logging.getLogger(__name__)


class APILogView(APIView):
    """
    Adds our custom logging to DRF's APIView
    """

    def initial(self, request, *args, **kwargs):
        try:
            user = request.user
            endpoint = request.resolver_match.url_name
            if endpoint is None:
                endpoint = request.resolver_match.view_name

            req = request.body
            data = password_remover(req)
            logger.info(f"APILogView: user:{user} requested:{endpoint} data:{data}")
        except ParseError as ex:
            logger.error(f"APILogView: parse error: {ex}")

        super().initial(request, *args, **kwargs)


def exception_handler(exc, context):
    response = base_exception_handler(exc, context)

    if response is None:
        view = context["view"]
        logger.error(
            f"Unhandled {exc.__class__.__name__} exception in {view.__class__.__name__}",
            exc_info=exc,
        )
    return response
