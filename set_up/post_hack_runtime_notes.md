# Post-Hack Runtime Notes

This repo no longer depends on the original hackathon Brev path.

## Keep

- Mistral for structured generation and policy calls
- Cala for knowledge enrichment
- Supabase for persistence
- Strands agents as an optional orchestration layer
- AWS Bedrock as a model/runtime fallback
- Hugging Face as an optional helper inference or GPU hosting path

## Replace

- Brev GPU path -> Hugging Face GPU or direct managed inference
- Partner-only runtime assumptions -> adapter-backed providers with fixture fallbacks
- Private import assumptions -> checked-in first-party code and local deterministic fixtures

## Baseline Architecture

- `src/` remains the product frontend and dashboard shell
- `apps/api/` is the FastAPI backend
- The backend must work in fixture-only deterministic mode with no external providers enabled
- External providers are additive integrations, not prerequisites for the app to boot

## Provider Model

- Policy provider: `mistral | bedrock | hugging_face | fixtures`
- Knowledge provider: `cala | hugging_face | fixtures | none`
- Profile provider: `specter | fixtures | none`

## Immediate Implementation Rule

Ship the deterministic simulation loop first, then layer in Mistral, Cala, Supabase, and Strands behind typed interfaces.
