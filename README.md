# Turingen API

## Commands
|   |   |   |   |
|---|---|---|---|
|  GET / POST | echo  |   msg  | returns msg |
| GET         | set_config |  prompt, model, max_tokens, temperature, stop | https://platform.openai.com/docs/api-reference/completions/create |
| GET         | complete | - |run a completition after set_config or with default config |
| GET         | chat_clear | - |clear chat history |
| GET         | chat_history | - | read chat history |
| GET         | chat | msg | send chat mssg |

## Examples

        curl localhost:8080/echo?msg='plumbus'
                {"success":true,"message":"plumbus"}

        curl localhost:8080/completition
                {"success":true,"message":"What is the meaning of life?"}

## Running locally

    npm run start

## Deploying to App Engine

