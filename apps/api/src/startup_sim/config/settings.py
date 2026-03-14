from __future__ import annotations

from functools import lru_cache

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict

from startup_sim.config.env_normalization import normalize_environment


class Settings(BaseSettings):
    app_name: str = "Startup Sim API"
    api_v1_prefix: str = "/api/v1"
    allowed_origins: list[str] = Field(default_factory=lambda: ["http://localhost:3000"])
    default_seed: int = 20260314
    default_tick_count: int = 12
    default_company_count: int = 4
    default_starting_cash: int = 2_500_000
    default_persistence_mode: str = "memory"
    default_model_provider: str = "mistral"
    default_knowledge_provider: str = "cala"
    default_profile_provider: str = "fixtures"
    hugging_face_space_id: str = "mistral-hackaton-2026/iso-business"
    mistral_api_key: str | None = None
    calai_api_key: str | None = None
    hugging_face_api_key: str | None = None
    aws_region: str | None = None
    aws_access_key_id: str | None = None
    aws_secret_access_key: str | None = None
    aws_session_token: str | None = None
    supabase_project_ref: str | None = None
    supabase_access_token: str | None = None
    supabase_database_password: str | None = None
    supabase_anon_key: str | None = None
    supabase_service_role_key: str | None = None

    model_config = SettingsConfigDict(
        env_file=(".env", "../../.env"),
        env_file_encoding="utf-8",
        extra="ignore",
    )

    @property
    def provider_status(self) -> dict[str, bool]:
        return {
            "mistral": bool(self.mistral_api_key),
            "cala": bool(self.calai_api_key),
            "hugging_face": bool(self.hugging_face_api_key),
            "bedrock": bool(self.aws_access_key_id and self.aws_secret_access_key and self.aws_region),
            "supabase": bool(self.supabase_access_token and self.supabase_project_ref),
        }


@lru_cache
def get_settings() -> Settings:
    normalized = normalize_environment()
    return Settings.model_validate(normalized)


if __name__ == "__main__":
    settings = get_settings()
    print("settings_ok=true")
    for provider, enabled in settings.provider_status.items():
        print(f"{provider}={str(enabled).lower()}")
