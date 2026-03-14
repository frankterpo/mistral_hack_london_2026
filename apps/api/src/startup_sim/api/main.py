from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from startup_sim.api.routes.simulation import router as simulation_router
from startup_sim.config.settings import get_settings
from startup_sim.services.sessions import session_service


@asynccontextmanager
async def lifespan(_: FastAPI):
    session_service.ensure_default_session()
    yield


settings = get_settings()

app = FastAPI(
    title=settings.app_name,
    version="0.1.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(simulation_router, prefix=settings.api_v1_prefix)


@app.get("/healthz")
def healthz() -> dict[str, str]:
    return {"status": "ok"}
