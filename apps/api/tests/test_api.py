from fastapi.testclient import TestClient

from startup_sim.api.main import app


client = TestClient(app)


def test_default_state_endpoint_returns_expected_contract() -> None:
    response = client.get("/api/v1/simulation/state")

    assert response.status_code == 200
    payload = response.json()
    assert payload["session_id"]
    assert payload["current_snapshot"]["tick"] == 0
    assert len(payload["current_snapshot"]["companies"]) >= 1
    assert payload["persistence_mode"] in {"memory", "supabase"}


def test_advance_tick_endpoint_progresses_session() -> None:
    created = client.post("/api/v1/simulation/sessions", json={})
    session_id = created.json()["session_id"]

    advanced = client.post(f"/api/v1/simulation/sessions/{session_id}/tick", json={"steps": 2})

    assert advanced.status_code == 200
    payload = advanced.json()
    assert payload["current_tick"] == 2
    assert payload["current_snapshot"]["tick"] == 2
    assert len(payload["recent_replay"]) == 2
