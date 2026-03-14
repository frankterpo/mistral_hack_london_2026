from __future__ import annotations

from functools import lru_cache
from typing import Any

from startup_sim.config.settings import get_settings

try:
    from gradio_client import Client
except ImportError:  # pragma: no cover - handled gracefully at runtime
    Client = None


class HuggingFaceSpaceClient:
    def __init__(self, space_id: str, token: str) -> None:
        self.space_id = space_id
        self.token = token
        self._client = Client(space_id, hf_token=token) if Client else None

    def available(self) -> bool:
        return self._client is not None

    def analyze_company(self, payload: dict[str, Any]) -> dict[str, Any] | None:
        if self._client is None:
            return None
        try:
            result = self._client.predict(payload, api_name="/analyze_company")
        except Exception:
            return None
        return result if isinstance(result, dict) else None


@lru_cache
def get_hugging_face_space_client() -> HuggingFaceSpaceClient | None:
    settings = get_settings()
    if not settings.hugging_face_api_key:
        return None
    return HuggingFaceSpaceClient(
        space_id=settings.hugging_face_space_id,
        token=settings.hugging_face_api_key,
    )
