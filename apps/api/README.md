# Startup Sim API

FastAPI backend for the post-hack startup simulation.

## Run

```bash
uv sync
uv run uvicorn startup_sim.api.main:app --app-dir src --reload --host 0.0.0.0 --port 8000
```

## Test

```bash
uv run pytest
```
