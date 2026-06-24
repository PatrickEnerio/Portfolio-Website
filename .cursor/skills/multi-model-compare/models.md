# Available Models for Multi-Model Compare

Use only these slugs in the Task tool `model` parameter. If the user requests an unavailable model, say which model was unavailable and list these options.

## Default Set (use unless user overrides)

| Display name | Slug | Notes |
|--------------|------|-------|
| Composer 2.5 | `composer-2.5` | Cursor-native; strong at codebase-aware edits |
| GPT Codex | `gpt-5.3-codex` | Strong reasoning and implementation planning |
| Claude Sonnet | `claude-4.6-sonnet-medium-thinking` | Balanced analysis with thinking |

## Optional Add-ons

| Display name | Slug | Notes |
|--------------|------|-------|
| Claude Opus | `claude-opus-4-8-thinking-high` | Higher quality; slower and heavier |
| GPT Medium | `gpt-5.5-medium` | Faster GPT variant |

## User Overrides

- User says "add Opus" → include `claude-opus-4-8-thinking-high` alongside defaults
- User says "only Composer and Codex" → run only those two
- User names a slug directly → use it if listed above; otherwise explain it is unavailable
