from startup_sim.schemas.simulation import SessionCreateRequest
from startup_sim.services.sessions import SessionService


def test_same_seed_produces_same_tick_outcomes() -> None:
    service = SessionService()
    request = SessionCreateRequest(seed=424242, deterministic_mode=True)

    session_a = service.create_session(request)
    session_b = service.create_session(request)

    advanced_a = service.advance(session_a.session_id, steps=3)
    advanced_b = service.advance(session_b.session_id, steps=3)

    assert advanced_a.current_snapshot.market_signal == advanced_b.current_snapshot.market_signal
    assert advanced_a.current_snapshot.metrics == advanced_b.current_snapshot.metrics
    assert advanced_a.current_snapshot.companies == advanced_b.current_snapshot.companies
    assert advanced_a.current_snapshot.interactions == advanced_b.current_snapshot.interactions
