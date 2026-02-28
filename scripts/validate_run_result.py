#!/usr/bin/env python3
import json
import sys
from pathlib import Path


def fail(message: str) -> int:
    print(message, file=sys.stderr)
    return 1


def main() -> int:
    if len(sys.argv) != 3:
      return fail("usage: validate_run_result.py /abs/schema.json /abs/result.json")

    schema_path = Path(sys.argv[1])
    result_path = Path(sys.argv[2])

    if not schema_path.is_file():
        return fail(f"missing schema: {schema_path}")
    if not result_path.is_file():
        return fail(f"missing result file: {result_path}")

    schema = json.loads(schema_path.read_text())
    result = json.loads(result_path.read_text())

    required = schema.get("required", [])
    properties = schema.get("properties", {})

    for key in required:
        if key not in result:
            return fail(f"missing required key: {key}")

    for key, value in result.items():
        prop = properties.get(key)
        if prop is None:
            return fail(f"unexpected key: {key}")
        expected_type = prop.get("type")
        if expected_type == "string" and not isinstance(value, str):
            return fail(f"{key} must be string")
        if expected_type == "boolean" and not isinstance(value, bool):
            return fail(f"{key} must be boolean")
        if expected_type == "array" and not isinstance(value, list):
            return fail(f"{key} must be array")
    enum = properties.get("golden_seed_status", {}).get("enum")
    if enum and result.get("golden_seed_status") not in enum:
        return fail("golden_seed_status has invalid value")

    print("valid")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
