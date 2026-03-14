from __future__ import annotations

import os
from collections.abc import Mapping


def normalize_environment(source: Mapping[str, str] | None = None) -> dict[str, str]:
    env = dict(source or os.environ)
    normalized = dict(env)

    if "SUPABASE_PROJECT_REF" not in normalized and env.get("SUPABSE_WORKSPACE_ID"):
        normalized["SUPABASE_PROJECT_REF"] = env["SUPABSE_WORKSPACE_ID"]

    if "SUPABASE_ANON_KEY" not in normalized and env.get("SUPABASE_ANON_PUBLIC"):
        normalized["SUPABASE_ANON_KEY"] = env["SUPABASE_ANON_PUBLIC"]

    if "SUPABASE_SERVICE_ROLE_KEY" not in normalized and env.get("SUPABASE_ANON_PUBLIC_SERVICE_ROLE"):
        normalized["SUPABASE_SERVICE_ROLE_KEY"] = env["SUPABASE_ANON_PUBLIC_SERVICE_ROLE"]

    if "AWS_REGION" not in normalized and env.get("AWS_DEFAULT_REGION"):
        normalized["AWS_REGION"] = env["AWS_DEFAULT_REGION"]

    return normalized
