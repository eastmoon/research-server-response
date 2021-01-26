cd /repo
if [ ${DOCKER_MODE} ] && [ ${DOCKER_MODE} = "dev" ]
then
    yarn install
    tail -f /dev/null
else
    yarn install > yarn-run.log 2>&1
    yarn start >> yarn-run.log 2>&1
fi
