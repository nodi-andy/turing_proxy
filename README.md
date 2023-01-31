# Turingen API

## Commands

        curl localhost:8080/                            
                {"success":true,"message":"it_works"}

        curl localhost:8080/get_echo?msg='plumbus'
                {"success":true,"message":"plumbus"}

        curl localhost:8080/get_question
                {"success":true,"message":"What is the meaning of life?"}

        curl -H "Content-type: application/x-www-form-urlencoded" -d "msg=flubber" -X POST  localhost:8080/post_echo
                {"success":true,"message":"flubber"}

        curl -H "Content-type: application/x-www-form-urlencoded" -d "n_user=3"    -X POST  localhost:8080/open_session
                {"success":true,"message":"87c948eed4fa356a30ce6403c248889f"}

        curl -H "Content-type: application/x-www-form-urlencoded" -d "msg=How are plumbus made?" -d "xyz=qwe" -X POST  localhost:8080/chat
                {"success":true,"message":"Plumbuses are made through a highly secretive process that involves mixing a variety of mysterious components together in a large vat. The exact ingredients are unknown, but it is rumored that the process includes a blend of grumbo, fleeb juice, and dinglebop."}

## Running locally

    npm run start

## Deploying to App Engine

