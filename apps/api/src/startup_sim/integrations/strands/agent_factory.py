from __future__ import annotations

from dataclasses import dataclass

from startup_sim.config.settings import get_settings


@dataclass(frozen=True)
class StrandsAgentConfig:
    agent_id: str
    model_provider: str
    knowledge_provider: str


def build_agent_config(agent_id: str) -> StrandsAgentConfig:
    settings = get_settings()
    return StrandsAgentConfig(
        agent_id=agent_id,
        model_provider=settings.default_model_provider,
        knowledge_provider=settings.default_knowledge_provider,
    )
