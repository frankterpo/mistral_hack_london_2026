from fastapi import APIRouter, HTTPException, Query

from startup_sim.schemas.simulation import (
    SessionCreateRequest,
    SimulationState,
    TickAdvanceRequest,
)
from startup_sim.services.sessions import SessionNotFoundError, session_service

router = APIRouter(prefix="/simulation", tags=["simulation"])


@router.post("/sessions", response_model=SimulationState)
def create_session(payload: SessionCreateRequest) -> SimulationState:
    return session_service.create_session(payload)


@router.get("/state", response_model=SimulationState)
def get_default_state(
    advance: bool = Query(default=False),
) -> SimulationState:
    return session_service.get_default_session_state(advance=advance)


@router.get("/sessions/{session_id}/state", response_model=SimulationState)
def get_session_state(
    session_id: str,
    advance: bool = Query(default=False),
) -> SimulationState:
    try:
        return session_service.get_state(session_id, advance=advance)
    except SessionNotFoundError as exc:
        raise HTTPException(status_code=404, detail=str(exc)) from exc


@router.post("/sessions/{session_id}/tick", response_model=SimulationState)
def advance_session(
    session_id: str,
    payload: TickAdvanceRequest,
) -> SimulationState:
    try:
        return session_service.advance(session_id, steps=payload.steps)
    except SessionNotFoundError as exc:
        raise HTTPException(status_code=404, detail=str(exc)) from exc


@router.get("/sessions/{session_id}/replay", response_model=list[SimulationState])
def get_session_replay(session_id: str) -> list[SimulationState]:
    try:
        return session_service.get_replay(session_id)
    except SessionNotFoundError as exc:
        raise HTTPException(status_code=404, detail=str(exc)) from exc
